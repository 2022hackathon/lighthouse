import React from 'react'
import image from '../images/card.png'
import LogInPage from '../components/LogInPage'
import Logo from '../images/logo.png'

const Login = () => {
  return (
    <div className="Login">
      <h1>Simpler</h1>
      <span><img className="LoginImage" src={image} alt="card" /> </span>
      <span><LogInPage /></span>
    </div>
  )
}

export default Login