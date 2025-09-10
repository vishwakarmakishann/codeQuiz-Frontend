import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Quiz from './components/Quiz'
import Questions from './components/Questions'
// import Page2 from './components/Page2'
import User from './components/User'
import Result from './components/Result'
import Admin from './components/Admin'
import AddQuiz from './components/AddQuiz'
import ViewQuizzes from './components/ViewQuizzes'
import AddQuestion from './components/AddQuestion'
import ViewQuestions from './components/ViewQuestions'
import EditQuiz from './components/EditQuiz'
import EditQuestion from './components/EditQuestion'
import About from './components/About'
import AddUser from './components/AddUser'
import ViewUser from './components/ViewUser'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navbar /><Home /></>} />
          <Route path='/about' element={<><Navbar/><About/></>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/question/:quizId' element={<Questions />} />
          {/* <Route path='/test' element={<HomeTest/>}/> */}
          <Route path='/result' element={<Result/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/addQuiz' element={<AddQuiz/>}/>
          <Route path='/viewQuizzes' element={<ViewQuizzes/>}/>
          <Route path='/addQuestion/:quizId' element={<AddQuestion/>}/>
          <Route path='/viewQuestions/:quizId' element={<ViewQuestions/>}/>
          <Route path='/editQuiz/:quizId' element={<EditQuiz/>}/>
          <Route path='/editQuestion/:quesId' element={<EditQuestion/>}/>
          <Route path='/addUser' element={<AddUser/>}/>
          <Route path='/viewUsers' element={<ViewUser/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
