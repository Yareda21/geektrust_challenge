import React from "react";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

const Nav = () => {
  return (
    <section className="flex justify-between px-20 py-6 bg-slate-600">
      <p className="flex">TeeRex Store</p>
      <div className="flex gap-4 justify-center items-center">
        <p className=" hover:underline cursor-pointer">Products</p>
        <MdOutlineLocalGroceryStore className="flex text-2xl" />
      </div>
    </section>
  );
};

export default Nav;
