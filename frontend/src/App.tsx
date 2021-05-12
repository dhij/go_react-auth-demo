import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import { RouteComponentProps, withRouter } from 'react-router'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'

interface Props {
  history: RouteComponentProps['history']
}

const App = ({ history }: Props) => {
  const [firstName, setFirstName] = useState('')

  useEffect(() => {
    ;(async () => {
      const response = await fetch('http://localhost:8081/api/user', {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })
      const data = await response.json()
      setFirstName(data.first_name)
    })()
  })

  return (
    <>
      <Header firstName={firstName} setFirstName={setFirstName} />
      <main>
        <Container>
          <Route
            path='/'
            exact
            component={() => <HomeScreen name={firstName} />}
          />
          <Route
            path='/login'
            component={() => (
              <LoginScreen setFirstName={setFirstName} history={history} />
            )}
          />
          <Route path='/signup' component={SignupScreen} />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default withRouter(App)
