import React from 'react'
import image from '../images/card.png'

const Login = () => {
  return (
    <div className="Login">
      <img className="LoginImage" src={image} alt="card" /> 
      <button class="btn btn-primary">Button</button>
      <h1 className="text-3xl font-bold underline">
      Log into your account! 
    </h1>
    </div>
  )
}

export default Login