import { NextApiRequest, NextApiResponse } from "next";
import connection from "../utils/connection";
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
    connection,
    get session() {
      if (!session)
        throw new trpc.TRPCError({
          code: "FORBIDDEN",
          message: "User needs to be authenticated",
        });
      return session;
    },
  };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
