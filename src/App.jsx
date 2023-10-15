import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import "./index.css";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
