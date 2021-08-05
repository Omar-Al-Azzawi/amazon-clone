import React from "react";
import "./Products.css";

function Products({ id, title, price, rating, image }) {
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
      <button>Add to basket</button>
    </div>
  );
}

export default Products;
