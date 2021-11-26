import React from 'react'
import banner from '../images/header.png'
import '../css/header.css'

const Header = () => {
  return (
    <header>
      <div>
        <h2>Quisque nec tortor imperdiet, dapibus!</h2>
        <h3>Proin eu augue ut mi tristique suscipit non sit amet ex</h3>
      </div>
      <img src={banner} alt='' />
    </header>
  )
}

export default Header
