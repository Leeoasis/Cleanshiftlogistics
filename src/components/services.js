import React from 'react';
import AboutUsImage from '../assets/images/shift1.jpg'; // Optional: Replace or remove this if not needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faStar, faShieldAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const services = [
    {
        title: 'Furniture Removal',
        description: 'Efficient and eco-friendly furniture removal services, including disposal, donation options, and relocation of your furniture.',
        image: 'https://d2bnfyr97fddzm.cloudfront.net/image/upload/w_2048,h_400,c_limit,fl_force_strip,q_auto:eco/v1636554130/category_page_images/Kandua_Furniture_Removals.jpg',
    },
    {
        title: 'Move-In/Move-Out Cleaning',
        description: 'Comprehensive cleaning services designed for homes and offices during moving in or out, ensuring a spotless space and smooth transition.',
        image: 'https://cdn.prod.website-files.com/5a4be71aa12183000115e62c/637119599e4b67cd45c241dd_move-out-cleaneing-hero.webp',
    },
    // Add other services here
];

const ServicesPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative text-white py-20 px-4 min-h-screen flex items-center justify-center bg-blue-900">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center max-w-3xl">
                    <h1 className="text-5xl font-bold mb-4 leading-tight">Our Comprehensive Services</h1>
                    <p className="text-lg mb-6">Explore our wide range of services designed to meet all your removal and cleaning needs.</p>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-100">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="h-48 w-full object-cover object-center rounded-t-lg"
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                                    <p className="text-gray-700">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-4 bg-gray-100">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Contact Us</h2>
                    <div className="flex flex-col md:flex-row items-stretch">
                        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 md:w-1/2 mb-8 md:mb-0 transition-transform transform hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
                            <p className="text-gray-700 mb-4">Have questions or need a quote? Contact us today!</p>
                            <p className="text-gray-700 mb-4">Phone: +27697013743<br /> Email: info@cleanshiftlogistics.com</p>
                        </div>
                        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 md:w-1/2 transition-transform transform hover:scale-105">
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">Your Name</label>
                                    <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Your Email</label>
                                    <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">Message</label>
                                    <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
                                </div>
                                <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ServicesPage;
