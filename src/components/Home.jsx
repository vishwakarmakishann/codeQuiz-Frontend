import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import homebg from '../assets/homebg.png'
import mobbg from '../assets/mobbg.png'
import card from '../assets/card.png'

const Home = () => {
    const carouselRef = useRef(null);

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
    return (
        <>
            <div className='h-screen bg-cover bg-center sm:hidden' style={{ backgroundImage: `url(${mobbg})` }}>
                {/*Hero section*/}
                <div className='h-screen flex flex-col justify-center sm:w-1/2'>
                    <div className='flex flex-col gap-3 ps-10 pb-30 sm:mx-auto w-[80%]'>
                        <h2 className='text-7xl font-bold'>Code Smarter, Waddle Faster!</h2>
                        <p className='text-xl'>Challenge yourself with fun quizzes, climb the leaderboard, and level up your coding journey - one ice block at a time.</p>
                        <div>
                            <NavLink to="/login" className="bg-blue-700 text-white px-10 py-2 rounded-lg">Start Quiz</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden sm:block h-screen bg-cover' style={{ backgroundImage: `url(${homebg})` }}>
                {/*Hero section*/}
                <div className=' h-screen flex flex-col justify-center sm:w-1/2'>
                    <div className='  flex flex-col gap-3 ps-8 sm:mx-auto w-[80%]'>
                        <h2 className='text-7xl font-bold'>Code Smarter, Waddle Faster!</h2>
                        <p className='text-xl'>Challenge yourself with fun quizzes, climb the leaderboard, and level up your coding journey - one ice block at a time.</p>
                        <div>
                            <NavLink to="/login" className="bg-blue-700 text-white px-10 py-2 rounded-lg">Start Quiz</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/*Features*/}
            {/* <div className='flex flex-col text-center mx-auto mt-20'>
                <h2 className='text-5xl font-semibold pb-7'>Features</h2>
                <div className='flex flex-wrap justify-center gap-20'>
                    <div className='flex flex-col bg-blue-100 w-64 text-center rounded-lg'>
                        <img src={card} alt="" className='w-60 rounded-xl mx-2 pt-2 pb-2' />
                        <h2 className='text-2xl font-semibold pb-4'>Compete & Earn Badges</h2>
                    </div>
                    <div className='flex flex-col bg-blue-100 w-64 text-center rounded-lg'>
                        <img src={card} alt="" className='w-60 rounded-xl mx-2 pt-2 pb-2' />
                        <h2 className='text-2xl font-semibold pb-4'>Fun, Bite-Sized Challenges</h2>
                    </div>
                    <div className='flex flex-col bg-blue-100 w-64 text-center rounded-lg'>
                        <img src={card} alt="" className='w-60 rounded-xl mx-2 pt-2 pb-2' />
                        <h2 className='text-2xl font-semibold pb-4'>Learn & Track Progress</h2>
                    </div>
                </div>
            </div> */}
            <div className="flex flex-col text-center mx-auto mt-20 max-w-4xl">
                <h2 className="text-5xl font-semibold pb-7">Features</h2>

                <div className="relative">
                    {/* Left Button */}
                    {/* <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-lg z-10"
                    >
                        ‹
                    </button> */}

                    {/* Scrollable Cards */}
                    <div
                        ref={carouselRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-10"
                    >
                        {features.map((f, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-64 bg-blue-100 rounded-lg text-center"
                            >
                                <img
                                    src={f.img}
                                    alt={f.title}
                                    className="w-60 rounded-xl mx-2 pt-2 pb-2"
                                />
                                <h2 className="text-2xl font-semibold pb-4">{f.title}</h2>
                            </div>
                        ))}
                    </div>

                    {/* Right Button */}
                    {/* <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-lg z-10"
                    >
                        ›
                    </button> */}
                </div>
            </div>


            {/* Stats Section */}
            <div className="my-15 py-20 bg-blue-50 text-center">
                <h2 className="text-4xl font-bold mb-10">Join the Icy Coding World</h2>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-16">
                    <div>
                        <h3 className="text-5xl font-bold text-blue-900">50K+</h3>
                        <p className="text-lg">Daily Players</p>
                    </div>
                    <div>
                        <h3 className="text-5xl font-bold text-blue-900">200K+</h3>
                        <p className="text-lg">Quizzes Completed</p>
                    </div>
                    <div>
                        <h3 className="text-5xl font-bold text-blue-900">1M+</h3>
                        <p className="text-lg">Coding Penguins</p>
                    </div>
                </div>
            </div>


            {/* Features Section */}
            {/* <div className="py-10 bg-white">
                <h2 className="text-5xl font-semibold text-center pb-10">Why Play Here?</h2>
                <div className="flex flex-wrap justify-center gap-10">
                    <div className="flex flex-col bg-blue-100 w-72 text-center rounded-2xl p-6">
                        <img src={card} alt="" className="w-56 mx-auto rounded-xl mb-4" />
                        <h3 className="text-2xl font-semibold">Compete & Earn Badges</h3>
                    </div>
                    <div className="flex flex-col bg-blue-100 w-72 text-center rounded-2xl p-6">
                        <img src={card} alt="" className="w-56 mx-auto rounded-xl mb-4" />
                        <h3 className="text-2xl font-semibold">Fun, Bite-Sized Challenges</h3>
                    </div>
                    <div className="flex flex-col bg-blue-100 w-72 text-center rounded-2xl p-6">
                        <img src={card} alt="" className="w-56 mx-auto rounded-xl mb-4" />
                        <h3 className="text-2xl font-semibold">Learn & Track Progress</h3>
                    </div>
                </div>
            </div> */}




            {/* Leaderboard Section */}
            <div className="bg-gradient-to-r from-blue-200 to-blue-300 py-20 text-center">
                <h2 className="text-4xl font-bold mb-10">Leaderboard</h2>
                <div className="bg-white w-4/5 mx-auto rounded-xl shadow-lg py-10">
                    <p className="text-gray-600">🏆 Coming soon: See who’s ruling the iceberg!</p>
                </div>
            </div>


            {/* Call to Action */}
            <div className="py-20 mx-10 text-center">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                    Ready To Test Your Skills?
                </h2>
                <p className="mb-8 text-lg">
                    Join thousands of learners improving their coding game every day.
                </p>
                <NavLink
                    to="/login"
                    className="bg-indigo-900 px-8 py-3 rounded-xl text-white hover:bg-indigo-800"
                >
                    Sign Up Now
                </NavLink>
            </div>

            {/*Footer*/}
            <div className='flex flex-col bg-blue-950 text-white p-8 items-center gap-2'>
                <span>&copy; 2025 Quizzie. All rights reserved</span>
                <ul className='flex space-x-4'>
                    <li><NavLink href="">Privacy</NavLink></li>
                    <li><NavLink href="">Terms</NavLink></li>
                    <li><NavLink href="">Contact</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default Home
