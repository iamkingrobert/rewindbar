import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };

  return (
    <nav>
      <div className="">
        <div>
          {/* Left Navbar Items */}
          <Link to="/">
            <img src="https://" alt="REWINDBAR" />
          </Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/services">Services</Link>
        </div>

        {/* Right Navbar Items */}
        <div>
          <Callto phone="+1(800)-890-0338">+1(800)-890-0338</Callto>
          <Link to="/Login">Login</Link>
          <div>
            <Link to="/book-appointment">BOOK NOW</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
