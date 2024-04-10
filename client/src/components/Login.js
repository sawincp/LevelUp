import React,{ useState } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

function Login() {
    const [showLogin, setShowLogin]= useState(true)

  return (
    <div>
    {showLogin ? (
      <>
      <h1>Log In</h1>
      <LoginForm  />
      <hr></hr>
      <p>
        Don't have an account?
      </p>
      <button onClick ={()=> setShowLogin(false)}>
          Sign Up!
        </button>
      </>
    ) : (
      <>
      <h1>Sign Up</h1>
      <SignupForm />
      <hr></hr>
      <p>
        Already have an account?
      </p>
      <button onClick={()=> setShowLogin(true)}>
          Log In!
        </button>
      </>
    )}
  </div>
  )
}

export default Login
