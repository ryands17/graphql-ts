import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

import { Context, APP_SECRET } from '../../config/utils'
import { InvalidUserError } from '../../config/errors'

const signup = async (_, args, ctx: Context) => {
  const password = await bcrypt.hash(args.password, 10)
  const user = await ctx.prisma.createUser({ ...args, password })
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

const login = async (_, args, ctx: Context) => {
  const user = await ctx.prisma.user({ email: args.email })
  if (!user) {
    throw new InvalidUserError()
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new InvalidUserError()
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)
  return {
    token,
    user,
  }
}

export const userMutations = {
  signup,
  login,
}
