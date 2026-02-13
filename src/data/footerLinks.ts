import { Facebook, Twitter, Instagram } from 'lucide-react';

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: typeof Facebook;
  href: string;
  label: string;
}

export const servicesLinks: FooterLink[] = [
  { label: 'Email Marketing', href: '#' },
  { label: 'Campaigns', href: '#' },
  { label: 'Branding', href: '#' },
];

export const furnitureLinks: FooterLink[] = [
  { label: 'Beds', href: '#products' },
  { label: 'Chair', href: '#products' },
  { label: 'All', href: '#products' },
];

export const socialLinks: SocialLink[] = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export const headingStyle = 'font-bold text-[#F28D3F] mb-4';
export const linkStyle = 'text-[#5C5C5C] hover:text-[#1E1E1E] transition-colors';
