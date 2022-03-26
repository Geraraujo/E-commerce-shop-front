import React from "react";
import "./Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SportsBarIcon from "@mui/icons-material/SportsBar";

function NavbarMenu() {
  return (
    <>
      <Navbar id="navbar" className="navbar navbar-expand-lg navbar-light" expand="lg">
        <Container>
          <Navbar.Brand className="navbar-brand fw-bold" id="navbar-brand" href="/">
            CRAFTERS
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
                  to="/category/-lager"
                >
                  <span className="navbar-dd-span">Lager</span> <SportsBarIcon fontSize="small" />
                </Link>
                <NavDropdown.Divider />
                <Link
                  className="nav-link text-start p-0 d-flex justify-content-around"
                  to="category/-red"
                >
                  <span className="navbar-dd-span">Red</span> <SportsBarIcon fontSize="small" />
                </Link>
                <NavDropdown.Divider />
                <Link
                  className="nav-link text-start p-0 d-flex justify-content-around"
                  to="category/-dark"
                >
                  <span className="navbar-dd-span">Dark</span>
                  <span>
                    <SportsBarIcon fontSize="small" />
                  </span>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Link to="/cart">
            <button id="navbar-cart" className="btn btn-navbar-cart" type="submit">
              <ShoppingCartIcon className="cart-icon"></ShoppingCartIcon>
              <span className="badge ms-1 navbar-badge">0</span>
            </button>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMenu;
