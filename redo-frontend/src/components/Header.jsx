import React from 'react'
import logo from '../images/logo.png'
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <div className="Header">
        <img src={logo} alt="logo" className="Logo"/>
        <Typography variant="h2">Simpler</Typography>
      </div>
  )
}

export default Header