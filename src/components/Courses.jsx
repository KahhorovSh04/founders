import React from 'react'
import CourseCard from './CourseCard'
import '../css/courses.css'

const courses = [
  {
    name: 'General English',
    description:
      'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Phasellus molestie enim.',
    banner: 'general-english.png',
    duration: '3 months',
    requirement: 'Elementary',
  },
  {
    name: 'IELTS speed-up',
    description:
      'Fusce auctor magna quis dolor sodales porttitor. Quisque a pellentesque ex.',
    banner: 'speed-up.png',
    duration: '2 months',
    requirement: 'Elementary',
  },
  {
    name: 'IELTS 7+',
    description:
      'Aliquam erat volutpat. Nullam molestie magna interdum mattis posuere. Ut porttitor pellentesque elit eget auctor.',
    banner: '7+.png',
    duration: '3 months',
    requirement: 'Pre-intermediate',
  },
  {
    name: 'General English',
    description:
      'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Phasellus molestie enim.',
    banner: 'general-english.png',
    duration: '3 months',
    requirement: 'Elementary',
  },
  {
    name: 'IELTS speed-up',
    description:
      'Fusce auctor magna quis dolor sodales porttitor. Quisque a pellentesque ex.',
    banner: 'speed-up.png',
    duration: '2 months',
    requirement: 'Elementary',
  },
  {
    name: 'IELTS 7+',
    description:
      'Aliquam erat volutpat. Nullam molestie magna interdum mattis posuere. Ut porttitor pellentesque elit eget auctor.',
    banner: '7+.png',
    duration: '3 months',
    requirement: 'Pre-intermediate',
  },
]

const Courses = () => {
  const handleClick = (e) => {
    const contain = document.getElementsByClassName('container')[1]
    const btn = e.target
    const icon = btn.getElementsByTagName('i')[0]
    if (contain.style.height === '100%') {
      contain.style.height = '0'
      contain.style.opacity = '0'
    } else {
      contain.style.height = '100%'
      contain.style.opacity = '1'
    }
    icon.classList.toggle('fa-chevron-down')
    icon.classList.toggle('fa-chevron-up')
    if (btn.style.top === 'unset') {
      btn.style.top = '0'
      btn.style.bottom = 'unset'
    } else {
      btn.style.top = 'unset'
      btn.style.bottom = '0'
    }
  }
  return (
    <article id='courses'>
      <h1 className='topic'>Our Courses</h1>
      <div className='container'>
        {courses.map(
          (course, ind) => ind <= 2 && <CourseCard course={course} key={ind} />
        )}
      </div>
      <div className='container disable'>
        {courses.map(
          (course, ind) => ind > 2 && <CourseCard course={course} key={ind} />
        )}
      </div>
      <button className='switch-all' onClick={(e) => handleClick(e)}>
        See all courses <i className='fa-solid fa-chevron-down'></i>
      </button>
    </article>
  )
}

export default Courses
