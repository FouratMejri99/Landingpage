This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Learn More

This Project is made by Fourat Mejri and you can check it live here: [Fourat Mejri Landing Page](https://landingpage-gamma-five-87.vercel.app/)
you can also check my portfolio here: [Fourat Mejri Portfolio](https://fou-portfolio.vercel.app/)

i have used nextJs Typescript and Tailwind CSS to build this project.
Eslint is also used in this project to maintain the code quality and consistency
you can check the code quality by running the following command:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
# or
bun lint
```

## Getting Started

First, install then run the development server:

```bash
First, install the dependencies:
npm install
then run the development server:
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

## Project Structure

```
panto-furniture/
├── public/                    # Static assets
│   ├── 1.jpg - 12.jpg       # Product images
│   ├── bg.jpg               # Hero background
│   ├── c1.png - c4.png      # Category images
│   └── *.svg                # Icons and logos
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/          # React components
│   ├── data/               # Static data files
│   │   ├── features.ts     # Features data
│   │   ├── footerLinks.ts  # Footer navigation
│   │   ├── navLinks.ts     # Navbar links
│   │   ├── products.ts     # Products data
│   │   └── testimonials.ts # Testimonials data
│   ├── lib/                # Utility functions
│   │   └── utils.ts        # Helper utilities
│   └── page/               # Page components
│       ├── About.tsx       # About section
│       ├── Features.tsx    # Features section
│       ├── Footer.tsx      # Footer component
│       ├── Hero.tsx        # Hero section
│       ├── Navbar.tsx      # Navigation bar
│       ├── Products.tsx    # Products section
│       └── Testimonials.tsx # Testimonials section
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies
├── postcss.config.mjs     # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```
