import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [openNav, setOpenNav] = useState(false);

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
    <ul  className="mt-1 mb-1 pl-4 text-xl flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li>
        <Link
          to="/"
          className="flex items-center gap-x-2 p-1 font-medium  text-blue-gray-700 italic"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/projects"
          className="flex items-center gap-x-2 p-1 font-medium text-blue-gray-700 italic"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="/skills"
          className="flex items-center gap-x-2 p-1 font-medium  text-blue-gray-700 italic"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="/contacts"
          className="flex items-center gap-x-2 p-1 font-medium text-blue-gray-700 italic"
        >
          Contact
        </Link>
      </li>
      {/* <li>
        <Link
          to="/certifications"
          className="flex items-center gap-x-2 p-1 font-medium text-blue-gray-700 italic"
        >
          Certification
        </Link>
      </li> */}
    </ul>
  );

  return (
    <nav style={{"border-radius":"0px 0px 20px 20px"}} className="bg-white">
      <div className="container mx-auto flex items-center justify-between  gap-2 p-1">
        <Link to="/" style={{"font-family": "Protest Guerrilla, sans-serif"}} className="text-5xl m-3 font-bold text-blue-gray-900">
          Abhishek Mahara
        </Link>
        <div className="hidden px-5 lg:block">{navLinks}</div>
       
        <button
          className="ml-auto lg:hidden"
          onClick={() => setOpenNav(!openNav)}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
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
        <div className="lg:hidden bg-blue-50 hover">
          {navLinks}
         
        </div>
      )}
    </nav>
  );
}
export default Navbar