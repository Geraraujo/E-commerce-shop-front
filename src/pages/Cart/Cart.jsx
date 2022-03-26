import "./Cart.css";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <section className="h-custom text-start py-5">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2">
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h4 className="fw-bold mb-0">Shopping cart</h4>
                        <h6 className="mb-0 ">3 items</h6>
                      </div>
                      <hr className="my-4" />

                      <div className="row mb-4 d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={`${process.env.REACT_APP_API_URL}/red-1.jpg`}
                            className="img-fluid rounded-1 cart-image"
                            alt="Cotton T-shirt"
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <h6 className="">Shirt</h6>
                          <h6 className=" mb-0">Cotton T-shirt</h6>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button className="btn custom-btn-quantity px-2">
                            <i className="fas fa-minus"></i>
                          </button>

                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                            className="form-control form-control-sm cart-quantity"
                          />

                          <button className="btn custom-btn-quantity px-2">
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 className="mb-0">U$S 44.00</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="">
                            <i className="fas fa-times"></i>
                          </a>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="row mb-4 d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={`${process.env.REACT_APP_API_URL}/dark-1.jpg`}
                            className="img-fluid rounded-1 cart-image"
                            alt="Cotton T-shirt"
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <h6 className="">Shirt</h6>
                          <h6 className="mb-0">Cotton T-shirt</h6>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button className="btn custom-btn-quantity px-2">
                            <i className="fas fa-minus"></i>
                          </button>

                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                            className="form-control form-control-sm cart-quantity"
                          />

                          <button className="btn custom-btn-quantity px-2">
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 className="mb-0">U$S 44.00</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="">
                            <i className="fas fa-times"></i>
                          </a>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="row mb-4 d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={`${process.env.REACT_APP_API_URL}/lager-1.jpg`}
                            className="img-fluid rounded-1 cart-image"
                            alt="Cotton T-shirt"
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <h6 className="">Shirt</h6>
                          <h6 className="mb-0">Cotton T-shirt</h6>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button className="btn custom-btn-quantity px-2">
                            <i className="fas fa-minus"></i>
                          </button>

                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                            className="form-control form-control-sm cart-quantity"
                          />

                          <button className="btn custom-btn-quantity px-2">
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 className="mb-0">U$S 44.00</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="">
                            <i className="fas fa-times"></i>
                          </a>
                        </div>
                      </div>

                      <hr className="my-4" />

                      {/* <div className="pt-5">
                        <h6 className="mb-0">
                          <a href="#!" className="back">
                            <i className="fas fa-long-arrow-alt-left me-2"></i>
                            Back to shop
                          </a>
                        </h6>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="p-5">
                      <h4 className="fw-bold mb-5 mt-2 pt-1">Summary</h4>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h6>Items 3</h6>
                        <h6>U$S 132.00</h6>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h6>Total price</h6>
                        <h6>U$S 137.00</h6>
                      </div>
                      <Link to={"/checkout"}>
                        <button
                          type="button"
                          className="btn btn-cart-page btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Checkout
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Cart;
