import React from 'react';

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
        title: 'Commercial Logistics',
        description: 'Reliable and efficient logistics solutions for businesses, ensuring timely delivery and safe transportation of goods.',
        image: 'https://i.pinimg.com/736x/06/9f/de/069fde26c118ba9a55118474f2b61d4f.jpg',
    },
    {
        title: 'Residential Moving',
        description: 'Professional residential moving services to ensure a smooth and stress-free relocation experience for families.',
        image: 'https://i.pinimg.com/564x/1e/2a/ed/1e2aed556182bbdd9cd221efc83b57f4.jpg',
    },
    {
        title: 'Office Relocation',
        description: 'Expert office relocation services to minimize downtime and ensure a seamless transition for your business operations.',
        image: 'https://i.pinimg.com/564x/8a/6d/55/8a6d55f1e5cdf0c76fe19716ed1e952d.jpg',
    },
    {
        title: 'Residential Cleaning for Furniture Removal',
        description: 'Specialized cleaning services tailored for residential spaces to prepare for furniture removal or after furniture has been moved, ensuring a fresh and organized environment.',
        image: 'https://i.pinimg.com/564x/18/33/2b/18332bedfe3c808165577b63c000be57.jpg',
    },
    {
        title: 'Post-Removal Cleaning',
        description: 'Thorough cleaning services provided after furniture removal, designed to leave your space immaculate and ready for the next use.',
        image: 'https://i.pinimg.com/736x/89/3b/ea/893beab226e906de3c2ffdcf6da2350f.jpg',
    },
    {
        title: 'Janitorial Services',
        description: 'Regular cleaning and maintenance plans for commercial facilities, including support for furniture removal activities to ensure ongoing cleanliness and order.',
        image: 'https://i.pinimg.com/736x/ba/37/a6/ba37a6e4f52530aed17da90ee76c5ac1.jpg',
    },
];

const ServicesPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <section 
                className="relative py-20 bg-cover bg-center text-white"
                style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/isometric-lock-padlock-keyhole-cyber-security-information-network-protection-future-cyber-technology-web-services-business-internet-project_587448-1059.jpg")' }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative container mx-auto px-4 flex flex-col items-center text-center">
                    <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                        Discover Our Expert Services
                    </h1>
                    <p className="text-xl mb-8">
                        We offer a comprehensive range of services tailored to meet all your removal and cleaning needs, ensuring a seamless experience from start to finish.
                    </p>
                    <a href="#services" className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
                        Explore Services
                    </a>
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
                                    <p className="text-gray-700 mb-4">{service.description}</p>
                                    <a href="/contact" className="text-blue-500 hover:underline">Get a Quote</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ServicesPage;
