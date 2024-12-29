import React from "react";
import iconAutomobiles from "../../assets/automobiles.png";
import iconBlogs from "../../assets/blogs.png";
import imgCameron from "../../assets/cameron.png";
import iconEntertainment from "../../assets/entertainment.png";
import iconGame from "../../assets/game_icon.png";
import iconHome from "../../assets/home.png";
import imgJack from "../../assets/jack.png";
import imgMegan from "../../assets/megan.png";
import iconMusic from "../../assets/music.png";
import iconNews from "../../assets/news.png";
import imgSimon from "../../assets/simon.png";
import iconSports from "../../assets/sports.png";
import iconTech from "../../assets/tech.png";
import imgTom from "../../assets/tom.png";
import "./Sidebar.css";

/**
 * Sidebar component that displays shortcut links and a list of subscribed channels.
 * @param {boolean} sidebar - Boolean indicating if the sidebar is expanded or collapsed.
 * @param {number} category - Current selected category ID.
 * @param {function} setCategory - Function to update the selected category.
 * @returns {React.ReactElement} The Sidebar component.
 */
const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      {/* Shortcut links section */}
      <div className="shortcut-links">
        {/* Home link */}
        <div
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <img src={iconHome} alt="" />
          <p>Home</p>
        </div>
        {/* Gaming link */}
        <div
          className={`side-link ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <img src={iconGame} alt="" />
          <p>Gaming</p>
        </div>
        {/* Automobiles link */}
        <div
          className={`side-link ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <img src={iconAutomobiles} alt="" />
          <p>Automobiles</p>
        </div>
        {/* Sports link */}
        <div
          className={`side-link ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <img src={iconSports} alt="" />
          <p>Sports</p>
        </div>
        {/* Entertainment link */}
        <div
          className={`side-link ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <img src={iconEntertainment} alt="" />
          <p>Entertainment</p>
        </div>
        {/* Technology link */}
        <div
          className={`side-link ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <img src={iconTech} alt="" />
          <p>Technology</p>
        </div>
        {/* Music link */}
        <div
          className={`side-link ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <img src={iconMusic} alt="" />
          <p>Music</p>
        </div>
        {/* Blogs link */}
        <div
          className={`side-link ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <img src={iconBlogs} alt="" />
          <p>Blogs</p>
        </div>
        {/* News link */}
        <div
          className={`side-link ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <img src={iconNews} alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>

      {/* Subscribed channels section */}
      <div className="subscribed-list">
        <h3>SUBSCRIBED</h3>
        {/* PewDiePie channel */}
        <div className="side-link">
          <img src={imgJack} alt="" />
          <p>PewDiePie</p>
        </div>
        {/* MrBeast channel */}
        <div className="side-link">
          <img src={imgSimon} alt="" />
          <p>MrBeast</p>
        </div>
        {/* Justin Bieber channel */}
        <div className="side-link">
          <img src={imgTom} alt="" />
          <p>Justin Bieber</p>
        </div>
        {/* 5-Minute Crafts channel */}
        <div className="side-link">
          <img src={imgMegan} alt="" />
          <p>5-Minute Crafts</p>
        </div>
        {/* Nas Daily channel */}
        <div className="side-link">
          <img src={imgCameron} alt="" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
