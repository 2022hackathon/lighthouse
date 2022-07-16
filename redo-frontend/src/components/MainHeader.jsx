import React from 'react'
import Header from './Header'
import settings from '../images/settings.png'
import {Link, useNavigate} from "react-router-dom";

const MainHeader = () => {
  return (
    <div className="MainHeader">
        <Header />
        <Link to="/settings"><img className="settings" src={settings} alt="settings"/></Link>
    </div>
  )
}

export default MainHeader