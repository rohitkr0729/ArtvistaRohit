import React from 'react'
import Herosection from './components/Herosection'
import {Routes,Route} from 'react-router-dom'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path="/" Component={Herosection}/>
      <Route path="/about" Component={About}/>
      <Route path="/gallery" Component={Gallery}/>
      <Route path="/contact" Component={Contact}/>

      
    </Routes>
    </>
  )
}

export default App