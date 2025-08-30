import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaGlobe } from 'react-icons/fa';
import profileImg from '../../assets/images/profile.jpg';
// removed incorrect href import

// Hero Component
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 py-12 md:py-20 pt-24 bg-gradient-to-b from-slate-900 to-teal-900 scroll-mt-24 md:scroll-mt-28">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
        <div className="text-center md:text-left px-1">
          <motion.h1
            className=""
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.span
              className="block text-lg sm:text-xl font-bold"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
            >
              {"Salaam, I'm".split('').map((ch, i) => (
                <motion.span
                  key={`greet-${i}`}
                  variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}
                  className="inline-block"
                >
                  {ch === ' ' ? '\u00A0' : ch}
                </motion.span>
              ))}
            </motion.span>
            {(() => {
              const name = 'Haseeb Dev';
              const [nameIndex, setNameIndex] = React.useState(0);
              React.useEffect(() => {
                if (nameIndex < name.length) {
                  const id = setTimeout(() => setNameIndex((i) => i + 1), 180);
                  return () => clearTimeout(id);
                }
              }, [nameIndex]);
              return (
                <span className="block text-4xl md:text-7xl bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent font-bold">
                  {name.slice(0, nameIndex)}
                  <motion.span
                    aria-hidden="true"
                    className="inline-block w-1.5 h-7 md:h-10 align-middle ml-1 bg-teal-300/80"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.9, repeat: Infinity }}
                  />
                </span>
              );
            })()}
          </motion.h1>

          {/* Rotating skill as plain text directly under heading */}
          {(() => {
            const skills = ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Tailwind CSS'];
            const [skillIndex, setSkillIndex] = React.useState(0);
            const [charIndex, setCharIndex] = React.useState(0);
            const [displayText, setDisplayText] = React.useState('');
            const current = skills[skillIndex];

            React.useEffect(() => {
              setDisplayText(current.slice(0, charIndex));
            }, [charIndex, current]);

            React.useEffect(() => {
              if (charIndex < current.length) {
                const id = setTimeout(() => setCharIndex((c) => c + 1), 200);
                return () => clearTimeout(id);
              } else {
                const pauseId = setTimeout(() => {
                  setSkillIndex((i) => (i + 1) % skills.length);
                  setCharIndex(0);
                }, 1800);
                return () => clearTimeout(pauseId);
              }
            }, [charIndex, current.length, skills.length]);
            return (
              <div className="mt-3 h-10 md:h-12 flex items-center justify-center md:justify-start overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 80 }}
                    transition={{ duration: 0.75, ease: 'easeInOut' }}
                    className="text-teal-300 text-2xl md:text-3xl font-semibold tracking-wide"
                  >
                    <span className="inline-block">{displayText}</span>
                    <motion.span
                      aria-hidden="true"
                      className="inline-block w-2 h-6 md:h-7 align-middle ml-1 bg-teal-300/70"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          })()}

          <motion.p
            className="mt-4 text-lg md:text-xl max-w-2xl text-slate-400 mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I specialize in creating modern web applications with React, Tailwind, and cutting-edge technologies.
          </motion.p>

          <motion.div
            className="flex gap-4 mt-6 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-600 rounded-md text-teal-50 shadow-md hover:shadow-teal-700/30 transition-colors duration-300"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex gap-4 mt-6 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {[
              { Icon: FaGithub, href: 'https://github.com/', label: 'GitHub' },
              { Icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/', label: 'LinkedIn' },
              { Icon: FaTwitter, href: 'https://twitter.com/', label: 'Twitter' },
              { Icon: FaGlobe, href: 'https://yourdomain.com', label: 'Website' }
            ].map(({ Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="text-slate-400 hover:text-teal-50 transition rounded-full p-2 border border-transparent hover:border-teal-500/60 hover:bg-teal-500/40 shadow-none hover:shadow-teal-700/30 hover:backdrop-blur-sm"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.02, rotate: 0.5 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80"
          >
            <div className="absolute -inset-1 rounded-2xl  bg-gradient-to-tr from-teal-500 to-emerald-400 blur opacity-30"></div>
            <img
              src={profileImg}
              alt="Profile"
              className="relative w-full h-full object-cover  rounded-3xl border border-teal-800/40 border-r-5 shadow-2xl hover:shadow-teal-700/30"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;