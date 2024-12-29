import React from "react";
import { useParams } from "react-router-dom";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";
import "./Video.css";

/**
 * Video component that displays a video player and a list of recommended videos.
 * It uses the videoId and categoryId from the URL parameters.
 */
const Video = () => {
  // Extract videoId and categoryId from URL parameters
  const { videoId, categoryId } = useParams();

  return (
    // Container for the video player and recommended videos
    <div className="play-container">
      {/* Video player component */}
      <PlayVideo videoId={videoId} />
      {/* Recommended videos component */}
      <Recommended categoryId={categoryId} />
    </div>
  );
};

export default Video;
