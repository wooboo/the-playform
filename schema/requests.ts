import { z } from "zod";
import { Property } from "./model";
export const PropertyListItem = Property.omit({ owners: true, premises: true });

export type PropertyListItem = z.TypeOf<typeof PropertyListItem>;
