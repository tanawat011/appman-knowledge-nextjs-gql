This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Share knowledge

### Required tools and technologies

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [pnpm](https://pnpm.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vercel](https://vercel.com/)
- [Auth0](https://auth0.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GraphQL](https://graphql.org/)
- [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server)
- [Apollo GraphQL](https://www.apollographql.com/)
- [Next.js](https://nextjs.org/)
  - [App Router](https://nextjs.org/docs/getting-started/installation)

### Step by step

- Initial Next.js project

```bash
npx create-next-app next-gql
```
- Install dependencies

```bash
pnpm i
```
- Create github new repository
- Connect local repository to github repository
- Create CI/CD pipeline on Vercel
- Create todo route `/src/app/todo/page.tsx`
- Create app layout `/src/app/layout.tsx`
- Install GraphQL Server: [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server/docs/integrations/integration-with-nextjs)
- Create GraphQL route `/src/app/api/graphql/route.ts`
- Create GraphQL service get todos
- Create GraphQL service get todo by id
- Create GraphQL service create todo
- Create GraphQL service update todo
- Create GraphQL service delete todo
- Install GraphQL Client: [Apollo GraphQL](https://www.apollographql.com/docs/react/get-started/)
- Create GraphQL client connection `/src/app/template.tsx`
- Create GraphQL client get todos
- Create GraphQL client add todo
- Create GraphQL client delete todo
- Create todo dynamic route `/src/app/todo/[id]/page.tsx`
- Create GraphQL client get todo by id
- Create GraphQL client update todo
- Create app error page `/src/app/error.tsx`
- Create app not found page `/src/app/not-found.tsx`
- Create app loading page `/src/app/loading.tsx`
