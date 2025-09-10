import React, { useEffect, useState } from 'react'
import axios from 'axios'
import quizbg from '../assets/quiz.png'
import mobbg from '../assets/mobbg.png'
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const [quiz, setQuiz] = useState([]);
  const [selected, setSelected] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/quiz`).then((result) => {
      setQuiz(result.data)
    }).catch((err) => {
      console.log(err);

    });
  }, [])

  function handleButton(quizId) {
    if (selected) {
      nav(`/question/${quizId}`)
    }
  }
  return (
    <>
      {/* <div className='h-screen bg-cover bg-center' style={{ backgroundImage: `url(${quizbg})` }}>
        <div className='bg-blue-300 h-screen w-1/2 bg-cover bg-center'>
          <div className='bg-red-300 flex flex-col justify-center w-5/6 ms-auto gap-5 h-screen'>
            <h2 className='text-6xl font-bold pb-10'>Select a language</h2>
            <select name="" id="options" onChange={(e) => setSelected(e.target.value)}
              className='border w-80 px-4 py-2 bg-indigo-200 rounded'>
              <option value={null}>Select an option</option>
              {
                quiz.map((i) => (
                  <option value={i._id}>{i.name}</option>
                ))
              }
            </select>
            <button className='bg-indigo-900 text-white w-80 px-4 py-2 rounded-lg' onClick={() => handleButton(selected)}>Play</button>
            <button className='bg-blue-100 w-80 px-4 py-2 rounded-lg' onClick={() => nav("/user")}>Back</button>
          </div>
        </div>
      </div> */}
      <div className='h-screen bg-cover bg-center sm:hidden' style={{ backgroundImage: `url(${mobbg})` }}>
        {/*Hero section*/}
        <div className='h-screen flex flex-col justify-center sm:w-1/2'>
          <div className='flex flex-col gap-5 ps-10 pb-30 sm:mx-auto w-[80%]'>
            <h2 className='text-4xl font-bold'>Select a language</h2>
             <select name="" id="options" onChange={(e) => setSelected(e.target.value)}
              className='border w-80 px-4 py-2 bg-indigo-200 rounded'>
              <option value={null}>Select an option</option>
              {
                quiz.map((i) => (
                  <option value={i._id}>{i.name}</option>
                ))
              }
            </select>
            <div className='flex flex-col gap-2'>
              <button className='bg-indigo-900 text-white w-80 px-4 py-2 rounded-lg' onClick={() => handleButton(selected)}>Play</button>
              <button className='bg-white w-80 px-4 py-2 rounded-lg' onClick={() => nav("/user")}>Back</button>
            </div>
          </div>
        </div>
      </div>

      <div className='hidden sm:block h-screen bg-cover bg-center' style={{ backgroundImage: `url(${quizbg})` }}>
        {/*Hero section*/}
        <div className=' h-screen flex flex-col justify-center sm:w-[60%]'>
          <div className='  flex flex-col gap-5 ps-8 sm:mx-auto w-[80%]'>
            <h2 className='text-7xl font-bold pb-5'>Select a language</h2>
            <select name="" id="options" onChange={(e) => setSelected(e.target.value)}
              className='border w-80 px-4 py-2 bg-indigo-200 rounded'>
              <option value={null}>Select an option</option>
              {
                quiz.map((i) => (
                  <option value={i._id}>{i.name}</option>
                ))
              }
            </select>
            <div className='flex flex-col gap-2'>
              <button className='bg-indigo-900 text-white w-80 px-4 py-2 rounded-lg' onClick={() => handleButton(selected)}>Play</button>
              <button className='bg-blue-100 w-80 px-4 py-2 rounded-lg' onClick={() => nav("/user")}>Back</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quiz
