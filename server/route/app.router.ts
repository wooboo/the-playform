import { createRouter } from "../createRouter";
import { userRouter } from "./user.router";
import { propertyRouter } from "./property.router";

export const appRouter = createRouter()
  .merge("users.", userRouter)
  .merge("properties.", propertyRouter);

export type AppRouter = typeof appRouter;
