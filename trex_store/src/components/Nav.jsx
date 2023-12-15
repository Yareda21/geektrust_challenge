import { MdLocalGroceryStore } from "react-icons/md";

const Nav = () => {
  return (
    <section >
      <h2 className="">TeeRex Store</h2>
      <div className="flex items-center">
        <button>Products</button>
        <MdLocalGroceryStore />
      </div>
    </section>
  );
};

export default Nav;
