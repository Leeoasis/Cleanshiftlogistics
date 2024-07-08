import React from 'react';

const HomePage = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero bg-blue-600 text-white text-center p-10">
                <h1 className="text-5xl font-bold mb-4">Welcome to CleanShift Logistics</h1>
                <p className="text-2xl">Your trusted partner for removal and cleaning services</p>
                <a href="/services" className="mt-6 inline-block bg-white text-blue-600 py-2 px-4 rounded">Explore Services</a>
            </section>

            {/* About Us Section */}
            <section className="about p-10 bg-gray-100">
                <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
                <div className="max-w-4xl mx-auto text-center">
                    <p>At CleanShift Logistics, we are dedicated to providing top-notch removal and cleaning services to our valued clients. With years of experience in the industry, our team is committed to ensuring your move is seamless and your spaces are spotless.</p>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="services-overview p-10">
                <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="service bg-white p-6 shadow-lg rounded">
                        <h3 className="text-2xl font-bold mb-2">Residential and Commercial Removal</h3>
                        <p>We handle all types of moves, whether it's your home or office. Our team ensures a stress-free moving experience.</p>
                    </div>
                    <div className="service bg-white p-6 shadow-lg rounded">
                        <h3 className="text-2xl font-bold mb-2">Deep Cleaning Services</h3>
                        <p>Our deep cleaning services ensure every corner of your space is sparkling clean and ready for use.</p>
                    </div>
                    <div className="service bg-white p-6 shadow-lg rounded">
                        <h3 className="text-2xl font-bold mb-2">Post-Move Cleaning</h3>
                        <p>We provide thorough post-move cleaning to leave your old or new place spotless after moving.</p>
                    </div>
                    <div className="service bg-white p-6 shadow-lg rounded">
                        <h3 className="text-2xl font-bold mb-2">Packing and Unpacking Services</h3>
                        <p>Our packing and unpacking services ensure your belongings are safely transported and organized in your new space.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials p-10 bg-gray-100">
                <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="testimonial bg-white p-6 shadow-lg rounded mb-4">
                        <p className="italic">"CleanShift Logistics made our move so much easier. Their team was professional and efficient. Highly recommended!"</p>
                        <p className="text-right font-bold">- Jane Doe</p>
                    </div>
                    <div className="testimonial bg-white p-6 shadow-lg rounded mb-4">
                        <p className="italic">"The cleaning services were top-notch. Our house looked brand new after they were done. Fantastic job!"</p>
                        <p className="text-right font-bold">- John Smith</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
