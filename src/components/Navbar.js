import { Link } from "gatsby";
import React, { useState } from "react";
import Logo from "../images/logo.png";
import callIcon from "../images/phone-call.png";
import Humburger from "../images/hamburger.png";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const Callto = ({ phone, children }) => {
    return <Link to={`tel:${phone}`} className="text-[13px] inline-flex items-center gap-x-1"><div><img src={callIcon} /></div> +1(202) 877 8789</Link>;
  };

  return (
    <nav className="">
      <div className="bg-[#2C343B] p-5 h-full w-full text-center text-white lg:hidden block">
        <Link to="/book-appointment">BOOK NOW</Link>
      </div>
      <div className="bg-[#E3E7EA] 0 flex justify-between items-center lg:border-b-[1px] h-[56px] border-black">
        <div className="flex space-x-10 lg:px-10 px-3 font-semibold">
          {/* Left Navbar Items */}
          <Link to="/">
            <img src={Logo} alt="REWINDBAR Logo" />
          </Link>

          <Link className="hidden lg:block" to="/pricing">
            Pricing
          </Link>
          <Link className="hidden lg:block" to="/services">
            Services
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
        <Callto phone="+1(800)-890-0338"> +1(800)-890-0338</Callto>
          <button className="p-3" onClick={() => setShowSidebar(!showSidebar)}>
            {!showSidebar ? (
              <div>
                <img src={Humburger} alt="hamburger"/>
              </div>
            ) : (
              ""
            )}
          </button>
        </div>

        {/* Right Navbar Items */}
        <div className="lg:flex space-x-10 items-center font-semibold hidden">
          <Callto phone="+1(800)-890-0338"> +1(800)-890-0338</Callto>

          <Link to="/Login">Login</Link>

          <div className="bg-[#2C343B] p-5 h-full w-[195px] text-center text-white">
            <Link to="/book-appointment">BOOK NOW</Link>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {showSidebar && (
          <div className="lg:hidden fixed top-0 right-0 h-svh w-[90%] z-50 bg-gray-200/70 filter backdrop-blur-lg transition-all ease-in-out ">
            <button
              className="w-full flex justify-end p-3"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              {showSidebar ? (
                <p className="text-center p-3 w-10 h-10  ">X</p>
              ) : (
                ""
              )}
            </button>

            <ul className="flex flex-col space-y-4 items-center pt-20 z-50">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li className="bg-[#2C343B] p-4 h-full w-[195px] text-center text-white">
                <Link to="/book-appointment">BOOK NOW</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
