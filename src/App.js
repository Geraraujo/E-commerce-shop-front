import "./App.css";
import Cart from "./pages/Cart/Cart";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Product from "./pages/Product/Product";
import Thanks from "./pages/Thanks/Thanks";
import Register from "./pages/Register/Register";

function App() {
  const location = useLocation();
  return (
    <div className="App d-flex flex-column h-100">
      {location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/reset-password" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/reset-password" && <Footer />}
    </div>
  );
}

export default App;
