import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>VoltPro - Professional Electrical Services</title>
                <meta
                    name="description"
                    content="Expert electrical services available 24/7. Licensed, insured, and ready to solve all your electrical needs."
                />
            </Helmet>

            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative bg-gradient-to-br from-electric-dark via-gray-900 to-electric-blue min-h-screen flex items-center"
            >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZCQkYyNCIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-5xl md:text-7xl font-bold text-white mb-6"
                            >
                                Power Your Life with{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-yellow to-electric-orange">
                                    Expert Electrical
                                </span>{' '}
                                Solutions
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-xl text-gray-300 mb-8"
                            >
                                Licensed, insured, and available 24/7. We bring the spark back to your home and business.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Button href="/contact" size="lg">
                                    Get Free Quote
                                </Button>
                                <Button variant="outline" href="tel:+1234567890" size="lg">
                                    📞 Emergency Call
                                </Button>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative"
                        >
                            <div className="relative z-10 bg-gradient-to-br from-electric-yellow/20 to-electric-orange/20 backdrop-blur-sm rounded-3xl p-8 border border-electric-yellow/30">
                                <svg
                                    className="w-full h-auto text-electric-yellow"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                                </svg>
                            </div>
                            <div className="absolute -top-4 -right-4 w-72 h-72 bg-electric-yellow/20 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-electric-orange/20 rounded-full blur-3xl"></div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Emergency Services Section - Scroll-triggered animation */}
            <motion.section
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="py-20 bg-white"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-electric-yellow to-electric-orange rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                                    <path d="M13 7h-2v6h6v-2h-4z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">24/7 Emergency</h3>
                            <p className="text-gray-600">Available round the clock for urgent electrical issues</p>
                        </div>

                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-electric-yellow to-electric-orange rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                                    <path d="m9 12 2 2 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Licensed & Insured</h3>
                            <p className="text-gray-600">Fully certified professionals you can trust</p>
                        </div>

                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-electric-yellow to-electric-orange rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                                    <path d="M10 17.414V14h4v3.414l3.707 3.707 1.414-1.414L16 16.586V10h-2v6.586l-3.707 3.707 1.414 1.414z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Fast Response</h3>
                            <p className="text-gray-600">Quick turnaround on all service requests</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-electric-yellow to-electric-orange">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-electric-dark mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-gray-800 mb-8">
                        Contact us today for a free consultation and quote
                    </p>
                    <Button variant="secondary" href="/contact" size="lg">
                        Request Service Now
                    </Button>
                </div>
            </section>
        </>
    );
};

export default Home;
