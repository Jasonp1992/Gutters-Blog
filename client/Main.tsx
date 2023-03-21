import React from "react"
import "./Main.css"
import Homepage from "./components/Homepage";
import AddContent from "./components/AddContent";
import { Route, Routes } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/newPost" element={<AddContent />} />
      </Routes>
    </div>
  );
};

export default Main;
