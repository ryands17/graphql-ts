import { Context } from '../../config/utils'
import { LinkWhereInput, LinkOrderByInput } from '../../generated/prisma-client'

type Filters = {
  filter?: string
  skip: number
  first: number
  orderBy: LinkOrderByInput
}

const feed = (_, args: Filters, ctx: Context) => {
  let where: LinkWhereInput = {}
  if (args.filter) {
    where = {
      OR: [
        { description_contains: args.filter },
        {
          url_contains: args.filter,
        },
      ],
    }
  }

  return ctx.prisma.links({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
}

// export const postedBy = (parent, _, ctx: Context) =>
//   ctx.prisma.link({ id: parent.id }).postedBy()

export const votes = (parent, _, ctx: Context) =>
  ctx.prisma.link({ id: parent.id }).votes()

export const linkQueries = {
  feed,
}
