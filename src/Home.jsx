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
          title="Orzly Carry Case Compatible with Nintendo Switch - Black Protective Hard Portable Travel Carry Case Shell Pouch for Nintendo Switch Console & Accessories"
          price={13.9}
          rating={4}
          image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/B/154305_1599002319.jpg"
        />
        <Products
          id="3456765"
          title="The lean Startup: How constant Innovation Creates Redically Successful Business Paperback"
          price={11.9}
          rating={5}
          image="https://s2.adlibris.com/images/28680553/lean-startup---kokeilukulttuurin-kasikirja.jpg"
        />
      </div>
      <div className="home__row">
        <Products
          id="234345"
          title="Amazon Basics 14-Piece Kitchen Knife Set with High-Carbon Stainless-Steel Blades and Pine Wood Block"
          price={11.9}
          rating={4}
          image="https://www.buckknives.com/images/products/hero/0938BKS-B.jpg"
        />
        <Products
          id="654321"
          title="Instant Pot Duo 7-in-1 Electric Pressure Cooker, Slow Cooker, Rice Cooker, Steamer, Saute, Yogurt Maker, Sterilizer, and Warmer, 6 Quart, 14 One-Touch Programs"
          price={99.9}
          rating={5}
          image="https://www.gigantti.fi/image/dv_web_D180001002707770/HD965090/philips-avance-collection-airfryer-xxl-kiertoilmakypsennin-hd965090.jpg?$fullsize$"
        />
        <Products
          id="321654"
          title="USB C to Dual HDMI Adapter, USB C Docking Station Dual HDMI Monitors for Windows,USB C Adapter with Dual HDMI,3 USB Port,PD Port Compatible for Dell XPS 13/15, Lenovo Yoga,etc"
          price={31.9}
          rating={5}
          image="https://m.media-amazon.com/images/I/711tL0aP2bL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Products
          id="321456"
          title="Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black"
          price={279.9}
          rating={5}
          image="https://m.media-amazon.com/images/I/91CAvrhwPbL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
