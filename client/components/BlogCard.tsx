import React from 'react'

interface BlogInfo {
    id: number;
    title: string;
    img: string;
    date: string;
    category: string;
    description: string;
}

interface Props {
    blogData: BlogInfo
}

const BlogCard: React.FC<Props> = ({ blogData }) => {
  return (
    <div className='blog-card'>
        <img src={ blogData.img } alt='sample pic' className='thumbnail-pic'/>
        <div className='blog-card-text'>
            <h2>{ blogData.title }</h2>
            <p className='date'>{ blogData.date } | { blogData.category.toUpperCase() }</p>
            <p>{ blogData.description } <span><a href=''>Read More...</a></span></p>
        </div>
    </div>
  )
}

export default BlogCard
