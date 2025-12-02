import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
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
              Redefining fashion for the new generation. Bold, authentic, and
              unmistakably you.
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
                <Link to="/collections" className="footer-link">
                  Collections
                </Link>
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
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
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
          <p className="copyright">&copy; 2025 Luxeon. All rights reserved.</p>
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
  );
};

export default Footer;
