import React from "react";
import "./Header.css";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-list">
          <ul>
            <li>
              <a href="/Home" className="active">
                Home
              </a>
            </li>
            {/* <li>
              <a href="#products">Products</a> */}
            {/* <ul className="prod-list">
                <li><a href="#Product1">Product 1</a></li>
                <li><a href="#Product2">Product 2</a></li>
                <li><a href="#Product3">Product 3</a></li>
                <li><a href="#Product4">Product 4</a></li>
              </ul> */}
            {/* </li> */}
            <li className="nav-item dropdown" aria-labelledby="navbarScrollingDropdown">
              <a
                // className="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/compressor">
                    Air Compressor
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/washer">
                    Pressure Car Washer
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/agriculture">
                  Agricultural Solution
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  {/* <Link > */}
                  <a className="dropdown-item" href="/allProducts">
                    All Products
                  </a>
                  {/* </Link> */}
                </li>
              </ul>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">Contact</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
          <p>
            <IoMenu />
          </p>
        </div>
        <div className="nav-list2">
          <div className="logo-box">
            <p className="logo">A.K.Machineries</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
