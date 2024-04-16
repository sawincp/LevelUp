import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from 'axios'
import {useRecoilState} from 'recoil'
import {userState} from './state/atoms/UserState'

import Header from './components/Header'
import Login from "./components/Login";
import Profile from './components/Profile'

import Container from "react-bootstrap/esm/Container";

function App() {

  const [currentUser, setCurrentUser] = useRecoilState(userState)

  console.log("User:", currentUser)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/auto_login', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setCurrentUser(response.data);
      })
      .catch(error => {
        console.error('Error during auto-login:', error);
      });
    }
  }, []);

  
  return (
    <div style={{ backgroundColor: "#202634", minHeight: "100vh"}}>
      <Container >
        <Header />
        {currentUser ? (
          <>
            <Profile />
          </>
        ) : (
          <Login />
        )}
      </Container>
    </div>
  );
}

export default App;