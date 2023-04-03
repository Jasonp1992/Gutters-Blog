import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPostsAsync, selectPosts } from "../slices/postSlice";
import BlogCard from "./BlogCard";
import AuthorBio from "./AuthorBio";
import { AppDispatch } from "../store";
import hamburger from "../../public/assets/Img/hamburger.png"
import Sidebar from "./Sidebar";

interface BlogInfo {
    id: number;
    title: string;
    imgRef: string;
    category: string;
    description: string;
    createdAt: string;
}

const Homepage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const posts = useSelector(selectPosts)
    const [sideBarOpen, setSideBarOpen] = useState<boolean>(false)

    useEffect(() => {
        dispatch(fetchAllPostsAsync())
    }, [])

    const showSidebar = () => {
        setSideBarOpen(!sideBarOpen)
    }

    return (
        <div className="homepage">
                <img className="hamburger-icon" src={hamburger} alt="black hamburger icon" onClick={showSidebar}/>
                {
                    sideBarOpen ? (
                        <div className="sidebar-container" onClick={showSidebar}>
                            <Sidebar />
                        </div>
                    ) : null
                }
            <AuthorBio />
            <article>
            {posts && posts.length ? (
                posts.map((post: BlogInfo) => {
                    return (
                    <div key={post.id}>
                        <BlogCard blogData={post} />
                    </div>
                    )
                })
            ) : null}
            </article>
        </div>
    )
}

export default Homepage;