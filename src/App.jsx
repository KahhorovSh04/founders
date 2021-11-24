import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Courses from './components/Courses'
import Features from './components/Features'
import Contacts from './components/Contacts'
import Teachers from './components/Teachers'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Courses />
      <Features />
      <Teachers />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
