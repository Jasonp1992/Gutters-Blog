import React from 'react'
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <>
        <div className='link-holder'>
            <Link to="/">Home</Link>
            <Link to="/newPost">Blogs</Link>
            <Link to="">Contact Me</Link>
        </div>
    </>
  )
}

export default Sidebar
