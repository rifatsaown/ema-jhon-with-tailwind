import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="products-container">
        {
          products.map((product) =>  (<Product {...product}></Product>))
        }
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
      </div>
    </div>
  );
};

export default Shop;
