# Blue Point Technology Solutions — Website

Marketing site for Blue Point Technology Solutions Ltd, an engineering and
technology company delivering electric vehicle charging infrastructure across
Nigeria and Africa.

Built with **Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:3000 (this repo's Claude launch config
uses port 3100 so it does not collide with the sibling apps in this workspace).

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # eslint
```

## Project structure

```
src/
  app/
    layout.tsx           Root layout: fonts, metadata, header/footer, JSON-LD
    page.tsx             Home
    about/               Company history, mission, vision, HSQE, commitment
    services/            Capabilities, delivery approach, industry focus
    projects/            Landmark Centre, Supersaver Osapa, NNPC Ikota
    leadership/          Directors + strategic adviser & partnership
    contact/             Contact details + enquiry form
    api/contact/         Enquiry form endpoint
    sitemap.ts robots.ts not-found.tsx
  components/
    Header.tsx           Sticky header, inverts over dark heroes, mobile drawer
    Footer.tsx
    Logo.tsx             Inline SVG mark (pin + charge bolt)
    PageHero.tsx         Shared dark hero for interior pages
    ContactForm.tsx      Client form with validation + honeypot
    Reveal.tsx           IntersectionObserver scroll reveal
    ui.tsx               Button, SectionHeading, Eyebrow, Check, Arrow
  lib/
    site.ts              ALL site copy and data lives here
public/images/           Project and leadership photography
```

### Editing content

Almost all copy — navigation, stats, capabilities, projects, leadership bios,
industries, contact details — lives in [`src/lib/site.ts`](src/lib/site.ts).
Edit there rather than in the page components; the pages render from it.

## Contact form

`POST /api/contact` validates the submission (required fields, email shape,
length cap) and drops silent bot submissions via a honeypot field.

Delivery is **optional and off by default**. Without mail env vars the enquiry
is validated and logged server-side so nothing is lost in development. To
deliver enquiries by email, copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `CONTACT_FROM_EMAIL` | Verified sender, e.g. `Blue Point <website@yourdomain.com>` |
| `CONTACT_TO_EMAIL` | Where enquiries land (defaults to `site.email`) |

To use a different provider, replace the `fetch` call in
[`src/app/api/contact/route.ts`](src/app/api/contact/route.ts) — validation and
the response contract stay the same.

## Before going live

- [ ] Set `site.url` in `src/lib/site.ts` to the real domain — it drives
      `metadataBase`, canonical URLs, `sitemap.xml` and the Organization JSON-LD.
- [ ] Add an Open Graph image at `public/og.jpg` (1200×630) and reference it in
      `layout.tsx` under `openGraph.images`.
- [ ] Replace `src/app/favicon.ico` with the Blue Point mark.
- [ ] Add a photograph for Iyinoluwa Aboyeji at
      `public/images/iyinoluwa-aboyeji.jpg` and set `image` on
      `strategicAdviser` in `src/lib/site.ts` — the card currently falls back to
      an initials avatar.
- [ ] Confirm the source photography is cleared for public use, particularly the
      images showing third-party branding and identifiable people.
- [ ] Configure the contact form env vars above.

## Deployment

Deploys to Vercel with no configuration. Set the environment variables from
`.env.example` in the project settings. Any Node host works — `npm run build`
then `npm start`.

All pages are statically prerendered; only `/api/contact` runs on demand.
