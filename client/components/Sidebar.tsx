import React from 'react'
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <>
        <div className='link-holder'>
            <Link to="/">Home</Link>
            <Link to="/newPost">Blog</Link>
            <Link to="">About</Link>
            <Link to="">Contact</Link>
        </div>
    </>
  )
}

export default Sidebar
