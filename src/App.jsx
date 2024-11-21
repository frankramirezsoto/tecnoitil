import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Main />
      <Services />
      <Footer />
    </>
  )
}

export default App
