import React from 'react';
import Logo from '../assets/images/cleanlogo.png'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="absolute inset-y-0 left-0 flex items-center my-4">
                        <a href="/" className="flex items-center  bg-white rounded-full  24-12 w-24 p-2">
                            <img src={Logo} alt="Cleanshift Logistics" className="h-20" /> {/* Adjust the height as needed */}
                        </a>
                    </div>


                    {/* Menu items */}
                    <div className="flex-1 flex justify-center sm:justify-end">
                        <div className="flex space-x-4">
                            <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a href="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                            <a href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                            <a href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;