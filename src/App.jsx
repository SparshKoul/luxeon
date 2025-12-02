import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CollectionsGrid from "./components/CollectionsGrid";
import About from "./pages/About";
import Login from "./pages/Login";
import Collection from "./pages/Collection";
import Cart from "./components/Cart";
import { CartProvider } from "./contexts/CartContext";
import "./App.css";

function App() {
  const [collections, setCollections] = useState([]);
  const [showAllCollections, setShowAllCollections] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const loadCollections = async () => {
      try {
        const collectionIds = [
          "Collection-1",
          "Collection-2",
          "Collection-3",
          "Collection-4",
          "Collection-5",
          "Collection-6",
        ];

        const collectionsData = [];

        for (const id of collectionIds) {
          try {
            const response = await fetch(`/Collections/${id}/info.json`);
            const info = await response.json();
            collectionsData.push({
              folder: id,
              ...info,
              coverImage: `/Collections/${id}/Cover.jpg`,
            });
          } catch (error) {
            console.error(`Error loading collection ${id}:`, error);
          }
        }

        setCollections(collectionsData);
        console.log("Collections loaded:", collectionsData);
      } catch (error) {
        console.error("Error loading collections:", error);
      }
    };

    loadCollections();
  }, []);

  useEffect(() => {
    const animateElements = document.querySelectorAll(
      ".animate-in, .product-card, .feature-card, .testimonial-card"
    );

    const animateOnScroll = () => {
      animateElements.forEach((element) => {
        if (isElementInViewport(element)) {
          setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
          }, 100);
        }
      });
    };

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
        rect.bottom >= 0
      );
    };

    animateOnScroll();
    window.addEventListener("scroll", animateOnScroll);

    const heroAnimatedElements = document.querySelectorAll(".hero .animate-in");
    heroAnimatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
        element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      }, 300 * (index + 1));
    });

    const productCards = document.querySelectorAll(".product-card");
    productCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
        card.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      });
    });

    const featureCards = document.querySelectorAll(".feature-card");
    featureCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
        card.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      });
    });

    const formInputs = document.querySelectorAll(
      ".form-input, .form-textarea, .newsletter-input"
    );
    formInputs.forEach((input) => {
      input.addEventListener("focus", () => {
        input.style.outline = "none";
        input.style.boxShadow = "0 0 0 2px rgba(0, 0, 0, 0.2)";
        input.style.borderColor = "transparent";
      });

      input.addEventListener("blur", () => {
        input.style.boxShadow = "none";
        input.style.borderColor = "#e0e0e0";
      });
    });

    const formButtons = document.querySelectorAll(
      ".form-submit, .newsletter-button"
    );
    formButtons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-2px)";
      });

      button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
      });
    });

    const instagramImages = document.querySelectorAll(".instagram-image");
    instagramImages.forEach((image) => {
      image.addEventListener("mouseenter", () => {
        image.style.opacity = "0.8";
        image.style.transform = "scale(1.03)";
        image.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      });

      image.addEventListener("mouseleave", () => {
        image.style.opacity = "1";
        image.style.transform = "scale(1)";
      });
    });

    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      e.preventDefault();

      const targetId = target.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
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
    };

    const setActiveNavLink = () => {
      const sections = document.querySelectorAll("section[id]");
      let scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelectorAll(".nav-link").forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + sectionId) {
              link.classList.add("active");
            }
          });

          document.querySelectorAll(".mobile-nav-link").forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + sectionId) {
              link.classList.add("active");
            }
          });
        }
      });
    };

    document.addEventListener("click", handleSmoothScroll);

    window.addEventListener("scroll", setActiveNavLink);

    return () => {
      window.removeEventListener("scroll", animateOnScroll);
      document.removeEventListener("click", handleSmoothScroll);
      window.removeEventListener("scroll", setActiveNavLink);

      productCards.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });

      featureCards.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });

      formInputs.forEach((input) => {
        input.removeEventListener("focus", () => {});
        input.removeEventListener("blur", () => {});
      });

      formButtons.forEach((button) => {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
      });

      instagramImages.forEach((image) => {
        image.removeEventListener("mouseenter", () => {});
        image.removeEventListener("mouseleave", () => {});
      });
    };
  }, [collections]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
    e.target.reset();
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    e.target.reset();
  };

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/collection/:collectionId" element={<Collection />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );

  function HomePage() {
    return (
      <>
        <header className="header">
          <div className="container">
            <div className="header-wrapper">
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

              <nav className="desktop-nav">
                <a href="#hero" className="nav-link">
                  Home
                </a>
                <a href="#collections" className="nav-link">
                  Collections
                </a>
                <a href="#about" className="nav-link">
                  Overview
                </a>
                <a href="#features" className="nav-link">
                  Features
                </a>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
                <Link to="/about" className="nav-link">
                  About us
                </Link>
                <Link to="/login" className="nav-link">
                  Login / Sign Up
                </Link>
                <Cart />
              </nav>

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

            <div
              id="mobile-menu"
              className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}
            >
              <a
                href="#hero"
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                Home
              </a>
              <a
                href="#collections"
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                Collections
              </a>
              <a
                href="#about"
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                About
              </a>
              <a
                href="#features"
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                Features
              </a>
              <a
                href="#contact"
                className="mobile-nav-link"
                onClick={closeMobileMenu}
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
              <div className="mobile-cart">
                <Cart />
              </div>
            </div>
          </div>
        </header>

        <section id="hero" className="hero">
          <div className="container">
            <div className="hero-wrapper">
              <div className="hero-content">
                <h1 className="hero-title animate-in">
                  Define Your Style. <br />
                  <span>Express Your Vibe.</span>
                </h1>
                <p className="hero-description animate-in">
                  Discover cutting-edge fashion designed for the new generation.
                  Bold, authentic, and unmistakably you.
                </p>
                <div className="hero-buttons animate-in">
                  <a href="#collections" className="btn btn-primary">
                    Shop Collection
                  </a>
                  <a href="#about" className="btn btn-outline">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="hero-image animate-in">
                <img
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Fashionable Gen Z model wearing Luxeon clothing"
                />
                <div className="hero-badge">
                  <div className="hero-badge-dot"></div>
                  <p>NEW ARRIVALS WEEKLY</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="collections" className="collections">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Latest Collections</h2>
              <p className="section-description">
                Explore our newest drops and signature styles, carefully crafted
                for the bold and the authentic.
              </p>
            </div>

            <CollectionsGrid
              collections={
                showAllCollections ? collections : collections.slice(0, 3)
              }
            />

            <div className="section-footer">
              <button
                className="btn btn-outline-dark view-all-btn"
                onClick={() => setShowAllCollections(true)}
                style={{
                  display: showAllCollections ? "none" : "inline-block",
                }}
              >
                View All Collections
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="about-wrapper">
              <div className="about-image">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="About Luxeon Brand"
                />
              </div>
              <div className="about-content">
                <h2 className="about-title">About Luxeon</h2>
                <p className="about-description">
                  Born from a desire to create clothing that resonates with the
                  voice of a new generation. We're not just making clothes;
                  we're crafting experiences, statements, and identities.
                </p>
                <p className="about-description">
                  Our designs blend contemporary street style with sustainable
                  practices, ensuring that looking good never comes at the
                  expense of our planet. Each piece is crafted with intention,
                  quality, and an understanding of what today's generation
                  values.
                </p>
                <p className="about-description">
                  Join us in redefining fashion norms and creating a community
                  where individual expression is celebrated.
                </p>
                <div className="about-buttons">
                  <a href="#" className="btn btn-primary">
                    Our Story
                  </a>
                  <a href="#" className="btn btn-outline">
                    Sustainability
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why Choose Luxeon</h2>
              <p className="section-description">
                Experience fashion that goes beyond trends, focusing on quality,
                sustainability, and personal expression.
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="41" height="40" viewBox="0 0 41 40" fill="none">
                    <g clipPath="url(#clip0_4_277)">
                      <path
                        d="M28.6946 28.9479H16.0498"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M36.3939 28.9479H39.0782V20.7976L32.3557 13.8516H26.855V13.8615V28.874"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M39.0782 20.7976H26.8545"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M9.65799 26.1134C11.0906 24.6807 13.4133 24.6807 14.846 26.1134C16.2785 27.5461 16.2785 29.869 14.846 31.3016C13.4133 32.7343 11.0906 32.7343 9.65799 31.3016C8.22533 29.869 8.22533 27.5461 9.65799 26.1134Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M30.1057 26.1134C31.5383 24.6807 33.861 24.6807 35.2937 26.1134C36.7263 27.5461 36.7263 29.869 35.2937 31.3016C33.861 32.7343 31.5383 32.7343 30.1057 31.3016C28.6731 29.869 28.6731 27.5461 30.1057 26.1134Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M5.12183 7.62381V28.9351H8.4319"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M26.8878 13.8615V7.62378H5.12183"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M13.2528 7.62378H5.12183"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M13.2527 12.3124H3.06274"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M12.3932 17.0009H1.42188"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_277">
                        <rect
                          width="40"
                          height="40"
                          fill="white"
                          transform="translate(0.25)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="feature-title">Fast Delivery</h3>
                <p className="feature-description">
                  Get your orders delivered quickly and reliably, right to your
                  doorstep.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="41" height="40" viewBox="0 0 41 40" fill="none">
                    <g clipPath="url(#clip0_4_290)">
                      <path
                        d="M30.9531 20.75C26.0977 19.3627 22.75 14.9247 22.75 9.87484V4.34375L30.9531 2L39.1562 4.34375V9.87484C39.1562 14.9247 35.8087 19.3627 30.9531 20.75Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M27.4375 11.375L29.7812 13.7188L34.4688 9.03125"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M7.75 30H9.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M14.75 30H16.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M4.75 17H24.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M18.25 11H2.75V34H37.75V22.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_290">
                        <rect
                          width="40"
                          height="40"
                          fill="white"
                          transform="translate(0.75)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="feature-title">Quality Guarantee</h3>
                <p className="feature-description">
                  Premium materials and expert craftsmanship ensure exceptional
                  durability.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
                    <g clipPath="url(#clip0_4_302)">
                      <path
                        d="M14.9097 2.74423C16.5097 2.29993 18.1958 2.06251 19.9374 2.06251C30.2928 2.06251 38.6874 10.4572 38.6874 20.8125C38.6874 27.6077 35.0726 33.5587 29.6611 36.8474"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M24.0277 38.6179C22.9047 38.8277 21.7464 38.9375 20.5625 38.9375C10.2071 38.9375 1.8125 30.5428 1.8125 20.1875C1.8125 14.0655 4.74649 8.62867 9.28508 5.20672"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M2.65601 4.16712H9.28515V10.7963"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M36.2815 36.8329H29.6523V30.2037"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M26.5 26.75H14V14.25H26.5V26.75Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M20.25 14.25V18.9375"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_302">
                        <rect
                          width="40"
                          height="40"
                          fill="white"
                          transform="translate(0.25 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="feature-title">Sustainable Practices</h3>
                <p className="feature-description">
                  Eco-friendly materials and ethical manufacturing for a better
                  planet.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="41" height="40" viewBox="0 0 41 40" fill="none">
                    <g clipPath="url(#clip0_4_311)">
                      <path
                        d="M11.6875 29.0625C11.6875 30.7884 10.2884 32.1875 8.5625 32.1875C5.1107 32.1875 2.3125 29.3893 2.3125 25.9375V22.8125C2.3125 19.3607 5.1107 16.5625 8.5625 16.5625C10.2884 16.5625 11.6875 17.9616 11.6875 19.6875V29.0625Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8.5625 16.5626V10.9375C8.5625 5.75984 12.7598 1.5625 17.9375 1.5625H24.1875C29.3652 1.5625 33.5625 5.75984 33.5625 10.9375"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M36.0625 16.5625C37.7812 16.5625 39.1875 17.9688 39.1875 19.6875V25.9375C39.1875 27.6562 37.7812 29.0625 36.0625 29.0625H28.607C25.7773 29.0625 23.0634 30.1866 21.0625 32.1875V19.6875C21.0625 17.9688 22.4688 16.5625 24.1875 16.5625H36.0625Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M21.0625 38.4375H13.25C10.6612 38.4375 8.5625 36.3388 8.5625 33.75V32.1875"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M27.3125 22.8125H32.9375"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_311">
                        <rect
                          width="40"
                          height="40"
                          fill="white"
                          transform="translate(0.75)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="feature-title">24/7 Support</h3>
                <p className="feature-description">
                  Our dedicated team is always ready to assist you with any
                  questions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-banner">
          <div className="container">
            <h2 className="cta-title">Join the Luxeon Community</h2>
            <p className="cta-description">
              Subscribe to our newsletter and be the first to know about new
              collections, exclusive offers, and community events.
            </p>
            <div className="newsletter-container">
              <form
                className="newsletter-form"
                onSubmit={handleNewsletterSubmit}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                </button>
              </form>
              <p className="newsletter-disclaimer">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">What Our Community Says</h2>
              <p className="section-description">
                Real reviews from real customers who have experienced the Luxeon
                difference.
              </p>
            </div>

            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <img
                    src="https://media.assettype.com/nationalherald%2F2023-06%2F3ad7d478-f749-4461-81c2-65d9158d4f09%2F1246522685.?rect=0%2C0%2C3863%2C2173&auto=format%2Ccompress&fmt=webp&w=576&dpr=1.3"
                    alt="Alexandra S."
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h4 className="testimonial-author">MODI JI </h4>
                    <div className="testimonial-stars">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="star"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="testimonial-text">
                  "Obsessed with my new Luxeon pieces! The quality is amazing
                  and they fit perfectly. Will definitely be ordering more
                  soon!"
                </p>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-header">
                  <img
                    src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-12/20/full/1734669259-5415.jpg?im=FitAndFill=(826,465)"
                    alt="Jason M."
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h4 className="testimonial-author">R Gandhi</h4>
                    <div className="testimonial-stars">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="star"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="testimonial-text">
                  "The Statement Collection is a game-changer. I get compliments
                  every time I wear their pieces. Fast shipping too!"
                </p>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-header">
                  <img
                    src="https://www.babushahi.com/upload/image/sukhbir-badal-new-ed.jpg"
                    alt="Mia K."
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h4 className="testimonial-author">SHEEROOMANI</h4>
                    <div className="testimonial-stars">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="star"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="testimonial-text">
                  "Love that Luxeon prioritizes sustainability. The clothes are
                  stylish but I also feel good about my purchase knowing they're
                  eco-friendly."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="instagram">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Follow Our Style</h2>
              <p className="section-description">
                Join us on Instagram @luxeon_style for daily inspiration and
                first looks.
              </p>
            </div>

            <div className="instagram-grid">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Instagram post"
                className="instagram-image"
              />
              <img
                src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80"
                alt="Instagram post"
                className="instagram-image"
              />
              <img
                src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
                alt="Instagram post"
                className="instagram-image"
              />
              <img
                src="https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Instagram post"
                className="instagram-image"
              />
              <img
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
                alt="Instagram post"
                className="instagram-image"
              />
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Instagram post"
                className="instagram-image"
              />
            </div>

            <div className="instagram-footer">
              <a
                href="https://www.instagram.com/sparshkoul_22/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
              >
                View Instagram
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="contact-wrapper">
              <div className="contact-info">
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-description">
                  Have questions or feedback? We'd love to hear from you. Our
                  team is ready to provide the assistance you need.
                </p>

                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="contact-item-title">Location</h3>
                      <p>123 Fashion Avenue, Rajpura, Punjab</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="contact-item-title">Email</h3>
                      <p>luxeonstyle@gmail.com</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="contact-item-title">Phone</h3>
                      <p>+91 xxxxxxxxxx</p>
                    </div>
                  </div>
                </div>

                <div className="social-connect">
                  <h3 className="social-title">Connect With Us</h3>
                  <div className="social-icons">
                    <a
                      href="https://x.com/Sparsh73961539?t=dExkxAxEeb7tfp-zg2yl_g&s=09"
                      className="social-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.5 8.65C16.5 8.9 16.5 9.15 16.5 9.4C16.5 12.85 13.95 16.8 9.3 16.8C7.8 16.8 6.4 16.35 5.2 15.55C5.4 15.55 5.65 15.6 5.9 15.6C7.15 15.6 8.3 15.15 9.2 14.4C8.05 14.4 7.05 13.6 6.7 12.5C6.9 12.55 7.05 12.55 7.25 12.55C7.5 12.55 7.75 12.5 7.95 12.45C6.75 12.2 5.85 11.15 5.85 9.9C6.2 10.1 6.6 10.2 7.05 10.2C6.35 9.7 5.9 8.9 5.9 8C5.9 7.5 6.05 7.05 6.3 6.65C7.6 8.25 9.55 9.3 11.75 9.4C11.7 9.2 11.65 9 11.65 8.8C11.65 7.35 12.85 6.15 14.3 6.15C15.05 6.15 15.75 6.45 16.25 6.95C16.85 6.85 17.4 6.6 17.9 6.3C17.7 6.95 17.25 7.45 16.7 7.8C17.25 7.75 17.75 7.6 18.25 7.4C17.9 7.95 17.5 8.4 17 8.8C17 8.75 16.5 8.65 16.5 8.65Z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sparsh-koul-05815b325/?trk=opento_sprofile_details"
                      className="social-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 7C13.66 7 15 8.34 15 10C15 11.66 13.66 13 12 13C10.34 13 9 11.66 9 10C9 8.34 10.34 7 12 7ZM12 20C9.33 20 6.92 18.67 5.5 16.5C5.5 14.5 9.5 13.5 12 13.5C14.5 13.5 18.5 14.5 18.5 16.5C17.08 18.67 14.67 20 12 20Z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/sparshkoul_22/"
                      className="social-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM7.6 4C5.61 4 4 5.61 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C18.39 20 20 18.39 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C18.2165 5.5 19 6.2835 19 7.25C19 8.2165 18.2165 9 17.25 9C16.2835 9 15.5 8.2165 15.5 7.25C15.5 6.2835 16.2835 5.5 17.25 5.5ZM12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sparsh-koul-05815b325/?trk=opento_sprofile_details"
                      className="social-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V10H9V17ZM7.694 8.717C6.923 8.717 6.408 8.203 6.408 7.517C6.408 6.831 6.922 6.317 7.779 6.317C8.55 6.317 9.065 6.831 9.065 7.517C9.065 8.203 8.551 8.717 7.694 8.717ZM18 17H15.558V13.174C15.558 12.116 14.907 11.872 14.663 11.872C14.419 11.872 13.605 12.035 13.605 13.174C13.605 13.337 13.605 17 13.605 17H11.082V10H13.605V10.977C13.93 10.407 14.581 10 15.802 10C17.023 10 18 10.977 18 13.174V17Z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleContactSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-input"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-input"
                      placeholder="Your email address"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="form-input"
                      placeholder="Subject of your message"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="form-textarea"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="form-submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <div className="footer-logo">
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
                </div>
                <p className="footer-tagline">
                  Redefining fashion for the new generation. Bold, authentic,
                  and unmistakably you.
                </p>
                <div className="footer-social">
                  <a
                    href="https://x.com/Sparsh73961539?t=dExkxAxEeb7tfp-zg2yl_g&s=09"
                    className="footer-social-link twitter-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.5 8.65C16.5 8.9 16.5 9.15 16.5 9.4C16.5 12.85 13.95 16.8 9.3 16.8C7.8 16.8 6.4 16.35 5.2 15.55C5.4 15.55 5.65 15.6 5.9 15.6C7.15 15.6 8.3 15.15 9.2 14.4C8.05 14.4 7.05 13.6 6.7 12.5C6.9 12.55 7.05 12.55 7.25 12.55C7.5 12.55 7.75 12.5 7.95 12.45C6.75 12.2 5.85 11.15 5.85 9.9C6.2 10.1 6.6 10.2 7.05 10.2C6.35 9.7 5.9 8.9 5.9 8C5.9 7.5 6.05 7.05 6.3 6.65C7.6 8.25 9.55 9.3 11.75 9.4C11.7 9.2 11.65 9 11.65 8.8C11.65 7.35 12.85 6.15 14.3 6.15C15.05 6.15 15.75 6.45 16.25 6.95C16.85 6.85 17.4 6.6 17.9 6.3C17.7 6.95 17.25 7.45 16.7 7.8C17.25 7.75 17.75 7.6 18.25 7.4C17.9 7.95 17.5 8.4 17 8.8C17 8.75 16.5 8.65 16.5 8.65Z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/sparshkoul_22/"
                    className="footer-social-link instagram-linkk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM7.6 4C5.61 4 4 5.61 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C18.39 20 20 18.39 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C18.2165 5.5 19 6.2835 19 7.25C19 8.2165 18.2165 9 17.25 9C16.2835 9 15.5 8.2165 15.5 7.25C15.5 6.2835 16.2835 5.5 17.25 5.5ZM12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sparsh-koul-05815b325/?trk=opento_sprofile_details"
                    className="footer-social-link linkdin-linkk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V10H9V17ZM7.694 8.717C6.923 8.717 6.408 8.203 6.408 7.517C6.408 6.831 6.922 6.317 7.779 6.317C8.55 6.317 9.065 6.831 9.065 7.517C9.065 8.203 8.551 8.717 7.694 8.717ZM18 17H15.558V13.174C15.558 12.116 14.907 11.872 14.663 11.872C14.419 11.872 13.605 12.035 13.605 13.174C13.605 13.337 13.605 17 13.605 17H11.082V10H13.605V10.977C13.93 10.407 14.581 10 15.802 10C17.023 10 18 10.977 18 13.174V17Z"></path>
                    </svg>
                  </a>
                  <a href="#" className="footer-social-link">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.593 7.203C21.387 6.442 20.817 5.872 20.056 5.666C18.636 5.25 12 5.25 12 5.25C12 5.25 5.364 5.25 3.944 5.666C3.183 5.872 2.613 6.442 2.407 7.203C1.991 8.623 1.991 11.647 1.991 11.647C1.991 11.647 1.991 14.671 2.407 16.091C2.613 16.852 3.183 17.422 3.944 17.628C5.364 18.044 12 18.044 12 18.044C12 18.044 18.636 18.044 20.056 17.628C20.817 17.422 21.387 16.852 21.593 16.091C22.009 14.671 22.009 11.647 22.009 11.647C22.009 11.647 22.009 8.623 21.593 7.203ZM9.998 14.395V8.899L15.095 11.647L9.998 14.395Z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="footer-links">
                <h3 className="footer-title">Shop</h3>
                <ul className="footer-list">
                  <li>
                    <a href="#" className="footer-link">
                      New Arrivals
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Best Sellers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Sale
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Collections
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Gift Cards
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-links">
                <h3 className="footer-title">Company</h3>
                <ul className="footer-list">
                  <li>
                    <a href="#" className="footer-link">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Sustainability
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-links">
                <h3 className="footer-title">Support</h3>
                <ul className="footer-list">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sparsh-koul-05815b325/?trk=opento_sprofile_details"
                      className="footer-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Shipping
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Returns
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Size Guide
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <p className="copyright">
                &copy; 2025 Luxeon. All rights reserved.
              </p>
              <div className="footer-legal">
                <a href="#" className="legal-link">
                  Privacy Policy
                </a>
                <a href="#" className="legal-link">
                  Terms of Service
                </a>
                <a href="#" className="legal-link">
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default App;
