import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className="header">
      
      <a href="/"><img className="logo" src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg" alt="logo" /></a>
      <div className='nav-items'>
        <ul>
        <Link to='/'>
          <li>Home</li>
          </Link>
          {/* <li>About</li> */}
          {/* <a href='/about'>
          <li>About</li>
          </a> */}

          <Link to='/about'>
          <li>About</li>
          </Link>

          <li>Contact</li>
          <li>Cart</li>
          <Link to='/github'>
          <li>Github</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header