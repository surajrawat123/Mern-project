import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='logo-title'>
            <h1>Incubyte</h1>
        </div>
        <div className='nav-links'>
            <nav>
                <a href='#'>Home</a>
                <a href='#'>Produts</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>
            </nav>
        </div>
    </div>
  )
}

export default Header