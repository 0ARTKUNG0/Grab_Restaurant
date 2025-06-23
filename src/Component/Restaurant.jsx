import React from 'react'
import Card from './Card'

const Restaurant = ({ restaurants = [] }) => {
  return (
    <div className="min-h-screen py-8">
      <div className='flex flex-wrap justify-center items-center gap-6 px-4'>
        { // เช็คว่ามี restaurants หรือไม่
        }
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <Card 
              key={restaurant.id}
              title={restaurant.title} 
              type={restaurant.type} 
              img={restaurant.img}
            />
          ))
        ) : (
          <div className="text-center text-gray-500 mt-10">
            <p>No restaurants found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Restaurant