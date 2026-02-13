"use client";

import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const servicesLinks = [
  { label: 'Email Marketing', href: '#' },
  { label: 'Campaigns', href: '#' },
  { label: 'Branding', href: '#' },
];

const furnitureLinks = [
  { label: 'Beds', href: '#' },
  { label: 'Chair', href: '#' },
  { label: 'All', href: '#' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const headingStyle = 'font-bold text-[#F28D3F] mb-4';
const linkStyle = 'text-[#5C5C5C] hover:text-[#1E1E1E] transition-colors';

export default function Footer() {
  return (
    <footer className="bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Column 1: Panto + description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-[#1E1E1E]">
              Panto
            </Link>
            <p className="mt-3 sm:mt-4 text-[#5C5C5C] text-sm leading-relaxed max-w-xs">
              The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className={headingStyle}>Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkStyle}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Furniture */}
          <div>
            <h3 className={headingStyle}>Furniture</h3>
            <ul className="space-y-2">
              {furnitureLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkStyle}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className={headingStyle}>Follow Us</h3>
            <ul className="space-y-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className={`${linkStyle} inline-flex items-center gap-2`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-[#1E1E1E]" strokeWidth={1.5} />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar: Copyright left, legal links right */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-[#888888] order-2 sm:order-1">
            Copyright © 2021
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 order-1 sm:order-2">
            <Link href="#" className={`text-xs sm:text-sm py-1 ${linkStyle}`}>
              Terms & Conditions
            </Link>
            <Link href="#" className={`text-xs sm:text-sm py-1 ${linkStyle}`}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
