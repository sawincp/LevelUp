import React from 'react'
import { useState } from "react"
import axios from "axios"
import { useRecoilState } from "recoil";
import { userState } from "../state/atoms/UserState";

import Button from "react-bootstrap/Button"

function Profile() {
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  const [error, setError]= useState('')

  const handleLogOut = async ()=> {
    try {
      localStorage.removeItem('token')
      await axios.post('/logout', null, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
      setCurrentUser(null)
    } catch(error) {
      const errorMessage = error.response.data.errors[0];
      console.error("Error:", errorMessage);
      setError(errorMessage);
    }
  }

  return (
    <div>
      <h1>Profile</h1>
      <Button onClick={handleLogOut}>Log Out</Button>
      <p>{error}</p>
    </div>
  )
}

export default Profile
