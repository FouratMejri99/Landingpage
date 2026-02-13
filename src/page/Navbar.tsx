"use client";

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { navLinks } from '@/data/navLinks';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled && 'bg-black/80 backdrop-blur-sm'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold text-white hover:text-amber-400 transition-colors" style={{ fontFamily: 'Gilroy-Bold, sans-serif', fontSize: '28px', lineHeight: '100%', letterSpacing: '1%', textTransform: 'capitalize' }}>
              Panto
            </Link>
          </div>

          {/* Center - Navigation */}
          <div className="hidden md:block">
            <div className="ml-4 lg:ml-10 flex items-baseline flex-wrap justify-center gap-4 lg:gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-white/80 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={16} className={cn(
                      "transition-transform",
                      activeDropdown === link.label && "rotate-180"
                    )} />}
                  </Link>
                  {link.hasDropdown && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-0 w-40 bg-gray-900 rounded-lg shadow-lg py-2">
                      {link.dropdown?.map((item) => (
                        <Link
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Shopping Bag + Menu */}
          <div className="flex items-center gap-1">
            <button className="hover:text-amber-400 p-2.5 transition-colors relative min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full active:bg-white/10" aria-label="Cart">
              <FontAwesomeIcon icon={faBagShopping} className="text-white" style={{ width: '22px', height: '22px' }} />
              <span className="absolute top-1/2 -translate-y-1/2 bg-[#E58411] text-white font-bold flex items-center justify-center rounded-full text-[11px]" style={{ width: '18px', height: '18px', right: '2px' }}>
                0
              </span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white/90 hover:text-white p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full active:bg-white/10"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={(e) => {
                    scrollToSection(e, link.href);
                    setIsOpen(false);
                  }}
                  className="text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.label}
                </Link>
                {link.hasDropdown && link.dropdown?.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-white/60 hover:text-white block px-6 py-2 rounded-md text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
