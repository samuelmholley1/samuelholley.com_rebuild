import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
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
        <div className="hidden md:flex items-center space-x-6">
          <a href="#my-method" className="text-dark-text hover:text-deep-blue">My Method</a>
          <a href="#how-i-help" className="text-dark-text hover:text-deep-blue">How I Help</a>
          <a href="#my-story" className="text-dark-text hover:text-deep-blue">My Story</a>
        </div>
        <a href="#ai-audit" className="bg-primary-orange text-white font-bold py-2 px-4 rounded hover:opacity-90">
          Book Free Audit
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
