/* eslint-disable react/prop-types */
import { Add } from "iconsax-react";
const TableBody = ({ items, update, remove }) => {
  return (
    <>
      {items.length === 0 ? (
        <tr>
          <td className="text-[20px] text-center text-[red]">No products</td>
        </tr>
      ) : (
        items.map((item) => (
          <tr className="w-[100%]" key={item.id}>
            <td className="flex h-[100px] gap-6">
              <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d73486d2-549d-4ec8-bd52-99dc0b5e647e/court-vision-mid-next-nature-shoes-lK9nZm.png" />
              <div className="flex flex-col">
                <h1>{item.name}</h1>
                <p className="text-sm text-[lightgray]">{item.description}</p>
              </div>
            </td>
            <td className="w-[10%] text-center">S</td>
            <td className=" w-[20%] ">
              <div className="flex items-center border border-[#C4C4C4] h-[50px]">
                <button
                  className="w-[33.3%] h-[100%] bg-[#00164E] text-white"
                  onClick={() => update(item.id, item.quantity + 1)}>
                  +
                </button>
                <p className="w-[33.3%] text-center">{item.quantity}</p>
                <button
                  className="w-[33.3%] h-[100%] bg-[#F5F5F5]"
                  onClick={() => update(item.id, item.quantity - 1)}>
                  -
                </button>
              </div>
            </td>
            <td className="w-[10%]">
              <Add
                className="rotate-[45deg] m-auto"
                color="red"
                onClick={() => remove(item.id)}
              />
            </td>
            <td className="w-[25%] text-center">{item.price}</td>
          </tr>
        ))
      )}
    </>
  );
};

export default TableBody;
