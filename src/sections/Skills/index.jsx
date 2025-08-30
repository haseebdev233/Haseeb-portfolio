import React from 'react';
import { motion } from 'framer-motion';
import {
    FaReact, FaNodeJs, FaDatabase, FaServer,
    FaFigma, FaTools, FaCode, FaPalette,
    FaJs, FaCss3Alt, FaHtml5, FaGitAlt
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript } from 'react-icons/si';

const index = () => {
    const mernStackSkills = [
        { name: 'React', level: 95, icon: <FaReact className="text-blue-500" /> },
        { name: 'Node.js', level: 90, icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Express.js', level: 88, icon: <SiExpress className="text-gray-300" /> },
        { name: 'MongoDB', level: 85, icon: <SiMongodb className="text-green-600" /> }
    ];

    const frontendSkills = [
        { name: 'JavaScript', level: 95, icon: <FaJs className="text-yellow-400" /> },
        { name: 'HTML5', level: 98, icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS3', level: 92, icon: <FaCss3Alt className="text-blue-400" /> },
        { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss className="text-cyan-500" /> }
    ];

    const backendSkills = [
        { name: 'RESTful APIs', level: 90, icon: <FaServer className="text-purple-500" /> },
        { name: 'Authentication', level: 88, icon: <FaDatabase className="text-teal-500" /> },
        { name: 'Database Design', level: 85, icon: <FaDatabase className="text-blue-400" /> }
    ];

    const toolsSkills = [
        { name: 'Git & GitHub', level: 90, icon: <FaGitAlt className="text-orange-600" /> },
        { name: 'VS Code', level: 95, icon: <FaTools className="text-blue-500" /> },
        { name: 'Cursor Code', level: 85, icon: <FaCode className="text-purple-600" /> },
        { name: 'UI/UX Design', level: 82, icon: <FaPalette className="text-pink-500" /> }
    ];

    return (
        <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 to-teal-900 overflow-hidden scroll-mt-24 md:scroll-mt-28">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-emerald-400">Expertise</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-400 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        My skills as a MERN stack developer with expertise in building full-stack applications
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* MERN Stack Skills */}
                    <SkillCategory
                        title="MERN Stack"
                        description="Full-stack JavaScript technologies for building modern web applications"
                        skills={mernStackSkills}
                        color="from-emerald-600 to-indigo-700"
                        delay={0.1}
                    />

                    {/* Frontend Skills */}
                    <SkillCategory
                        title="Frontend Development"
                        description="Creating responsive and interactive user interfaces"
                        skills={frontendSkills}
                        color="from-cyan-500 to-emerald-600"
                        delay={0.2}
                    />

                    {/* Backend Skills */}
                    <SkillCategory
                        title="Backend Development"
                        description="Server-side logic, APIs, and database management"
                        skills={backendSkills}
                        color="from-green-500 to-teal-600"
                        delay={0.3}
                    />

                    {/* Tools & Design */}
                    <SkillCategory
                        title="Tools & Design"
                        description="Development tools and design principles"
                        skills={toolsSkills}
                        color="from-yellow-500 to-emerald-600"
                        delay={0.4}
                    />
                </div>

                {/* Decorative elements */}
                <div className="absolute left-0 bottom-0 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-20"></div>
                <div className="absolute right-0 top-0 w-64 h-64 bg-cyan-600 rounded-full blur-[100px] opacity-20"></div>
            </div>
        </section>
    );
};

const SkillCategory = ({ title, description, skills, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="bg-slate-800/50 backdrop-blur-sm border border-teal-800/40 rounded-xl p-6 shadow-xl relative overflow-hidden"
    >
        {/* Category header */}
        <div className="mb-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}>
                    {skills[0].icon}
                </div>
                {title}
            </h3>
            <p className="text-slate-400 mt-2 text-sm">{description}</p>
        </div>

        {/* Skills list */}
        <div className="space-y-5">
            {skills.map((skill, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: delay + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                >
                    <div className="text-xl">
                        {skill.icon}
                    </div>
                    <div className="flex-grow">
                        <div className="flex justify-between mb-1">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className={`h-full bg-gradient-to-r ${color} rounded-full`}
                            />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Decorative corner */}
        <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br ${color} blur-xl opacity-10`}></div>
    </motion.div>
);

export default index;