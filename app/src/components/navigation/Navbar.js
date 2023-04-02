import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(true);

  const handleClose = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark  fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleClose}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`${active ? 'collapse':''} navbar-collapse justify-content-center`}
            id="navbarTogglerDemo01"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item fw-bold text-uppercase">
                <Link
                  activeClass="active"
                  to="home"
                  smooth={true}
                  offset={-90}
                  duration={100}
                  spy={true}
                  onClick={handleClose}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item fw-bold text-uppercase">
                <Link
                  activeClass="active"
                  to="about"
                  smooth={true}
                  offset={-90}
                  duration={50}
                  spy={true}
                  onClick={handleClose}
                >
                  About
                </Link>
              </li>
              <li className="nav-item fw-bold text-uppercase">
                <Link
                  activeClass="active"
                  to="resume"
                  smooth={true}
                  offset={-90}
                  duration={50}
                  spy={true}
                  onClick={handleClose}
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item fw-bold text-uppercase">
                <Link
                  activeClass="active"
                  to="portfolio"
                  smooth={true}
                  offset={-90}
                  duration={50}
                  spy={true}
                  onClick={handleClose}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item fw-bold text-uppercase">
                <Link
                  activeClass="active"
                  to="publication"
                  smooth={true}
                  offset={-90}
                  duration={50}
                  spy={true}
                  onClick={handleClose}
                >
                  Publication
                </Link>
              </li>
              <li className="nav-item fw-bold text-uppercase">
                <Link
                  activeClass="active"
                  to="contact"
                  smooth={true}
                  offset={-90}
                  duration={50}
                  spy={true}
                  onClick={handleClose}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
