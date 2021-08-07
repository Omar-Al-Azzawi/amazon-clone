import React from "react";
import "./Products.css";
import { useStateValue } from "./StateProvider";

function Products({ id, title, price, rating, image }) {
  const [{ basket }, despatch] = useStateValue();

  const addToBasket = () => {
    despatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="products">
      <div className="products__info">
        <p>{title}</p>
        <p className="products__price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className="products__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={image} alt="img" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Products;
