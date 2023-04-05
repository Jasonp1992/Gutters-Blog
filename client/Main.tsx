import React from "react"
import "./Main.css"
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import AddContent from "./components/AddContent";
import SingleBlog from "./components/SingleBlog";

const Main: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/newPost" element={<AddContent />} />
        <Route path="/singlePost" element={<SingleBlog />} />
      </Routes>
    </div>
  );
};

export default Main;

