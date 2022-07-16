import React from 'react'
import Header from '../components/Header';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const SettingsLeft = () => {
  return (
    <div>
        <Header />
        <br />
        <Paper className="menu">
          <Typography variant="h6">General Setting</Typography>
          <Typography variant="h6">About</Typography>
          <Typography variant="h6">Help</Typography>
          <Typography variant="h6">Privacy</Typography>
        </ Paper>
      </div>
  )
}

export default SettingsLeft