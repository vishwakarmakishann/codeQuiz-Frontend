import React, { useEffect, useState } from 'react'
import quiz from '../assets/quiz.png'
import mobbg from '../assets/mobbg.png'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Questions = () => {
    const nav = useNavigate();
    const { quizId } = useParams();
    const [questions, setQuestions] = useState([]);
    const [selected, setSelected] = useState("");
    const [index, setIndex] = useState(0);
    const [answer, setAnswer] = useState(null);
    const [exp, setExp] = useState("");
    const [res, setRes] = useState([]);



    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/question/quiz/${quizId}`).then((result) => {
            setQuestions(result.data);
        }).catch((err) => {
            console.log(err);

        });
    }, []);

    function handleSubmit() {
        if (selected) {
            const ans = questions[index].answer;
            const updatedRes = [...res];
            if (selected === ans) {
                setAnswer("Good!");
                updatedRes[index] = true;
            } else {
                setAnswer("Wrong! Correct Answer: " + ans)
                setExp(questions[index].explanation)
                updatedRes[index] = false;
            }
            setRes(updatedRes);
        } else {
            setAnswer("Please select an option")
        }
    }

    function handleNext() {
        (index < len - 1) ? setIndex(index + 1) : setIndex(len - 1)
        setSelected("");
        setAnswer(null);
        setExp("");

    }

    function handleResult() {
        nav("/result", { state: { data: res } })
    }

    const len = questions.length
    const progress = ((index + 1) / len) * 100;

    return (
        <>
            <div className='flex h-screen bg-cover bg-center sm:hidden' style={{ backgroundImage: `url(${mobbg})` }}>
                <div className='w-full mt-10'>
                    <div className='flex flex-col justify-center py-5 w-10/12 mx-auto gap-3 rounded'>
                        <h2 className='text-xl font-bold ps-1.5'>Progress</h2>
                        {
                            len > 0 &&
                            <div className='bg-blue-200 w-full rounded-full h-3'>
                                <div className='bg-blue-700 h-3 rounded-full transition-all' style={{ width: `${progress}%` }}>

                                </div>
                            </div>
                        }

                        <h2 className='ps-1.5 text-3xl font-bold'>Q. {len > 0 && questions[index].question}</h2>

                        <div className='pb-2'>
                            {
                                len > 0 &&
                                questions[index].options.map((i) => (
                                    <ul className='text-xl'>
                                        <input type="radio" name="options" value={i} onChange={(e) => setSelected(e.target.value)}
                                            className='mx-2 scale-150' checked={selected === i}
                                        />{i}
                                    </ul>
                                ))
                            }
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex space-x-2'>
                                <button className='bg-blue-600 text-white px-5 py-1.5 rounded-lg disabled:opacity-50'
                                    onClick={() => (index > 0) ? setIndex(index - 1) : setIndex(0)} disabled={index === 0}
                                >Prev</button>
                                <button className='bg-blue-600 text-white px-5 py-1.5 rounded-lg disabled:opacity-50'
                                    onClick={handleNext} disabled={index === len - 1}
                                >Next</button>
                            </div>
                            <div className='flex space-x-2'>
                                <button className='bg-green-500 text-white px-4 rounded-lg'
                                    onClick={handleSubmit}
                                >Submit</button>
                                {
                                    index === len - 1 &&
                                    <button className='bg-indigo-500 text-white px-4 rounded-lg'
                                        onClick={handleResult}
                                    >Result</button>
                                }
                            </div>
                        </div>

                    </div>
                    {
                        answer &&
                        <div className="bg-white py-3 mx-auto w-10/12 mt-10 rounded-lg p-2">
                            <h2 className="text-lg font-bold">{answer}</h2>
                            {exp && (
                                <>
                                    <h4 className="pt-2">Explanation</h4>
                                    <p>{exp}</p>
                                </>
                            )}
                        </div>
                    }
                </div>

                {/* <div className='w-4/12 bg-cover bg-center me-15 my-15 rounded-lg' style={{ backgroundImage: `url(${quiz1})` }}>

                </div> */}
            </div>

            <div className='hidden sm:flex h-screen bg-cover bg-center' style={{ backgroundImage: `url(${quiz})` }}>
                <div className='w-1/2 ms-20 mt-10'>
                    <div className='flex flex-col justify-center py-5 w-10/12 mx-auto gap-3 rounded'>
                        <h2 className='text-xl font-bold ps-1.5'>Progress</h2>
                        {
                            len > 0 &&
                            <div className='bg-blue-200 w-full rounded-full h-3'>
                                <div className='bg-blue-700 h-3 rounded-full transition-all' style={{ width: `${progress}%` }}>

                                </div>
                            </div>
                        }

                        <h2 className='ps-1.5 text-3xl font-bold'>Q. {len > 0 && questions[index].question}</h2>

                        <div className='pb-2'>
                            {len > 0 &&
                                questions[index].options.map((option, idx) => (
                                    <div key={idx} className='text-xl flex items-center mb-2'>
                                        <input
                                            type="radio"
                                            name={`options-${index}`}
                                            value={option}
                                            onChange={(e) => setSelected(e.target.value)}
                                            className='mx-2 scale-150'
                                            checked={selected === option}
                                        />
                                        <label>{option}</label>
                                    </div>
                                ))
                            }
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex space-x-2'>
                                <button className='bg-blue-600 text-white px-5 py-1.5 rounded-lg disabled:opacity-50'
                                    onClick={() => (index > 0) ? setIndex(index - 1) : setIndex(0)} disabled={index === 0}
                                >Prev</button>
                                <button className='bg-blue-600 text-white px-5 py-1.5 rounded-lg disabled:opacity-50'
                                    onClick={handleNext} disabled={index === len - 1}
                                >Next</button>
                            </div>
                            <div className='flex space-x-2'>
                                <button className='bg-green-500 text-white px-4 rounded-lg'
                                    onClick={handleSubmit}
                                >Submit</button>
                                {
                                    index === len - 1 &&
                                    <button className='bg-indigo-500 text-white px-4 rounded-lg'
                                        onClick={handleResult}
                                    >Result</button>
                                }
                            </div>
                        </div>

                    </div>
                    {
                        answer &&
                        <div className="bg-white py-3 mx-auto w-10/12 mt-10 rounded-lg p-2">
                            <h2 className="text-lg font-bold">{answer}</h2>
                            {exp && (
                                <>
                                    <h4 className="pt-2">Explanation</h4>
                                    <p>{exp}</p>
                                </>
                            )}
                        </div>
                    }
                </div>

                {/* <div className='w-4/12 bg-cover bg-center me-15 my-15 rounded-lg' style={{ backgroundImage: `url(${quiz1})` }}>

                </div> */}
            </div>
        </>
    )
}

export default Questions
