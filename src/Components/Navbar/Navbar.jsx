import React from "react";
import iconProfile from "../../assets/jack.png";
import logo from "../../assets/logo.png";
import iconMenu from "../../assets/menu.png";
import iconMore from "../../assets/more.png";
import iconNotification from "../../assets/notification.png";
import iconSearch from "../../assets/search.png";
import iconUpload from "../../assets/upload.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img src={iconMenu} class="menu-icon" />
        <img src={logo} class="logo" />
      </div>

      <div class="nav-middle flex-div">
        <div class="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={iconSearch} alt="" />
        </div>
      </div>

      <div class="nav-right flex-div">
        <img src={iconUpload} alt="" />
        <img src={iconMore} alt="" />
        <img src={iconNotification} alt="" />
        <img src={iconProfile} alt="" class="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
