import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
    const { auth, logout } = useAuth()
    // handle logout

    return (
        <nav className='flex justify-between items-center p-3 bg-blue-400'>
            <div>
                logo
            </div>
            <div className='flex items-center justify-between gap-7'>
                {auth.user ? (<>
                    <NavLink to="/profile" end>
                        Profile
                    </NavLink>

                    <button onClick={() => logout()}>
                        logout
                    </button></>) : (<>   <NavLink to="/" end>
                        Home
                    </NavLink>

                        <NavLink to="/register">Register</NavLink>
                        <NavLink to="/login">Login</NavLink></>)}
            </div>
        </nav>
    )
}

export default Navbar