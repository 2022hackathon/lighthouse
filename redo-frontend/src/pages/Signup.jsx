import React from 'react'
import AdminSignUp from '../components/AdminSignUp'
import image from '../images/card.png'

const Signup = () => {
  return (
    <div className="Login">
        <span><img className="LoginImage" src={image} alt="card" /> </span>
        <span><AdminSignUp /></span>
    </div>
  )
}

export default Signup