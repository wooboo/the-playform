import { NextApiRequest, NextApiResponse } from "next";
import connection from "../utils/connection";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import * as trpc from '@trpc/server'

export function createContext({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  return {
    req,
    res,
    connection,
    async getSession() {
      const session = await unstable_getServerSession(req, res, authOptions);
      if (!session)
        new trpc.TRPCError({
          code: "FORBIDDEN",
          message: "User needs to be authenticated",
        });
      return session!;
    },
  };
}

export type Context = ReturnType<typeof createContext>;
