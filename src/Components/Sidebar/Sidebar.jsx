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

const Sidebar = ({ sidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-link">
          <img src={iconHome} alt="" />
          <p>Home</p>
        </div>
        <div className="side-link">
          <img src={iconGame} alt="" />
          <p>Gaming</p>
        </div>
        <div className="side-link">
          <img src={iconAutomobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div className="side-link">
          <img src={iconSports} alt="" />
          <p>Sports</p>
        </div>
        <div className="side-link">
          <img src={iconEntertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div className="side-link">
          <img src={iconTech} alt="" />
          <p>Technology</p>
        </div>
        <div className="side-link">
          <img src={iconMusic} alt="" />
          <p>Music</p>
        </div>
        <div className="side-link">
          <img src={iconBlogs} alt="" />
          <p>Blogs</p>
        </div>
        <div className="side-link">
          <img src={iconNews} alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>SUBSCRIBED</h3>
        <div className="side-link">
          <img src={imgJack} alt="" />
          <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={imgSimon} alt="" />
          <p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={imgTom} alt="" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={imgMegan} alt="" />
          <p>5-Minute Crafts</p>
        </div>
        <div className="side-link">
          <img src={imgCameron} alt="" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
