import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Site Title */}
        <div className="text-2xl font-bold">
           ElectrISH
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? 'block' : 'right-full'
          } absolute top-full top-16 right-0 w-44 bg-blue-600 md:static md:w-auto md:flex`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-lg text-center">   
            <li>
            <Link className="block py-2 px-4 hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-300"
               href="/">Home</Link>
            </li>
            <li>
            <Link className="block py-2 px-4 hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-300"
               href="/about">About Us</Link>
            </li>
            <li>
            <Link className="block py-2 px-4 hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-300"
               href="/service">Services</Link>
            </li>
            <li>
            <Link className="block py-2 px-4 hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-300"
               href="/blog">Blogs</Link>
            </li>
            <li>
            <Link className="block py-2 px-4 hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-300"
               href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
