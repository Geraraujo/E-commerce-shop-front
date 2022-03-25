import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ProductItem from "../../components/Product/Product";
import "./Product.css";

function Product() {
  const [product, setProduct] = useState();
  const [relatedProducts, setRelatedProducts] = useState();
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/products/${params.id}`,
        });
        setProduct(response.data);
      } catch (err) {}
    };

    getProduct();
  }, [params.id]);

  useEffect(() => {
    try {
      const getRelatedProducts = async () => {
        try {
          const response = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}/products/${product.categoryId}/category`,
          });
          setRelatedProducts(response.data.filter((product) => product.id !== Number(params.id)));
        } catch (err) {}
      };

      if (product) getRelatedProducts();
    } catch (err) {}
  }, [product]);

  const handleOnchange = (quantity) => {
    setQuantity(quantity);
  };

  const handleClick = () => {
    navigate("/cart");
  };

  return (
    <main className="flex-shrink-0 text-start">
      {product && (
        <section className="py-3">
          <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6">
                <img
                  id="product-image"
                  className="card-img-top mb-5 mb-md-0 shadow"
                  src={`${process.env.REACT_APP_API_URL}/${product.images[0].name}`}
                  alt={product.images[0].title}
                />
              </div>
              <div className="col-md-6">
                <p className="display-5 fw-bold">{product.name}</p>
                <div className="fs-5 mt-4 mb-4">
                  <span>U$S{product.price}</span>
                </div>
                <p className="lead text-start">{product.description}</p>
                <div className="d-flex justify-content-center mt-5">
                  <input
                    className="form-control me-3"
                    id="product-input-quantity"
                    type="number"
                    value={quantity}
                    onChange={(ev) => handleOnchange(ev.target.value)}
                    style={{ maxWidth: "3rem" }}
                  />
                  <button
                    className="btn btn-product-page flex-shrink-0"
                    onClick={() => handleClick()}
                  >
                    <i className="bi-cart-fill me-1"></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {relatedProducts && relatedProducts.length > 0 && (
        <>
          <hr />
          <section className="py-2">
            <div className="px-4 px-lg-5">
              <p className="display-6 fw-bold mb-5 py-3 text-center">Related products</p>
              <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-1 row-cols-xl-5 justify-content-center">
                {relatedProducts &&
                  relatedProducts.map((product) => (
                    <div key={product.id} className="col-md-6 mb-6">
                      <ProductItem product={product} />{" "}
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

export default Product;
