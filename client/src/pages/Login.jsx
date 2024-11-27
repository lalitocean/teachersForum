import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()
    // holding data
    const [formdata, setFormdata] = useState({
        name: "",
        password: ""
    })
    const handleonchange = (e) => {
        const { name, value } = e.target;
        setFormdata((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    // handle submit 
    const handlesubmit = (e) => {
        e.preventDefault();
        login(formdata)
        navigate('/profile')

    }


    return (
        <div className='w-full '>
            <div className='flex flex-col w-[34vw] bg-red-300 p-6 gap-4 mx-auto'>
                <h2 className=' text-2xl text-center font-semibold'>Login Page</h2>
                <input type="text" placeholder='username' name='name' onChange={handleonchange} value={formdata.name} className='p-2' />

                <input type="password" name='password' onChange={handleonchange} value={formdata.password} placeholder='********' className='p-2' />

                <button onClick={handlesubmit} className='bg-fuchsia-500 px-6 py-2'>submit</button>
            </div>
        </div >
    )
}

export default Login