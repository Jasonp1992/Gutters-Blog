import React from 'react'
import { Link } from "react-router-dom"

interface BlogInfo {
    id: number;
    title: string;
    imgRef: string;
    category: string;
    description: string;
    createdAt: string;
}

interface Props {
    blogData: BlogInfo
}

const BlogCard: React.FC<Props> = ({ blogData }) => {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });

  const formatDate = (time: string) => { 
    if (typeof time === "string") {
      return formatter.format(Date.parse(time)) 
    }
  }

  return (
    <div className='blog-card'>
        <img src={ blogData.imgRef } alt='sample pic' className='thumbnail-pic'/>
        <div className='blog-card-text'>
            <h2>{ blogData.title }</h2>
            <p className='date'>{ formatDate(blogData.createdAt) } | { blogData.category.toUpperCase() }</p>
            <p>{ blogData.description } <span><Link to='/singlePost'>Read More...</Link></span></p>
        </div>
    </div>
  )
}

export default BlogCard
