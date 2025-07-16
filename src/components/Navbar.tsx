
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const navLinks = [
  { name: 'Guide', href: '#guide' },
  { name: 'Promise', href: '#promise' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between bg-white shadow-sm sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2" passHref>
        <span className="flex items-center gap-2">
          <Image src="/samuel_holley_logo_transparent.png" alt="Samuel Holley Logo" width={40} height={40} className="h-10 w-auto" />
          <span className="font-serif text-2xl text-deep-blue font-bold tracking-tight">Samuel Holley</span>
        </span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(link => (
          <Link
            key={link.name}
            href={link.href}
            className="text-dark-text font-medium hover:text-primary-orange transition-colors duration-150"
            passHref
          >
            {link.name}
          </Link>
        ))}
      </div>
      <Link href="#cta" className="cta ml-6" passHref>
        Book Free Audit
      </Link>
    </nav>
  );
};

export default Navbar;
