import React from 'react'
import logo from '../images/lighthouselogo.png'
import lighthousetext from '../images/lighthousetext.png'
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <div className="Header">
        <img src={logo} alt="logo" className="Logo"/>
        <img src={lighthousetext} alt="lighthouse text"/>
      </div>
  )
}

export default Header