import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
  { href: '#my-method', label: 'My Method' },
  { href: '#how-i-help', label: 'How I Help' },
  { href: '#my-story', label: 'My Story' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white fixed w-full top-0 z-50 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/samuel_holley_logo_transparent.png"
            alt="Samuel Holley Logo"
            width={180}
            height={30}
            priority
          />
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-dark-text hover:text-deep-blue">{link.label}</a>
          ))}
        </div>
        <a href="#ai-audit" className="bg-primary-orange text-white font-bold py-2 px-4 rounded hover:opacity-90 hidden md:inline-block">
          Book Free Audit
        </a>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            // X icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-dark-text">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-dark-text">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex flex-col items-end">
            <div className="bg-white w-3/4 max-w-xs h-full shadow-lg p-8 flex flex-col gap-6">
              <button
                className="self-end mb-8"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-dark-text">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="text-dark-text text-lg font-medium hover:text-primary-orange" onClick={() => setMenuOpen(false)}>{link.label}</a>
              ))}
              <a href="#ai-audit" className="bg-primary-orange text-white font-bold py-2 px-4 rounded hover:opacity-90 mt-4 text-center" onClick={() => setMenuOpen(false)}>
                Book Free Audit
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
