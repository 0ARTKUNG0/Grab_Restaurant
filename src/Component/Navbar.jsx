import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    const MenuItem = [
        { name: "Add restaurant", url: "/add-restaurant" },
        { name: "Update Restaurant", url: "/update-restaurant" },
        { name: "Search", url: "/search" },
        { name: "About Us", url: "/about-us" },
    ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> 
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {MenuItem.map((item, index) => (
                <li key={index}>
                    <Link to={item.url}>
                        {item.name}
                    </Link>
                </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl">
          Grab Restaurant
        </Link>
      </div>
      <div className="navbar-end space-x-2">
        <Link to="/add-restaurant" className="btn btn-outline btn-primary">
          Add restaurant
        </Link>
        <Link to="/search" className="btn btn-outline btn-accent">
          Search
        </Link>
        <Link to="/about-us" className="btn btn-outline btn-info">
          About Us
        </Link>
      </div>
    </div>
  )
}

export default Navbar