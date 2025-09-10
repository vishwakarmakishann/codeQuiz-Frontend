import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import bg from '../assets/bg.png'

const AddQuiz = () => {
    const [quiz, setQuiz] = useState("");
    const [message, setMessage] = useState(null);
    const [errr, setErrorr] = useState(null);
    const nav = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/quiz`, { name: quiz });
            setMessage(res.data.message);
            setTimeout(() => {
                nav("/admin");
            }, 2000);
        } catch (error) {
            setErrorr(error.response.data.message);
        }
    }

    return (
        <>
            <div className='bg-cover bg-center' style={{ backgroundImage: `url(${bg})` }}>
                <div className='h-screen w-10/12 mx-auto flex flex-col justify-center sm:w-[30%]'>
                    <div>
                        <h2 className='text-4xl font-semibold pb-5 text-center'>Add Quiz</h2>
                    </div>
                    {
                        message && (
                            <div className='bg-green-400 w-full p-2 mb-2 rounded'>
                                <span >{message}</span>
                            </div>
                        )
                    }
                    {
                        errr && (
                            <div className='bg-red-200 text-red-600 w-full p-2 mb-2 rounded'>
                                <span >{errr}</span>
                            </div>
                        )
                    }
                    <div>
                        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-2'>
                            <label htmlFor="name" className='text-xl'>Name</label>
                            <input type="text" name="name" id="name" placeholder='Enter quiz name' className='bg-white w-full px-4 py-2 rounded-lg border-1' onChange={(e) => setQuiz(e.target.value)} required />
                            <button type='submit' className='bg-indigo-800 text-white w-full px-4 py-2 rounded-lg'>Add</button>
                            <NavLink to="/admin" className='bg-blue-200 w-full text-center px-4 py-2 rounded-lg'>Cancel</NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddQuiz
