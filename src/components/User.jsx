import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import homebg from '../assets/homebg.png'
import mobbg from '../assets/mobbg.png'
import card from '../assets/card.png'
import axios from 'axios'

const Home = ({ username }) => {
    const nav = useNavigate();
    const [user, setUser] = useState("");
    const carouselRef = useRef(null);
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

    const scroll = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = 280;
            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const features = [
        { title: "Compete & Earn Badges", img: card },
        { title: "Fun, Bite-Sized Challenges", img: card },
        { title: "Learn & Track Progress", img: card },
    ];

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/session`, { withCredentials: true })
            .then((result) => {
                console.log("Session API response:", result.data);
                setUser(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    async function handleLogout() {
        await axios.post(`${import.meta.env.VITE_API_URL}/auth/logout`, {}, { withCredentials: true })
            .then(() => {
                nav("/")
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            {/*Navbar*/}
            <div className='flex justify-between items-center p-4 bg-transparent fixed w-full'>
                <h2 className='text-indigo-900 text-2xl font-bold'>codeQuiz</h2>
                <ul className='hidden sm:flex items-center space-x-4'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/quiz">Quiz</NavLink></li>
                    <li><button className="bg-red-600 text-white px-4 py-2 rounded-lg" onClick={handleLogout}>Logout</button></li>
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
                        <li><NavLink to="/quiz" className="text-blue-700">Quiz</NavLink></li>
                        <li><button className="block bg-red-600 text-white text-center w-full py-2 rounded-lg" onClick={handleLogout}>Logout</button></li>
                    </ul>
                )
            }


            {/* Hero Section (Mobile) */}
            <div className='h-screen bg-cover bg-center sm:hidden' style={{ backgroundImage: `url(${mobbg})` }}>
                <div className='h-screen flex flex-col justify-center sm:w-1/2'>
                    <div className='flex flex-col gap-3 ps-10 pb-30 sm:mx-auto w-[80%]'>
                        <h2 className='text-6xl font-bold'>
                            Welcome {user?.username || "Penguin"}! 🐧
                        </h2>
                        <p className='text-xl'>
                            Challenge yourself with fun quizzes, climb the leaderboard, and level up your coding journey.
                        </p>
                        <div>
                            <NavLink to="/quiz" className="bg-blue-700 text-white px-10 py-2 rounded-lg">
                                Start Quiz
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section (Desktop) */}
            <div className='hidden sm:block h-screen bg-cover' style={{ backgroundImage: `url(${homebg})` }}>
                <div className='h-screen flex flex-col justify-center sm:w-1/2'>
                    <div className='flex flex-col gap-3 ps-8 sm:mx-auto w-[80%]'>
                        <h2 className='text-6xl font-bold'>
                            Welcome {user?.username || "Penguin"}! 🐧
                        </h2>
                        <p className='text-xl'>
                            Challenge yourself with fun quizzes, climb the leaderboard, and level up your coding journey.
                        </p>
                        <div>
                            <NavLink to="/quiz" className="bg-blue-700 text-white px-10 py-2 rounded-lg">
                                Start Quiz
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="flex flex-col text-center mx-auto my-20 max-w-4xl">
                <h2 className="text-5xl font-semibold pb-7">Features</h2>
                <div className="relative">
                    <div
                        ref={carouselRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-10"
                    >
                        {features.map((f, i) => (
                            <div key={i} className="flex-shrink-0 w-64 bg-blue-100 rounded-lg text-center">
                                <img src={f.img} alt={f.title} className="w-60 rounded-xl mx-2 pt-2 pb-2" />
                                <h2 className="text-2xl font-semibold pb-4">{f.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-gradient-to-r from-blue-200 to-blue-300 py-20 text-center">
                <h2 className="text-4xl font-bold mb-10">Leaderboard</h2>
                <div className="bg-white w-4/5 mx-auto rounded-xl shadow-lg py-10">
                    <p className="text-gray-600">🏆 Coming soon: See who’s ruling the iceberg!</p>
                </div>
            </div>

            {/* Call to Action (after login) */}
            <div className="py-20 mx-10 text-center">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                    Ready For Your Next Challenge?
                </h2>
                <p className="mb-8 text-lg">
                    Keep building your skills, one quiz at a time. Let’s go!
                </p>
                <NavLink
                    to="/quiz"
                    className="bg-indigo-900 px-8 py-3 rounded-xl text-white hover:bg-indigo-800"
                >
                    Start Quiz
                </NavLink>
            </div>

            {/* Footer */}
            <div className='flex flex-col bg-blue-950 text-white p-8 items-center gap-2'>
                <span>&copy; 2025 Quizzie. All rights reserved</span>
                <ul className='flex space-x-4'>
                    <li><NavLink to="">Privacy</NavLink></li>
                    <li><NavLink to="">Terms</NavLink></li>
                    <li><NavLink to="">Contact</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default Home
