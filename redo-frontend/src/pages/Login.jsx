import React from 'react'
import image from '../images/card.png'
import LogInPage from '../components/LogInPage'
import Header from '../components/Header'

const Login = () => {
  return (
    <div>
      <Header />
      <div className="LoginContainer">
        <span><img className="LoginImage" src={image} alt="card" /> </span>
        <span><LogInPage /></span>
      </div>
    </div>
  )
}

export default Login