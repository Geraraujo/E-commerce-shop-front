import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Product from "../components/Product/Product";

function Category() {
  const [category, setCategory] = useState({});
  const { slug } = useParams();
  useEffect(() => {
    getProductsByCategory();
  }, []);
  const getProductsByCategory = async () => {
    const response = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/category/${slug}`,
    });
    console.log(response.data);
    setCategory(response.data);
  };

  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">{category.name}</h1>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {category.products &&
              category.products.map(function (product) {
                return (
                  <div key={product.id} className="col mb-5">
                    <Product product={product} />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;
