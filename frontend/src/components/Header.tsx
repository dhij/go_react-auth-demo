import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

interface Props {
  firstName: string
  setFirstName: (firstName: string) => void
}

const Header = ({ firstName, setFirstName }: Props) => {
  const logoutHandler = async () => {
    await fetch('http://localhost:8081/api/logout', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
    setFirstName('')
  }

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Go React Auth</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {firstName ? (
              <Nav className='ms-auto'>
                <LinkContainer to='/login'>
                  <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
                </LinkContainer>
              </Nav>
            ) : (
              <Nav className='ms-auto'>
                <LinkContainer to='/signup'>
                  <Nav.Link>Sign Up</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
