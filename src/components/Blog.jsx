import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { CONFIG } from '../config'

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-primary-darker">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
        >
          <div>
            <h2 className="text-5xl font-orbitron font-black mb-4 text-glow">
              Latest Blogs
            </h2>
            <p className="text-gray-300 text-lg">
              Stay updated with fitness tips, success stories, and gym news
            </p>
          </div>
          
          <motion.a
            href="#"
            whileHover={{ x: 10 }}
            className="mt-4 md:mt-0 flex items-center gap-2 text-accent-neon font-semibold group"
          >
            View All Posts
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONFIG.blog.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-accent-neon text-black font-bold px-4 py-2 rounded-full text-sm">
                  {post.date}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Neon Border Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-accent-neon transition-all duration-300 rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-accent-neon transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2 text-accent-cyan font-semibold group-hover:gap-4 transition-all">
                  <span>Read More</span>
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog

