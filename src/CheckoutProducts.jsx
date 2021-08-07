import React from "react";
import "./CheckoutProducts.css";

function CheckoutProducts({ id, title, image, price, rating }) {
  return (
    <div className="checkoutProducts">
      <img src={image} alt="" />
      <div className="checkoutProducts__info">
        <p className="checkoutProducts__title">{title}</p>
        <p className="checkoutProducts__price">
          <small>€</small>
          <strong>{price}</strong>
          <div className="checkoutProducts__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐️</p>
              ))}
          </div>
          <button>Remove from basket</button>
        </p>
      </div>
    </div>
  );
}

export default CheckoutProducts;
