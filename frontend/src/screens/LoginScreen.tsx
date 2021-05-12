import { SyntheticEvent, useState } from 'react'
import FormContainer from '../components/FormContainer'
import { RouteComponentProps } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

interface Props {
  history: RouteComponentProps['history']
  setFirstName: (firstName: string) => void
}

const LoginScreen = ({ history, setFirstName }: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault()

    const response = await fetch('http://localhost:8081/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await response.json()
    setFirstName(data.first_name)
    history.push('/')
  }

  return (
    <FormContainer>
      <h1 className='my-3'>Login</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email' className='my-3'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='password' className='my-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
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

export default LoginScreen
