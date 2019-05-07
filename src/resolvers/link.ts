import { Context, getUserId } from '../config/utils'

export const linkResolvers = {
  // Link: {
  //   postedBy(parent, args, ctx: Context) {
  //     return ctx.prisma.link({ id: parent.id }).postedBy()
  //   },
  // },
  Mutation: {
    post(_, args, ctx: Context) {
      getUserId(ctx)
      return ctx.prisma.createLink({
        url: args.url,
        description: args.description,
      })
    },
  },
}
