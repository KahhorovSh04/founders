import React from 'react'

const CourseCard = ({ course }) => {
  return (
    <div className='course-card'>
      <img src={require(`../images/${course.banner}`).default} alt='' />
      <div className='card-body'>
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <button>
          Learn more <i className='fa-solid fa-right-long'></i>
        </button>
      </div>
    </div>
  )
}

export default CourseCard
