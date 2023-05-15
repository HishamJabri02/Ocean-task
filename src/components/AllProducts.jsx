/* eslint-disable react/no-unescaped-entities */
import Filter from "./Filter";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../app/Slices/ProductSlice";
import { motion } from "framer-motion";
const AllProducts = () => {
  const products = useSelector((state) => state.app.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Filter />
      <h1 className="my-6 text-[20px] px-[5%]">Men's sports shoes</h1>
      <div className="px-[5%] grid grid-cols-5 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            imgs={product.images}
            rate={product.rate}
            price={product.price}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AllProducts;
