# Covideo

Presentation of COVID-19 incidence data. Implemented as part of a project in the subject of Computer Technology in Medicine.

## About

### Built with

- [Next.js](https://nextjs.org/)
- [react-chartjs-2](https://react-chartjs-2.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [tRPC](https://trpc.io/)
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

Clone the repository.

```bash
git clone https://github.com/mateuszaliyev/covideo.git
```

or

```bash
git clone git@github.com:mateuszaliyev/covideo.git
```

Go to the project directory.

```bash
cd covideo
```

Install dependencies.

```bash
npm install
```

or

```bash
yarn install
```

or

```bash
pnpm install
```

Duplicate `.env.local.example` file and rename it to `.env.local`. Fill in missing values for environment variables.

| Name                  | Description                                        | Example                                                            |
| --------------------- | -------------------------------------------------- | ------------------------------------------------------------------ |
| `NEXT_PUBLIC_URL`     | Base URL of the application.                       | `https://example.com:3000/`                                        |
| `REVALIDATION_SECRET` | Secret to authorize revalidation api call against. | `df79ceaa24bbb4ce880dadd03c06197f040aafca2a93ef18ce0d980eb400e667` |

## Usage

Run the development server.

```bash
npm run dev
```

or

```bash
yarn dev
```

or

```bash
pnpm dev
```

Lint code with ESLint

```bash
npm run lint
```

or

```bash
yarn lint
```

or

```bash
pnpm lint
```

Build application for production.

```bash
npm run build
```

or

```bash
yarn build
```

or

```bash
pnpm build
```

Start production server.

```bash
npm run start
```

or

```bash
yarn start
```

or

```bash
pnpm start
```

## Authors

- Mateusz Aliyev ([@mateuszaliyev](https://github.com/mateuszaliyev))
- Maksymilian Dendura ([@Noniv](https://github.com/Noniv))
- Paweł Knap

## License

Licensed under the [MIT License](LICENSE).
