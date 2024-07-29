'use client';

import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import { Link as LinkNav } from 'react-scroll';
import Link from 'next/link';
import Button from './Button';
import { CgMenuRightAlt } from 'react-icons/cg';
import { useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); //
  };

  useEffect(() => {
    const changeBackground = () => {
      window.scrollY >= 150 ? setNavbar(true) : setNavbar(false);
    };
    window.addEventListener('scroll', changeBackground);
  }, []);

  return (
    <div
      className={
        navbar
          ? 'bg-green-700 w-full h-20 lg:h-24 text-white transition-all duration-300 fixed top-0 left-0 right-0 z-30'
          : 'bg-white z-30'
      }
    >
      <div>
        <nav className="flexBetween fixed top-0 left-0 right-0 max-container padding-container z-30 py-5">
          <Link href="/">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>
          <ul className="hidden gap-12 md:flex space-x-4">
            {NAV_LINKS.map((link) => (
              <LinkNav
                className="regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                activeClass="active"
                spy={true}
                offset={-100}
                hashSpy={true}
                duration={500}
                delay={1000}
                smooth={true}
                key={link.key}
                to={link.path}
              >
                {link.label}
              </LinkNav>
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
          className={`space-y-4 px-4 z-[29] pt-24 pb-5 bg-green-700 ${
            isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <LinkNav
              activeClass="active"
              spy={true}
              offset={-100}
              hashSpy={true}
              duration={500}
              delay={1000}
              smooth={true}
              key={link.key}
              to={link.path}
              className="regular-16 block text-white cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </LinkNav>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
