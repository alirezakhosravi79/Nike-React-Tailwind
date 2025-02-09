import React, { useState } from "react";
import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { EllipsisVertical, LogsIcon, Menu, ShoppingCart, User } from "lucide-react";
import ResponsiveMenu from "./ResponsiveMenu";

export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Mens",
    link: "/mens",
  },
  {
    id: 3,
    title: "Womens",
    link: "/womens",
  },
  {
    id: 4,
    title: "Kids",
    link: "/kids",
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
  },
];

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="text-black py-8">
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <div>
          <img src={Logo} alt="" className="max-w-[100px]" />
        </div>
        {/* menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="inline-block text-base font-semibold py-2 px-3 uppercase"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <button className="text-xl ps-8">
              <User />
            </button>

            <Link>
              <button className="text-xl ps-14">
                <ShoppingCart />
              </button>
            </Link>
          </ul>
        </div>
        <div className="flex  gap-8 md:hidden z-50">
          <Link to={'/cart'}><ShoppingCart/></Link> 
          {/* mobile hamberger menu */}
          {
            showMenu ? (
              <EllipsisVertical onClick={toggleMenu} className="cursor-pointer transition-all md:hidden z-50" size={30}/>
            ):(<Menu onClick={toggleMenu} className="cursor-pointer transition-all md:hidden z-50" size={30}/>)
          }
        </div>
        <div>
          {/* responsive menu */}
          <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
