import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dislike from "../../assets/dislike.png";
import like from "../../assets/like.png";
import save from "../../assets/save.png";
import share from "../../assets/share.png";
import { API_KEY, value_converter } from "../../data";
import "./PlayVideo.css";

/**
 * The PlayVideo component renders a YouTube video player and displays
 * information about the video such as title, views, likes, dislikes, and comments.
 *
 * @param {string} videoId - The ID of the video to be played.
 * @returns {React.ReactElement} The PlayVideo component.
 */
const PlayVideo = () => {
  const videoId = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  /**
   * Fetches the video data from the YouTube API.
   * @function fetchVideoData
   * @returns {Promise<void>}
   * @description
   *   This function fetches the video data from the YouTube API.
   *   The API request is made to the videos endpoint with the following parameters:
   *     - part: snippet, contentDetails, statistics
   *     - id: The ID of the video to be fetched
   *     - key: The API key
   *   The response is then parsed as JSON and the first item in the items array is stored in the component's state.
   */
  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  /**
   * Fetches the channel data and comments data from the YouTube API.
   * @function fetchOtherData
   * @returns {Promise<void>}
   * @description
   *   This function fetches the channel data and comments data from the YouTube API.
   *   The API requests are made to the channels and commentThreads endpoints with the following parameters:
   *     - part: snippet, contentDetails, statistics
   *     - id: The ID of the channel to be fetched
   *     - part: snippet, replies
   *     - maxResults: 50
   *     - videoId: The ID of the video to be fetched
   *     - key: The API key
   *   The responses are then parsed as JSON and the channel data is stored in the component's state.
   */
  const fetchOtherData = async () => {
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  /**
   * Fetches the video data when the component mounts and when the video ID changes.
   */
  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  /**
   * Fetches the channel data and comments data when the video data changes.
   */
  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "0"} Views
          &bull;{" "}
          {apiData
            ? moment(apiData.snippet.publishedAt).fromNow()
            : "1 day ago"}
        </p>
        <div>
          <span>
            <img src={like} alt="" />
            {apiData ? value_converter(apiData.statistics.likeCount) : "0"}
          </span>
          <span>
            <img src={dislike} alt="" />
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
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "User Name"}</p>
          <span>
            {channelData
              ? value_converter(channelData.statistics.subscriberCount)
              : "0"}{" "}
            Subscribers
          </span>
        </div>
        <button type="button">Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData ? apiData.snippet.description.slice(0, 250) : "Description"}
        </p>
        <hr />
        <h4>
          {apiData ? value_converter(apiData.statistics.commentCount) : "0"}{" "}
          Comments
        </h4>
        {commentData.map((item, index) => {
          return (
            <div key={index} className="comment">
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
              />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}
                  <span>1 day ago</span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>
                    {value_converter(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
