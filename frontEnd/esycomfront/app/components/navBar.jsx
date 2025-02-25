"use client";
import { useState } from "react";
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-center items-center min-h-auto py-[24px] px-[80px] bg-[#fff]">
      <div className="grid gap-2 flex-1 grid-rows-auto grid-cols-[auto_1fr_auto] place-content-stretch max-w-full items-center w-full h-full mx-0">
        {/* Logo */}
        <Link
          href="/"
          className="pl-0 float-left text-gray-800 no-underline relative border-black bg-transparent antialiased"
        >
          <div className="text-[#060237] text-[36px] text-left tracking-[-1.44px] flex flex-row flex-0 font-extrabold leading-[120%] no-underline">
            boco
          </div>
        </Link>

        {/* Navbar Links for Desktop */}
        <nav className="border-[#d3c3f8]  rounded-[48px] pt-1.5 pr-1.5 justify-self-center border  p-1.5 justify-center items-center flex static float-right">
          <Link
            href="/"
            className="border border-transparent font-bold transition-colors duration-300 ease-[cubic-bezier(.165,.84,.44,1)] block relative mx-auto align-top text-[#140152] text-[16px] text-left tracking-normal capitalize px-7 py-2 leading-6 no-underline"
          >
            Shopify Store Build
          </Link>
          <Link
            href="/custom-shopify-landing-page"
            className="text-[#140152] text-left tracking-normal capitalize px-7 py-2 leading-6 no-underline text-[16px] border border-transparent text-sm font-bold transition-colors duration-300 ease-[cubic-bezier(.165,.84,.44,1)] block relative align-top ml-auto mr-auto p-5 bg-transparent"
          >
            Landing Page Design
          </Link>
          <Link
            href="/case-studies"
            className="text-[#140152] text-left tracking-normal capitalize px-7 py-2 leading-6 no-underline text-[16px] border border-transparent text-sm font-bold transition-colors duration-300 ease-[cubic-bezier(.165,.84,.44,1)] block relative align-top ml-auto mr-auto p-5 bg-transparent"
          >
            Case Studies
          </Link>
        </nav>

        {/* Talk to Us Button */}
        <div className="justify-self-end gap-4 ml-0 flex">
          <div className="text-left flex-none order-0 justify-between self-auto flex">
            <a
              href="https://qui8d48qnm9.typeform.com/to/CirpyVmQ"
              className="max-h-14 inline-flex bg-[#140152] text-center border-solid border-0 border-black rounded-full flex-shrink-0 justify-center items-center gap-6 max-w-full mx-auto pt-[7px] pr-[7px] pb-[7px] pl-[32px] text-white "
            >
              <span className="clear-none aspect-auto text-white text-center border-0 flex flex-row items-center text-[16px] font-normal text-decoration-none"> 
                Talk to Us
              </span>
              <div className="bg-[#68505000] justify-center items-center mb-0 pb-0 flex">
              <div className="text-center bg-[#63565600] justify-center self-stretch items-start max-w-full mb-0 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle cx="24" cy="24" r="24" fill="white" />
                  <mask
                    id="mask0"
                    maskUnits="userSpaceOnUse"
                    x="12"
                    y="12"
                    width="24"
                    height="24"
                  >
                    <rect x="12" y="12" width="24" height="24" fill="#FFFF61" />
                  </mask>
                  <g mask="url(#mask0)">
                    <path
                      d="M18.294 29.644L17.25 28.6L27.09 18.75H18.144V17.25H29.644V28.75H28.144V19.804L18.294 29.644Z"
                      fill="#060237"
                    />
                  </g>
                </svg>
              </div>
              </div>
            </a>
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 ${isMenuOpen ? "block" : "hidden"}`}
      >
        <a
          href="/boco-shopify-store-build"
          className="block text-white px-4 py-2"
        >
          Shopify Store Build
        </a>
        <a
          href="/custom-shopify-landing-page"
          className="block text-white px-4 py-2"
        >
          Landing Page Design
        </a>
        <a href="/case-studies" className="block text-white px-4 py-2">
          Case Studies
        </a>
      </div>
    </div>
  );
};

export default Navbar;
