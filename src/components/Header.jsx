import React from 'react'
import banner from '../images/header.png'
import '../css/header.css'

const Header = () => {
  return (
    <header>
      <div>
        <h1>O‘rganish uchun orzu emas harakat qiling!</h1>
        <h2>Hozir maqsad qiling, hozir harakat qiling!</h2>
      </div>
      <img src={banner} alt='' />
    </header>
  )
}

export default Header
