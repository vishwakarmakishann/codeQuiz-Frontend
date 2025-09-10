import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import bg from '../assets/bg.png'

const Result = () => {
    const location = useLocation();
    const { data } = location.state || { data: [] };
    function gets(data) {
        return data.reduce((s, i) => i === true ? s + i : s + 0, 0)
    }
    const result = gets(data);
    const percent = (result/10) * 100;

    return (
        <>
            <div className=' h-screen p-20 bg-cover bg-center' style={{ backgroundImage: `url(${bg})` }}>
                <div>
                    <h2 className='text-6xl font-bold pb-4'>Nice attempt, Keep going!</h2>
                    <p className='text-xl pb-10'>You answered {result} out of 10 correctly.</p>
                </div>
                <div className='bg-blue-200 h-3 rounded-full'>
                    <div className='bg-blue-900 h-3 rounded-full' style={{ width: `${percent}%` }}>
                    </div>
                    Score: {percent}%
                </div>
                <div className='flex space-x-2 py-10'>
                    <NavLink to="/quiz" className='bg-blue-600 text-white px-4 py-2 rounded-lg'>Retry</NavLink>
                    <NavLink to="/user" className='bg-white px-4 py-2 rounded-lg'>Home</NavLink>
                </div>
                <div>
                    <p>No worries, Review the explanations and try again. Consistency beats speed.</p>
                </div>
            </div>
        </>
    )
}

export default Result
