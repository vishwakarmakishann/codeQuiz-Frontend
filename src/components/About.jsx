import React from "react";
import { NavLink } from "react-router-dom";
import card from "../assets/card.png";
import homebg from "../assets/homebg.png";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${homebg})` }}
      >
        <div className="h-screen w-2/5 m-20 flex flex-col justify-center py-10 rounded-xl">
          <h1 className="text-7xl font-bold mb-4">About Quizzie</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Empowering learners to grow their coding skills through fun, engaging,
            and competitive quizzes.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 px-8 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At <span className="font-semibold text-blue-700">Quizzie</span>, we
          believe learning should be fun and interactive. Our platform is built
          for coders of all levels to practice, compete, and improve their
          problem-solving skills — one quiz at a time.
        </p>
      </div>

      {/* How It Works Section */}
      <div className="bg-blue-50 py-20">
        <h2 className="text-4xl font-bold text-center mb-10">How It Works</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-10 max-w-5xl mx-auto">
          <div className="flex flex-col bg-blue-100 p-6 rounded-lg text-center w-72">
            <img src={card} alt="Step 1" className="w-40 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">1. Pick a Quiz</h3>
            <p className="text-gray-600">Choose from a wide range of coding topics and challenges.</p>
          </div>
          <div className="flex flex-col bg-blue-100 p-6 rounded-lg text-center w-72">
            <img src={card} alt="Step 2" className="w-40 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">2. Compete & Learn</h3>
            <p className="text-gray-600">Answer questions, earn badges, and learn as you play.</p>
          </div>
          <div className="flex flex-col bg-blue-100 p-6 rounded-lg text-center w-72">
            <img src={card} alt="Step 3" className="w-40 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">3. Track Progress</h3>
            <p className="text-gray-600">Follow your improvement and climb the leaderboard.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Meet the Team</h2>
        <p className="text-lg text-gray-700 mb-10">
          We’re a team of passionate developers, educators, and designers
          building tools to make coding education fun and accessible.
        </p>
        <div className="flex justify-center gap-10">
          <div className="bg-blue-100 p-6 rounded-lg w-48 shadow">
            <div className="bg-gray-300 w-24 h-24 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold text-lg">Alice</h3>
            <p className="text-sm text-gray-600">Frontend Dev</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg w-48 shadow">
            <div className="bg-gray-300 w-24 h-24 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold text-lg">Bob</h3>
            <p className="text-sm text-gray-600">Backend Dev</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg w-48 shadow">
            <div className="bg-gray-300 w-24 h-24 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold text-lg">Charlie</h3>
            <p className="text-sm text-gray-600">UI/UX Designer</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-800 to-indigo-600 text-white text-center py-16">
        <h2 className="text-4xl font-bold mb-4">Ready to Join the Fun?</h2>
        <p className="text-lg mb-6">Start your coding journey with Quizzie today!</p>
        <NavLink
          to="/login"
          className="bg-white text-indigo-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200"
        >
          Get Started
        </NavLink>
      </div>

      {/* Footer */}
      <div className="flex flex-col bg-blue-950 text-white p-8 items-center gap-2">
        <span>&copy; 2025 Quizzie. All rights reserved</span>
        <ul className="flex space-x-4">
          <li><NavLink to="">Privacy</NavLink></li>
          <li><NavLink to="">Terms</NavLink></li>
          <li><NavLink to="">Contact</NavLink></li>
        </ul>
      </div>
    </>
  );
};

export default About;
