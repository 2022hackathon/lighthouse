import React from "react";
import {Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';


 function AdminSignUp() {

    return (
    <Container maxWidth="sm">
    <Box
        component="form"
        sx={{
        '& > :not(style)': { m: 0, width: '40ch' },
        }}
        noValidate
        autoComplete="off"
    >
    <div>
        <TextField 
        required
        id="email" 
        label="Email" />
    </div>
    <div>
        <TextField 
        required
        id="password" 
        type ="password"
        label="Create Password" />
    </div>
    <div>
        <TextField 
        required
        id="password-confirmation" 
        type = "password"
        //color = {passwordMatch()}
        label="Confirm Password" />
    </div>
    <Link to="/">
        <div>
          <Button variant="contained" size = "medium" color="secondary" onClick={() => alert("Account Created")}>
            Sign Up!
          </Button>
        </div>
    </Link>
    </Box>
    </Container>
    );

}
  const Input = styled('input')({
    display: 'none',
  });

  function getSignUpData() {
    const first_name1 = document.getElementById('first-name').value;
    console.log(first_name1);
    const last_name1 = document.getElementById('last-name').value;
    console.log(last_name1);
    const photo = document.getElementById('profile-photo').value;
    const phone1 = document.getElementById('phone').value;
    console.log(phone1);
    const email1 = document.getElementById('email').value;
    console.log(email1);
    const password1 = document.getElementById('password').value;
    console.log(password1);

    
    const requestOptions = {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:3000/','Access-Control-Allow-Credentials': 'true'},
      body: JSON.stringify({ 
        first_name: first_name1, 
        last_name: last_name1,
        email: email1,
        password: password1,
        /*phone: phone1*/})
    };

    fetch('http://127.0.0.1:8000/signup/admin', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
    

  }

  function passwordMatch() {
    const password1 = document.getElementById('password');
    const passwordConfirmation1 = document.getElementById('password-confirmation');

    if (password1 == null && passwordConfirmation1==null) {
      return "primary";
    }
    if (JSON.stringify(password1.value) === JSON.stringify(passwordConfirmation1.value)) {
      return "primary";
    }
    else {
      return "error";
    }
  }

export default AdminSignUp;
