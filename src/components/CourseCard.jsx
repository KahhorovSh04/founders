import React from 'react'

const CourseCard = ({ setCurrentCourse, course }) => {
  const changeCourse = () => {
    const modal = document.querySelector('#modal')
    setCurrentCourse(course)
    modal.style.opacity = '1'
    modal.style['z-index'] = '1'
  }

  return (
    <div className='course-card'>
      <img src={require(`../images/${course.banner}`).default} alt='' />
      <div className='card-body'>
        <h2>{course.name}</h2>
        <p>{course.description}</p>
        <button onClick={() => changeCourse()}>
          Learn more <i className='fa-solid fa-right-long'></i>
        </button>
      </div>
    </div>
  )
}

export default CourseCard
