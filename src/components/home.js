import React from 'react';
import AboutUsImage from '../assets/images/shift1.jpg';
import Hero from '../assets/videos/hero.mp4';
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
    {
        title: 'Commercial Cleaning for Furniture Removal',
        description: 'Targeted cleaning solutions for commercial spaces, including offices and retail locations, to handle furniture removal and maintain a professional appearance.',
        image: 'https://i.pinimg.com/564x/b6/b3/27/b6b327069abe320eed84ba7c3b721970.jpg',
    },
 
];


const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative text-white py-20 px-4 min-h-screen flex items-center justify-center">
    <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={Hero}
        autoPlay
        loop
        muted
        playsInline
    />
    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    <div className="relative z-20 text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-4 leading-tight">Comprehensive Furniture Removal & Cleaning Solutions</h1>
        <p className="text-lg mb-6">Expertly Handling Your Furniture Removal Needs with Professional Cleaning Services</p>
        <p className="text-base mb-6">At Cleanshift Logistics, we specialize in seamless furniture removal paired with thorough cleaning services, ensuring a hassle-free transition for your home or office. From moving furniture to leaving your space spotless, our expert team is here to assist.</p>
        <a href="#services" className="bg-white text-gray-900 rounded-full px-6 py-3 font-semibold hover:bg-gray-100 transition duration-300">Discover Our Services</a>
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
        <div className="text-center mt-12">
            <a 
                href="/services" // Replace this URL with the link to your detailed services page
                className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300"
            >
                View More Services
            </a>
        </div>
    </div>
</section>

            {/* About Us Section */}
            <section id="about" className="relative py-20 bg-gray-100">
    <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="lg:w-1/2 p-8 lg:p-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    At <span className="font-semibold">Cleanshift Logistics</span>, we are dedicated to providing top-notch removal and cleaning services tailored to meet your needs. With years of experience in logistics, we ensure a smooth and efficient transition whether you're moving locally or long-distance.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Our skilled professionals handle everything from packing and transporting to cleaning your new or old space. We take pride in our work and strive to exceed our clients' expectations, making every move hassle-free and organized.
                </p>
            </div>
            <div className="lg:w-1/2">
                <div className="relative">
                    <img src={AboutUsImage} alt="About Us" className="w-full h-80 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105" />
                </div>
            </div>
        </div>
    </div>
