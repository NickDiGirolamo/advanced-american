# Advanced American Financial Redesign

Modern multi-page insurance agency website rebuilt in Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Project goals

- Preserve the major functionality and information architecture of the existing `advancedamerican.com` site.
- Dramatically modernize the visual design and UX.
- Keep the experience practical for real insurance workflows: quote requests, service requests, claims help, payments, contact, about/staff, referrals, and blog content.
- Make the site easy to update later by centralizing editable content and directory data.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

For production verification:

```bash
npm run lint
npm run build
```

## Architecture

### App routes

The site is a multi-page build with hub pages and dynamic detail routes:

- `/`
- `/personal-insurance`
- `/personal-insurance/[slug]`
- `/business-insurance`
- `/business-insurance/[slug]`
- `/quotes`
- `/service-center`
- `/service-center/[requestType]`
- `/claims`
- `/payments`
- `/about`
- `/about/independent-agent`
- `/about/companies`
- `/about/staff`
- `/contact`
- `/blog`
- `/blog/[slug]`
- `/referrals`

### Core structure

- `src/app/*`: route pages
- `src/components/*`: navigation, layout shell, forms, card grids, and reusable presentation pieces
- `src/lib/content.ts`: centralized navigation, office info, products, carriers, service request types, staff, blog posts, referral details, testimonials, and trust copy
- `src/lib/utils.ts`: shared class name utility

## Where to edit content

Most site copy and structured content live in `src/lib/content.ts`.

Edit there to update:

- navigation
- office contact info and hours
- personal insurance products
- business insurance categories
- service center request types
- carrier claims/payment directory data
- staff directory
- blog posts
- referral messaging
- company list
- homepage trust and action content

## Form wiring

The forms are implemented as polished client-side MVP flows with success states:

- homepage quick quote
- full quote request
- service request forms
- contact form
- referral form

Current behavior:

- client-side submit handling only
- confirmation states are already built
- quote pages can preselect insurance type from product pages
- structure is ready to connect to server actions, API routes, CRM webhooks, or external form handling later

Primary form components live in `src/components/forms.tsx`.

## Content and workflow model inferred from the current site

The redesign was based on the live site’s major functional areas and user journeys:

- homepage quote-first conversion
- personal insurance pages including auto, home, life, umbrella, boat, and motorcycle
- business insurance grouping
- service center requests such as vehicle changes, driver changes, ID cards, contact updates, certificates, and general service
- carrier-specific claims support
- carrier-specific payment support
- about, independent-agent positioning, companies represented, and staff directory
- contact pathways with phone, office hours, and office location
- blog/news content
- referral program
- mobile-first access to urgent actions

## Design system direction

- light, bright, premium surfaces
- deep navy trust color
- restrained red accents
- soft blue neutrals
- rounded cards and polished spacing
- editorial display typography paired with modern sans-serif body type
- mobile sticky quick-action dock for quote, claim, payment, and call

## Notes

- Carrier, team, and content data are modeled to be easy to replace with CMS or backend data later.
- Several content items are rewritten placeholders based on the existing site’s structure and business intent rather than copied text.
- Claims/payment contact data includes representative structured entries and is designed to scale.
