// components/Footer.js

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 mt-12">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-center md:order-2">
                        <a href="#" className="text-gray-400 hover:text-white mx-2">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3zm7 7v10H6V10h3zm-1.5-3A1.5 1.5 0 0 1 9 4.5c0 .825-.675 1.5-1.5 1.5A1.5 1.5 0 0 1 6 4.5C6 3.675 6.675 3 7.5 3zM18 9h-3v8h3v-8zm-4.5-3A1.5 1.5 0 0 1 15 4.5c0 .825-.675 1.5-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5c0-.825.675-1.5 1.5-1.5zm1.5 10h3v-4.77c0-1.792-.54-3.23-2.4-3.23-1.2 0-1.92.75-2.24 1.22h-.04V6.56H12c.06 1.25 0 13.44 0 13.44h3v-7.56z"></path>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white mx-2">
                            <span className="sr-only">Twitter</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M21.25 4.05a8.24 8.24 0 0 1-2.36.64A4.07 4.07 0 0 0 20.1 3a8.23 8.23 0 0 1-2.6.99 4.1 4.1 0 0 0-7 3.73c0 .32.04.63.11.93A11.67 11.67 0 0 1 2.4 3.79a4.1 4.1 0 0 0-.52 2.06c0 1.42.72 2.68 1.82 3.41a4.07 4.07 0 0 1-1.86-.5v.05c0 1.98 1.41 3.63 3.28 4-1.73 1.4-4.2 2.3-6.92 2.3-.45 0-.9-.03-1.34-.08a10.42 10.42 0 0 0 5.64 1.64c6.74 0 10.42-5.6 10.42-10.43 0-.16 0-.33-.01-.49a7.45 7.45 0 0 0 1.83-1.89z"></path>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white mx-2">
                            <span className="sr-only">Facebook</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8v-7h-2V9h2V7.29C13 5.14 14.7 3 18 3v3h-1.5c-1 0-1.5.5-1.5 1.25V9h3l-.3 3h-2.7v7h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="mt-8 md:mt-0 md:order-1">
                        <p className="text-center text-sm">&copy; {new Date().getFullYear()} Cleanshift Logistics. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;