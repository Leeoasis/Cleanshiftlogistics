import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/cleanlogo.png';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="absolute inset-y-0 left-0 flex items-center my-4">
                        <NavLink to="/" className="flex items-center bg-white rounded-full w-24 p-2">
                            <img src={Logo} alt="Cleanshift Logistics" className="h-20" /> {/* Adjust the height as needed */}
                        </NavLink>
                    </div>

                    {/* Menu items */}
                    <div className="flex-1 flex justify-center sm:justify-end">
                        <div className="flex space-x-4">
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Home</NavLink>
                            <NavLink to="/services" className={({ isActive }) => isActive ? "text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Services</NavLink>
                            <NavLink to="/about" className={({ isActive }) => isActive ? "text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>About</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Contact</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
