import { SyntheticEvent, useState } from 'react'
import FormContainer from '../components/FormContainer'
import { RouteComponentProps } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

interface Props {
  history: RouteComponentProps['history']
}

const SignupScreen = ({ history }: Props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault()

    await fetch('http://localhost:8081/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      }),
    })

    history.push('/login')
  }

  return (
    <FormContainer>
      <h1 className='my-3'>Sign Up</h1>
      <Form onSubmit={submitHandler} className='py-3'>
        <Form.Group controlId='firstName' className='my-3'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='firstName'
            placeholder='Enter your first name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='lastName' className='my-3'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='lastName'
            placeholder='Enter your last name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='email' className='my-3'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='password' className='my-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit' className='my-3'>
          Sign Up
        </Button>
      </Form>
    </FormContainer>
  )
}

export default SignupScreen
