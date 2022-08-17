import { NextApiRequest, NextApiResponse } from "next";
import db from "../utils/connection";
import storage from "../utils/storage";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import * as trpc from "@trpc/server";

export async function createContext({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  const session = await unstable_getServerSession(req, res, authOptions);

  return {
    req,
    res,
    db,
    storage,
    get session() {
      if (!session || !session.user)
        throw new trpc.TRPCError({
          code: "FORBIDDEN",
          message: "User needs to be authenticated",
        });
      return session;
    },
  };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
