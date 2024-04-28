import { BsSearch, BsInfoCircle } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
// import { LuMenuSquare } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowDown, MdOutlineMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
const menuItems = [
  {
    id: 1,
    icon: <CgShoppingCart />,
    title: "Cart",
  },
  {
    id: 2,
    icon: <BsInfoCircle />,
    title: "About",
  },
  {
    id: 3,
    icon: <TfiHeadphoneAlt />,
    title: "Contact",
  },
];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    /* background styles for header */
    <header className="bg-glass rounded-3xl mt-5 px-4 md:px-1 mx-8 py-3 sticky top-2">
      <div className="flex  md:flex-row justify-between md:justify-evenly ">
        <div className=" flex flex-col md:flex-row gap-3 items-start">
          <button className="text-xl  font-bold" onClick={() => navigate("/")}>
            Createnary
          </button>
          {/* Input feild */}
          <div className="relative">
            <input
              type="text"
              name="Creators"
              placeholder="Search Creators"
              className="pl-10 pr-4 py-2 w-80 md:w-64 rounded-full justify-self-stretch border border-gray-300 focus:outline-none focus:ring-1 focus:ring-main-800"
            />
            <BsSearch className="icon w-5 h-4 absolute top-1/3 left-3 " />
          </div>
        </div>
        {menuItems.map((item) => (
          <div key={item.id} className="header_element effect">
            {item.icon}
            <button>{item.title}</button>
          </div>
        ))}
        <div className="header_element outline rounded-3xl px-4 py-2 hover:bg-primary hover:text-white ">
          <button>Login</button>
          <MdKeyboardArrowDown />
        </div>
        <div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-3xl"
          >
            {!isMenuOpen ? <MdOutlineMenu /> : <RxCross2 />}
          </button>
          <div
            className={`absolute right-0  bg-transparent text-black border border-black rounded-xl px-3 py-2 transition duration-200 ease-in-out md:hidden ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            {menuItems.map((item) => (
              <div key={item.id} className="flex gap-2 items-center py-1">
                {item.icon}
                <button>{item.title}</button>
              </div>
            ))}
            <div className="extraBtn">Signup</div>
            <div className="extraBtn">Login</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
