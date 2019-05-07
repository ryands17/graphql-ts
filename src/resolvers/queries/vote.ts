import { Context } from '../../config/utils'

export const link = (parent, _, ctx: Context) =>
  ctx.prisma.vote({ id: parent.id }).link()

export const user = (parent, _, ctx: Context) =>
  ctx.prisma.vote({ id: parent.id }).user()
