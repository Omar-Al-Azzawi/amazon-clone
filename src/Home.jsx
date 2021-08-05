import React from "react";
import "./Home.css";
import Products from "./Products";

function Home() {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="header-img"
      />
      <div className="home__row">
        <Products
          id="123456"
          title="The lean Startup: How constant Innovation Creates Redically Successful Business Paperback"
          price={11.9}
          rating={5}
          image="https://s2.adlibris.com/images/28680553/lean-startup---kokeilukulttuurin-kasikirja.jpg"
        />
        <Products
          id="123456"
          title="The lean Startup: How constant Innovation Creates Redically Successful Business Paperback"
          price={11.9}
          rating={5}
          image="https://s2.adlibris.com/images/28680553/lean-startup---kokeilukulttuurin-kasikirja.jpg"
        />
      </div>
      <div className="home__row">
        <Products
          id="123456"
          title="The lean Startup: How constant Innovation Creates Redically Successful Business Paperback"
          price={11.9}
          rating={5}
          image="https://s2.adlibris.com/images/28680553/lean-startup---kokeilukulttuurin-kasikirja.jpg"
        />
        <Products
          id="123456"
          title="The lean Startup: How constant Innovation Creates Redically Successful Business Paperback"
          price={11.9}
          rating={5}
          image="https://s2.adlibris.com/images/28680553/lean-startup---kokeilukulttuurin-kasikirja.jpg"
        />
        <Products
          id="123456"
          title="The lean Startup: How constant Innovation Creates Redically Successful Business Paperback"
          price={11.9}
          rating={5}
          image="https://s2.adlibris.com/images/28680553/lean-startup---kokeilukulttuurin-kasikirja.jpg"
        />
      </div>
      <div className="home__row">
        <Products
          id="123456"
          title="The lean Startup: How constant Innovation Creates Redically Successful Business Paperback"
          price={11.9}
          rating={5}
          image="https://s2.adlibris.com/images/28680553/lean-startup---kokeilukulttuurin-kasikirja.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
