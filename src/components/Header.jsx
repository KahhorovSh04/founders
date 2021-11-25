import React from 'react'
import banner from '../images/header.png'
import '../css/header.css'

const Header = () => {
  return (
    <header>
      <div>
        <h2>O‘rganish uchun orzu emas harakat qiling!</h2>
        <h3>Hozir maqsad qiling, hozir harakat qiling!</h3>
      </div>
      <img src={banner} alt='' />
    </header>
  )
}

export default Header
