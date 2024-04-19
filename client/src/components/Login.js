import React,{ useState } from 'react'
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

function Login() {
  
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '40vh' }}>
      {showLogin ? (
        <>
          <LoginForm />
          <p>Don't have an account?</p>
          <Button onClick={() => setShowLogin(false)}>Sign Up!</Button>
        </>
      ) : (
        <>
          <SignupForm />
          <p>Already have an account?</p>
          <Button onClick={() => setShowLogin(true)}>Log In!</Button>
        </>
      )}
    </Container>
  );
}

export default Login;
