import React from 'react'
import { Link } from "react-router-dom";


import About from './Pages/Home/Home'
import Resume from './Pages/Resume/Resume'
import Code from './Pages/Code/Code'
import Art from './Pages/Art/Art'

function Header() {
  return (
    <div>
      <h1><Link to="/About">About</Link></h1>
      <h1>Resume</h1>
      <h1>Code Portfolio</h1>
      <h1>Art Portfolio</h1>
    </div>
  )
}

export default Header