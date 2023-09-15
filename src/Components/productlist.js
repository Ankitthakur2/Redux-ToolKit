import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/slice";
import "./productlist.css";
export default function ProductList() {
  const products = useSelector((state) => state.add);
  const dispatch = useDispatch();
  return (
    <div
      className="list-sec"
      style={{ height: products.length === 0 ? "66vh" : "auto" }}
    >
      <div className="productcard1">
        {products ? (
          products.map((product) => (
            <div key={product.id} className="product1">
              <div className="img-section">
                <img
                  src={product.image}
                  className="pro-img1"
                  alt="product-img"
                />
                <button
                  onClick={() => {
                    dispatch(remove(product));
                  }}
                  className="btn1"
                >
                  Remove
                </button>
              </div>
              <div className="detail">
                <div className="title1">{product.title}</div>
                <div className="category">Category: {product.category}</div>
                <div className="price">Price: {product.price} $ </div>
                <div className="rating">
                  Rating: {product.rating.rate}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    height="20"
                    width="20"
                  >
                    <path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z" />
                  </svg>
                </div>
                <div className="description">
                  Description: {product.description}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}
