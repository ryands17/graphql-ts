import * as jwt from 'jsonwebtoken'

import { Prisma } from '../generated/prisma-client'
import { AuthError } from './errors'

export interface Context {
  prisma: Prisma
  request: any
}

export const APP_SECRET = 'MY-APP-SECRET'

export const getUserId = (context: any) => {
  const Authorization = context.request.get('Authorization') as string
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, APP_SECRET) as {
      userId: string
    }
    return userId
  }
  throw new AuthError()
}
