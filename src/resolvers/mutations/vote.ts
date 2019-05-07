import { Context, getUserId } from '../../config/utils'
import { AlreadyVotedError } from '../../config/errors'

async function vote(_, args, ctx: Context) {
  const userId = getUserId(ctx)
  const linkExists = await ctx.prisma.$exists.vote({
    user: { id: userId },
    link: { id: args.linkId },
  })

  if (linkExists) {
    throw new AlreadyVotedError(args.linkId)
  }

  return ctx.prisma.createVote({
    user: { connect: { id: userId } },
    link: { connect: { id: args.linkId } },
  })
}

export const voteMutations = {
  vote,
}
