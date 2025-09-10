import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`flex justify-between items-center p-4 fixed w-full ${isScrolled ? "bg-white" : "bg-transparent"} z-50`}>
        <h2 className='text-indigo-900 text-2xl font-bold'>codeQuiz</h2>
        <ul className='hidden sm:flex space-x-4'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/login">Quiz</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/login" className="bg-blue-900 text-white px-4 py-2 rounded-lg">Sign In</NavLink></li>
        </ul>

        <div className='flex sm:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {
              !isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 32 32">
                  <path d="M3.5 10h25c.828 0 1.5-.672 1.5-1.5S29.328 7 28.5 7h-25C2.672 7 2 7.672 2 8.5S2.672 10 3.5 10zM28.5 15h-25C2.672 15 2 15.672 2 16.5S2.672 18 3.5 18h25c.828 0 1.5-.672 1.5-1.5S29.328 15 28.5 15zM28.5 23h-25C2.672 23 2 23.672 2 24.5S2.672 26 3.5 26h25c.828 0 1.5-.672 1.5-1.5S29.328 23 28.5 23z"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                  <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                </svg>
              )
            }
          </button>
        </div>
      </div>
      {
        isOpen && (
          <ul className='flex flex-col gap-4 p-4 fixed w-full mt-13 bg-white' >
            <li><NavLink to="/" className="text-blue-700">Home</NavLink></li>
            <li><NavLink to="/login" className="text-blue-700">Quiz</NavLink></li>
            <li><NavLink to="/about" className="text-blue-700">About</NavLink></li>
            <li><NavLink to="/login" className="block bg-blue-900 text-white text-center py-2 rounded-lg">Sign In</NavLink></li>
          </ul>
        )
      }
    </>
  )
}

export default Navbar
