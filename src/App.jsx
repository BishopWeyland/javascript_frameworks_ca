import "../src/scss/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<Product />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
