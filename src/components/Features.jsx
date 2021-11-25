import React from 'react'
import '../css/features.css'

const Features = () => {
  return (
    <article id='features'>
      <h2 className='topic'>Features</h2>
      <div className='container'>
        <div className='box'>
          <i className='fas fa-user'></i>
          <p>
            O'quvchilarni imtihonlarga tayyorlash bo'yicha zamonaviy
            dunyo-qarashga ega ustozlar
          </p>
        </div>
        <div className='box'>
          <i className='fa-solid fa-graduation-cap'></i>
          <p>Academic Support - ikkinchi o'qituvchi xizmati.</p>
        </div>
        <div className='box'>
          <i className='fas fa-users'></i>
          <p>
            Darsdan tashqari qo'shimcha dars tayyorlash uchun co-working joylar
          </p>
        </div>
      </div>
    </article>
  )
}

export default Features
