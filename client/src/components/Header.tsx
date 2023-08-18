import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { images } from "../constants";

// interface NavItemProps {
//   item: string;
//   name: string;
//   type: any;
//   items: string[];
// }

const NavItemsInfo = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  { name: "Pages", type: "dropdown", items: ["About Us", "Contact Us"] },
  { name: "Pricing", type: "link" },
  { name: "FAQ", type: "link" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavItem = ({ item }: any) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((currState) => !currState);
  };

  return (
    <li className=" relative group ">
      {item.type === "link" ? (
        <>
          <a href="/" className="px-4 py-2">
            {item.name}
          </a>
          <span className=" cursor-pointer  text-blue-500  absolute right-0 top-0 transition-all duration-500 font-bold group-hover:right-[90%]  opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <div className="flex  flex-col items-center">
          <button className="px-4 py-2 flex gap-x-1 items-center" onClick={toggleDropdownHandler}>
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </button>
          <div
            className={` ${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className=" bg-dark-soft  lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page: string) => (
                <a
                  href="/"
                  className=" hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft "
                >
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

function Header() {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((currState) => !currState);
  };

  return (
    <section className=" sticky top-0 right-0 left-0 z-50 ">
      <header className="container mx-auto px-5 flex py-4 justify-between items-center">
        <div>
          <img src={images.logo} alt="app Logo" />
        </div>
        <div className=" lg:hidden z-50 ">
          {navIsVisible ? (
            <AiOutlineClose
              onClick={navVisibilityHandler}
              className="w-6 h-6 "
            />
          ) : (
            <AiOutlineMenu
              onClick={navVisibilityHandler}
              className="w-6 h-6 "
            />
          )}
        </div>
        <div
          className={` ${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300  mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="flex flex-col text-white items-center gap-y-5 lg:text-dark-soft lg:flex-row gap-x-2 font-semibold">
            {NavItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          <button className="mt-5 lg:mt-0 border-2 border-blue-500 px-6 text-blue-500 font-semibold rounded-full  py-2 hover:bg-blue-500 hover:text-white transition-all duration-300   ">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
}

export default Header;
