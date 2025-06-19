import React from 'react'
import Navbar from '../Component/Navbar'
import Restaurant from '../Component/Restaurant'
const Home = () => {
  return (
    <div className='container mx-auto'>
        <Navbar />
        {/* This is a comment to indicate where the Navbar component is used */}

        <div className='title justify-center items-center flex flex-col mt-10'>
            <h1 className='text-4xl font-bold mb-4'>Grab Restaurant</h1>
        </div>
        <div className='flex justify-center items-center flex-col mt-10'>
            <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
                >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
                </g>
            </svg>
            <input type="search" required placeholder="Search" />
            </label>
        </div>
        <Restaurant />
    </div>
  )
}

export default Home