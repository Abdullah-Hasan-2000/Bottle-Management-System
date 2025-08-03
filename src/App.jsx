import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen.jsx'

import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </>
    
  )
}

export default App
