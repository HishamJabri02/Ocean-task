import { NavbarItems } from "../helpers/NavbarItems";
import {
  SearchNormal1,
  Heart,
  User,
  ShoppingCart,
  ArrowDown2,
} from "iconsax-react";
import Logo from "../assets/images/Logo.svg";
import { useSelector } from "react-redux";
const Navbar = () => {
  const totalQuantity = useSelector((state) => state.carts.totalQuantity);
  return (
    <nav className="bg-[#EAEDF4] h-20 w-[100%] shadow-md flex px-[2%] items-center">
      <img src={Logo} className="w-[122px] basis-[12%] h-9" />
      <ul className="basis-[35%] flex items-center justify-evenly">
        {NavbarItems.map((item) => (
          <li key={item.id} className="cursor-pointer flex items-center gap-1">
            {item.name}
            {item.name === "All Categories" ? <ArrowDown2 size="15" /> : ""}
          </li>
        ))}
      </ul>
      <div className=" relative basis-[35%] flex items-center rounded-3xl bg-[#fff]">
        <input
          type="search"
          className="h-10 rounded-3xl px-6 border-0 outline-none :place text-sm w-[95%]"
          placeholder="Search For Products, Brands & Categories"></input>
        <SearchNormal1 className="rotate-[90deg] absolute right-4 cursor-pointer" />
      </div>
      <div className="flex justify-evenly basis-[18%]">
        <div className="relative">
          <Heart className="cursor-pointer" />
          <span className="absolute top-0 right-[-4px] text-white w-4 h-4 rounded-full bg-[red] text-[10px] text-center leading-4">
            0
          </span>
        </div>
        <User className="cursor-pointer" />
        <div className="relative">
          <ShoppingCart className="cursor-pointer" />
          <span className="absolute top-0 right-[-6px] text-white w-4 h-4 rounded-full bg-[red] text-[10px] text-center leading-4">
            {totalQuantity}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
