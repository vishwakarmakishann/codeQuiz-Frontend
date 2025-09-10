import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ViewQuizzes = () => {
  const nav = useNavigate();
  const [quiz, setQuiz] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/quiz`).then((result) => {
      setQuiz(result.data);
    }).catch((err) => {
      console.log(err);

    });
  }, [])

  function handleEdit(quizId) {
    nav(`/editQuiz/${quizId}`);
  }

  function handleAdd(quizId) {
    nav(`/addQuestion/${quizId}`);
  }

  function handleView(quizId) {
    nav(`/viewQuestions/${quizId}`);
  }

  async function handleDelete(quizId) {
    if (window.confirm("Are you sure you want to delete this quiz?")) {
      await axios.delete(`${import.meta.env.VITE_API_URL}/quiz/${quizId}`)
      const result = await axios.get(`${import.meta.env.VITE_API_URL}/quiz`);
      setQuiz(result.data);
      nav("/ViewQuizzes");
    }
  }

  return (
    <>
      <div className='p-5 pt-5 sm:p-20'>
        <div className='flex justify-between py-2'>
          <h2 className='text-3xl font-semibold'>Quizzes</h2>
          <button className='bg-gray-500 text-white px-4 py-2 rounded-lg' onClick={() => nav("/admin")}>Back to dashboard</button>
        </div>
        <div>
          <table className='border w-full'>
            <thead className='bg-black text-white'>
              <td className='border px-4 py-2 w-[50%]'>Name</td>
              <td className='border px-4 py-2'>Questions</td>
              <td className='border px-4 py-2'>Actions</td>
            </thead>
            <tbody>
              {
                quiz.map((i) => (
                  <tr key={i._id}>
                    <td className='border px-4 py-2'>{i.name}</td>
                    <td className='border px-4 py-2'>
                      <button className='bg-green-500 px-4 py-2 rounded-lg text-white me-2 mb-2' onClick={() => handleAdd(i._id)}>Add Question</button>
                      <button className='bg-cyan-500 px-4 py-2 rounded-lg text-white me-2' onClick={() => handleView(i._id)}>View Questions</button>
                    </td>
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

export default ViewQuizzes
