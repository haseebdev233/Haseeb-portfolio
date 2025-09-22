import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaDribbble, FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const index = () => {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-gradient-to-t from-slate-950 to-slate-900 pt-16 pb-8 border-t border-teal-900/40 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-teal-600 blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-emerald-600 blur-3xl"></div>
                <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-cyan-600 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-16">
                    {/* Brand column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="px-2 sm:px-0"
                    >
                        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent mb-4 inline-block">
                            Haseeb Dev
                        </a>
                        <p className="text-gray-400 mb-6 max-w-xs text-sm sm:text-base">
                            Creating beautiful digital experiences with modern technologies and innovative design solutions.
                        </p>

                        <div className="flex gap-3 sm:gap-4">
                            {[
                                { icon: <FaGithub />, url: 'https://github.com/haseebdev233', color: 'hover:text-emerald-400' },
                                { icon: <FaLinkedinIn />, url: '#', color: 'hover:text-emerald-300' },
                                { icon: <FaTwitter />, url: '#', color: 'hover:text-emerald-300' },
                                { icon: <FaInstagram />, url: '#', color: 'hover:text-emerald-400' },
                                { icon: <FaDribbble />, url: '#', color: 'hover:text-emerald-300' }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 flex items-center justify-center text-base sm:text-lg border border-teal-800/40 transition-colors ${social.color}`}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="px-2 sm:px-0"
                    >
                        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {['Home', 'About', 'Projects', 'Skills', 'Contact', 'Blog'].map((item, index) => (
                                <li key={index}>
                                    <motion.a
                                        href={`#${item.toLowerCase()}`}
                                        whileHover={{ x: 5, color: '#34d399' }}
                                        className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white  group text-sm sm:text-base"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="px-2 sm:px-0"
                    >
                        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Get In Touch</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            <li className="flex items-start gap-3 sm:gap-4">
                                <div className="text-teal-400 mt-0.5 sm:mt-1 text-sm sm:text-base">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 className="text-gray-300 font-medium text-sm sm:text-base">Email</h4>
                                    <a href="mailto:haseebdev233@gmail.com" className="text-gray-400 hover:text-teal-400 transition-colors text-sm sm:text-base">
                                        haseebdev233@gmail.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 sm:gap-4">
                                <div className="text-teal-400 mt-0.5 sm:mt-1 text-sm sm:text-base">
                                    <FaPhone />
                                </div>
                                <div>
                                    <h4 className="text-gray-300 font-medium text-sm sm:text-base">Phone</h4>
                                    <a href="https://wa.me/923280515797" target='_blank' className="text-gray-400 hover:text-teal-400 transition-colors text-sm sm:text-base">
                                        +92 328 051 5797
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 sm:gap-4">
                                <div className="text-teal-400 mt-0.5 sm:mt-1 text-sm sm:text-base">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 className="text-gray-300 font-medium text-sm sm:text-base">Location</h4>
                                    <p className="text-gray-400 text-sm sm:text-base">Faisalabad, Pakistan</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="px-2 sm:px-0"
                    >
                        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Stay Updated</h3>
                        <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                            Subscribe to my newsletter for the latest updates and projects.
                        </p>

                        <form onSubmit={handleSubscribe} className="mb-3 sm:mb-4">
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
                                    required
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg sm:rounded-l-none sm:rounded-r-lg font-medium text-sm sm:text-base"
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </form>

                        {isSubscribed && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-green-400 text-sm"
                            >
                                Thank you for subscribing!
                            </motion.div>
                        )}

                        <p className="text-xs text-gray-500 mt-3 sm:mt-4">
                            I respect your privacy. Unsubscribe at any time.
                        </p>
                    </motion.div>
                </div>

                {/* Copyright and back to top */}
                <div className="pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-gray-500 text-xs sm:text-sm"
                    >
                        Made with <FaHeart className="text-red-500 mx-1" /> by Muhammad Haseeb &copy; {currentYear}. All rights reserved.
                    </motion.p>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base"
                    >
                        Back to top <FaArrowUp className="text-cyan-400" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default index;