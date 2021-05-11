import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/signup' component={SignupScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
