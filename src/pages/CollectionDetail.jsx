import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../collections.css";

const CollectionDetail = () => {
  const { folder } = useParams();
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState(new Set());
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      if (!folder) return;
      try {
        const res = await fetch(`/Collections/${folder}/Products/`);
        const text = await res.text();
        const div = document.createElement("div");
        div.innerHTML = text;
        const anchors = div.getElementsByTagName("a");
        const arr = Array.from(anchors);
        const productInfos = [];
        for (const a of arr) {
          if (a.href.includes(`/Collections/${folder}/Products/`)) {
            const parts = a.href.split("/");
            const prodFolder =
              parts[parts.length - 2] || parts[parts.length - 1];
            try {
              const infoRes = await fetch(
                `/Collections/${folder}/Products/${prodFolder}/info.json`
              );
              const info = await infoRes.json();
              productInfos.push({ folder: prodFolder, info });
            } catch (err) {}
          }
        }
        // sort by id if present
        productInfos.sort((a, b) => (a.info?.id || 0) - (b.info?.id || 0));
        setProducts(productInfos);
      } catch (err) {
        console.error(err);
      }
    }
    loadProducts();
  }, [folder]);

  const toggleFavorite = (pf) => {
    setFavorites((prev) => {
      const copy = new Set(prev);
      if (copy.has(pf)) copy.delete(pf);
      else copy.add(pf);
      return copy;
    });
  };

  const openSizeModal = (product) => {
    setSelectedProduct(product);
    setSelectedSize(null);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
    setSelectedSize(null);
  };

  const chooseSize = (size) => {
    setSelectedSize(size);
  };

  if (!folder) return <div>No collection selected</div>;

  return (
    <section className="collections">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Collection: {folder}</h2>
        </div>
        <div className="products-grid">
          {products.map(({ folder: pf, info }) => {
            const cover1 = `/Collections/${folder}/Products/${pf}/cover.jpg`;
            const cover2 = `/Collections/${folder}/Products/${pf}/Cover.jpg`;
            return (
              <div
                key={pf}
                className="product-card"
                data-product-id={info?.id || pf}
                onClick={() => openSizeModal({ folder: pf, info })}
              >
                <div className="product-image">
                  <img
                    src={cover1}
                    alt={info?.name || pf}
                    onError={(e) => {
                      if (e.target.src.endsWith("cover.jpg"))
                        e.target.src = cover2;
                    }}
                  />
                  {info?.labels && <div className="product-label">NEW</div>}
                  <button
                    className={`favorite-btn ${
                      favorites.has(pf) ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(pf);
                    }}
                    aria-label="toggle favorite"
                  >
                    <i className="fa">★</i>
                  </button>
                </div>
                <div className="product-info">
                  <h4 className="product-name">{info?.name || pf}</h4>
                  <p className="product-fit">{info?.fit || ""}</p>
                  <p className="product-color">{info?.color || ""}</p>
                  <p className="product-price">
                    {info?.price ? `₹${info.price}` : ""}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal and overlay */}
        <div
          className={`modal-overlay ${modalOpen ? "active" : ""}`}
          onClick={closeModal}
        ></div>
        <div
          className={`size-modal ${modalOpen ? "active" : ""}`}
          role="dialog"
          aria-modal={modalOpen}
        >
          <div className="size-modal-header">
            <h3>{selectedProduct?.info?.name || ""}</h3>
            <button className="close-modal" onClick={closeModal}>
              ×
            </button>
          </div>
          <div className="size-options">
            {(selectedProduct?.info?.sizes || ["XS", "S", "M", "L", "XL"]).map(
              (s) => (
                <button
                  key={s}
                  className={`size-btn ${selectedSize === s ? "selected" : ""}`}
                  onClick={() => chooseSize(s)}
                >
                  {s}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionDetail;
