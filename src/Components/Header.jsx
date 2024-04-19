import { BsSearch } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { BsInfoCircle } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdKeyboardArrowDown, MdOutlineMenu } from "react-icons/md";
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="bg-glass rounded-3xl md:rounded-full mt-5 md:px-3 mx-8 py-3 px-6 bg-opacity-10">
      <div className="flex  md:flex-row justify-between md:justify-evenly ">
        <div className=" flex flex-col md:flex-row gap-3 items-start">
          <button className="text-xl font-bold"onClick={()=> navigate('/')}>Createnary</button>
          <div className="relative">
            <input
              type="text"
              name="Creators"
              placeholder="Search Creators"
              className="pl-10 pr-4 py-2 w-96 md:w-56 rounded-full justify-self-stretch border border-gray-300 focus:outline-none focus:ring-1 focus:ring-main-800"
            />
            <BsSearch className="icon w-5 h-4 absolute top-1/3 left-3 " />
          </div>
        </div>
        <div className="header_element">
          <CgShoppingCart />
          <button>Cart</button>
        </div>
        <div className="header_element">
          <BsInfoCircle />
          <button onClick={()=> navigate('/about')}>About</button>
        </div>
        <div className="header_element">
          <TfiHeadphoneAlt />
          <button>Contact</button>
        </div>
        <div className="header_element outline rounded-3xl px-4 py-2 ">
          <button>Login</button>
          <MdKeyboardArrowDown />
        </div>
        <div>
          <button className="md:hidden text-3xl">
            {" "}
            <MdOutlineMenu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
