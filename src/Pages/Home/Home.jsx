import React, { useState } from "react";
import Feed from "../../Components/Feed/Feed";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Home.css";

/**
 * Home component that renders the Sidebar and Feed components.
 * @param {boolean} sidebar - Boolean indicating the state of the sidebar (expanded or collapsed).
 */
const Home = ({ sidebar }) => {
  // State to hold the selected category
  const [category, setCategory] = useState(0);

  return (
    <>
      {/* Sidebar component with props for sidebar state, current category, and setCategory function */}
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      {/* Main container that adjusts its class based on the sidebar state */}
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        {/* Feed component displaying content based on the current category */}
        <Feed category={category} />
      </div>
    </>
  );
};

export default Home;