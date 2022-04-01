import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Product.css";
import { useEffect } from "react";

function Product({ product }) {
  const dispatch = useDispatch();
  const cartStore = useSelector((state) => state.cart);

  const handleClick = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: product,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {product.images.length > 0 ? (
        <Link key={product.id} to={`/product/${product.id}`} className="product-link">
          <img
            id="related-product-image"
            className="card-img-top mb-2"
            src={`${process.env.REACT_APP_API_URL}/${product.images[0].name}`}
            alt={product.images[0].title}
          />
        </Link>
      ) : (
        <Link key={product.id} to={`/product/${product.id}`} className="product-link">
          <img
            id="related-product-image"
            className="card-img-top mb-2"
            src={`${process.env.REACT_APP_API_URL}/no-photo-available.png`}
            alt={product.name}
          />
        </Link>
      )}

      <div className="mt-2 product-text-color">
        <div className="text-start">
          <h5 className="fw-bolder">{product.name}</h5>
          {product.categoryId === 1 && (
            <div class="d-flex justify-content-start small text-warning mb-2">
              <span style={{ color: "#795548" }} className="me-2">
                Reviews:
              </span>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star"></div>
            </div>
          )}
          {product.categoryId === 2 && (
            <div class="d-flex justify-content-start small text-warning mb-2">
              <span style={{ color: "#795548" }} className="me-2">
                Reviews:
              </span>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-half"></div>
              <div class="bi-star"></div>
            </div>
          )}
          {product.categoryId === 3 && (
            <div class="d-flex justify-content-start small text-warning mb-2">
              <span style={{ color: "#795548" }} className="me-2">
                Reviews:
              </span>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
            </div>
          )}
          {product.categoryId === 4 && (
            <div class="d-flex justify-content-start small text-warning mb-2">
              <span style={{ color: "#795548" }} className="me-2">
                Reviews:
              </span>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-half"></div>
            </div>
          )}

          <span>U$S {product.price}</span>
          <span class="text-decoration-line-through ms-4">
            U$S {(product.price * 1.25).toFixed(2)}
          </span>
        </div>
      </div>
      <div className="pt-0 border-top-0 bg-transparent">
        <div className="mt-2 mb-3 text-start product-text-color">
          <Link to={"/cart"}>
            <button className="btn btn-product-add-cart" onClick={() => handleClick()}>
              Add to cart
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Product;
