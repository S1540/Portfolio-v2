import React from "react";
import { motion } from "framer-motion";
import { CodeXml, Goal, Sparkles, Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Web Development",
      desc: "Building responsive, scalable web applications",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      desc: "Creating beautiful, intuitive interfaces",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI Integration",
      desc: "Implementing smart AI-powered features",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      desc: "Optimizing speed and user experience",
    },
  ];

  return (
    <section className="relative w-full bg-zinc-900 pt-16 overflow-hidden">
      {/* Animated Glow */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-2xl animate-pulse" />
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-amber-600/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wider text-white">
              ABOUT ME
            </h2>
            {/* Curved underline */}
            <svg
              className="absolute left-1/2 -bottom-3 sm:-bottom-4 -translate-x-1/2 w-32 sm:w-40 md:w-48"
              width="150"
              height="20"
              viewBox="0 0 150 20"
              fill="none"
            >
              <path
                d="M5 10 C40 18, 110 2, 145 10"
                stroke="url(#grad)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="200" y2="0">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#ea580c" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            {/* MERN Stack Card */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              className="group relative bg-linear-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-orange-600/20 rounded-md p-5 sm:p-6 md:p-8 hover:border-orange-500/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 to-transparent rounded-md opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-orange-500 to-amber-600 rounded-md flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20">
                    <CodeXml className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      MERN Stack Developer
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      I'm a Modern MERN Stack Developer with a growing focus on
                      AI-powered development. I build fast, intuitive, and
                      visually polished digital experiences that balance clean
                      design with solid engineering.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Development Style Card */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              className="group relative bg-linear-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-amber-600/20 rounded-md p-5 sm:p-6 md:p-8 hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 to-transparent rounded-md opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-amber-500 to-orange-600 rounded-md flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
                    <Goal className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                      My Development Style
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mt-1.5 sm:mt-2 shrink-0" />
                        <span>Use Always the new technology</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 sm:mt-2 shrink-0" />
                        <span>Pixel-perfect UI + Responsive Design</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mt-1.5 sm:mt-2 shrink-0" />
                        <span>Clean folder structure & scalable code</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 sm:mt-2 shrink-0" />
                        <span>Performance-first mindset</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mt-1.5 sm:mt-2 shrink-0" />
                        <span>User-centric design decisions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 sm:mt-2 shrink-0" />
                        <span>Passion for building meaningful products</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - What I Do */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              className="relative bg-linear-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-orange-500/30 rounded-md p-5 sm:p-6 md:p-8"
            >
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-orange-500/10 rounded-full blur-3xl" />

              <div className="relative space-y-5 sm:space-y-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-orange-500 to-amber-600 rounded-md flex items-center justify-center shadow-lg shadow-orange-500/30">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    What I Do
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="group bg-zinc-900/50 backdrop-blur-sm border border-orange-600/20 rounded-md p-4 sm:p-5 hover:border-orange-500/40 hover:bg-zinc-800/50 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-orange-500/20 to-amber-600/20 rounded-md flex items-center justify-center shrink-0 group-hover:from-orange-500/30 group-hover:to-amber-600/30 transition-all">
                          <div className="text-orange-400 group-hover:text-orange-300 transition-colors [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                            {service.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                            {service.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
