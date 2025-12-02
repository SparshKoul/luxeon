import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import "../collections.css";

const Collection = () => {
  const { collectionId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [collection, setCollection] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    const loadCollection = async () => {
      try {
        // Load collection info
        const collectionResponse = await fetch(
          `/Collections/${collectionId}/info.json`
        );
        const collectionData = await collectionResponse.json();
        setCollection({
          id: collectionId,
          ...collectionData,
          coverImage: `/Collections/${collectionId}/Cover.jpg`,
        });

        // Load products
        const productIds = [];
        for (let i = 1; i <= 20; i++) {
          productIds.push(`Product-${i}`);
        }

        const productsData = [];
        for (const productId of productIds) {
          try {
            const productResponse = await fetch(
              `/Collections/${collectionId}/Products/${productId}/info.json`
            );
            const productData = await productResponse.json();
            productsData.push({
              id: productId,
              title: productData.name || productData.title || "",
              description: [productData.fit, productData.color]
                .filter(Boolean)
                .join(" • "),
              price:
                typeof productData.price === "string"
                  ? parseFloat(productData.price.replace(/[^0-9.]/g, ""))
                  : productData.price,
              PriceRange: productData.price
                ? `₹${String(productData.price)}`
                : productData.PriceRange || "",
              coverImage: `/Collections/${collectionId}/Products/${productId}/Cover.jpg`,
            });
          } catch (error) {
            // Product doesn't exist, skip
          }
        }
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error("Error loading collection:", error);
        setLoading(false);
      }
    };

    loadCollection();
  }, [collectionId]);

  const handleImageError = (productId) => {
    setImageErrors((prev) => ({
      ...prev,
      [productId]: true,
    }));
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  if (loading) {
    return (
      <div className="collection-page">
        <div className="container">
          <div className="loading">Loading...</div>
        </div>
      </div>
    );
  }

  if (!collection) {
    return (
      <div className="collection-page">
        <div className="container">
          <div className="error">Collection not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="collection-page">
      {/* Header */}
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
              <Link to="/" className="nav-link">
                Home
              </Link>
              <a href="/#collections" className="nav-link">
                Collections
              </a>
              <a href="/#about" className="nav-link">
                Overview
              </a>
              <a href="/#features" className="nav-link">
                Features
              </a>
              <a href="/#contact" className="nav-link">
                Contact
              </a>
              <Link to="/about" className="nav-link">
                About us
              </Link>
              <Link to="/login" className="nav-link">
                Login / Sign Up
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-button"
              type="button"
              className="mobile-menu-button"
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
          <div id="mobile-menu" className="mobile-menu">
            <Link to="/" className="mobile-nav-link">
              Home
            </Link>
            <a href="/#collections" className="mobile-nav-link">
              Collections
            </a>
            <a href="/#about" className="mobile-nav-link">
              Overview
            </a>
            <a href="/#features" className="mobile-nav-link">
              Features
            </a>
            <a href="/#contact" className="mobile-nav-link">
              Contact
            </a>
            <Link to="/about" className="mobile-nav-link">
              About Us
            </Link>
            <Link to="/login" className="mobile-nav-link">
              Login / Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Collection Hero */}
      <section className="collection-hero">
        <div className="container">
          <div className="collection-hero-content">
            <h1 className="collection-title">{collection.title}</h1>
            <p className="collection-description">{collection.description}</p>
            <div className="collection-meta">
              <span className="collection-price-range">
                {collection.PriceRange}
              </span>
              <span className="collection-count">
                {products.length} Products
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img
                    src={
                      imageErrors[product.id]
                        ? "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        : product.coverImage
                    }
                    alt={product.title}
                    onError={() => handleImageError(product.id)}
                  />
                  <div className="product-badge">NEW</div>
                </div>
                <div className="product-details">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">
                      {product.PriceRange || "Price on request"}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="btn btn-primary add-to-cart-btn"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;
