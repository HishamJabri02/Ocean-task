import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../app/Slices/CartSlice";
import { useState } from "react";
import Product from "../helpers/Product";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
const ProductDetail = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const counterChange = (operation) => {
    operation === "increment"
      ? setCount((prev) => prev + 1)
      : setCount((prev) => prev - 1);
  };
  const details = useSelector((state) =>
    state.app.products.filter((target) => id == target.id)
  );
  const dispatch = useDispatch();
  const handleClick = (quantity) => {
    details[0] = { ...details[0], quantity };
    dispatch(addProduct(details[0]));
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Filter />
      <Product
        detail={details[0]}
        counter={counterChange}
        count={count}
        handleClick={handleClick}
      />
    </motion.section>
  );
};

export default ProductDetail;
