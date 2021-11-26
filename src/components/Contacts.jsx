import React from 'react'
import '../css/contacts.css'

const Contacts = () => {
  return (
    <article id='contacts'>
      <h2 className='topic'>Contact Us</h2>
      <div className='container'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.2289769212975!2d69.235748!3d41.3038821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba966c0cdbf%3A0xe69be7522d8208da!2sMilliy%20Bog!5e0!3m2!1sen!2s!4v1637792209114!5m2!1sen!2s'
          width='60%'
          // height='450'
          style={{ border: '0' }}
          allowFullScreen=''
          loading='lazy'
          title='Google Maps'
        ></iframe>
        <div className='links'>
          <a href='/' className='location'>
            <i className='fa-solid fa-location-dot'></i>{' '}
            <span>
              Milliy Bog Station, opposite of Legislative Chamber of the Supreme
              Assembly
            </span>
          </a>
          <div className='tels'>
            <i className='fa-solid fa-phone'></i>
            <div>
              <a href='tel:+998712055333'>+998 71 205 53 33</a>
              <a href='tel:+998712050333'>+998 71 205 03 33</a>
            </div>
          </div>
          <a href='https://t.me/founders_school_uz'>
            <i className='fab fa-telegram-plane'></i>
            t.me/founders_school_uz
          </a>
          <a href='https://instagram.com/founders.school.uz'>
            <i className='fa-brands fa-instagram'></i>
            instagram.com/founders.school.uz
          </a>
        </div>
      </div>
    </article>
  )
}

export default Contacts
