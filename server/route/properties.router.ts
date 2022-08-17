import { Prisma } from "@prisma/client";
import path from "path";
import fs from "fs";
import yaml from "js-yaml";
import { Address, Property } from "../../schema/model";
import { PropertyListItem } from "../../schema/requests";
import { createRouter } from "../createRouter";
import { z, ZodType } from "zod";

export const propertiesRouter = createRouter().query("all", {
  async resolve({ ctx }) {
    const session = ctx.session;
    const items = await ctx.db.property.findMany({
      where: {
        owners: {
          some: {
            owners: {
              some: { email: session.user?.email },
            },
          },
        },
      },
      select: Prisma.validator<Prisma.PropertySelect>()({
        id: true,
        name: true,
        address: true,
      }),
    });
    return items.map<PropertyListItem>((i) => ({
      id: i.id,
      name: i.name,
      address: i.address as Address,
    }));
  },
});
