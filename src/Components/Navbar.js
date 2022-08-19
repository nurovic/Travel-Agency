import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navbarList = [
    "Home",
    "About Us",
    "Destination",
    "Tour Package",
    "Blogs",
    "Contact Us",
  ];
  const [active, setActive] = useState(1);

  return (
    <Section>
      <div className="brand-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-links">
        {navbarList.map((list, index) => (
          <li
            className={active === index + 1 ? "active" : ""}
            onClick={() => setActive(index + 1)}
          >
            {list}
          </li>
        ))}
      </div>
      <div className="view-tours">
        <button>View Tours</button>
      </div>
    </Section>
  );
};

export default Navbar;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 130px;
  align-items: center;
  .navbar-list {
  }
  .navbar-links {
    margin: 0 50px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    list-style: none;
    width: 100%;
  }
  li {
    margin: 0 10px;
    cursor: pointer;
  }

  img {
    height: 80px;
  }
  .active {
    color: #fd5056;
  }
  button {
    width: 140px;
    height: 40px;
    border-radius: 20px;
    border: 0.5px solid red;
    background-color: #fd5056;
    color: #fff;
    cursor: pointer;
  }
`;
