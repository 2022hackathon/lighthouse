import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import NewUserButton from '../images/newuserbutton.png'

function LogInPage (props) {
  let navigate = useNavigate();

  function getLogInData() {
    const username1 = document.getElementById('login-email').value;
    console.log(username1);
    const password1 = document.getElementById('login-password').value;
    console.log(password1);
    const requestOptions = {
      method: 'POST',
      headers: { 'accept': 'application/json', 'Content-Type':'application/x-www-form-urlencoded' },
      body: "grant_type&username="+encodeURIComponent(username1) +
      "&password="+encodeURIComponent(password1)+ 
      "&scope=&client_id=&client_secret="
    };

    fetch('http://127.0.0.1:8000/token', requestOptions)
      .then(response => {
        if(!response.ok) {
          document.getElementById('login-password').value = ""
          throw new Error(response.status);
        } else return response.json();
      }).then(data => {
          props.updateToken(data)
          navigate("/", {replace: true})
      }).catch(err => console.log(err));
  }
return (
    <div>
      <Container maxWidth="sm">
      <Box component="form"
      noValidate
      autoComplete="off">
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="settingBox">
        <TextField id="login-email" label="Email" variant="outlined" />
        <TextField id="login-password" label="Password" variant="outlined" type = "password"/>
        <div className="LoginButtons">
          <Link to="/main">
            <Button variant="contained" size = "medium" color="secondary" onClick ={() => {getLogInData();}} >
              Log In
            </Button>
          </Link>
            
        </div>
      </div>
      
      </Box>
      </Container>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <img src={NewUserButton} alt="logo" className="newuser"/>

      <br/>
      <br/>

      <div className="newuser">
        <Link to="/sign-up">
          <Button variant="contained" size = "medium" color="secondary">
            Sign Up
          </Button>
        </Link>
      </div>
      

    </div>
    

  );

}
export default LogInPage;