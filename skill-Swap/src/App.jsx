import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import './index.css'
import Login from './pages/Login.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp.jsx'
import Dashboard from './components/Dashboard.jsx';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup"  element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App
