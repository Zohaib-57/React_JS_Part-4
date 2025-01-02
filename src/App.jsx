import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  

  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
