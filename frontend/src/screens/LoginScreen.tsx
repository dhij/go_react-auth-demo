import FormContainer from '../components/FormContainer'
import { Form, Button } from 'react-bootstrap'

const LoginScreen = () => {
  return (
    <FormContainer>
      <h1 className='my-3'>Login</h1>
      <Form>
        <Form.Group controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email address' />
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>

        <Button variant='primary' type='submit' className='my-3'>
          Login
        </Button>
      </Form>
    </FormContainer>
  )
}

export default LoginScreen
