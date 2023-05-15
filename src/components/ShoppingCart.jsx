import { useDispatch, useSelector } from "react-redux";
import { removeProducts, updateProducts } from "../app/Slices/CartSlice";
import { motion } from "framer-motion";
import TableHead from "../helpers/TableHead";
import TableBody from "../helpers/TableBody";
const ShoppingCart = () => {
  const dispatch = useDispatch();
  function update(id, quantity) {
    const updateItem = [id, quantity];
    dispatch(updateProducts(updateItem));
  }
  function removeItem(id) {
    dispatch(removeProducts(id));
  }
  const items = useSelector((state) => state.carts.items);
  return (
    <motion.div
      className="px-[5%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <h1 className="text-center p-6 text-[24px] text-[#00164E]">
        My Shopping cart
      </h1>
      <table className="w-[100%]">
        <thead className="border h-[60px]">
          <TableHead />
        </thead>
        <tbody className="relative border">
          <TableBody items={items} update={update} remove={removeItem} />
        </tbody>
      </table>
    </motion.div>
  );
};

export default ShoppingCart;
