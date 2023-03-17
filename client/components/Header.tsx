import React from 'react'

const Header: React.FC = () => {
    return (
        <header className='header'>
            <h1 className='header-title'>Blorgs Blog</h1>
            <button className='header-login-button'>Log In</button>
        </header>
    )
}

export default Header