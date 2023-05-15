/* eslint-disable react/prop-types */
import { Star1 } from "iconsax-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectProduct } from "../app/Slices/ProductDetailSlice";
const Card = ({ name, description, rate, price, id }) => {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(selectProduct(id));
  }
  return (
    <div className="flex flex-col gap-1" id={id} onClick={() => handleClick()}>
      <Link to={`/product-detail/${id}`}>
        <img
          src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d73486d2-549d-4ec8-bd52-99dc0b5e647e/court-vision-mid-next-nature-shoes-lK9nZm.png"
          alt=""
          className="rounded-xl cursor-pointer hover:scale-105 transition "
        />
      </Link>
      <h3 className="text-md">{name}</h3>
      <p className="text-sm text-[lightgray]">{description}</p>
      <span className="text-sm flex items-center gap-1">
        {rate} <Star1 size="15" color="#F9A414" variant="Bold" />
      </span>

      <h4 className="text-[#0062FF] flex gap-4 items-end">
        {price}
        <span className="text-[gray] line-through text-[14px]">
          160,000 SYP
        </span>
      </h4>
    </div>
  );
};
export default Card;
