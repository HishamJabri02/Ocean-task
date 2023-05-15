import AllProducts from "./AllProducts";
import ProductDetail from "./ProductDetail";
import ShoppingCart from "./ShoppingCart";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AllProducts />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
