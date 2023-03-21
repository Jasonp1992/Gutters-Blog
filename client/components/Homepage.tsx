import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPostsAsync, selectPosts } from "../slices/postSlice";
import Header from "./Header";
import Footer from "./Footer";
import BlogCard from "./BlogCard";
import { AppDispatch } from "../store";

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

    useEffect(() => {
        dispatch(fetchAllPostsAsync())
    }, [])

    return (
        <div className="homepage">
            <Header />
            {posts && posts.length ? (
                posts.map((post: BlogInfo) => {
                    return <BlogCard key={post.id} blogData={post} />
                })
            ) : null}
            <Footer />
        </div>
    )
}

export default Homepage;