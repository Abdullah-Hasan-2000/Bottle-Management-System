import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen.jsx'
import SignupScreen from './screens/SignupScreen.jsx'
import Dashboard from './screens/Dashboard.jsx'

import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LoginScreen />} />
        <Route path="*" element={<LoginScreen />} />
      </Routes>
    </>
    
  )
}

export default App
