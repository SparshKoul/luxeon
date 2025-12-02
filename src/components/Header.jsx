import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      closeMobileMenu();
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          {/* Logo */}
          <Link to="/" className="logo">
            <span>LUXEON</span>
            <svg
              className="star-icon"
              width="17"
              height="18"
              viewBox="0 0 17 18"
            >
              <path
                d="M 0 9 C 7.173 9.733 7.767 10.327 8.5 17.5 C 9.233 10.326 9.827 9.733 17 9 C 9.827 8.267 9.233 7.673 8.5 0.5 C 7.767 7.673 7.173 8.267 0 9 Z"
                fill="currentColor"
              />
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/collections"
              className={`nav-link ${
                location.pathname === "/collections" ? "active" : ""
              }`}
            >
              Collections
            </Link>
            <a
              href="#about"
              className="nav-link"
              onClick={(e) => handleAnchorClick(e, "#about")}
            >
              Overview
            </a>
            <a
              href="#features"
              className="nav-link"
              onClick={(e) => handleAnchorClick(e, "#features")}
            >
              Features
            </a>
            <a
              href="#contact"
              className="nav-link"
              onClick={(e) => handleAnchorClick(e, "#contact")}
            >
              Contact
            </a>
            <Link
              to="/about"
              className={`nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              About us
            </Link>
            <Link
              to="/login"
              className={`nav-link ${
                location.pathname === "/login" ? "active" : ""
              }`}
            >
              Login / Sign Up
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-button"
            type="button"
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}
        >
          <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link
            to="/collections"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            Collections
          </Link>
          <a
            href="#about"
            className="mobile-nav-link"
            onClick={(e) => handleAnchorClick(e, "#about")}
          >
            About
          </a>
          <a
            href="#features"
            className="mobile-nav-link"
            onClick={(e) => handleAnchorClick(e, "#features")}
          >
            Features
          </a>
          <a
            href="#contact"
            className="mobile-nav-link"
            onClick={(e) => handleAnchorClick(e, "#contact")}
          >
            Contact
          </a>
          <Link
            to="/about"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
          <Link
            to="/login"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            Login / Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
