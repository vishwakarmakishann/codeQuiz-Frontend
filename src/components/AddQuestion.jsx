import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import bg from '../assets/bg.png'

const AddQuestion = () => { 
    const nav = useNavigate();
    const { quizId } = useParams();
    const [question, setQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [answer, setAnswer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post(`${import.meta.env.VITE_API_URL}/question`, { quizId, question, options: [option1, option2, option3, option4], answer })
            nav("/viewQuizzes");
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <>
            <div className='bg-cover bg-center' style={{ backgroundImage: `url(${bg})` }}>
                <div className='w-10/12 sm:w-[30%] mx-auto h-screen py-20 sm:p-5'>
                    <h2 className='text-3xl font-semibold pb-5 text-center'>Add Question</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="ques">Question</label>
                        <input type="text" name="ques" id="ques" placeholder='Enter question' className='border bg-white w-full rounded-lg px-4 py-2 my-2' onChange={(e) => setQuestion(e.target.value)} />
                        <label htmlFor="opt">Options</label>
                        <input type="text" name="opt" id="opt" placeholder='Enter option 1' className='border bg-white w-full rounded-lg px-4 py-2 my-2' onChange={(e) => setOption1(e.target.value)} />
                        <input type="text" name="opt" id="opt" placeholder='Enter option 2' className='border bg-white w-full rounded-lg px-4 py-2 my-2' onChange={(e) => setOption2(e.target.value)} />
                        <input type="text" name="opt" id="opt" placeholder='Enter option 3' className='border bg-white w-full rounded-lg px-4 py-2 my-2' onChange={(e) => setOption3(e.target.value)} />
                        <input type="text" name="opt" id="opt" placeholder='Enter option 4' className='border bg-white w-full rounded-lg px-4 py-2 my-2' onChange={(e) => setOption4(e.target.value)} />
                        <label htmlFor="ans">Answer</label>
                        <input type="text" name="ans" id="ans" placeholder='Enter answer' className='border bg-white w-full rounded-lg px-4 py-2 my-2' onChange={(e) => setAnswer(e.target.value)} />
                        <button type="submit" className='bg-blue-800 text-white px-4 py-2 rounded-lg w-full my-2'>Add</button>
                        <NavLink to="/viewQuizzes" className='bg-blue-200 block w-full text-center px-4 py-2 rounded-lg'>Cancel</NavLink>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddQuestion
