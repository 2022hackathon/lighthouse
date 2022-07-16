import React from 'react'
import logo from '../images/lighthouselogo.png'
import lighthousetext from '../images/lighthousetext.png'
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <div className="Header">
        {/* <img src={logo} alt="logo" className="Logo"/> */}
        <a href="http://127.0.0.1:3000/main"><img className='Logo' src={logo} alt="logo" /> </a>
        {/* <img src={lighthousetext} alt="lighthouse text"/> */}
        <a href="http://127.0.0.1:3000/main"><img className='lighthouse text' src={lighthousetext} alt="name" /> </a>
      </div>
  )
}

export default Header