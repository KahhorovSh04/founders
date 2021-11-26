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
            Donec accumsan arcu magna, nec lobortis leo lobortis vel. Vivamus
            quis scelerisque libero.
          </p>
        </div>
        <div className='box'>
          <i className='fa-solid fa-graduation-cap'></i>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae.
          </p>
        </div>
        <div className='box'>
          <i className='fas fa-users'></i>
          <p>Curabitur ut orci ut dolor condimentum finibus vel sed purus.</p>
        </div>
      </div>
    </article>
  )
}

export default Features
