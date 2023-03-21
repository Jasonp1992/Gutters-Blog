import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { newPostAsync } from '../slices/postSlice'
import { AppDispatch } from '../store'
import { useDispatch } from 'react-redux'

interface BlogInfo {
    id: number;
    title: string;
    imgRef: string;
    category: string;
    description: string;
    createdAt: string;
}

const AddContent: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [imgRef, setImgRef] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("")
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(newPostAsync({ title, imgRef, category, description}))
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
