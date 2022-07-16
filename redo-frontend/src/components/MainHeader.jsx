import React from 'react'
import Header from './Header'
import welcome from '../images/welcome.png'
import settings from '../images/settings.png'

const MainHeader = () => {
  return (
    <div>
        <Header />
        <img className="settings" src={settings} alt="settings"/>
    </div>
  )
}

export default MainHeader