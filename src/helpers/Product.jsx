/* eslint-disable react/prop-types */
import { Heart } from "iconsax-react";
import { Link } from "react-router-dom";
const Product = ({ detail, counter, handleClick, count }) => {
  return (
    <div className="flex px-[5%] h-[70vh] mt-10">
      <div className="basis-[6%] flex flex-col gap-2 mr-[3%]">
        {detail.images.map((img, index) => (
          <img
            src={img}
            key={index}
            className="rounded-md border border-[#1492E6]"
          />
        ))}
      </div>
      <img
        src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d73486d2-549d-4ec8-bd52-99dc0b5e647e/court-vision-mid-next-nature-shoes-lK9nZm.png"
        className="basis-[35%] rounded-lg mr-[3%]"
      />
      <div className="flex flex-col basis-[53%] gap-4">
        <h1>{detail.name}</h1>
        <p className="text-sm text-[lightgray]">{detail.description}</p>
        <h2 className="text-[#0062FF] flex gap-4 items-end">
          {detail.price}
          <span className="text-[gray] line-through text-[14px]">
            160,000 SYP
          </span>
        </h2>
        <h3>Size</h3>
        <div className="grid grid-cols-5 gap-6 w-[55%]">
          {detail.sizes.map((size, index) => (
            <span
              key={index}
              className="border border-[#C4C4C4] text-center p-1 rounded-md text-sm">
              {size}
            </span>
          ))}
        </div>
        <h4>Quantity</h4>
        <div className="flex w-[25%] basis-[10%] items-center border border-[#C4C4C4] mb-10">
          <button
            className="w-[33.3%] h-[100%] bg-[#00164E] text-white"
            onClick={() => counter("increment")}>
            +
          </button>
          <p className="w-[33.3%] text-center">{count > 1 ? count : 1}</p>
          <button
            className="w-[33.3%] h-[100%] bg-[#F5F5F5]"
            onClick={() => counter("decrement")}>
            -
          </button>
        </div>
        <div className="flex w-[80%] gap-[10%] basis-[10%]">
          <Link
            to="/shopping-cart"
            className="w-[50%] text-white bg-[#3167EB] rounded-md">
            <button
              className="text-center w-[100%] leading-[56px]"
              onClick={() => handleClick(count)}>
              Add To Bag
            </button>
          </Link>
          <button className="w-[50%] flex justify-evenly text-[#3167EB] border border-[#3167EB] items-center rounded-md">
            Add To wishlist <Heart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
