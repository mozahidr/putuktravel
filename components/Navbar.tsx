'use client';

import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { CgMenuRightAlt } from 'react-icons/cg';
import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); //
  };

  return (
    <div>
      <nav className="flexBetween fixed opacity-90 top-0 left-0 right-0 bg-white max-container padding-container z-30 py-5">
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>
        <ul className="hidden gap-12 md:flex space-x-4">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="md:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none focus:text-gray-600"
          >
            {isMenuOpen ? (
              <IoCloseOutline
                size={30}
                className="inline-block cursor-pointer md:hidden"
              />
            ) : (
              <CgMenuRightAlt
                size={30}
                className="inline-block cursor-pointer md:hidden"
              />
            )}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-green-700 ${
          isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 block text-white cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
