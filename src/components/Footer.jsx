const Footer = () => {
    return (
        <footer className="bg-electric-dark text-gray-300 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center mb-4">
                            <svg
                                className="w-8 h-8 text-electric-yellow"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                            </svg>
                            <span className="ml-2 text-xl font-bold text-white">
                                Volt<span className="text-electric-yellow">Pro</span>
                            </span>
                        </div>
                        <p className="text-sm text-gray-400">
                            Professional electrical services you can trust. Licensed, insured, and available 24/7 for emergencies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/" className="hover:text-electric-yellow transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="hover:text-electric-yellow transition-colors">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-electric-yellow transition-colors">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 mr-2 text-electric-yellow"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" />
                                    <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.086-1.391l-4.064-3.696z" />
                                </svg>
                                (123) 456-7890
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 mr-2 text-electric-yellow"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
                                </svg>
                                info@voltpro.com
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="w-5 h-5 mr-2 mt-0.5 text-electric-yellow"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                                </svg>
                                <span>123 Electric Ave<br />New York, NY 10001</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} VoltPro Electrical Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
