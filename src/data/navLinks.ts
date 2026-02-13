export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdown?: ({ label: string; href: string } | string)[];
}

export const navLinks: NavLink[] = [
  { 
    label: 'Furniture', 
    href: '#products',
    hasDropdown: true,
    dropdown: [
      { label: 'Chair', href: '#products' },
      { label: 'Beds', href: '#products' },
      { label: 'Sofas', href: '#products' },
      { label: 'Lamp', href: '#products' }
    ]
  },
  { label: 'Shop', href: '#products' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
