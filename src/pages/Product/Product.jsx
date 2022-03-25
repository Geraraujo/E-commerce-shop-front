import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductItem from "../../components/Product/Product";
import "./Product.css";

function Product() {
  const [product, setProduct] = useState();
  const [relatedProducts, setRelatedProducts] = useState();
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

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

    //TODO: change for new url which search products by category
    const getRelatedProducts = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/featured-products`,
        });
        setRelatedProducts(response.data);
      } catch (err) {}
    };
    //ENDTODO
    getProduct();
    getRelatedProducts();
  }, []);

  const handleOnchange = (quantity) => {
    setQuantity(quantity);
  };

  return (
    <>
      {product && (
        <section className="py-5">
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
                <h1 className="display-5 fw-bolder">{product.name}</h1>
                <div className="fs-5 mt-4 mb-4">
                  <span>${product.price}</span>
                </div>
                <p className="lead text-center">{product.description}</p>
                <div className="d-flex justify-content-center mt-5">
                  <input
                    className="form-control me-3"
                    id="inputQuantity"
                    type="num"
                    value={quantity}
                    onChange={(ev) => handleOnchange(ev.target.value)}
                    style={{ maxWidth: "3rem" }}
                  />
                  <button
                    className="btn btn-outline-dark flex-shrink-0"
                    type="button"
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

      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5">
          <h2 className="fw-bolder mb-5">Related products</h2>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {relatedProducts &&
              relatedProducts.map((product) => (
                <>
                  <div class="col-3 mb-5">
                    <ProductItem key={product.id} product={product} />{" "}
                  </div>
                </>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
