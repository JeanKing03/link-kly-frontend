# Linkly Frontend

Este es el frontend de **Linkly**, un acortador de enlaces moderno construido con Next.js 14 y Zustand.

## Características

- Registro, login y logout de usuarios
- Creación, listado y eliminación de enlaces cortos
- Redirección automática por shortCode
- Panel de usuario y estadísticas
- Estado global con Zustand (sin Context API)
- UI moderna y responsiva

## Requisitos

# Linkly Frontend

This is the frontend for **Linkly**, a modern URL shortener built with Next.js 14 and Zustand.

## Features

- User registration, login, and logout
- Create, list, and delete short links
- Automatic redirection by shortCode
- User dashboard and statistics
- Global state with Zustand (no Context API)
- Modern and responsive UI

## Requirements

- Node.js >= 18
- Configured environment variables

## Installation

```bash
cd link-kly
npm install
```

## Environment Variables

Create a `.env.local` file in the `link-kly/` folder with the following content:

```
NEXT_PUBLIC_API_URL=https://your-backend.com/api # or http://localhost:4000/api for development
```

## Scripts

- `npm run dev` — Start the frontend in development mode
- `npm run build` — Build for production
- `npm start` — Start in production mode

## Main Structure

- `/app` — Next.js routes and pages
- `/components` — Reusable components
- `/lib` — Zustand stores and utilities

## Security

- User is hydrated from the backend using httpOnly cookies
- No sensitive information is stored in localStorage

## Deployment

- Ready for Vercel, Railway, Render, etc.
- Set environment variables in your provider's dashboard

## License

MIT

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
