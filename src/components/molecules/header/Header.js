import React from "react";
import { Link } from "react-router-dom";
import { main, menuItem, link } from "./Style";
import { AiOutlineHome } from "react-icons/ai";
import { RiBarChart2Line } from "react-icons/ri";
import { BsPerson, BsChatText } from "react-icons/bs";

const Header = () => {
  return (
    <div style={main}>
      <div style={menuItem}>
        <Link to="/" style={link}>
          <AiOutlineHome />
          Home
        </Link>
      </div>

      <div style={menuItem}>
        <Link to="/" style={link}>
          <RiBarChart2Line />
          Discover
        </Link>
      </div>

      <div style={menuItem}>
        <Link to="/" style={link}>
          <BsPerson />
          Profile
        </Link>
      </div>

      <div style={menuItem}>
        <Link to="/" style={link}>
          <BsChatText />
          Messages
        </Link>
      </div>
    </div>
  );
};

export default Header;
