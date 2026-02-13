This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## Getting Started

First, install then run the development server:

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

This Project is made by Fourat Mejri 

i have used nextJs and tailwing for this project
