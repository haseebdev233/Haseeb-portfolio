import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    GithubOutlined,
    LinkOutlined,
    EyeOutlined,
    CloseOutlined
} from '@ant-design/icons';

const index = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Dashboard',
            description: 'Complete e-commerce dashboard with analytics, product management aur order tracking.',
            tags: ['React', 'Tailwind', 'Redux', 'Chart.js'],
            links: {
                live: '#',
                github: '#'
            }
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'Kanban-style task manager with drag & drop functionality aur team collaboration.',
            tags: ['React', 'Firebase', 'Tailwind', 'DnD'],
            links: {
                live: '#',
                github: '#'
            }
        },
        {
            id: 3,
            title: 'Weather Forecast App',
            description: 'Real-time weather application with location detection aur 7-day forecast.',
            tags: ['React', 'OpenWeather API', 'Geolocation', 'Chart.js'],
            links: {
                live: '#',
                github: '#'
            }
        },
        {
            id: 4,
            title: 'Restaurant Booking System',
            description: 'Online reservation system for restaurants with table management aur notifications.',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            links: {
                live: '#',
                github: '#'
            }
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-900/50 scroll-mt-24 md:scroll-mt-28">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My <span className="text-emerald-400">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-400 mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-slate-800 rounded-xl overflow-hidden border border-teal-800/40"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <div className="flex gap-3">
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-purple-400 transition-colors"
                                        >
                                            <GithubOutlined />
                                        </a>
                                        <a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-cyan-400 transition-colors"
                                        >
                                            <LinkOutlined />
                                        </a>
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            <EyeOutlined />
                                        </button>
                                    </div>
                                </div>

                                <p className="text-slate-400 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-teal-800/30 border border-teal-800/40 rounded-full text-sm text-teal-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Project Modal */}
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <CloseOutlined className="text-xl" />
                                    </button>
                                </div>

                                <div className="mb-6 bg-gray-200 border-2 border-dashed rounded-xl w-full h-64"></div>

                                <p className="text-lg mb-6">{selectedProject.description}</p>

                                <h4 className="text-lg font-bold mb-3">Technologies Used:</h4>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {selectedProject.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gray-700 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={selectedProject.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                                    >
                                        <GithubOutlined /> GitHub Code
                                    </a>
                                    <a
                                        href={selectedProject.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg"
                                    >
                                        <LinkOutlined /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default index;