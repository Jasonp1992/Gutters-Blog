import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

interface BlogInfo {
    id: number;
    title: string;
    imgRef: string;
    date: string;
    category: string;
    description: string;
}

const AddContent: React.FC = () => {
  const [title, setTitle] = useState<String>("");
  const [imgRef, setImgRef] = useState<String>("");
  const [category, setCategory] = useState<String>("");
  const [description, setDescription] = useState<String>("")
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("submited")
        console.log(`title: ${title}, img: ${imgRef}, category: ${category}, des: ${description}`)
        console.log(new Date)
    };

  return (
    <div className='add-content'>
      <Header />
        <h2>Add New Post</h2>
        <form id="new-post-form" onSubmit={handleSubmit}>
            <label>Title</label>
            <input id='title' onChange={(e) => {setTitle(e.target.value)}}/>
            <label>Image Reference</label>
            <input id='imgRef' onChange={(e) => {setImgRef(e.target.value)}}/>
            <label>Category</label>
            <input id='category' onChange={(e) => {setCategory(e.target.value)}}/>
            <label>Content</label>
            <textarea id="description" onChange={(e) => {setDescription(e.target.value)}}/>
            
            <button type='submit'>Save</button>
        </form>
      <Footer />
    </div>
  )
}

export default AddContent
