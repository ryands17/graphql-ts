import { Context } from '../../config/utils'

export const links = (parent, _, ctx: Context) =>
  ctx.prisma.user({ id: parent.id }).links()
