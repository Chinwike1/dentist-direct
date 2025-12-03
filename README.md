# Dentist Direct

A modern SaaS starter kit for building appointment-based applications. Built with Next.js 14, Auth.js, MongoDB, and TailwindCSS.

## 🚀 Features

- **Authentication** — Magic Link (email) + Google OAuth via [Auth.js](https://authjs.dev/) (NextAuth v5)
- **Database** — MongoDB with Mongoose ODM and Auth.js MongoDB Adapter
- **Styling** — TailwindCSS + Radix UI primitives + Framer Motion animations
- **Forms** — React Hook Form + Zod validation
- **State Management** — Zustand for lightweight client-side state
- **Type Safety** — Full TypeScript support with validated environment variables

## 👥 Authors

- **Chinwike Anthony** — [@Chinwike1](https://github.com/Chinwike1)
- **Jude Okorie** — [@JudetheGemini](https://github.com/JudetheGemini)

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Authentication | Auth.js (NextAuth v5) |
| Database | MongoDB + Mongoose |
| Styling | TailwindCSS, Radix UI, Framer Motion |
| Forms | React Hook Form + Zod |
| State | Zustand |
| Email | Mailersend (SMTP) |
| Language | TypeScript |

## 📋 Prerequisites

- Node.js 24.x or higher
- pnpm (recommended) or npm/yarn
- MongoDB database (local or Atlas)
- Google OAuth credentials (for Google sign-in)
- Mailersend account (for magic link emails)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Chinwike1/dentist-direct.git
cd dentist-direct
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```env
# Authentication (Auth.js)
AUTH_SECRET=your-auth-secret-here          # Generate with: openssl rand -base64 32
AUTH_TRUST_HOST=http://localhost:3000

# Google OAuth
AUTH_GOOGLE_ID=your-google-client-id
AUTH_GOOGLE_SECRET=your-google-client-secret

# Database (MongoDB)
MONGODB_URI=mongodb+srv://...

# Email (Mailersend)
SMTP_SERVER=smtp://user:password@smtp.mailersend.net:587
MAILERSEND_API_KEY=your-api-key
FROM_EMAIL=noreply@yourdomain.com
```

### 4. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### 5. Build for production

```bash
pnpm build
pnpm start
```

## 🔐 Authentication

This starter uses **Auth.js** (NextAuth v5) with two providers:

### Magic Link (Email)

- Users enter their email and receive a secure login link
- Powered by Mailersend SMTP
- No password required

### Google OAuth

- One-click sign-in with Google
- Requires Google Cloud Console OAuth credentials

Both methods use the MongoDB adapter to persist sessions and user data.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm turbo` | Start dev server with Turbopack |

## 🚢 Deploy on Vercel

The easiest way to deploy is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js):

1. Push your code to GitHub
2. Import the project on Vercel
3. Add your environment variables
4. Deploy!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
