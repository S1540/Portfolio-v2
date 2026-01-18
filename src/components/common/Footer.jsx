import React from "react";
import { Mail, Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, link: "https://github.com/S1540" },
    {
      icon: <Linkedin className="w-5 h-5" />,
      link: "https://www.linkedin.com/in/shubham-0q7/",
    },
    { icon: <Twitter className="w-5 h-5" />, link: "#" },
  ];

  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
  ];

  const services = [
    { name: "Web Development", link: "#" },
    { name: "UI/UX Design", link: "#" },
    { name: "AI Integration", link: "#" },
    { name: "API Development", link: "#" },
  ];

  return (
    <footer className="relative w-full bg-zinc-900 border-t border-orange-600/20 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(251, 146, 60, 0.4) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Grid - 4 Columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand Column */}
          <motion.div
            className="md:col-span-2 lg:col-span-1 space-y-5"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              SHUBHAM SINGH
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              MERN Stack Developer passionate about frontend — clean UI,
              responsive layouts, and smooth functionality.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm pt-1">
              <Mail className="w-4 h-4 text-orange-400 shrink-0" />
              <a
                href="mailto:shubhamkumar2452004@gmail.com"
                className="hover:text-orange-400 transition-colors break-all"
              >
                shubhamkumar2452004@gmail.com
              </a>
            </div>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 hover:border-orange-600/40 rounded-lg flex items-center justify-center text-white/60 hover:text-orange-500 transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div className="space-y-5" variants={itemVariants}>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.link}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div className="space-y-5" variants={itemVariants}>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider ml-2">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={service.link}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div className="space-y-5" variants={itemVariants}>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Stay Updated
            </h4>
            <p className="text-gray-400 text-sm">
              Get latest updates on projects and tech insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-600/40 transition-colors"
              />
              <motion.button
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg text-white text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-orange-600/30 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* Bottom */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <span>© 2026 Shubham Singh. All rights reserved. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 text-orange-500 fill-orange-500" />
            </motion.div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </a>
            <span className="text-orange-600/40">•</span>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Terms
            </a>
            <motion.button
              onClick={scrollToTop}
              className="ml-2 w-9 h-9 bg-orange-600/20 hover:bg-orange-600/30 border border-orange-600/30 rounded-lg flex items-center justify-center text-orange-400 hover:text-orange-300 transition-all"
              whileHover={{ scale: 1.1, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
