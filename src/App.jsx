import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Section4 from './Components/Section4'

function App() {

  return (
   <>
  <Navbar />
  <Header />
  <Banner />
  <Section1 />
  <Section2 />
  <Section3 />
  <Section4 />

  </>
  )
}

export default App
