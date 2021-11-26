import React from 'react'
import '../css/teachers.css'
import TeacherBox from './TeacherBox'

const teachers = [
  {
    name: 'John Doe',
    description: 'Instructor of IELTS 7+ course and 8.5 score holder',
    banner: 'teacher1.png',
    background:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 48.17%, #0ACF83 92.48%)',
  },
  {
    name: 'Edward Snowden',
    description: 'Instructor of General English course and 8.0 holder',
    banner: 'teacher2.png',
    background:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 53.63%, #0AACDE 91.05%)',
  },
  {
    name: 'Jane Doe',
    description: 'Instructor of IELTS speed-up course and 8.0 holder',
    banner: 'teacher3.png',
    background:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 53.19%, #F24E1E 91.59%)',
  },
]

const Teachers = () => {
  return (
    <article id='teachers'>
      <h2 className='topic'>Our Instructors</h2>
      <div className='container'>
        {teachers.map((teacher, ind) => (
          <TeacherBox teacher={teacher} key={ind} />
        ))}
      </div>
    </article>
  )
}

export default Teachers
