import React, { useState } from "react"
import "./Main.css"
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import AddContent from "./components/AddContent";
import SingleBlog from "./components/SingleBlog";
import hamburger from "../public/assets/Img/hamburger.png"
import Sidebar from "./components/Sidebar";

const Main: React.FC = () => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  const showSidebar = () => {
    setSideBarOpen(!sideBarOpen)
  }

  return (
    <>
      <img className="hamburger-icon" src={hamburger} alt="black hamburger icon" onClick={showSidebar}/>
        {
            sideBarOpen ? (
                <div className="sidebar-container" onClick={showSidebar}>
                    <Sidebar />
                </div>
            ) : null
        }
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/newPost" element={<AddContent />} />
        <Route path="/singlePost" element={<SingleBlog />} />
      </Routes>
    </>
  );
};

export default Main;

