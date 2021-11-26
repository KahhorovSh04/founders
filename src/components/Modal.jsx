import React from 'react'
import '../css/modal.css'

const Modal = ({ currentCourse }) => {
  const closeModal = () => {
    const modal = document.querySelector('#modal')
    modal.style.opacity = '0'
    modal.style['z-index'] = '-1'
  }
  return (
    <article id='modal'>
      <button id='close' onClick={() => closeModal()}>
        <i className='fa-solid fa-rectangle-xmark fa-4x'></i>
      </button>
      <div className='wrapper'>
        <div className='container'>
          <img
            src={require(`../images/${currentCourse.banner}`).default}
            alt='Banner of the course'
          />
          <div className='body'>
            <h1>{currentCourse.name}</h1>
            <p>Duration: {currentCourse.duration}</p>
            <p>Requiry level: {currentCourse.requirement}</p>
            <p>Price: {currentCourse.price} sum/month</p>
            <p>Description: {currentCourse.description}</p>
            <p>Enroll:</p>
            <div className='tels'>
              <i className='fa-solid fa-phone'></i>
              <div>
                <a href='tel:+998712055333'>+998 71 205 53 33</a>
                <a href='tel:+998712050333'>+998 71 205 03 33</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Modal
