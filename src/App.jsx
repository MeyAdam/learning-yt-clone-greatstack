import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";

/**
 * The main App component that renders the Navbar and Routes.
 *
 * @return {React.ReactElement} The App component.
 */
const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      {/* The Navbar component that handles opening and closing of the sidebar */}
      <Navbar setSidebar={setSidebar} />
      {/* Define the routes for the app using the Routes component */}
      <Routes>
        {/* The Home component is rendered when the path is "/" */}
        <Route path="/" element={<Home sidebar={sidebar} />} />
        {/* The Video component is rendered when the path is "/video/:categoryId/:videoId" */}
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
