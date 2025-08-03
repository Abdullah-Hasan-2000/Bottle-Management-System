import React from 'react'
import { auth } from '../config/firebase.jsx'
import { Box, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import InputField from '../components/InputField/InputField.jsx';
import AuthButton from '../components/AuthButton/AuthButton.jsx';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  return (
    <>
      <Box sx={{ paddingTop: "150px" }} >
        <Paper elevation={4} sx={{ padding: "20px", textAlign: "center", width: "500px", margin: "auto" }}>
          <Typography variant="h4" sx={{ marginTop: "10px" }}>
            Login Screen
          </Typography>
          <Typography variant="body2" sx={{ marginY: "15px" }}>
            Welcome to the Bottle Management System!
          </Typography>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "20px" }}>
            <InputField label="Email" />

            <InputField label="Password" />
          </div>
          <AuthButton color="primary" value="Login" />
          <Typography variant="body2" sx={{ marginTop: "10px" }}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Typography>
        </Paper>
      </Box>
    </>
  )
}

export default LoginScreen;