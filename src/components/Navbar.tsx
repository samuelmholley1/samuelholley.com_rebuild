"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { href: '#my-method', label: 'My Method' },
  { href: '#how-i-help', label: 'How I Help' },
  { href: '#my-story', label: 'My Story' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/90 fixed w-full top-0 z-50 shadow-md backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="relative h-10 w-48">
          <Image
            src="/samuel_holley_logo_transparent.png"
            alt="Samuel Holley Logo"
            width={192}
            height={40}
            className="object-contain"
            priority
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-dark-text hover:text-deep-blue transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#ai-audit" className="bg-primary-orange text-white font-bold py-2 px-4 rounded hover:opacity-90 transition-opacity">
            Book Free Audit
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <XMarkIcon className="h-6 w-6 text-dark-text" /> : <Bars3Icon className="h-6 w-6 text-dark-text" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-dark-text hover:text-deep-blue text-lg">
                {link.label}
              </a>
            ))}
            <a href="#ai-audit" onClick={() => setIsOpen(false)} className="bg-primary-orange text-white font-bold py-3 px-6 rounded hover:opacity-90 w-3/4 text-center">
              Book Free Audit
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
