import React from 'react'
import '../css/teachers.css'
import TeacherBox from './TeacherBox'

const teachers = [
  {
    name: 'John Doe',
    description: 'Teacher from IELTS 7+ and 8.5 score holder',
    banner: 'teacher1.png',
    background:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 48.17%, #0ACF83 92.48%)',
  },
  {
    name: 'Edward Snowden',
    description: 'Teacher from General English and 8.0 holder',
    banner: 'teacher2.png',
    background:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 53.63%, #0AACDE 91.05%)',
  },
  {
    name: 'Jone Doe',
    description: 'Teacher from IELTS speed-up and 8.0 holder',
    banner: 'teacher3.png',
    background:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 53.19%, #F24E1E 91.59%)',
  },
]

const Teachers = () => {
  return (
    <article id='teachers'>
      <h1 className='topic'>Our Teachers</h1>
      <div className='container'>
        {teachers.map((teacher, ind) => (
          <TeacherBox teacher={teacher} key={ind} />
        ))}
      </div>
    </article>
  )
}

export default Teachers
