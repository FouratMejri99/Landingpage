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

## Note

i have integrated the cards components directly in some sections like features and products sections, this is because the cards components are only used in these sections and it will be easier to maintain the code and also to avoid unnecessary imports.

## Features

- Responsive design for optimal viewing on all devices
- Clean and modern UI/UX design
- Smooth animations and transitions
- Easy navigation with a well-structured layout

## Description

This project is a landing page for a furniture company called "Panto Furniture". The landing page is designed to showcase the company's products and services, and to provide a seamless user experience for visitors. The page includes a hero section with a background image, a features section that highlights the key benefits of the company's products, a products section that displays the company's product offerings, a testimonials section that features customer reviews, and a footer with contact information and social media links. The design is clean and modern, with smooth animations and transitions to enhance the user experience.

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
