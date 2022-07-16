import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import MainHeader from '../components/MainHeader';
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton, InstagramLoginButton, LinkedInLoginButton } from "react-social-login-buttons";

const SetUpSocials = () => {
  return (
    <div>
        < MainHeader />
        <h1>Login with your socials</h1>
        <FacebookLoginButton onClick={() => alert("Hello")} />
        <GoogleLoginButton onClick={() => alert("Hello")} />
        <TwitterLoginButton onClick={() => alert("Hello")} />
        <InstagramLoginButton onClick={() => alert("Hello")} />
        <LinkedInLoginButton onClick={() => alert("Hello")} />
        <Link to="/main">
        <Button variant="outlined" size = "small" color="primary">
          ALL DONE
        </Button>
      </Link>
    </div>
  )
}

export default SetUpSocials