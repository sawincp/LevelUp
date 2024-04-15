import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from 'axios'
import {useRecoilState} from 'recoil'
import {userState} from './state/atoms/UserState'

import Login from "./components/Login";
import Nav from './components/Nav'
import Profile from './components/Profile'

function App() {

  const [currentUser, setCurrentUser] = useRecoilState(userState)

  console.log("Current User:", currentUser)

  
  return (
    <div>
      {currentUser ? (
        <>
        <Profile />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;