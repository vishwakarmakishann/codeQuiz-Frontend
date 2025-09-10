import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const Admin = () => {
    const nav = useNavigate();
    const [user, setUser] = useState("");
    async function handleLogout() {
        await axios.post(`${import.meta.env.VITE_API_URL}/auth/logout`, {}, { withCredentials: true })
            .then(() => {
                nav("/")
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
            axios.get(`${import.meta.env.VITE_API_URL}/session`, { withCredentials: true })
                .then((result) => {
                    setUser(result.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, []);
    

    return (
        <>
            <div className='bg-blue-200 m-5 rounded-2xl'>
                <div className='w-[80%] mx-auto'>
                    <div className='p-2 pt-20 sm:p-5 sm:flex justify-between'>
                        <h2 className='pb-5 text-4xl font-bold sm:pb-1'> Welcome {user?.username || "admin"}!</h2>
                        <button className='bg-red-600 text-white px-4 py-2 rounded' onClick={handleLogout}>Logout</button>
                    </div>
                    <div className=' flex flex-wrap gap-5 p-2 pb-10 sm:justify-center'>
                        <div className='bg-blue-100 w-full p-10 rounded-lg sm:w-50'>
                            <h2 className='text-4xl font-bold pb-2'>Quizzes</h2>
                            <ul>
                                <li><NavLink to="/addQuiz" className="text-blue-800 underline ">Add Quiz</NavLink></li>
                                <li><NavLink to="/viewQuizzes" className="text-blue-800 underline ">View Quiz</NavLink></li>
                            </ul>
                        </div>
                        <div className='bg-blue-100 w-full p-10 rounded-lg sm:w-50'>
                            <h2 className='text-4xl font-bold pb-2'>Users</h2>
                            <ul>
                                <li><NavLink to="/addUser" className="text-blue-800 underline ">Add User/Admin</NavLink></li>
                                <li><NavLink to="/viewUsers" className="text-blue-800 underline ">View Users</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Admin