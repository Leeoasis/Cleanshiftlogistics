import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/cleanlogo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Logo and Name */}
                    <div className="flex items-center space-x-4 bg-white rounded-full p-2">
                        <NavLink to="/" className="flex items-center">
                            <img src={Logo} alt="CleanShift Logistics" className="h-12 w-auto" />
                            <span className="text-gray-800 text-xl font-semibold ml-3">CleanShift Logistics</span>
                        </NavLink>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className="sm:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"} />
                            </svg>
                        </button>
                    </div>

                    {/* Menu items */}
                    <div className={`flex-1 flex justify-center sm:justify-end ${isOpen ? 'block' : 'hidden'} sm:flex`}>
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Home</NavLink>
                            <NavLink to="/services" className={({ isActive }) => isActive ? "text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Services</NavLink>
                            <NavLink to="/about" className={({ isActive }) => isActive ? "text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>About</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Contact</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dropdown Menu for Mobile */}
            {isOpen && (
                <div className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <NavLink to="/" className={({ isActive }) => isActive ? "block text-white bg-gray-700 px-3 py-2 rounded-md text-base font-medium" : "block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"}>Home</NavLink>
                        <NavLink to="/services" className={({ isActive }) => isActive ? "block text-white bg-gray-700 px-3 py-2 rounded-md text-base font-medium" : "block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"}>Services</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "block text-white bg-gray-700 px-3 py-2 rounded-md text-base font-medium" : "block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"}>About</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "block text-white bg-gray-700 px-3 py-2 rounded-md text-base font-medium" : "block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"}>Contact</NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
