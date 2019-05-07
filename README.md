GraphQL TypeScript boilerplate

### Prerequisites

- Login into prisma using `npx prisma login`
- Create an `.env` file in the project root (copy from .env.example file)
- Add your prisma endpoint in the .env file
- Run `yarn` **(recommended)** or `npm install`

### To run the development server

- `yarn dev` or `npm run dev`

### To build the application

- `yarn build` or `npm run build`
- Deploy the dist folder to the hosting server of your choice
- Run `yarn start` or `npm start` to start the server

Note: To run the migrations (changes made to `datamodel.prisma`) run `yarn p:deploy` or `npm run p:deploy`
