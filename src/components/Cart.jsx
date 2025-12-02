import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    clearCart,
  } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Cart Icon */}
      <button className="cart-icon" onClick={toggleCart}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8" />
        </svg>
        {getTotalItems() > 0 && (
          <span className="cart-count">{getTotalItems()}</span>
        )}
      </button>

      {/* Cart Dropdown */}
      {isOpen && (
        <div className="cart-dropdown">
          <div className="cart-header">
            <h3>Shopping Cart ({getTotalItems()} items)</h3>
            <button className="close-cart" onClick={() => setIsOpen(false)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="cart-items">
            {cart.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty</p>
                <a
                  href="/#collections"
                  className="btn btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Start Shopping
                </a>
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.coverImage} alt={item.title} />
                    </div>
                    <div className="cart-item-details">
                      <h4>{item.title}</h4>
                      <p>{item.PriceRange}</p>
                      <div className="quantity-controls">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      className="remove-item"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>

          {cart.length > 0 && (
            <div className="cart-footer">
              <div className="cart-total">
                <strong>Total: ₹{getTotalPrice().toFixed(2)}</strong>
              </div>
              <div className="cart-actions">
                <button className="btn btn-outline" onClick={clearCart}>
                  Clear Cart
                </button>
                <button className="btn btn-primary">Checkout</button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Cart Overlay */}
      {isOpen && (
        <div className="cart-overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
};

export default Cart;
