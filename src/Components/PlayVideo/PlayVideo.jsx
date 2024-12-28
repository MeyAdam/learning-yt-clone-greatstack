import React from "react";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import userProfile from "../../assets/user_profile.jpg";
import "./PlayVideo.css";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Video title</h3>
      <div className="play-video-info">
        <p>1M Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" /> 125
          </span>
          <span>
            <img src={dislike} alt="" /> 2
          </span>
          <span>
            <img src={share} alt="" /> Share
          </span>
          <span>
            <img src={save} alt="" /> Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Channel name</p>
          <span>7M Subscribers</span>
        </div>
        <button type="button">Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quae
        </p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={userProfile} alt="" />
          <div>
            <h3>
              User name <span>1 day ago</span>
            </h3>
            <p>
              Comment Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={userProfile} alt="" />
          <div>
            <h3>
              User name <span>1 day ago</span>
            </h3>
            <p>
              Comment Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={userProfile} alt="" />
          <div>
            <h3>
              User name <span>1 day ago</span>
            </h3>
            <p>
              Comment Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={userProfile} alt="" />
          <div>
            <h3>
              User name <span>1 day ago</span>
            </h3>
            <p>
              Comment Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
