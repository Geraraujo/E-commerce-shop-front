import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import ProductItem from "../components/Product/Product";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const response = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/featured-products`,
    });
    setProducts(response.data);
  };

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div className="d-block w-100">
            <img
              className="slide w-100 img-fluid slide"
              src="https://phantom-marca.unidadeditorial.es/074484889bfce26cb2fa8c71d10cfc3f/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/19/16426137519550.png"
              alt=""
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid slide"
            src="https://cdn.pixabay.com/photo/2017/07/24/21/35/beer-2536111_960_720.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slide"
            src="https://images.pexels.com/photos/1400255/pexels-photo-1400255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {/* <div className="card h-100"> */}
            {products &&
              products.map((product) => (
                <div key={product.id} className="col mb-5">
                  <ProductItem product={product} />;
                </div>
              ))}
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
