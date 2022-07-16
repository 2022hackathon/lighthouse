import React from 'react'
import AdminSignUp from '../components/AdminSignUp'
import image from '../images/card.png'
import Header from '../components/Header'

const Signup = () => {
  return (
    <div>
      <Header />
      <div className="LoginContainer">
        <span><img className="LoginImage" src={image} alt="card" /> </span>
        <span><AdminSignUp /></span>
      </div>
    </div>
    
  )
}

export default Signup