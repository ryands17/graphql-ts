export class AuthError extends Error {
  constructor() {
    super('Not Authenticated!')
  }
}

export class InvalidUserError extends Error {
  constructor() {
    super('Invalid username or password')
  }
}

export class AlreadyVotedError extends Error {
  constructor(linkId: string) {
    super(`Already voted for link: ${linkId}`)
  }
}
