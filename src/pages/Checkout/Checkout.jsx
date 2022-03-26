import React from "react";
import "./Checkout.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { brown } from "@mui/material/colors";
import { Link } from "react-router-dom";

function Checkout() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  return (
    <>
      <main>
        <div className="container py-5 text-start">
          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="">Your cart</span>

                <span className="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul id="cart-list" className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Product name</h6>
                    <small className="">Quantity</small>
                  </div>
                  <span className="">U$S 12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Second product</h6>
                    <small className="">Quantity</small>
                  </div>
                  <span className="">U$S 8</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Third item</h6>
                    <small className="">Quantity</small>
                  </div>
                  <span className="">U$S 5</span>
                </li>

                <li className="list-group-item d-flex justify-content-between">
                  <span>Total</span>
                  <strong>U$S 20</strong>
                </li>
              </ul>
            </div>
            <div className="col-md-8 order-md-1">
              <div className="d-flex justify-content-around mb-4">
                <img src="../../assets/visa.png" className="payment-logo" alt="" />
                <img src="../../assets/master.png" className="payment-logo" alt="" />
                <img src="../../assets/paypal.png" className="payment-logo" alt="" />
              </div>

              <h4 className="mb-3">Billing address</h4>
              <hr className="mt-4 mb-4" />
              <form className="needs-validation" novalidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      value=""
                      required
                    />
                    <div className="invalid-feedback">Valid first name is required.</div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder=""
                      value=""
                      required
                    />
                    <div className="invalid-feedback">Valid last name is required.</div>
                  </div>
                </div>

                <div className="mb-3">
                  <label for="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="" />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="mb-3">
                  <label for="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Please enter your shipping address.</div>
                </div>

                <hr className="mt-4 mb-4" />

                <h4>Payment</h4>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="credit"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="credit"
                      control={
                        <Radio
                          {...controlProps("credit")}
                          sx={{
                            color: brown[800],
                            "&.Mui-checked": {
                              color: brown[600],
                            },
                          }}
                        />
                      }
                      label="Credit"
                    />
                    <FormControlLabel
                      value="debit"
                      control={
                        <Radio
                          {...controlProps("debit")}
                          sx={{
                            color: brown[800],
                            "&.Mui-checked": {
                              color: brown[600],
                            },
                          }}
                        />
                      }
                      label="Debit"
                    />
                    <FormControlLabel
                      value="paypal"
                      control={
                        <Radio
                          {...controlProps("paypal")}
                          sx={{
                            color: brown[800],
                            "&.Mui-checked": {
                              color: brown[600],
                            },
                          }}
                        />
                      }
                      label="PayPal"
                    />
                  </RadioGroup>
                </FormControl>
                <hr className="mt-4 mb-4" />
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="cc-name">Name on card</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder=""
                      required
                    />

                    <div className="invalid-feedback">Name on card is required</div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="cc-number">Credit card number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">Credit card number is required</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <label for="cc-expiration">Expiration</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">Expiration date required</div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="cc-cvv">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">Security code required</div>
                  </div>
                </div>
                <Link to={"/thanks"}>
                  <button className="btn btn-confirm-purchase mt-3" type="submit">
                    Confirm purchase
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Checkout;
