import { ArrowDown2, Firstline } from "iconsax-react";
import { FilterItems } from "../helpers/FilterItems";

const Filter = () => {
  return (
    <div className="px-[5%] mt-8 flex">
      <ul className="flex items-center basis-[60%] justify-between">
        {FilterItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer leading-[30px] text-[12px] bg-[#F5F5F5] rounded-lg font-[400] px-[2%] py-2 flex items-center gap-1">
            {item.name}
            <ArrowDown2 size="15" />
          </li>
        ))}
        <li className="cursor-pointer leading-[30px] p-2 text-[12px] bg-[#F5F5F5] font-[400] flex items-center gap-1">
          All filter
          <Firstline size="15" />
        </li>
      </ul>
      <div className="basis-[50%] flex justify-end">
        <button className="border p-2 text-[14px] flex items-center gap-1">
          Sort By
          <ArrowDown2 size="15" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
