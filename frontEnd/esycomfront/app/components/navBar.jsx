"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScreenWide, setIsScreenWide] = useState(false);
  const [overlayClass, setOverlayClass] = useState('');

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect window resize and update state for screen size
  useEffect(() => {
    const handleResize = () => {
      setIsScreenWide(window.innerWidth > 990);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle overlay animation when menu state changes
  useEffect(() => {
    if (isMenuOpen) {
      setOverlayClass("block curtain-overlay");
    } else {
      setOverlayClass("hidden curtain-overlay-close");
    }
  }, [isMenuOpen]);

  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      fs-scrolldisable-element="smart-nav"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navbar_component nav_comp-d2c w-nav"
    >
      <div className="navbar_container nav-container-d2c">
        <Link
          href="/"
          className="navbar_logo-link w-nav-brand"
          aria-label="home"
        >
          <div className="boco-logo-d2c">boco</div>
        </Link>
        <nav
          role="navigation"
          id="w-node-_1018ab4f-fd63-5dc3-a791-3617ebdcae2f-ebdcae2a"
          className={`navbar_menu is-page-height-tablet nav-menu-d2c w-nav-menu ${
            isMenuOpen ? "block" : "hidden"
          } ${isScreenWide ? "hidden" : ""}`}
        >
          <Link
            href="/boco-shopify-store-build"
            className={`navbar_link link-1-d2c w-nav-link ${
              activeLink === "/boco-shopify-store-build" ? "w--current" : ""
            }`}
            onClick={() => handleLinkClick("/boco-shopify-store-build")}
          >
            Shopify store build
          </Link>
          <Link
            href="/custom-shopify-landing-page"
            className={`navbar_link link-1-d2c w-nav-link ${
              activeLink === "/custom-shopify-landing-page" ? "w--current" : ""
            }`}
            onClick={() => handleLinkClick("/custom-shopify-landing-page")}
          >
            Landing page design
          </Link>
          <Link
            href="/case-studies"
            className={`navbar_link link-1-d2c w-nav-link ${
              activeLink === "/case-studies" ? "w--current" : ""
            }`}
            onClick={() => handleLinkClick("/case-studies")}
          >
            Case studies
          </Link>
        </nav>
        <div className="navbar_button-wrapper">
          <div className="hide-tablet hide-tab-d2c">
            <Link
              href="https://qui8d48qnm9.typeform.com/to/CirpyVmQ"
              className="button-d2c-1 talk-btn-d2c navbar-top-btn w-inline-block"
            >
              <div className="text-d2cxx talk-us-d2c">Talk to Us</div>
              <div className="arrow-div-d2c">
                <div className="arrow-d2c w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <circle cx="24" cy="24" r="24" fill="white"></circle>
                    <path
                      d="M18.2942 29.6442L17.25 28.6L27.0904 18.75H18.1442V17.25H29.6442V28.75H28.1442V19.8038L18.2942 29.6442Z"
                      fill="#060237"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          <div
            className="navbar_menu-button w-nav-button"
            onClick={toggleMenu}
            role="button"
            aria-expanded={isMenuOpen}
          >
            <div className="menu-icon2 menu-icon-d2c">
              <div className="menu-icon_line-top top-line-d2c"></div>
              <div className="menu-icon_line-middle middle-line-d2c">
                <div className="menu-icon_line-middle-inner"></div>
              </div>
              <div className="menu-icon_line-bottom bottom-line-d2c"></div>
            </div>
          </div>
        </div>
        <div className="show-tablet">
          <Link
            href="https://qui8d48qnm9.typeform.com/to/CirpyVmQ"
            className="button-arrow-wrapper s-arrow-d2c w-inline-block"
          >
            <div className="button-arrow s1-arrow-d2c w-embed">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.29423 17.6442L5.25003 16.6L15.0904 6.74995H6.14426V5.25H17.6442V16.75H16.1443V7.80378L6.29423 17.6442Z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div
        className={`w-nav-overlay ${overlayClass} ${isScreenWide ? 'hidden' : ''}`}
      >
        <nav
          role="navigation"
          className="pr-0 lg:hidden md:rounded-none md:w-full md:h-auto md:px-16 md:pl-20 bg-white text-inherit border-b border-black justify-center p-5 pb-10 overflow-auto is-page-height-tablet nav-menu-d2c md:relative items-center"
        >
          <Link href="/boco-shopify-store-build" className="navbar_link link-1-d2c w-nav-link">
            Shopify store build
          </Link>
          <Link href="/custom-shopify-landing-page" className="navbar_link link-1-d2c w-nav-link">
            Landing page design
          </Link>
          <Link href="/case-studies" className="navbar_link link-1-d2c w-nav-link">
            Case studies
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
