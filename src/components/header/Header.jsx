import "./Header.css";
import React, { useRef, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import open from "../../images/open.png";
import Navbar from "./Navbar";
import circleX from "../../images/circleX.png";
import cancel from "../../images/cancel.png";
const Header = () => {
  const [popper, setPopper] = useState(false);

  return (
    <div className="headerWrapper">
      <header>
        {/* <h2>
        get<span>linked</span>
      </h2> */}
        <Link className="HomeClick" to={"/"}>
          get<span>linked</span>
        </Link>
        <Navbar />
        {popper && (
          <nav className="nav2">
            <div onClick={() => setPopper(false)} className="circleXcon">
              <div className="cancelWrapper">
                <img className="circlex" src={circleX} alt="" />
                <img className="cancelX" src={cancel} alt="" />
              </div>
            </div>
            <ul>
              <li>
                <a href="#">Timeline</a>
              </li>
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                {/* <a href="#">Contact</a> */}
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
            {/* <button type="button">Register</button> */}
            <Link className="navRegisterButton2" to={"/register"}>
              Register
            </Link>
          </nav>
        )}

        <img
          onClick={() => setPopper(true)}
          className="dropdownImg"
          src={open}
          alt=""
        />
      </header>
    </div>
  );
};
export default Header;
