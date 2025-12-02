import React, { useState } from "react";

import { Link } from "react-router-dom";

const CollectionsGrid = ({ collections }) => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (collectionId) => {
    setImageErrors((prev) => ({
      ...prev,
      [collectionId]: true,
    }));
  };

  return (
    <div className="collections-grid">
      {collections.map((collection) => (
        <div key={collection.folder || collection.id} className="product-card">
          <div className="product-image">
            <img
              src={
                imageErrors[collection.folder || collection.id]
                  ? "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  : collection.coverImage ||
                    `/Collections/${
                      collection.folder || collection.id
                    }/cover.jpg`
              }
              alt={collection.title}
              onError={(e) => {
                if (!imageErrors[collection.folder || collection.id]) {
                  e.target.src = `/Collections/${
                    collection.folder || collection.id
                  }/Cover.jpg`;
                  handleImageError(collection.folder || collection.id);
                }
              }}
            />
            <div className="product-badge">NEW</div>
          </div>
          <div className="product-details">
            <h3 className="product-title">{collection.title}</h3>
            <p className="product-description">{collection.description}</p>
            <div className="product-footer">
              <span className="product-price">{collection.PriceRange}</span>
              <Link
                to={`/collection/${encodeURIComponent(
                  collection.folder || collection.id
                )}`}
                className="product-link"
              >
                Shop Now
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
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionsGrid;
