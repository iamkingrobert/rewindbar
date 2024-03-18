import { Link } from "gatsby";
import React from "react";
import Logo from '../images/logo.png'
import callIcon from '../images/phone-call.png'

export default function Navbar() {
  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };

  return (
    <nav>
      <div className="bg-[#E3E7EA]  flex justify-between items-center border-b-[1px] h-[56px] border-black">

        <div className="flex space-x-10 px-5 font-semibold">
          {/* Left Navbar Items */}
          <Link to="/">
            <img src={Logo} alt="REWINDBAR Logo" />
          </Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/services">Services</Link>
        </div>

        {/* Right Navbar Items */}
        <div className="flex space-x-10 items-center font-semibold">
         
          <Callto phone="+1(800)-890-0338" > +1(800)-890-0338</Callto>

          <Link to="/Login">Login</Link>

          <div className="bg-[#2C343B] p-5 h-full w-[195px] text-center text-white">
            <Link to="/book-appointment">BOOK NOW</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
