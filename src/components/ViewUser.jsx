import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ViewUser = () => {
    const nav = useNavigate();
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/auth`).then((result) => {
            setUser(result.data);
        }).catch((err) => {
            console.log(err);

        });
    }, [])

    // function handleEdit(userId) {
    //     nav(`/editQuiz/${userId}`);
    // }

    async function handleDelete(userId) {
        if (window.confirm("Are you sure you want to delete this quiz?")) {
            await axios.delete(`${import.meta.env.VITE_API_URL}/auth/${userId}`)
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/auth`);
            setUser(result.data);
            nav("/viewUsers");
        }
    }

    return (
        <>
            <div className='p-5 pt-5 sm:p-20'>
                <div className='flex justify-between py-2'>
                    <h2 className='text-3xl font-semibold'>Users</h2>
                    <button className='bg-gray-500 text-white px-4 py-2 rounded-lg' onClick={() => nav("/admin")}>Back to dashboard</button>
                </div>
                <div>
                    <table className='border w-full'>
                        <thead className='bg-black text-white'>
                            <td className='border px-4 py-2 w-[50%]'>Username</td>
                            <td className='border px-4 py-2'>Role</td>
                            <td className='border px-4 py-2'>Actions</td>
                        </thead>
                        <tbody>
                            {
                                user.map((i) => (
                                    <tr key={i._id}>
                                        <td className='border px-4 py-2'>{i.username}</td>
                                        <td className='border px-4 py-2'>{i.role}</td>
                                        <td className='border px-4 py-2'>
                                            {/* <button className='bg-blue-600 px-4 py-2 rounded-lg text-white w-full sm:w-auto me-2 mb-2' onClick={() => handleEdit(i._id)}>Edit</button> */}
                                            <button className='bg-red-600 px-4 py-2 rounded-lg text-white w-full sm:w-auto' onClick={() => handleDelete(i._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ViewUser
