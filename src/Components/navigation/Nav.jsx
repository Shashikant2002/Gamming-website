import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav>
        <ul className="flex navBar">
          <li>
            <a className="active" href="/">HOME</a>
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
      </nav>
    </>
  );
};

export default Nav;
