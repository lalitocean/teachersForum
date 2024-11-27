
import Login from './pages/Login'
import { useAuth } from './context/AuthContext'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import Home from './pages/Home'
function App() {
  const { auth } = useAuth();
  const ProtectedRoute = ({ children }) => {
    const { auth } = useAuth();
    return auth.user ? children : <Navigate to='/login' />
  }

  return (


    <BrowserRouter>
      <div className=''>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/register' element={auth?.user ? <Navigate to="/" /> : <Register />} />

          <Route path='/login' element={auth?.user ? <Navigate to='/' /> : <Login />} />

          <Route path='/profile' element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>

          } />

        </Routes>

        <Footer />
      </div>
    </BrowserRouter>


  )
}

export default App
