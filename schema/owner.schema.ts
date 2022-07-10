import z from "zod";

export const User = z.object({
  name: z.string(),
  email: z.string().email(),
});
export type User = z.infer<typeof User>;

export const Address = z.object({
  street: z.string(),
  zip: z.string(),
  city: z.string(),
});
export type Address = z.infer<typeof Address>;

export const BankAccount = z.object({
  name: z.string(),
  iban: z.string(),
  bank: z.string(),
});
export type BankAccount = z.infer<typeof BankAccount>;

export const Owner = z.object({
  name: z.string(),
  email: z.string().email(),
  bankAccount: BankAccount,
  users: z.array(User),
  address: Address,
});
export type Owner = z.infer<typeof Owner>;

export const Tenant = z.object({
  name: z.string(),
  email: z.string().email(),
  users: z.array(User),
});
export type Tenant = z.infer<typeof Tenant>;

export const Fraction = z.object({
  name: z.string(),
});
export type Fraction = z.infer<typeof Fraction>;

export const PropertyOwner = z.object({
  owner: Owner,
  fraction: Fraction,
});
export type PropertyOwner = z.infer<typeof PropertyOwner>;

export const Premises = z.object({
  name: z.string(),
});
export type Premises = z.infer<typeof Premises>;

export const Property = z.object({
  name: z.string(),
  owners: z.array(PropertyOwner),
  premises: z.array(Premises),
  address: Address,
});
export type Property = z.infer<typeof Property>;
