import { useState, useEffect } from 'react'

import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'

export default function App() {
return(
  <>
    <Header/>
    <Navbar/>
    <Content/>
    <Footer/>
  </>
  )
}

