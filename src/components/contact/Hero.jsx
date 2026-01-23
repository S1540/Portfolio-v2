import React from "react";
import { motion } from "framer-motion";
import { Mail, Download, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex py-16 justify-center bg-zinc-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/20 blur-[140px]" />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-7xl text-center px-6"
      >
        {/* Small Badge */}
        <span className="inline-block mb-4 px-4 py-1 text-xs tracking-widest uppercase border border-orange-500/40 text-orange-400 rounded-full">
          Let’s Connect
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-black leading-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
          Let’s Build Something
          <br />
          That Feels <span className="text-orange-500">Alive</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-center">
          I craft high-performance, motion-driven web experiences.
          <br />
          Open for full-time roles, freelance projects & collaborations.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-black font-bold rounded-md flex items-center gap-2 transition">
            <Mail size={18} />
            Send Message
          </button>

          <button className="px-6 py-3 bg-zinc-900 border border-zinc-700 hover:border-orange-500/60 text-white rounded-md flex items-center gap-2 transition">
            <Download size={18} />
            Resume
          </button>

          <button className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md flex items-center gap-2 transition">
            <MessageCircle size={18} />
            Chat with AI
          </button>
        </div>

        {/* Status Line */}
        <p className="mt-10 text-xs text-gray-500 tracking-wide">
          Currently building the next version of this portfolio ⚡
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
