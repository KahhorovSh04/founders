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
        alt={teacher.name}
      />
      <div
        className='body'
        style={{
          background: teacher.background,
        }}
      >
        <h2>{teacher.name}</h2>
        <p>{teacher.description}</p>
      </div>
    </div>
  )
}

export default TeacherBox
