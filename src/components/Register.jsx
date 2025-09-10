import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import authbg from '../assets/auth.png'
import axios from 'axios'

const Register = () => {
    const nav = useNavigate();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, { username:user, password:pass })
            nav("/login");
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <>
            <div className='flex h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${authbg})` }}>
                <div className='hidden lg:block w-1/2 '>

                </div>
                <div className='w-full lg:w-1/2 '>
                    <div className='ps-8 flex flex-col justify-center w-full h-screen mx-auto sm:w-full md:w-[60%]'>
                        <h2 className='text-blue-900 text-4xl font-semibold pb-8'>Create an account</h2>
                        <h2 className='text-blue-900 text-4xl font-semibold pb-8'>{message}</h2>
                        <form action="" onSubmit={handleSubmit}>

                            <div className='pb-3'>
                                <label htmlFor="username" className='text-lg font-semibold'>Username</label>
                                <input type="text" name="username" id="username" placeholder='Enter your username' className='border rounded-xl w-11/12 px-4 py-2' onChange={(e)=>setUser(e.target.value)}/>
                            </div>

                            <div className='pb-5'>
                                <label htmlFor="pass" className='text-lg font-semibold'>Password</label>
                                <input type="password" name="pass" id="pass" placeholder='Enter your password' className='border rounded-xl w-11/12 px-4 py-2' onChange={(e)=>setPass(e.target.value)}/>
                            </div>

                            <button type='submit' className='bg-indigo-900 text-white px-4 py-2 rounded-lg w-11/12'>Register</button>
                            <p className='text-center pe-8 pt-3'>Already have an account? <NavLink to="/login" className="text-indigo-950 font-bold">Login</NavLink></p>

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
