import yaml from "js-yaml";
import { Address, BankAccount, Fraction } from "../schema/model";
import connection from "../utils/connection";
import storage from "../utils/storage";

type Owner = {
  id: string;
  name: string;
  email: string;
  address?: Address;
  bankAccount?: BankAccount;
};
type Ref = {
  id: string;
  name?: string;
};
type Property = {
  id: string;
  name: string;
  address?: Address;
  owners: [PrOwner];
};
type Premises = {
  id: string;
  name: string;
  property: Ref;
  owners: [PrOwner];
};
type PrOwner = { id: string; owners: [Ref]; fraction: string };

async function load<TModel>(dir: string) {
  var containerClient = storage.getContainerClient("import");
  const listing = containerClient.listBlobsByHierarchy("/", {
    prefix: `${dir}/`,
  });
  const result: TModel[] = [];
  for await (const item of listing) {
    if (item.kind !== "blob") continue;
    const blockBlobClient = containerClient.getBlockBlobClient(item.name);
    const d = await blockBlobClient.download(0);
    const text = await streamToText(d.readableStreamBody!);
    const data = yaml.load(text);
    // console.dir(data, { depth: null });
    result.push(data as TModel);
  }
  return result;
}
async function streamToText(readable: NodeJS.ReadableStream) {
  readable.setEncoding("utf8");
  let data = "";
  for await (const chunk of readable) {
    data += chunk;
  }
  return data;
}
async function main() {
  var owners = await load<Owner>("Owners");
  var properties = await load<Property>("Properties");
  var premises = await load<Premises>("Premises");
  for (const owner of owners) {
    const { id, ...props } = owner;
    const data = {
      name: props.name,
      email: props.email,
      address: props.address,
      bankAccount: props.bankAccount,
    };
    await connection.owner.upsert({
      where: { id: id },
      update: data,
      create: {
        id,
        ...data,
      },
    });
  }
  for (const property of properties) {
    const { id, ...props } = property;
    const data = {
      name: props.name,
      address: props.address,
    };
    await connection.property.upsert({
      where: { id: id },
      update: data,
      create: {
        id,
        ...data,
      },
    });
    if (property.owners)
      for (const owner of property.owners) {
        await connection.propertyOwner.upsert({
          where: { id: owner.id },
          update: {
            fraction: toFraction(owner.fraction),
            propertyId: id,
          },
          create: {
            id: owner.id,
            fraction: toFraction(owner.fraction),
            propertyId: id,
            owners: {
              connect: owner.owners.map((o) => ({
                id: o.id,
              })),
            },
          },
        });
      }
  }

  for (const prem of premises) {
    const { id, ...props } = prem;
    const data = {
      name: props.name,
      propertyId: props.property.id,
    };
    await connection.premises.upsert({
      where: { id: id },
      update: data,
      create: {
        id,
        ...data,
      },
    });

    if (prem.owners)
      for (const owner of prem.owners) {
        await connection.premisesOwner.upsert({
          where: { id: owner.id },
          update: {
            fraction: toFraction(owner.fraction),
            premisesId: id,
          },
          create: {
            id: owner.id,
            fraction: toFraction(owner.fraction),
            premisesId: id,
            owners: {
              connect: owner.owners.map((o) => ({
                id: o.id,
              })),
            },
          },
        });
      }

    const propertyOwners = await connection.propertyOwner.findMany({
      where: { propertyId: props.property.id },
      include: { owners: true },
    });

    if (propertyOwners)
      for (const owner of propertyOwners) {
        const [, , pid, oid] = owner.id.split("-");
        const [, , n] = id.split("-");
        const ownId = `POW-0-${n}-${oid}`;
        await connection.premisesOwner.upsert({
          where: { id: ownId },
          update: {
            fraction: owner.fraction!,
            premisesId: id,
          },
          create: {
            id: ownId,
            fraction: owner.fraction!,
            premisesId: id,
            owners: {
              connect: owner.owners.map((o) => ({
                id: o.id,
              })),
            },
          },
        });
      }
  }
}

function toFraction(value: string) {
  const [numerator, denominator] = value.split("/");
  return {
    numerator: parseInt(numerator),
    denominator: parseInt(denominator),
  } as Fraction;
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await connection.$disconnect();
  });
