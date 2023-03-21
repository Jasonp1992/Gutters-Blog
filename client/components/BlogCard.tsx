import React from 'react'

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

  return (
    <div className='blog-card'>
        <img src={ blogData.imgRef } alt='sample pic' className='thumbnail-pic'/>
        <div className='blog-card-text'>
            <h2>{ blogData.title }</h2>
            <p className='date'>{ formatter.format(Date.parse(blogData.createdAt)) } | { blogData.category.toUpperCase() }</p>
            <p>{ blogData.description } <span><a href=''>Read More...</a></span></p>
        </div>
    </div>
  )
}

export default BlogCard
