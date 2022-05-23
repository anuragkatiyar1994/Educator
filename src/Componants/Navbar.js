import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { VscMortarBoard } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import "./NavbarStyles.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const [scroll, setScroll] = useState(false);
  const scrollHandler = () => {
    if (window.scrollY >= 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", scrollHandler);
  return (
    <>
      <nav className={scroll ? "nav scrolled" : "nav"}>
        <div className="container nav__container">
          <NavLink className="brand link" to="/">
            <h4>
              EDUCATOR
              <span>
                <VscMortarBoard className="brand__logo" />
              </span>
            </h4>
          </NavLink>
          <ul className={click ? "menu__list show" : "menu__list"}>
            <li>
              <NavLink
                style={({ isActive }) => {
                  return { color: isActive ? "#f75842" : "" };
                }}
                className="link menu__link"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => {
                  return { color: isActive ? "#f75842" : "" };
                }}
                className="link menu__link"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => {
                  return { color: isActive ? "#f75842" : "" };
                }}
                className="link menu__link"
                to="/courses"
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => {
                  return { color: isActive ? "#f75842" : "" };
                }}
                className="link menu__link"
                to="/contact"
                menu__link
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div onClick={handleClick} className="d-none d-block">
            {click ? (
              <RiCloseLine className="menu__icon" />
            ) : (
              <RiMenu3Line className="menu__icon" />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
