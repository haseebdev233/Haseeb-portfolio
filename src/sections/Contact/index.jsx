import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, SendOutlined, GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';

const index = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);
        }, 1500);
    };

    const contactInfo = [
        { icon: <MailOutlined />, text: 'muhammadhaseeb5@gmail.com' },
        { icon: <PhoneOutlined />, text: '+92 328 051 5797' },
        { icon: <EnvironmentOutlined />, text: 'Faisalabad, Pakistan' }
    ];

    const socialLinks = [
        { icon: <GithubOutlined />, url: '#', label: 'GitHub' },
        { icon: <LinkedinOutlined />, url: '#', label: 'LinkedIn' },
        { icon: <TwitterOutlined />, url: '#', label: 'Twitter' }
    ];

    return (
        <section id="contact" className="py-20 bg-slate-900/50 scroll-mt-24 md:scroll-mt-28">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Contact <span className="text-emerald-400">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-400 mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6">
                            Let's <span className="text-teal-300">Connect</span>
                        </h3>

                        <p className="mb-8 text-lg">
                            I'm currently available for freelance work aur new opportunities.
                            Agar aap ke paas koi project hai ya just want to say hello, feel free to contact me!
                        </p>

                        <div className="space-y-6 mb-10">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="text-teal-400 text-xl">
                                        {item.icon}
                                    </div>
                                    <span className="text-lg">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl border border-teal-800/40 hover:bg-teal-900/30 hover:border-teal-500 transition-all"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-xl border border-teal-800/40">
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-700 border border-teal-800/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-700 border border-teal-800/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-slate-700 border border-teal-800/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                                    placeholder="Hello, I would like to talk about..."
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 ${isSubmitting
                                    ? 'bg-slate-600 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600'
                                    }`}
                            >
                                {isSubmitting ? (
                                    'Sending...'
                                ) : (
                                    <>
                                        <SendOutlined /> Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default index;