This is the public marketing website for **Autosmartweby** — built with [Next.js](https://nextjs.org).

Live: [https://autosmartweb.cz/](https://autosmartweb.cz/)

> **Project boundary:** This repo contains only the public marketing site. The internal CRM / Apps Script / lead pipeline lives in a separate repo: [`Spookybro55/autosmartweby`](https://github.com/Spookybro55/autosmartweby).

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Environment variables

This project uses 3 environment variables, all required for the contact form (`/api/contact`).
See [`.env.example`](./.env.example) for placeholders.

| Variable | Purpose | Secret | Source |
|----------|---------|--------|--------|
| `RESEND_API_KEY` | Resend API key for transactional email | **YES** | [Resend dashboard → API Keys](https://resend.com/api-keys) |
| `CONTACT_FROM_EMAIL` | Sender for contact form (must be on verified Resend domain) | NO | Set per project policy — typically `web@send.autosmartweb.cz` |
| `CONTACT_TO_EMAIL` | Recipient — central business inbox | NO | `info@autosmartweb.cz` |

Local development: copy `.env.example` to `.env.local` and fill values.

Production (Vercel): set in Project → Settings → Environment Variables → Production scope.

After updating env values in Vercel, trigger redeploy: Deployments → latest → Redeploy.

## Email identity model

Public-facing email addresses on this site reflect the final company identity model:

- `info@autosmartweb.cz` — central business inbox (Schema.org `email`, navbar/CTA "Napsat e-mail", contact form recipient)
- `s.fridrich@autosmartweb.cz` — Sebastián Fridrich (Přímý kontakt #1)
- `t.maixner@autosmartweb.cz` — Tomáš Maixner (Přímý kontakt #2)
- `j.bezemek@autosmartweb.cz` — Jan Bezemek (Přímý kontakt #3)

The contact form uses customer's email from the form as `Reply-To`, so replies go directly to the prospect.

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
