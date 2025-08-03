import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../config/firebase.jsx';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("User signed out");
            navigate('/login');
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    };

  return (
    <>
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard!</p>
        <button onClick={handleSignOut}>Logout</button>
    </>
  )
}

export default Dashboard