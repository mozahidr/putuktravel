'use client';

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { SlClose } from 'react-icons/sl';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import ScrollToTop from 'react-scroll-to-top';
import Button from './Button';

const Footer = () => {
  const year = new Date().getFullYear();
  const [showCookie, setShowCookie] = useState(true);

  const handleShowCookie = () => {
    setShowCookie(false);
  };
  return (
    <>
      <footer className="flexCenter mb-20" id="contact">
        <div className="padding-container max-container flex w-full flex-col gap-14">
          <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
            <Link href="/" className="mb-10">
              <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
            </Link>
            <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
              {FOOTER_LINKS.map((columns) => (
                <FooterColumn title={columns.title}>
                  <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                    {columns.links.map((link) => (
                      <Link
                        href="/"
                        key={link}
                        className="hover:text-gray-90 transition-all duration-300"
                      >
                        {link}
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              ))}
              {/* Contact */}
              <div className="flex flex-col gap-5">
                <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    <Link
                      href="/"
                      key={link.label}
                      className="flex gap-4 md:flex-col lg:flex-row"
                    >
                      <p className="whitespace-nowrap">{link.label}</p>
                      <p className="medium-14 whitespace-nowrap text-blue-70">
                        {link.value}
                      </p>
                    </Link>
                  ))}
                </FooterColumn>
              </div>
              {/* Social icons */}
              <div className="flex flex-col gap-5">
                <FooterColumn title={SOCIALS.title}>
                  <ul className="regular-14 flex gap-4 text-gray-30">
                    {SOCIALS.links.map((link) => (
                      <Link href="/" key={link}>
                        <Image src={link} alt="logo" width={24} height={24} />
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              </div>
            </div>
          </div>
          <div className="border bg-gray-20" />
          <p className="regular-14 w-full text-center text-gray-30">
            {year} Hilink | &copy; All rights reserved
          </p>
          <ScrollToTop
            className="text-sm"
            smooth
            component={
              <p style={{ color: 'black' }}>
                <MdKeyboardDoubleArrowUp size={34} className="pl-1" />
              </p>
            }
          />
        </div>
      </footer>
      {showCookie ? (
        <div className="h-36 lg:h-24 bg-[#3677CD] w-full fixed bottom-0 px-6 pt-2 z-[999]">
          <div className="flex pt-4 max-w-7xl mx-auto items-center justify-between">
            <div className="text-white font-normal text-sm"> 
              <p className='text-sm pb-2'>
                By clicking “Accept all cookies”, you agree Hilink can store
                cookies on your device and disclose information in accordance
                with our Cookie Policy.
              </p>
              <Button
                type="button"
                title="Accept all cookies"
                icon=""
                variant="btn_blue"
              />
            </div>
            <div className="cursor-pointer text-white">
              <SlClose onClick={handleShowCookie} size={30} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
