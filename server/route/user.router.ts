import { createRouter } from "../createRouter";

export const userRouter = createRouter().query("me", {
  async resolve({ ctx }) {
    const session = await ctx.getSession();
    return await ctx.connection.user.findUnique({
      where: { email: session.user!.email! },
    });
  },
});
