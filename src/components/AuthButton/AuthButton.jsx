import React from 'react'
import { Button } from '@mui/material';

const AuthButton = ({color, value}) => {
  return (
    <Button sx={{padding: "12px 16px", fontSize: "16px", borderRadius: "8px"}} variant="contained" color={color} fullWidth>
      {value}
    </Button>
  )
}

export default AuthButton