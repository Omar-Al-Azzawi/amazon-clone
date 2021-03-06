import React from "react";
import "./CheckoutProducts.css";
import { useStateValue } from "./StateProvider";

function CheckoutProducts({ id, title, image, price, rating }) {
  const [{ basket }, despatch] = useStateValue();

  const removeFromBasket = () => {
    despatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProducts">
      <img className="checkoutProducts__image" src={image} alt="" />
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
          <button onClick={removeFromBasket}>Remove from basket</button>
        </p>
      </div>
    </div>
  );
}

export default CheckoutProducts;
