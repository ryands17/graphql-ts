import { linkQueries, votes } from './queries/link'
import { links } from './queries/user'
import { link, user } from './queries/vote'
import { linkMutations } from './mutations/link'
import { userMutations } from './mutations/user'
import { voteMutations } from './mutations/vote'

export default {
  User: {
    links,
  },
  Vote: {
    link,
    user,
  },
  Link: {
    votes,
  },
  Query: {
    info: () => `This is a GraphQL API with TypeScript`,
    ...linkQueries,
  },
  Mutation: {
    ...linkMutations,
    ...userMutations,
    ...voteMutations,
  },
}
