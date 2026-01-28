import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';

const Services = () => {
    const services = [
        {
            title: 'Residential Electrical',
            description: 'Complete home electrical solutions including installations, repairs, and upgrades.',
            icon: (
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586 6 6V20H6v-9.586l6-6z" />
                </svg>
            ),
            features: ['Lighting installations', 'Outlet repairs', 'Panel upgrades', 'Home rewiring'],
        },
        {
            title: 'Commercial Electrical',
            description: 'Professional electrical services for businesses of all sizes.',
            icon: (
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 18H6V4h12v16z" />
                    <path d="M8 6h8v2H8zm0 4h8v2H8zm0 4h5v2H8z" />
                </svg>
            ),
            features: ['Office lighting', 'Data cabling', 'Security systems', 'Maintenance plans'],
        },
        {
            title: 'Emergency Services',
            description: '24/7 emergency electrical services when you need them most.',
            icon: (
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                    <path d="M13 7h-2v6h6v-2h-4z" />
                </svg>
            ),
            features: ['Power outages', 'Electrical fires', 'Sparking outlets', 'Urgent repairs'],
        },
        {
            title: 'Installations',
            description: 'Expert installation of electrical fixtures and appliances.',
            icon: (
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                </svg>
            ),
            features: ['Ceiling fans', 'Light fixtures', 'EV chargers', 'Smart home devices'],
        },
        {
            title: 'Inspections & Safety',
            description: 'Thorough electrical inspections to keep your property safe.',
            icon: (
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                    <path d="m9 12 2 2 4-4" />
                </svg>
            ),
            features: ['Code compliance', 'Safety audits', 'Pre-purchase inspections', 'Troubleshooting'],
        },
        {
            title: 'Upgrades & Renovations',
            description: 'Modernize your electrical system with the latest technology.',
            icon: (
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z" />
                </svg>
            ),
            features: ['Panel upgrades', 'Smart home integration', 'Energy-efficient solutions', 'Whole-house generators'],
        },
    ];

    return (
        <>
            <Helmet>
                <title>Our Services - VoltPro Electrical</title>
                <meta
                    name="description"
                    content="Comprehensive electrical services including residential, commercial, emergency services, and more. Licensed professionals ready to help."
                />
            </Helmet>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-electric-dark via-gray-900 to-electric-blue py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-bold text-white mb-6"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-yellow to-electric-orange">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        From routine maintenance to complex installations, we've got you covered with professional electrical services.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
                            >
                                <div className="w-20 h-20 bg-gradient-to-r from-electric-yellow to-electric-orange rounded-xl flex items-center justify-center mb-6 text-white">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <svg
                                                className="w-5 h-5 text-electric-yellow mr-2 mt-0.5 flex-shrink-0"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                            </svg>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button href="/contact" className="w-full">
                                    Request Quote
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">Why Choose VoltPro?</h2>
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold text-electric-yellow mb-2">15+</div>
                            <p className="text-gray-600">Years Experience</p>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-electric-yellow mb-2">1000+</div>
                            <p className="text-gray-600">Happy Customers</p>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-electric-yellow mb-2">24/7</div>
                            <p className="text-gray-600">Emergency Service</p>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-electric-yellow mb-2">100%</div>
                            <p className="text-gray-600">Satisfaction Guaranteed</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-electric-yellow to-electric-orange">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-electric-dark mb-4">
                        Need Electrical Help?
                    </h2>
                    <p className="text-xl text-gray-800 mb-8">
                        Get in touch for a free consultation
                    </p>
                    <Button variant="secondary" href="/contact" size="lg">
                        Contact Us Today
                    </Button>
                </div>
            </section>
        </>
    );
};

export default Services;
