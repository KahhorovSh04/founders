import React from 'react'
import logo from './../images/logo.png'
import '../css/footer.css'

const Footer = () => {
  return (
    <footer>
      <div id='logo'>
        <img src={logo} />
        <div className='right'>
          <h3>FOUNDERS</h3>
          <h5>LANGUAGE</h5>
          <h5>SCHOOL</h5>
        </div>
      </div>
      <div id='stick'></div>
      <h2>Copyright © 2021 Founders Language School</h2>
    </footer>
  )
}

export default Footer
