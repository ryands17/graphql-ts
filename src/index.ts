import * as path from 'path'
import { GraphQLServer } from 'graphql-yoga'

import { prisma } from './generated/prisma-client'
import resolvers from './resolvers'

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers,
  context: request => ({
    ...request,
    prisma,
  }),
})

server.start(
  {
    port: 4001,
  },
  () => console.log(`Server running on http://localhost:4001`)
)
