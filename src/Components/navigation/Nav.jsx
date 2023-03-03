import React from "react";
import "./Nav.css";
import { GiCrossedSwords } from "react-icons/gi";
import { TbEditCircle } from "react-icons/tb";

const Nav = ({ closeFunction }) => {
  return (
    <>
      <nav>
        <span onClick={closeFunction} className="phoneNavClose">
          {" "}
          <GiCrossedSwords />
        </span>
        <ul className="flex navBar">
          <li>
            <a className="active" href="/">
              HOME
            </a>
          </li>
          <li>
            <a href="/">ABOUT US</a>
          </li>
          <li>
            <a href="/">TOURNAMENT</a>
          </li>
          <li>
            <a href="/">PAGES</a>
          </li>
          <li>
            <a href="/">NEWS</a>
          </li>
          <li>
            <a href="/">CONTACT US</a>
          </li>
        </ul>
        <a className="glButtonBorder flex alignCenter" href="/">
          <TbEditCircle /> ~Sign In
        </a>
      </nav>
    </>
  );
};

export default Nav;
