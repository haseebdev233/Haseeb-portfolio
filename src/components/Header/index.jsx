import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const index = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const ids = ['home', 'about', 'projects', 'skills', 'blog', 'contact'];
        const elements = ids
            .map(id => document.getElementById(id))
            .filter(Boolean);
        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { root: null, rootMargin: '0px 0px -40% 0px', threshold: 0.35 }
        );

        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // Also update active link immediately on hash changes (e.g., direct navigation)
    useEffect(() => {
        const setFromHash = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash) setActiveSection(hash);
        };
        setFromHash();
        window.addEventListener('hashchange', setFromHash);
        return () => window.removeEventListener('hashchange', setFromHash);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' }
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const id = href.replace('#', '');
        setActiveSection(id); // immediate highlight
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            history.pushState(null, '', href);
        } else {
            window.location.hash = href;
        }
    };

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-slate-950/90 backdrop-blur-md py-3 shadow-xl'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-3 sm:px-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent"
                >
                    <a href="#home">Haseeb Dev</a>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 lg:space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            whileHover={{ y: -3, color: '#5eead4', textShadow: '0 0 8px rgba(94, 234, 212, 0.5)' }}
                            className={`text-lg font-medium transition-all ${activeSection === link.href.replace('#','') ? 'text-teal-300' : 'text-slate-200'}`}
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                    className="md:hidden text-2xl z-50 p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                </button>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden fixed inset-0 bg-slate-950/95 backdrop-blur-lg pt-20"
                    >
                        <div className="flex flex-col items-center space-y-6 sm:space-y-8 py-10 px-6">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className={`text-2xl font-medium py-2 w-full text-center rounded-md transition-colors ${activeSection === link.href.replace('#','') ? 'bg-teal-900/40 text-teal-200' : 'text-slate-200'}`}
                                    onClick={(e) => { handleNavClick(e, link.href); setMobileMenuOpen(false); }}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={(e) => { handleNavClick(e, '#contact'); setMobileMenuOpen(false); }}
                                className="mt-2 inline-block px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-md text-slate-900 font-semibold"
                                aria-current={activeSection === 'contact' ? 'page' : undefined}
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>
                )}
            </div>
        </header>
    );
};

export default index;