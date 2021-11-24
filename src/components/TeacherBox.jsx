import React from 'react'

const TeacherBox = ({ teacher }) => {
  return (
    <div
      className='box'
      key='ind'
      style={{
        background: teacher.background,
      }}
    >
      <img
        src={require(`../images/${teacher.banner}`).default}
        alt="Teacher's image"
      />
      <div
        className='body'
        style={{
          background: teacher.background,
        }}
      >
        <h1>{teacher.name}</h1>
        <p>{teacher.description}</p>
      </div>
    </div>
  )
}

export default TeacherBox
