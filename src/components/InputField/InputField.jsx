import React from 'react'
import TextField from '@mui/material/TextField'

const InputField = ({ label }) => {
  return (
    <TextField sx={{ borderRadius: "8px", "& .MuiOutlinedInput-root": { borderRadius: "8px" } }} label={label} variant="outlined" fullWidth />
  )
}

export default InputField