import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPostsAsync, selectPosts } from "../slices/postSlice";
import BlogCard from "./BlogCard";
import AuthorBio from "./AuthorBio";
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