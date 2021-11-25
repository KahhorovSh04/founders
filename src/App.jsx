import React, { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Courses from './components/Courses'
import Features from './components/Features'
import Contacts from './components/Contacts'
import Teachers from './components/Teachers'
import Footer from './components/Footer'
import Modal from './components/Modal'

function App() {
  const [currentCourse, setCurrentCourse] = useState({
    name: 'General English',
    description:
      'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Phasellus molestie enim.',
    banner: 'general-english.png',
    duration: '3 months',
    requirement: 'Elementary',
  })
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Courses setCurrentCourse={setCurrentCourse} />
      <Features />
      <Teachers />
      <Contacts />
      <Footer />
      <Modal currentCourse={currentCourse} />
    </div>
  )
}

export default App
