import FormContainer from '../components/FormContainer'
import { Form, Button } from 'react-bootstrap'

const LoginScreen = () => {
  return (
    <FormContainer>
      <Form>
        <Form.Group controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email address' />
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Login
        </Button>
      </Form>
    </FormContainer>
  )
}

export default LoginScreen
