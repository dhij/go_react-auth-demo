import React from 'react'
import { Container } from 'react-bootstrap'

interface Props {
  name: string
}

const HomeScreen = ({ name }: Props) => {
  return (
    <Container className='my-3'>
      {name ? <h1>Welcome {name}!</h1> : <h1>Welcome to the Home Page.</h1>}
    </Container>
  )
}

export default HomeScreen
