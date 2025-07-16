import React from 'react';


const navLinks = [
  { name: 'Guide', href: '#guide' },
  { name: 'Promise', href: '#promise' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between bg-white shadow-sm sticky top-0 z-50">
      <a href="/" className="flex items-center gap-2">
        <img src="/samuel_holley_logo_transparent.png" alt="Samuel Holley Logo" className="h-10 w-auto" />
        <span className="font-serif text-2xl text-deep-blue font-bold tracking-tight">Samuel Holley</span>
      </a>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            className="text-dark-text font-medium hover:text-primary-orange transition-colors duration-150"
          >
            {link.name}
          </a>
        ))}
      </div>
      <a href="#cta" className="cta ml-6">Book Free Audit</a>
    </nav>
  );
};

export default Navbar;
