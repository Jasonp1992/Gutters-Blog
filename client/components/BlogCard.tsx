import React from 'react'
import { deletePostAsync } from '../slices/postSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';

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
  const dispatch = useDispatch<AppDispatch>()
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

  const handleDelete = (id: number) => {
    dispatch(deletePostAsync(id))
  }

  return (
    <div className='blog-card'>
        <img src={ blogData.imgRef } alt='sample pic' className='thumbnail-pic'/>
        <div className='blog-card-text'>
            <h2>{ blogData.title }</h2>
            <p className='date'>{ formatDate(blogData.createdAt) } | { blogData.category.toUpperCase() }</p>
            <p>{ blogData.description } <span><a href=''>Read More...</a></span></p>
        </div>
        <button onClick={() => {handleDelete(blogData.id)}}>delete</button>
    </div>
  )
}

export default BlogCard
