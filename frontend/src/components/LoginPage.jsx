import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
function LoginPage (props) {
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
    <Container maxWidth="sm">
    <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
    noValidate
    autoComplete="off">
    <TextField id="login-email" label="Email" variant="outlined" />
    <TextField id="login-password" label="Password" variant="outlined" type = "password"/>

    <div>
          <Button variant="contained" size = "medium" color="primary" onClick ={() => {getLogInData();}} >
          Log In
          </Button>
        </div>
        <div></div>
        <div>
        <Link to="/passwordrequest">
            <Button variant="outlined" size = "small" color="primary">
                Forgot Password
            </Button>
        </Link>
    </div>
    </Box>
    </Container>
  );

}
export default LoginPage;