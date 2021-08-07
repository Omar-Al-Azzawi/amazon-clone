import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProducts from "./CheckoutProducts";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2021/BGC/specialty/bgc_update_EN_1024x90_20210225.jpg"
        alt=""
      />
      {basket?.lenght === 0 ? (
        <div>
          <h2>Your basket is empty</h2>
          <p>
            You have no item in your basket, To buy one or more items, click
            "Add to basket" next to the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
          {basket.map((item) => (
            <CheckoutProducts
              item={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
