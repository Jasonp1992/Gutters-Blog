import React from 'react'
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
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("submited")
    };

  return (
    <div className='add-content'>
      <Header />
        <h2>Add New Post</h2>
        <form id="new-post-form" onSubmit={handleSubmit}>
            <label>Title</label>
            <input id='title'/>
            <label>Image Reference</label>
            <input id='imgRef'/>
            <label>Category</label>
            <input id='category'/>
            <label>Content</label>
            <textarea id="description"/>
            
            <button type='submit'>Save</button>
        </form>
      <Footer />
    </div>
  )
}

export default AddContent
