import React, { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import background from "../../assets/Contact-hero.mp4";
import Button from "../common/Button";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "shubhamkumar2452004@gmail.com",
      link: "mailto:shubhamkumar2452004@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+91 7050043530",
      link: "tel:+917050043530",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Uttar Pradesh, India",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      link: "https://github.com/S1540",
      name: "GitHub",
      username: "@S1540",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      link: "https://www.linkedin.com/in/shubham-0q7/",
      name: "LinkedIn",
      username: "@shubham-0q7",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      link: "#",
      name: "Instagram",
      username: "@shubham.dev",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      link: "https://wa.me/917050043530",
      name: "WhatsApp",
      username: "+91 7050043530",
    },
  ];

  return (
    <section className="relative bg-zinc-900 overflow-hidden">
      {/* Dot Pattern Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(249, 115, 22, 0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hero Video */}
      <div className="relative max-w-full w-full h-[420px] overflow-hidden">
        <video
          src={background}
          loop
          autoPlay
          muted
          className="w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-zinc-900"></div>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-center sm:text-left px-4">
            <div className="inline-block px-5 py-2 bg-orange-600/20 backdrop-blur-sm rounded-full border border-orange-600/30 mb-6">
              <span className="text-orange-400 text-sm font-bold uppercase tracking-wider">
                Get In Touch
              </span>
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-white pb-4">
                Let's Create
                <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Something Amazing
                </span>
              </h1>
              <p className="text-gray-400 pb-4">
                Contact for collaboration and project inquiries{" "}
                <span>And Hiring Opportunities 🚀</span>
              </p>
              <Button name={"Contact"} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Let's Connect Section */}
        <div className="mb-16">
          <div className=" mb-12">
            <h2 className="heading text-3xl md:text-4xl font-black text-white">
              Let's Connect
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 mt-1 rounded-full"></div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Form */}
            <div className="relative group">
              <div className="relative bg-zinc-800/50 border border-orange-600/30 rounded-md p-6 md:p-8 h-full">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Send className="w-6 h-6 text-orange-400" />
                  Send Message
                </h3>

                {isSubmitted && (
                  <div className="mb-6 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 rounded-md p-4 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 shrink-0" />
                    <p className="text-green-400 font-semibold text-sm">
                      Message sent successfully!
                    </p>
                  </div>
                )}

                <div className="space-y-5">
                  <div>
                    <label className="block text-gray-200 font-semibold mb-2 text-sm">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-orange-600/30 focus:border-orange-500/50 rounded-md text-white placeholder-gray-500 outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-200 font-semibold mb-2 text-sm">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-orange-600/30 focus:border-orange-500/50 rounded-md text-white placeholder-gray-500 outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-200 font-semibold mb-2 text-sm">
                      Mobile Number{" "}
                      <span className="text-gray-500 text-xs">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="+91 7050043530"
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-orange-600/30 focus:border-orange-500/50 rounded-md text-white placeholder-gray-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-200 font-semibold mb-2 text-sm">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows="5"
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-orange-600/30 focus:border-orange-500/50 rounded-md text-white placeholder-gray-500 outline-none transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold rounded-md transition-all hover:scale-105 shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="relative group">
                <div className="relative bg-zinc-800/50 border border-orange-600/30 rounded-md p-6">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Contact Info
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-start gap-4 p-4 bg-zinc-900/50 border border-orange-600/20 rounded-md hover:border-orange-500/40 hover:bg-zinc-800/50 transition-all group"
                      >
                        <div className="w-10 h-10 bg-orange-600/20 rounded-md flex items-center justify-center shrink-0 group-hover:bg-orange-600/30 transition-colors">
                          <div className="text-orange-400">{info.icon}</div>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-sm mb-1">
                            {info.title}
                          </h4>
                          <p className="text-gray-400 text-sm">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="relative group">
                <div className="relative bg-zinc-800/50 border border-orange-600/30 rounded-md p-6">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Social Media
                  </h3>
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-zinc-900/50 border border-orange-600/20 rounded-md hover:border-orange-500/40 hover:bg-zinc-800/50 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-orange-600/20 rounded-md flex items-center justify-center group-hover:bg-orange-600/30 transition-colors">
                            <div className="text-orange-400">{social.icon}</div>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-sm">
                              {social.name}
                            </h4>
                            <p className="text-gray-400 text-xs">
                              {social.username}
                            </p>
                          </div>
                        </div>
                        <svg
                          className="w-5 h-5 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-16">
          <div className="inline-flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-md flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                Find Me Here
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 mt-1 rounded-full"></div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-md blur opacity-20"></div>
            <div className="relative rounded-md overflow-hidden border border-orange-600/30 h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.4938642268!2d77.04417!3d28.527554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
