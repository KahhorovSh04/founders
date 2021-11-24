import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Courses from './components/Courses'
import Features from './components/Features'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Courses />
      <Features />
    </div>
  )
}

export default App
