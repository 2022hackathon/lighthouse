import React from 'react'
import image from '../images/animation.gif'
import LogInPage from '../components/LogInPage'
import Header from '../components/Header'
import loginprompt from '../images/login.png'

const Login = () => {
  return (
    <div>
      <Header />
      <div className="LoginContainer">
        <span><img className="LoginImage" src={image} alt="card" /> </span>
        <span> <img className="LoginPrompt" src={loginprompt} alt="card" /> <LogInPage className="LoginBlock"/></span>
      </div>
    </div>
  )
}

export default Login