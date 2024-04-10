import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function SignupForm() {
  return (
    <>
    <FloatingLabel controlId='floatingInput'label = "Username"className='mb-3' >
        <Form.Control type='email' placeholder='name@example.com' />
    </FloatingLabel>
    <FloatingLabel controlId='floatingPassword' label='Password' >
        <Form.Control type='password' placeholder='Password' />
    </FloatingLabel>
    </>
  )
}

export default SignupForm
