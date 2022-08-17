import { createRouter } from "../createRouter";

export const usersRouter = createRouter().query("me", {
  async resolve({ ctx }) {
    const session = ctx.session;
    return await ctx.db.user.findUnique({
      where: { email: session.user!.email! },
    });
  },
});
