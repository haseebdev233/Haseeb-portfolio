import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Getting Started with MERN',
    excerpt: 'A quick guide to building your first MERN stack app with best practices.',
    date: 'Aug 2025',
    tags: ['MERN', 'React', 'Node']
  },
  {
    title: 'Styling at Scale with Tailwind',
    excerpt: 'Tips for keeping Tailwind projects clean, scalable, and consistent.',
    date: 'Jul 2025',
    tags: ['Tailwind', 'CSS']
  },
  {
    title: 'Framer Motion Basics',
    excerpt: 'Add delightful animations to your React app with simple patterns.',
    date: 'Jun 2025',
    tags: ['Framer Motion', 'Animation']
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-slate-900/50 scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="text-emerald-400">Blog</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-slate-800/60 border border-teal-800/40 rounded-xl p-6 hover:border-emerald-500/50 transition-colors"
            >
              <div className="text-sm text-slate-400 mb-2">{post.date}</div>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-slate-400 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t, idx) => (
                  <span key={idx} className="px-2 py-1 text-xs rounded-full bg-teal-900/30 border border-teal-800/40 text-teal-200">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;


