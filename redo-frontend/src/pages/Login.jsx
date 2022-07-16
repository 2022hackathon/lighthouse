import React from 'react'
import image from '../images/card.png'
import LogInPage from '../components/LogInPage'
import logo from '../images/logo.png'
import Typography from '@mui/material/Typography';

// const WhiteTextTypography = withStyles({
//   root: {
//     color: "pink"
//   }
// })(Typography);

const Login = () => {
  return (
    <div>
      <div className="Header">
        <img src={logo} alt="logo" className="logo" className="Logo"/>
        <Typography variant="h2">Simpler</Typography></div>
      <div className="Login">
        <span><img className="LoginImage" src={image} alt="card" /> </span>
        <span><LogInPage /></span>
      </div>
    </div>
  )
}

export default Login