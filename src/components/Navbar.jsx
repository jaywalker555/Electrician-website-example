import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-electric-dark/95 backdrop-blur-md shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="flex items-center">
                            <svg
                                className="w-10 h-10 text-electric-yellow"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                            </svg>
                            <span className="ml-2 text-2xl font-bold text-white">
                                Volt<span className="text-electric-yellow">Pro</span>
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className="text-gray-300 hover:text-electric-yellow transition-colors duration-200 font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/services"
                            className="text-gray-300 hover:text-electric-yellow transition-colors duration-200 font-medium"
                        >
                            Services
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-300 hover:text-electric-yellow transition-colors duration-200 font-medium"
                        >
                            Contact
                        </Link>

                        {/* Call Now Button */}
                        <a
                            href="tel:+1234567890"
                            className="bg-gradient-to-r from-electric-yellow to-electric-orange text-electric-dark px-6 py-3 rounded-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" />
                                <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.086-1.391l-4.064-3.696z" />
                            </svg>
                            Call Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-electric-dark border-t border-gray-700"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-3">
                            <Link
                                to="/"
                                onClick={closeMenu}
                                className="block text-gray-300 hover:text-electric-yellow transition-colors duration-200 py-3 font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                to="/services"
                                onClick={closeMenu}
                                className="block text-gray-300 hover:text-electric-yellow transition-colors duration-200 py-3 font-medium"
                            >
                                Services
                            </Link>
                            <Link
                                to="/contact"
                                onClick={closeMenu}
                                className="block text-gray-300 hover:text-electric-yellow transition-colors duration-200 py-3 font-medium"
                            >
                                Contact
                            </Link>

                            {/* Mobile Call Now Button */}
                            <a
                                href="tel:+1234567890"
                                className="block w-full text-center bg-gradient-to-r from-electric-yellow to-electric-orange text-electric-dark px-6 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-200"
                            >
                                📞 Call Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
