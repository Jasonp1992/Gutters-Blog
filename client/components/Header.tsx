import React from 'react'
import { Link } from "react-router-dom"

const Header: React.FC = () => {
    return (
        <header className='header'>
            <h1 className='header-title'>Blorgs Blog</h1>
            <Link to="/">Home</Link>
            <Link to="/newPost">New Post</Link>
            <button className='header-login-button'>Log In</button>
        </header>
    )
}

export default Header