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

const Courses = ({ setCurrentCourse }) => {
  const handleClick = (e) => {
    const btn = e.target
    let icon = btn.getElementsByTagName('i')[0]
    const extras = document.querySelectorAll('.extra')
    console.log(extras[0].scrollHeight)

    extras.forEach((extra) => {
      if (extra.style.maxHeight) {
        extra.style.maxHeight = null
        extra.style.border = null
      } else {
        extra.style.maxHeight = extra.scrollHeight + 'px'
        extra.style.border = '3px solid #000'
      }
    })
    icon.classList.toggle('fa-chevron-down')
    icon.classList.toggle('fa-chevron-up')

    const content = btn.innerHTML.split(' ')
    icon =
      content[content.length - 3] +
      ' ' +
      content[content.length - 2] +
      ' ' +
      content[content.length - 1]
    if (content[0] === 'See') {
      btn.innerHTML = `Collapse ${icon}`
    } else {
      btn.innerHTML = `See all courses ${icon}`
    }
  }
  return (
    <article id='courses'>
      <h2 className='topic'>Our Courses</h2>
      <div className='container'>
        {courses.map((course, ind) =>
          ind <= 2 ? (
            <CourseCard
              setCurrentCourse={setCurrentCourse}
              course={course}
              key={ind}
            />
          ) : (
            <CourseCard
              setCurrentCourse={setCurrentCourse}
              course={course}
              key={ind}
              className='extra'
            />
          )
        )}
      </div>
      <button className='switch-all' onClick={(e) => handleClick(e)}>
        See all courses <i className='fa-solid fa-chevron-down'></i>
      </button>
    </article>
  )
}

export default Courses
