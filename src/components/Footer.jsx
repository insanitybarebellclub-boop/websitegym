import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { CONFIG } from '../config'

const Footer = () => {
  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Schedule', to: 'schedule' },
    { name: 'Blog', to: 'blog' },
    { name: 'Contact', to: 'contact' },
  ]

  const socialLinks = [
    { icon: FaFacebookF, url: CONFIG.social.facebook, name: 'Facebook' },
    { icon: FaInstagram, url: CONFIG.social.instagram, name: 'Instagram' },
    { icon: FaYoutube, url: CONFIG.social.youtube, name: 'YouTube' },
    { icon: FaTwitter, url: CONFIG.social.twitter, name: 'Twitter' },
  ]

  return (
    <footer id="contact" className="relative bg-primary-darker pt-20 pb-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(57, 255, 20, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(57, 255, 20, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-orbitron font-black text-glow mb-4">
              {CONFIG.brand.shortName}
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {CONFIG.brand.tagline}
            </p>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent-neon mt-1 flex-shrink-0" />
                <span className="text-sm">{CONFIG.contact.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-400 hover:text-accent-neon transition-colors cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-accent-neon group-hover:w-4 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a
                href={`tel:${CONFIG.contact.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-accent-neon transition-colors group"
              >
                <div className="w-10 h-10 bg-accent-neon/10 rounded-full flex items-center justify-center group-hover:bg-accent-neon/20 transition-colors">
                  <FaPhone className="text-accent-neon" />
                </div>
                <span>{CONFIG.contact.phone}</span>
              </a>
              
              <a
                href={`mailto:${CONFIG.contact.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-accent-cyan transition-colors group"
              >
                <div className="w-10 h-10 bg-accent-cyan/10 rounded-full flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors">
                  <FaEnvelope className="text-accent-cyan" />
                </div>
                <span className="break-all">{CONFIG.contact.email}</span>
              </a>
            </div>
          </motion.div>

          {/* Column 4 - Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent-neon hover:text-black transition-all group"
                  aria-label={social.name}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
            
            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-sm text-gray-400 mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 rounded-full text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-neon"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-accent-neon rounded-full text-black font-bold text-sm hover:bg-accent-cyan transition-colors"
                >
                  →
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
        >
          <p>
            © {new Date().getFullYear()} {CONFIG.brand.name}. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent-neon transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent-neon transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-10 left-10 w-32 h-32 border-2 border-accent-cyan rounded-full opacity-10"
      />
      
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-20 w-40 h-40 border-2 border-accent-pink rounded-full opacity-10"
      />
    </footer>
  )
}

export default Footer

