export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdown?: string[];
}

export const navLinks: NavLink[] = [
  { 
    label: 'Furniture', 
    href: '#products',
    hasDropdown: true,
    dropdown: ['Chair', 'Beds', 'Sofas', 'Lamp']
  },
  { label: 'Shop', href: '#products' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
