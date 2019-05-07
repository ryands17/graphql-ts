import { Context, getUserId } from '../../config/utils'

const post = (_, args, ctx: Context) => {
  const userId = getUserId(ctx)
  return ctx.prisma.createLink({
    url: args.url,
    description: args.description,
  })
}

export const linkMutations = {
  post,
}
