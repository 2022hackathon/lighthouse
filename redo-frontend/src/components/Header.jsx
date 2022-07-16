import React from 'react'
import logo from '../images/lighthouselogo.png'
import lighthousetext from '../images/lighthousetext.png'
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <div className="Header">
        {/* <img src={logo} alt="logo" className="Logo"/> */}
        <a href="http://127.0.0.1:3000/main"><img className='Logo' src={logo} alt="logo" /> </a>
        <h1>Lighthouse</h1>
      </div>
  )
}

export default Header