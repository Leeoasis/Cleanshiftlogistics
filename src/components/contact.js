import React from 'react';

const ContactPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-gray-800 text-white py-20 px-4 min-h-screen flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 text-center max-w-3xl">
                    <h1 className="text-5xl font-bold mb-4 leading-tight">Contact Us</h1>
                    <p className="text-lg mb-6">Get in touch with Cleanshift Logistics</p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center">
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700">Name</label>
                                    <input type="text" id="name" name="name" className="w-full mt-2 p-3 border border-gray-300 rounded-md" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700">Email</label>
                                    <input type="email" id="email" name="email" className="w-full mt-2 p-3 border border-gray-300 rounded-md" required />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-700">Message</label>
                                    <textarea id="message" name="message" rows="6" className="w-full mt-2 p-3 border border-gray-300 rounded-md" required></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full p-3 bg-gray-800 text-white font-bold rounded-md hover:bg-gray-700">Send Message</button>
                                </div>
                            </form>
                        </div>
                        <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Information</h2>
                            <p className="text-gray-700 mb-4">Feel free to reach out to us through any of the following methods:</p>
                            <ul className="space-y-4 text-gray-700">
                                <li><span className="font-semibold">Phone:</span> (123) 456-7890</li>
                                <li><span className="font-semibold">Email:</span> info@cleanshiftlogistics.com</li>
                                <li><span className="font-semibold">Address:</span> 123 Main Street, Suite 100, Your City, Your State, 12345</li>
                            </ul>
                            <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-6">Opening Hours</h2>
                            <ul className="space-y-2 text-gray-700">
                                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                                <li>Saturday: 10:00 AM - 4:00 PM</li>
                                <li>Sunday: Closed</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactPage;
