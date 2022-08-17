import { createRouter } from "../createRouter";
import { usersRouter } from "./users.router";
import { propertiesRouter } from "./properties.router";
import { filesRouter } from "./files.router";

export const appRouter = createRouter()
  .merge("users.", usersRouter)
  .merge("properties.", propertiesRouter)
  .merge("files.", filesRouter);

export type AppRouter = typeof appRouter;
