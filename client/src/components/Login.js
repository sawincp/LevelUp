import React,{ useState } from 'react'
import Button from "react-bootstrap/Button"
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

function Login() {
    const [showLogin, setShowLogin]= useState(true)

  return (
    <div>
    {showLogin ? (
      <>
      <LoginForm  />
      <p>
        Don't have an account?
      </p>
      <Button onClick ={()=> setShowLogin(false)}>
          Sign Up!
        </Button>
      </>
    ) : (
      <>
      <SignupForm />
      <p>
        Already have an account?
      </p>
      <Button onClick={()=> setShowLogin(true)}>
          Log In!
        </Button>
      </>
    )}
  </div>
  )
}

export default Login
