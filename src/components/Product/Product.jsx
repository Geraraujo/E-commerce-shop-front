import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Product.css";

function Product({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart");
  };
  return (
    <div className="card custom-product-card h-100 shadow">
      <Link
        key={product.id}
        to={`/product/${product.id}`}
        className="product-link"
      >
        <img
          id="related-product-image"
          className="card-img-top"
          src={`${process.env.REACT_APP_API_URL}/${product.images[0].name}`}
          alt={product.images[0].title}
        />
      </Link>
      <div className="card-body p-4 product-text-color">
        <div className="text-center">
          <h5 className="fw-bolder">{product.name}</h5>
          {`$ ${product.price}`}
        </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        {/* TODO: for next sprint (01/04) */}
        {
          <div className="text-center product-text-color">
            <button
              className="btn btn-product-add-cart"
              onClick={() => handleClick()}
            >
              Add to cart
            </button>
          </div>
        }
      </div>
    </div>
  );
}

export default Product;
