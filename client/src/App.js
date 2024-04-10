import { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
import axios from 'axios'

import Login from "./components/Login";

function App() {
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(()=>{
    axios.get('/me')
    .then(r =>{
      setCurrentUser(r.data)
    })
    .catch(error =>{
      console.error(error)
    })
  },[])

  // console.log('CurrentUser:', currentUser)

  

  return (
    <div>
      {currentUser ? (<Login />) : <h1>App</h1>}
    </div>
  );
}

export default App;