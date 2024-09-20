import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation();

  // Close the mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navigation Links
  const navLinks = (
    <ul className="mt-1 mb-1 pl-4 text-xl flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {['/', '/projects', '/skills', '/contacts'].map((path, index) => (
        <li key={index}>
          <Link
            to={path}
            className={`flex items-center gap-x-2 p-1 font-medium text-blue-gray-700 italic ${
              location.pathname === path || (path === '/' && location.pathname === '/home')
                ? 'font-bold text-blue-600'
                : ''
            }`}
          >
            {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
          </Link>
        </li>
      ))}
    </ul>
  );
  

  return (
    <nav style={{ borderRadius: "0px 0px 20px 20px" }} className="bg-white">
      <div className="container mx-auto flex items-center justify-between gap-2 p-1">
        <Link
          to="/"
          style={{ fontFamily: "Protest Guerrilla, sans-serif" }}
          className="text-5xl m-3 font-bold text-blue-gray-900"
        >
          Abhishek Mahara
        </Link>
        <div className="hidden px-5 lg:block">{navLinks}</div>
       
        <button
          className="ml-auto lg:hidden"
          onClick={() => setOpenNav(!openNav)}
          aria-label="Toggle navigation"
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {openNav && (
        <div className="lg:hidden bg-blue-50">
          {navLinks}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
