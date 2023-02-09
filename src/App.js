import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";

import {
  Navbar,
  Feed,
  SearchFeed,
  VideoDetail,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/project-youtube-clone" exact element={<Feed />}></Route>
          <Route path="/video/:id" element={<VideoDetail />}></Route>
          <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
