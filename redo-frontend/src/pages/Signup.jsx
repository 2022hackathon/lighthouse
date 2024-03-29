import React from 'react'
import AdminSignUp from '../components/AdminSignUp'
import image from '../images/animation.gif'
import Header from '../components/Header'
import prompt from '../images/prompt.png'

const Signup = () => {
  return (
    <div>
      <Header />
      <div className="LoginContainer">
        <span><img className="LoginImage" src={image} alt="card" /> </span>
        <span> <img className="LoginPrompt" src={prompt} alt="card" /><AdminSignUp /></span>
      </div>
    </div>
    
  )
}

export default Signup