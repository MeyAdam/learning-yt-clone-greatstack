import React from "react";
import { Link } from "react-router-dom";
import iconProfile from "../../assets/jack.png";
import logo from "../../assets/logo.png";
import iconMenu from "../../assets/menu.png";
import iconMore from "../../assets/more.png";
import iconNotification from "../../assets/notification.png";
import iconSearch from "../../assets/search.png";
import iconUpload from "../../assets/upload.png";
import "./Navbar.css";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          src={iconMenu}
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
        />
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={iconSearch} alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={iconUpload} alt="" />
        <img src={iconMore} alt="" />
        <img src={iconNotification} alt="" />
        <img src={iconProfile} alt="" className="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
