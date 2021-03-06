import React from 'react'
import logo from './../images/logo.png'
import '../css/navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div id='logo'>
        <img src={logo} alt='Founders Logo' />
        <div className='right'>
          <h3>FOUNDERS</h3>
          <h5>LANGUAGE</h5>
          <h5>SCHOOL</h5>
        </div>
      </div>
      <div id='stick'></div>
      <div className='links'>
        <a href='#courses'>Courses</a>
        <a href='#contacts'>Contact us</a>
        <a href='tel:+998712055333'>
          <i className='fas fa-phone'></i>
          +998 71 205 53 33
        </a>
      </div>
    </nav>
  )
}

export default Navbar
