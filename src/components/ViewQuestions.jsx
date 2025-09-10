import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ViewQuestions = () => {
    const {quizId} = useParams();
    const nav = useNavigate();
    const [question, setQuestion] = useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/question/quiz/${quizId}`).then((result) => {
            setQuestion(result.data);
        }).catch((err) => {
            console.log(err);

        });
    }, [])


    function handleEdit(questionId) {
        nav(`/editQuestion/${questionId}`,{ state: { quizId: quizId } });
    }
    async function handleDelete(questionId) {
        if (window.confirm("Are you sure you want to delete this question?")) {
            await axios.delete(`${import.meta.env.VITE_API_URL}/question/${questionId}`)
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/question/quiz/${quizId}`);
            setQuestion(result.data);
            nav(`/viewQuestions/${quizId}`);
        }   
    }
    return (
        <>
            <div className='p-5 pt-5 sm:p-20'>
                <div className='flex justify-between py-2'>
                    <h2 className='text-3xl font-semibold'>Questions</h2>
                    <button className='bg-gray-500 text-white px-4 py-2 rounded-lg' onClick={() => nav("/viewQuizzes")}>Back to Quizzes</button>
                </div>
                <div>
                    <table className='border w-full'>
                        <thead className='bg-gray-900 text-white'>
                            <td className='border px-4 py-2'>Quuestion</td>
                            <td className='border px-4 py-2'>Options</td>
                            <td className='border px-4 py-2'>Answer</td>
                            <td className='border px-4 py-2'>Actions</td>
                        </thead>
                        <tbody>
                            {
                                question.map((i) => (
                                    <tr key={i._id}>
                                        <td className='border px-4 py-2'>{i.question}</td>
                                        <td className='border px-4 py-2'>{i.options.join(", ")}</td>
                                        <td className='border px-4 py-2'>{i.answer}</td>
                                        <td className='border px-4 py-2'>
                                            <button className='bg-blue-600 px-4 py-2 rounded-lg text-white w-full sm:w-auto me-2 mb-2' onClick={() => handleEdit(i._id)}>Edit</button>
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

export default ViewQuestions
