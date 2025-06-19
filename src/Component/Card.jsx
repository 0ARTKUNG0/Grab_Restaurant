import React from 'react'

const Card = (props) => {
  return (
    <div className="card bg-gray-800 w-96 shadow-lg rounded-lg overflow-hidden">
      <figure className="h-48 max-h-48 overflow-hidden">
        <img
          src={props.img}
          alt={props.title}
          className="w-full h-full max-h-48 object-cover"
        />
      </figure>
      <div className="card-body p-4 text-white">
        <h2 className="card-title text-white text-lg font-semibold mb-2">{props.title}</h2>
        <p className="text-gray-300 text-sm mb-4">{props.type}</p>
        <div className="card-actions justify-end gap-2">
          <button className="btn btn-error btn-sm px-4 py-2">Delete</button>
          <button className="btn btn-warning btn-sm px-4 py-2">Edit</button>
        </div>
      </div>
    </div>
  )
}

export default Card