</section>


            {/* Why Choose Us Section */}
            <section id="why-choose-us" className="py-20 bg-gray-100">
    <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105 flex items-start">
                <FontAwesomeIcon icon={faUserGroup} className="h-12 w-12 text-blue-500 mr-4" />
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Team</h3>
                    <p className="text-gray-700">
                        Our team consists of experienced professionals who are passionate about delivering top-quality services. Each member is trained and certified to handle various cleaning and removal tasks efficiently.
                    </p>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105 flex items-start">
                <FontAwesomeIcon icon={faStar} className="h-12 w-12 text-yellow-500 mr-4" />
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Customer Satisfaction</h3>
                    <p className="text-gray-700">
                        Customer satisfaction is our priority. We listen to your needs and preferences, ensuring every service is customized to meet your expectations. Our goal is to build long-lasting relationships based on trust and reliability.
                    </p>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105 flex items-start">
                <FontAwesomeIcon icon={faShieldAlt} className="h-12 w-12 text-green-500 mr-4" />
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Assurance</h3>
                    <p className="text-gray-700">
                        We uphold high standards of quality in every aspect of our work. From using eco-friendly products to employing efficient cleaning techniques, we ensure exceptional results without compromising on environmental responsibility.
                    </p>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105 flex items-start">
                <FontAwesomeIcon icon={faBriefcase} className="h-12 w-12 text-purple-500 mr-4" />
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Wide Range of Services</h3>
                    <p className="text-gray-700">
                        Whether you need regular house cleaning, office maintenance, or furniture removal, we offer a comprehensive range of services to suit your needs. Our flexible scheduling and competitive pricing make us the preferred choice for many clients.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
            {/* Testimonials Section */}
            <section className="py-20 bg-gray-200">
                    <div className="container mx-auto px-6 lg:px-20">
                        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col gap-4 transition-transform transform hover:scale-105">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300">
                                        <img src="https://lh3.googleusercontent.com/a-/ALV-UjWpjfbXuwDuUf7_TWCmX5LVl3QCUcC5A5XBC5PS0drmcnZls8FNXQ=w60-h60-p-rp-mo-ba4-br100" alt="Customer 1" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-700 text-lg mb-4">"Primrose, the lovely owner, was responsive and communicative from start to finish. She and her team of 4 arrived early on the day and despite the rain, wrapped, loaded and unloaded our 4 bedroomed household into storage within half a day. The quote was extremely competitive. We added to their supply of bubble wrap and tape along the way. I would definitely use W&P again."</p>
                                        <p className="font-semibold text-gray-800">Mags Winsor</p>
                                        <a href="https://www.google.com/search?q=w%26p+furniture+removals+and+storage&oq=p+%26+w+furni&gs_lcrp=EgZjaHJvbWUqCAgCEAAYFhgeMgYIABBFGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCggEEAAYgAQYogQyCggFEAAYgAQYogQyCggGEAAYgAQYogTSAQkxMjgxNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8&lqi=CiJ3JnAgZnVybml0dXJlIHJlbW92YWxzIGFuZCBzdG9yYWdlSPCuw_DcsYCACFpGEAAQARACEAMQBBgAGAEYAhgDGAQiIncmcCBmdXJuaXR1cmUgcmVtb3ZhbHMgYW5kIHN0b3JhZ2UqDAgCEAAQARACEAMQBJIBEWxvZ2lzdGljc19zZXJ2aWNlqgFLEAEyHxABIhu32UhrpXnt9aridAqOo3s3u-aU3ksnAqJ423MyJhACIiJ3JnAgZnVybml0dXJlIHJlbW92YWxzIGFuZCBzdG9yYWdl#lkt=LocalPoiReviews&rlimm=4947805188751358580" target="_blank" className="text-blue-500 hover:underline">View Source</a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col gap-4 transition-transform transform hover:scale-105">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300">
                                        <img src="https://lh3.googleusercontent.com/a/ACg8ocL9DAHBvE01slALEUcnnaXG-Q-JyU-hSIHckSLP026D0yoN4g=w60-h60-p-rp-mo-br100" alt="Customer 2" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-700 text-lg mb-4">"We used Cleanshift Logistics today. The owner, Primrose was on site with 2 packers. The truck was clean and the driver consulted the parking area. They were on time, friendly, helpful, and did packing excellently. We will recommend this company and will use them in the future again. Thank you Primrose and team!!"</p>
                                        <p className="font-semibold text-gray-800">Elmarie Janse Van Rensburg</p>
                                        <a href="https://www.google.com/maps/contrib/118280748571725071619/reviews/@-34.5882961,19.3501289,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu" target="_blank" className="text-blue-500 hover:underline">View Source</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* View More Reviews Button */}
                        <div className="text-center mt-12">
                            <a href="https://www.google.com/search?q=w%26p+furniture+removals+and+storage&oq=p+%26+w+furni&gs_lcrp=EgZjaHJvbWUqCAgCEAAYFhgeMgYIABBFGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCggEEAAYgAQYogQyCggFEAAYgAQYogQyCggGEAAYgAQYogTSAQkxMjgxNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8&lqi=CiJ3JnAgZnVybml0dXJlIHJlbW92YWxzIGFuZCBzdG9yYWdlSPCuw_DcsYCACFpGEAAQARACEAMQBBgAGAEYAhgDGAQiIncmcCBmdXJuaXR1cmUgcmVtb3ZhbHMgYW5kIHN0b3JhZ2UqDAgCEAAQARACEAMQBJIBEWxvZ2lzdGljc19zZXJ2aWNlqgFLEAEyHxABIhu32UhrpXnt9aridAqOo3s3u-aU3ksnAqJ423MyJhACIiJ3JnAgZnVybml0dXJlIHJlbW92YWxzIGFuZCBzdG9yYWdl#lkt=LocalPoiReviews&rlimm=4947805188751358580"
                             className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300" target="_blank">View More Reviews
                            </a>
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
                                <button type="submit" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
