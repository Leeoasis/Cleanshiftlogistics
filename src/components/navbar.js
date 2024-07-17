import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/cleanlogo.png';

const Navbar = () => {
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
