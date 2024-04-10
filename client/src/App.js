import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from 'axios'

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

  

  return (
    <div>
      {currentUser ? (
        <>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Profile />} />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;