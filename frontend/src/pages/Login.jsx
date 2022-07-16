import React from 'react'
import image from '../images/card.png'
import LogInPage from '../components/LogInPage'
import Logo from '../images/simplerlogo.png'

const Login = () => {
  return (
    <div className="Login">
      <h1>Simpler</h1>
      <image src={Logo} alt="logo" className="logo" />
      <span><img className="LoginImage" src={image} alt="card" /> </span>
      <span><LogInPage /></span>
    </div>
  )
}

export default Login