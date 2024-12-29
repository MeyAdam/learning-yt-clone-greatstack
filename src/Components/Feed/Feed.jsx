import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";
import "./Feed.css";

/**
 * Component that displays a feed of YouTube videos based on the selected category.
 * Fetches the video data from the YouTube Data API and renders it in a list.
 * @param {number} category - The category of videos to display.
 */
const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  /**
   * Fetch the video data from the YouTube Data API based on the selected category.
   * @returns {Promise<void>}
   * @description
   *   This function fetches the video data from the YouTube Data API.
   *   The API request is made to the videos endpoint with the following parameters:
   *     - part: snippet, contentDetails, statistics
   *     - chart: mostPopular
   *     - maxResults: 50
   *     - regionCode: US
   *     - videoCategoryId: The selected category ID
   *     - key: The API key
   *   The response is then parsed as JSON and the items array is stored in the component's state.
   */
  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    // Fetch the video data when the component mounts or the category changes
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <Link
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className="card"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {value_converter(item.statistics.viewCount)} Views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
