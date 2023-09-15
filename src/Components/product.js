import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/slice";
import Loader from "./loader";
export default function Product() {
  const [products, setproduct] = useState([]);
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  const getdata = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const productsData = response.data;
      setproduct(productsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
      getdata();
    }, 1000);
  }, []);

  return (
    <div style={{ height: loading === true ? "66vh" : "auto" }}>
      {loading ? (
        <Loader />
      ) : (
        <div className="productcard">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} className="pro-img" alt="product-img" />
              <div className="title"> {product.title} </div>
              <div className="category">Category: {product.category}</div>

              <div className="price">Price: {product.price} $</div>
              <div className="rating">
                Rating: {product.rating.rate}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  height="20"
                  width="20"
                >
                  <path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z" />
                </svg>
              </div>
              <button className="btn" onClick={() => dispatch(add(product))}>
                Add to cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
