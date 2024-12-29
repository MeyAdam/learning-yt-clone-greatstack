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

/**
 * The Navbar component renders a navigation bar with the logo, search bar, and other icons.
 * It uses the setSidebar function to toggle the sidebar.
 * @param {function} setSidebar - Function to toggle the sidebar.
 * @returns {React.ReactElement} The Navbar component.
 */
const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      {/* Navigation bar left side with the menu icon and logo */}
      <div className="nav-left flex-div">
        {/* Menu icon that toggles the sidebar when clicked */}
        <img
          src={iconMenu}
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
        />
        {/* Logo that links to the home page */}
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>
      </div>

      {/* Navigation bar middle with the search bar */}
      <div className="nav-middle flex-div">
        {/* Search bar with a text input and a search icon */}
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={iconSearch} alt="" />
        </div>
      </div>

      {/* Navigation bar right side with the other icons */}
      <div className="nav-right flex-div">
        {/* Upload icon */}
        <img src={iconUpload} alt="" />
        {/* More icon */}
        <img src={iconMore} alt="" />
        {/* Notification icon */}
        <img src={iconNotification} alt="" />
        {/* Profile icon that links to the profile page */}
        <img src={iconProfile} alt="" className="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
