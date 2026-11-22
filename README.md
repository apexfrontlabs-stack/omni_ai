# OmniAI Automation Solutions

**A modern, multilingual SaaS landing page template built with React, Vite and Tailwind CSS, with 5 languages and full Arabic RTL support.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Site-1E352F?style=for-the-badge)](https://omniai-blush.vercel.app/)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

## Live Demo

**[https://omniai-blush.vercel.app/](https://omniai-blush.vercel.app/)**

Use the language switcher in the navbar and pick **Arabic** to see the layout flip to right-to-left.

> **Note:** This is a front-end template. There is no backend. Login, registration, password reset and checkout are simulated, and no real payment is processed.

---

## Table of Contents

- [Features](#features)
- [Pages and Routes](#pages-and-routes)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Multi-language Support (i18n)](#multi-language-support-i18n)
- [Brand Colours](#brand-colours)
- [Demo Checkout](#demo-checkout)
- [Customization](#customization)
- [Deployment](#deployment)
- [Known Limitations](#known-limitations)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Features

- **Complete landing page:** Hero, About, Industries, Features, How it works, Pricing, Testimonials, CTA and Contact
- **Every section also works as its own page**, such as `/about` and `/pricing`
- **Authentication screens:** Login, Register, Forgot password and Reset password
- **Demo checkout** with order summary and card form
- **Legal pages:** Privacy Policy and Terms & Conditions
- **5 languages:** English, German, French, Chinese and Arabic
- **Full RTL support** for Arabic, using Tailwind logical classes
- **Language switcher** in the navbar, and the choice is remembered by the browser
- **Responsive** from mobile to desktop
- **Custom brand colour system** that is easy to change in one file

---

## Pages and Routes

| Route | Page |
| --- | --- |
| `/` | Full landing page |
| `/about` | About |
| `/industries` | Industries |
| `/features` | Features |
| `/pricing` | Pricing |
| `/contact` | Contact |
| `/login` | Login |
| `/register` | Register (accepts `?plan=starter`) |
| `/forgot-password` | Forgot password |
| `/reset-password` | Reset password (expects `?token=...`) |
| `/checkout?plan=pro` | Checkout (`starter`, `pro` or `enterprise`) |
| `/term` | Terms & Conditions |
| `/privacy` | Privacy Policy |

An invalid `plan` on `/checkout` redirects to `/pricing`.

---

## Tech Stack

| Area | Tool |
| --- | --- |
| UI | React |
| Build tool | Vite |
| Styling | Tailwind CSS v3.3 or newer (needed for logical classes such as `ps-`, `pe-`, `start-`, `end-`) |
| Routing | react-router-dom |
| Translations | i18next, react-i18next, i18next-browser-languagedetector |
| Icons | lucide-react |

---

## Getting Started

**Requirements:** Node.js 18 or newer and npm.

```bash
git clone https://github.com/apexfrontlabs-stack/omni_ai.git
cd omni_ai
npm install
npm run dev
```

Open the local address printed in the terminal, usually `http://localhost:5173`.

For a detailed guide, including build, deploy and troubleshooting, see [SETUP.md](./SETUP.md).

---

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Serves the production build locally |

---

## Project Structure

```text
public/
  images/                  Logos, hero and testimonial images

src/
  components/
    common/                Navbar, Footer, PageLayout, ScrollToTop,
                           LanguageSwitcher, BackToHome, NewsLetterForm, SocialLinks
    sections/              Hero, About, Industries, Features, HowItWorks,
                           Pricing, Testimonials, CTA, Contact
    features/              FeatureRow, TaskGraphCard, PridictiveChartCard,
                           SecurityCard, StepCard
    pricing/               PricingCard
    testimonials/          Stars, TestimonialCard
    contact/               ContactForm
    cta/                   FloatingWidget
    checkout/              OrderSummary, PaymentForm
    auth/                  FormField
  data/
    Plans.js               Paid plans used by checkout
  i18n/
    config.js              i18next setup (languages and RTL handling)
  locales/
    en | de | fr | zh | ar /
      translation.json     All UI text for each language
  pages/
    Home.jsx
    Checkout.jsx
    auth/                  Login, Register, Forget, ResetPassword
    legal/                 PrivacyPolicy, TermsAndConditions, LegalLayout
  App.jsx                  Routes
  main.jsx                 Entry point (BrowserRouter, i18n import)
```

---

## Multi-language Support (i18n)

All visible text lives in `src/locales/<language>/translation.json`. Components never contain hardcoded text. They call `t("some.key")`:

```jsx
import { useTranslation } from "react-i18next";

const { t } = useTranslation();
<h1>{t("hero.title")}</h1>
```

### Change or add text

1. Add the key to **every** language file (`en`, `de`, `fr`, `zh`, `ar`) with the same structure.
2. Use it in a component with `t("your.key")`.

### Add a new language

1. Create `src/locales/<code>/translation.json` (copy `en` and translate).
2. Import it and register it in `src/i18n/config.js`.
3. Add it to the language list in `LanguageSwitcher.jsx`.
4. If the language is right-to-left, add its code to the RTL list in `config.js`.

### RTL notes

- `dir` on `<html>` switches to `rtl` for Arabic automatically, on startup and whenever the language changes.
- Use Tailwind logical classes (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`, `text-start`) instead of `ml-`, `mr-`, `pl-`, `pr-`, `left-`, `right-`.
- Directional icons use `rtl:rotate-180`.
- Prices and card fields use `dir="ltr"` so numbers do not appear reversed.

### Translation rules

- Keep `{{placeholders}}` exactly as they are (for example `{{plan}}` and `{{year}}`).
- Keep tags such as `<terms>...</terms>` and `<privacy>...</privacy>` in the register text.
- Arrays (for example `testimonials.reviews`) must have the same number of items in every language.
- Save every JSON file as **UTF-8 without BOM**.

---

## Brand Colours

Defined in `tailwind.config.js` under `theme.extend.colors`:

| Name | Hex | Used for |
| --- | --- | --- |
| `oatmeal` | `#F5F2EB` | Page background |
| `slateCharcoal` | `#1E2229` | Text and headings |
| `deepSpruce` | `#1E352F` | Navbar and dark panels |
| `softMint` | `#E2EFE9` | Section backgrounds |
| `cyberMint` | `#00F5A0` | Buttons and accents |
| `amber` | `#F59E0B` | Stars and warnings |

The key must be exactly `amber`. A different name (for example `amberGold`) breaks every class that uses it.

---

## Demo Checkout

`/checkout?plan=pro` shows an order summary and a card form. Validation checks the card length, expiry and security code, then waits briefly and shows a success screen.

To make it real, replace the `setTimeout` in `PaymentForm.jsx` with a payment provider such as Stripe, and add a backend.

---

## Customization

| Task | Where |
| --- | --- |
| Edit text and translations | `src/locales/` |
| Change colours and fonts | `tailwind.config.js` |
| Change plan prices at checkout | `src/data/Plans.js` |
| Change plan names, descriptions and features | `pricing.plans.*` in the translation files |
| Edit a section | `src/components/sections/` |
| Edit routes | `src/App.jsx` |
| Replace images | `public/images/` (avoid spaces in file names) |
| Connect login and register to an API | `src/pages/auth/` |
| Connect real payments | `src/components/checkout/PaymentForm.jsx` |

Testimonial names come from the translation files (`testimonials.reviews[].name`). Photos and the dark card style live in the `people` array in `Testimonials.jsx`. Keep the review order identical in all languages.

---

## Deployment

```bash
npm run build
```

Upload the `dist/` folder to any static host such as Vercel, Netlify or Cloudflare Pages. The demo is hosted on Vercel.

The app uses client-side routing, so the host must send every route to `index.html`:

- **Vercel:** add `vercel.json` in the project root:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```
- **Netlify:** add `public/_redirects` with:
  ```text
  /*  /index.html  200
  ```

Without this, opening a page link directly or refreshing on a sub-page shows a 404.

---

## Known Limitations

- **No backend.** Authentication and payment are simulated.
- **Legal pages are English only.** Only the page header and labels are translated. Legal text should be translated and reviewed by a professional before real use.
- **Translations** for German, French, Chinese and Arabic are a strong starting point, but please have native speakers review them before launch.
- **Placeholders.** Replace sample emails (such as `support@yourdomain.com`), the company name and the images with your own.

---

## Troubleshooting

**`Unexpected token` or JSON parse error in a translation file**
The file was saved as UTF-16 or with a BOM. In VS Code, use **Save with Encoding** and choose **UTF-8**.

**A key such as `hero.title` appears instead of text**
The key is missing or misspelled in that language's JSON. Compare it with `en/translation.json`.

**Blank page or import error**
Check the import path and the file name, including capital letters.

**A colour class does nothing**
The colour key in `tailwind.config.js` is misspelled. It must be `amber`.

**Arabic layout looks wrong in one place**
Replace `ml-`, `mr-`, `pl-`, `pr-`, `left-` and `right-` with `ms-`, `me-`, `ps-`, `pe-`, `start-` and `end-`.

**404 after deployment**
Add the redirect rule from the Deployment section.

---

