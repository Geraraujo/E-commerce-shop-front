import React from "react";
import "./Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function NavbarMenu() {
  const userStore = useSelector((state) => state.user);
  const cartStore = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({
      type: "LOGOUT",
      payload: "",
    });

    navigate("/");
  };
  return (
    <>
      <Navbar id="navbar" className="navbar navbar-expand-lg" expand="lg">
        <Container>
          <Navbar.Brand className="navbar-brand fw-bold" id="navbar-brand" href="/">
            CRAFTERS+
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-start">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>

              <NavDropdown className="dropMenu" title="Categories" id="basic-nav-dropdown">
                <Link
                  className="nav-link text-start p-0 d-flex justify-content-around"
                  to="/category/belgian"
                >
                  <span className="navbar-dd-span">Belgian</span> <SportsBarIcon fontSize="small" />
                </Link>
                <NavDropdown.Divider />
                <Link
                  className="nav-link text-start p-0 d-flex justify-content-around"
                  to="category/hybrid"
                >
                  <span className="navbar-dd-span">Hybrid</span> <SportsBarIcon fontSize="small" />
                </Link>
                <NavDropdown.Divider />
                <Link
                  className="nav-link text-start p-0 d-flex justify-content-around"
                  to="category/dark"
                >
                  <span className="navbar-dd-span">Dark</span>
                  <span>
                    <SportsBarIcon fontSize="small" />
                  </span>
                </Link>
                <NavDropdown.Divider />
                <Link
                  className="nav-link text-start p-0 d-flex justify-content-around"
                  to="category/wheat-beers"
                >
                  <span className="navbar-dd-span">Wheat</span>
                  <span>
                    <SportsBarIcon fontSize="small" />
                  </span>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Link to="/cart">
            <button id="navbar-cart" className="btn btn-navbar" type="submit">
              <ShoppingCartIcon className="cart-icon"></ShoppingCartIcon>
              <span className="badge ms-1 navbar-badge">{cartStore && cartStore.length}</span>
            </button>
          </Link>

          {!userStore && (
            <Link to={"/login"}>
              <button id="navbar-login" className="btn btn-navbar" type="submit">
                <LoginIcon className="login-icon"></LoginIcon>
                <span className="badge ms-1 navbar-badge">Login</span>
              </button>
            </Link>
          )}

          {userStore && (
            <button id="navbar-logout" className="btn btn-navbar ms-3" onClick={handleClick}>
              <LogoutIcon className="logout-icon"></LogoutIcon>
            </button>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMenu;
