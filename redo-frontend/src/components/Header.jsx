import React from 'react'
import logo from '../images/logo.png'
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <div className="Header">
        <img src={logo} alt="logo" className="Logo"/>
        <h1>Simpler</h1>
      </div>
  )
}

export default Header