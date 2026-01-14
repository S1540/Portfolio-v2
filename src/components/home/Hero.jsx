import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, PhoneCall } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Frontend Developer",
    "MERN Stack Developer",
    "AI Integration/Gen-AI ",
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <Github />,
      link: "https://github.com/S1540",
    },
    {
      id: 2,
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/shubham-0q7/",
    },
    {
      id: 3,
      icon: <Mail />,
      link: "shubhamkumar2452004@gmail.com",
    },
    {
      id: 4,
      icon: <PhoneCall />,
      link: "https://wa.me/917050043530?text=Hello%20Shubham%20Singh..!%20Let's%20discuss%20your%20project",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typewriter Effect
  useEffect(() => {
    let timeout;
    const currentRole = roles[roleIndex];

    if (typewriterText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setTypewriterText(currentRole.slice(0, typewriterText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setTypewriterText("");
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [typewriterText, roleIndex]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-zinc-900">
      {/* Dot Grid Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-linear(circle, rgba(249, 115, 22, 0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-zinc-900 via-transparent to-zinc-900" />
        <div className="absolute inset-0 bg-linear-to-r from-zinc-900 via-transparent to-zinc-900" />
      </div>

      {/* Animated Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" />

      {/* Vertical Text */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block opacity-10">
        <p
          className="text-7xl font-black text-white"
          style={{ writingMode: "vertical-rl" }}
        >
          DEVELOPER
        </p>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block opacity-10">
        <p
          className="text-7xl font-black text-white"
          style={{ writingMode: "vertical-rl" }}
        >
          PORTFOLIO
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col justify-between py-6 px-6 lg:px-20">
        {/* Top Badge */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-orange-600/20 backdrop-blur-sm rounded-full border border-orange-600/30 mb-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-white text-sm font-semibold">
              AVAILABLE FOR WORK
            </span>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className={`w-full max-w-6xl grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Left Side */}
            <div className="space-y-4 text-white">
              <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <span className="text-xs font-bold tracking-wider">
                  FULL STACK DEVELOPER
                </span>
              </div>

              <div>
                <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                  HI, I'M
                </h1>
                <h2 className="text-4xl lg:text-5xl font-black bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent leading-tight">
                  SHUBHAM SINGH
                </h2>

                {/* Typewriter Effect */}
                <div className="h-12 flex items-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-orange-500">
                    {typewriterText}
                    <span className="animate-pulse">|</span>
                  </h3>
                </div>
              </div>

              <p className="text-base text-gray-300 max-w-lg leading-relaxed text-start">
                I’m a modern MERN stack developer focused on AI-powered
                development, building fast, intuitive, and visually polished
                digital experiences with clean design, solid engineering, and a
                passion for solving real-world problems through code
              </p>
              <ul className="flex gap-8 text-white font-medium list-disc overflow-hidden">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind</li>
                <li>Node.js</li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  className="px-8 py-3 bg-amber-600 backdrop-blur-sm border border-orange-600/30 hover:bg-orange-600/90 text-white rounded-full font-bold flex items-center justify-center gap-2 transition-all 
                duration-500 hover:scale-101 active:scale-95 cursor-pointer"
                >
                  VIEW WORK
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all cursor-pointer">
                  CONTACT
                </button>
              </div>

              <div className="flex gap-3 pt-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-orange-500 hover:border-orange-500/30 transition-all"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-orange-500/20 rounded-md rotate-12" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-orange-600/20 rounded-md -rotate-12" />

              <div className="relative group">
                {/* Glowing Border Effect */}
                <div className="absolute -inset-0.5 bg-linear-to-r from-orange-600 to-orange-500 rounded-md blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />

                {/* Main Card */}
                <div className="relative bg-zinc-800/50 backdrop-blur-sm border border-orange-600/30 rounded-md p-4 overflow-hidden">
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-orange-500/40 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-orange-500/40 rounded-br-2xl" />

                  {/* Image Container */}
                  <div className="relative aspect-square rounded-md overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src="https://shubham-singh-007.netlify.app/assets/image%20S3.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />

                    {/* linear Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                    {/* Name Badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/60 backdrop-blur-md rounded-lg px-4 py-3 border border-orange-500/30">
                        <h3 className="text-white font-bold text-lg">
                          Shubham Singh
                        </h3>
                        <p className="text-orange-400 text-sm font-medium">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className={`transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-8 py-5 bg-black/50 backdrop-blur-sm rounded-md border border-orange-600/20">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-black bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  25+
                </div>
                <div className="text-sm text-gray-500 font-semibold mt-1">
                  Projects
                </div>
              </div>
              <div className="border-x border-orange-600/20">
                <div className="text-4xl font-black bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  2+
                </div>
                <div className="text-sm text-gray-500 font-semibold mt-1">
                  Years
                </div>
              </div>
              <div>
                <div className="text-4xl font-black bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  4+
                </div>
                <div className="text-sm text-gray-500 font-semibold mt-1">
                  Gen-AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
