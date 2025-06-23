import React, { useState, useEffect } from 'react'
import Navbar from '../Component/Navbar'
import Restaurant from '../Component/Restaurant'

const Home = () => {
const [restaurants, setRestaurants] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchRestaurants = async () => {
    try {
      const response = await fetch('http://localhost:3001/restaurants');
      const data = await response.json();
      setRestaurants(data);
      setLoading(false);
    } catch (error) {
      console.error('Error ไม่สามารถดู restaurants ได้:', error);
      setLoading(false);
    }
  };

  fetchRestaurants();
}, []);

  if (loading) {
    return (
      <div className='container mx-auto'>
        <Navbar />
        <div className="min-h-screen py-8 flex justify-center items-center">
          <div className="text-lg">Loading restaurants <span className="loading loading-dots loading-xl"></span></div>
        </div>
      </div>
    );
  }

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
            <input 
              type="search" 
              placeholder="Search restaurants..." 
            />
        </label>
      </div>
      
      <Restaurant restaurants={restaurants} />
    </div>
  )
}

export default Home