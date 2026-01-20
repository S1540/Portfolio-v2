import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import resume from "../../assets/Resume3.0.pdf";
import { Download } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  const NavLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Project",
      path: "/project",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-black/10 backdrop-blur-md shadow-md z-50 text-white border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="shrink-0">
              <h1 className="text-2xl font-bold uppercase tracking-wide">
                Shubham
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {NavLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-600 uppercase font-bold tracking-wider transition-all duration-200 ease-in-out"
                      : "text-gray-200 uppercase font-medium hover:text-amber-600"
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <a
                href={resume}
                download={false}
                className=" flex gap-2 px-4 hover:text-orange-600 rounded-md transition-all duration-200 font-medium uppercase active:scale-95"
              >
                Download CV <Download />
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 pt-2 pb-4 space-y-2 bg-black/10">
            {NavLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-600 font-se block px-4 py-3 hover:bg-white/10 hover:text-amber-600 rounded-md transition-all duration-200 font-medium uppercase"
                    : "block px-4 py-3 hover:bg-white/10 hover:text-amber-600 rounded-md transition-all duration-200 font-medium uppercase active:scale-95"
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href={resume}
              download={false}
              className=" flex gap-2 px-4 py-3 hover:bg-white/10 hover:text-orange-600 rounded-md transition-all duration-200 font-medium uppercase active:scale-95"
            >
              Download CV <Download />
            </a>
          </nav>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;
