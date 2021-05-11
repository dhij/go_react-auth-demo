import { useState } from 'react'
import FormContainer from '../components/FormContainer'
import { Form, Button } from 'react-bootstrap'

const SignupScreen = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <FormContainer>
      <h1 className='my-3'>Sign Up</h1>
      <Form>
        <Form.Group controlId='firstName'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='firstName'
            placeholder='Enter your first name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='lastName'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='lastName'
            placeholder='Enter your last name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit' className='my-3'>
          Login
        </Button>
      </Form>
    </FormContainer>
  )
}

export default SignupScreen
