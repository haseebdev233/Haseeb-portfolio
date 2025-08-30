import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaServer, FaMobileAlt, FaDatabase, FaRocket } from 'react-icons/fa';

const index = () => {
    const skills = [
        {
            icon: <FaCode className="text-2xl" />,
            title: 'Frontend Development',
            description: 'Building responsive UIs with React, Redux, and modern JavaScript frameworks.'
        },
        {
            icon: <FaServer className="text-2xl" />,
            title: 'Backend Development',
            description: 'Developing RESTful APIs and microservices with Node.js and Express.'
        },
        {
            icon: <FaDatabase className="text-2xl" />,
            title: 'Database Management',
            description: 'Designing and optimizing MongoDB schemas for scalable applications.'
        },
        {
            icon: <FaMobileAlt className="text-2xl" />,
            title: 'Responsive Design',
            description: 'Creating mobile-first experiences that work flawlessly across all devices.'
        }
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-teal-900 scroll-mt-24 md:scroll-mt-28">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        About <span className="text-emerald-400">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-400 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Passionate MERN Stack Developer with expertise in building scalable web applications
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-slate-800/50 p-6 sm:p-8 rounded-2xl border border-teal-800/40 shadow-xl"
                    >
                        <h3 className="text-2xl font-bold mb-6">
                            I'm a <span className="text-emerald-300">MERN Stack Developer</span> based in Pakistan
                        </h3>

                        <p className="mb-4 text-gray-300">
                            As a dedicated Full Stack Developer with 2+ years of experience, I specialize in creating robust and scalable web applications using the MERN stack. My journey began with a fascination for both design and technology, which evolved into a passion for building seamless digital experiences.
                        </p>

                        

                        <p className="text-gray-300 mb-6">
                            I build apps end to end: plan the work, design databases,
                            create APIs, and craft clean, responsive UIs that work on any device.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                            {['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Tailwind', 'REST API', 'TypeScript'].map((tech, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-teal-800/30 py-2 px-4 rounded-lg text-center border border-teal-800/40"
                                >
                                    <span className="text-teal-300 font-medium">{tech}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -10 }}
                                    className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-teal-800/40 shadow-lg flex flex-col h-full"
                                >
                                    <div className="text-teal-400 mb-4">{skill.icon}</div>
                                    <h4 className="text-xl font-bold mb-2 text-white">{skill.title}</h4>
                                    <p className="text-gray-400 flex-grow">{skill.description}</p>
                                    <div className="mt-4 pt-3 border-t border-teal-800/40">
                                        <div className="w-full bg-slate-700 rounded-full h-1.5">
                                            <div
                                                className="bg-gradient-to-r from-teal-500 to-emerald-400 h-1.5 rounded-full"
                                                style={{ width: `${85 + (index * 2)}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
                >
                    <div className="bg-gray-800/50 border border-emerald-700 rounded-xl p-6 text-center">
                        <div className="text-4xl font-bold text-emerald-400 mb-2">2+</div>
                        <div className="text-gray-400">Years Experience</div>
                    </div>
                    <div className="bg-gray-800/50 border border-cyan-700 rounded-xl p-6 text-center">
                        <div className="text-4xl font-bold text-cyan-400 mb-2">20+</div>
                        <div className="text-gray-400">Projects Completed</div>
                    </div>
                    <div className="bg-gray-800/50 border border-emerald-700 rounded-xl p-6 text-center">
                        <div className="text-4xl font-bold text-emerald-400 mb-2">30+</div>
                        <div className="text-gray-400">Happy Clients</div>
                    </div>
                    <div className="bg-gray-800/50 border border-cyan-400 rounded-xl p-6 text-center">
                        <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
                        <div className="text-gray-400">Technologies Used</div>
                    </div>
                </motion.div>
                {/* Experience Timeline */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <h3 className="text-2xl font-bold mb-8 text-center text-white">Professional Journey</h3>
                    <div className="relative">
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-cyan-400"></div>

                        <div className="space-y-12 ml-12 md:ml-0">
                            {[
                                {
                                    period: "2021 - Present",
                                    role: "Senior MERN Stack Developer",
                                    company: "Tech Innovations Ltd",
                                    description: "Leading development of enterprise SaaS applications with React, Node.js, and MongoDB. Implemented microservices architecture improving system scalability by 40%."
                                },
                                {
                                    period: "2019 - 2021",
                                    role: "Full Stack Developer",
                                    company: "Digital Solutions Inc",
                                    description: "Developed and maintained e-commerce platforms serving 50K+ monthly users. Optimized application performance reducing load times by 60%."
                                },
                                {
                                    period: "2018 - 2019",
                                    role: "Frontend Developer",
                                    company: "Web Creatives Agency",
                                    description: "Created responsive user interfaces for diverse clients. Collaborated with design teams to implement pixel-perfect UI components."
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`relative pl-8 md:pl-0 ${index % 2 === 0
                                        ? 'md:pr-8 md:text-right'
                                        : 'md:pl-8 md:text-left'
                                        }`}
                                >
                                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 border-4 border-gray-900"></div>

                                    <div className={`bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                                        }`}>
                                        <span className="text-purple-400 text-sm font-medium">{item.period}</span>
                                        <h4 className="text-xl font-bold text-white mt-2">{item.role}</h4>
                                        <p className="text-cyan-300 font-medium">{item.company}</p>
                                        <p className="text-gray-400 mt-3">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default index;