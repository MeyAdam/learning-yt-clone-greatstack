import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";
import "./Recommended.css";

/**
 * The Recommended component renders a list of recommended videos based on
 * the category provided.
 *
 * @param {string} categoryId - The ID of the category to fetch videos from.
 * @returns {React.ReactElement} The Recommended component.
 */
const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  /**
   * Fetches the video data from the YouTube API.
   * @function fetchData
   * @returns {Promise<void>}
   * @description
   *   This function fetches the video data from the YouTube API.
   *   The API request is made to the videos endpoint with the following parameters:
   *     - part: snippet, contentDetails, statistics
   *     - chart: mostPopular
   *     - maxResults: 45
   *     - regionCode: US
   *     - videoCategoryId: The selected category ID
   *     - key: The API key
   *   The response is then parsed as JSON and the items array is stored in the component's state.
   */
  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideo_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  /**
   * Calls the fetchData function when the component mounts.
   */
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            key={index}
            className="side-video-list"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
