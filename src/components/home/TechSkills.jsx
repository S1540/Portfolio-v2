import React from "react";
import { motion } from "framer-motion";
import SkillBufferBar from "../common/SkillBufferBar";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import react from "../../assets/react.png";
import javascript from "../../assets/javascript.png";
import tailwind from "../../assets/tailwind.png";
import next from "../../assets/nextjs.png";
import node from "../../assets/Node.png";
import mongo from "../../assets/mongodb.png";
// import express from "../../assets/express.png";
import git from "../../assets/github.png";
import excel from "../../assets/excel.png";
import word from "../../assets/word.png";

const TechSkills = () => {
  const skills = [
    { name: "HTML", value: 90, color: "#f56565" },
    { name: "CSS", value: 80, color: "#60a5fa" },
    { name: "React", value: 80, color: "#61dafb" },
    { name: "JavaScript", value: 75, color: "#f7df1e" },
    { name: "Tailwind", value: 90, color: "#38bdf8" },
    { name: "Next.js", value: 30, color: "#f59e0b" },
    { name: "Node.js", value: 70, color: "#68d391" },
    { name: "MongoDB", value: 60, color: "#4dc0b5" },
    { name: "Express", value: 70, color: "#4dc0b5" },
    { name: "Git", value: 70, color: "#ffffff" },
  ];
  const icons = [
    { id: 1, icon: html },
    { id: 2, icon: css },
    { id: 4, icon: javascript },
    { id: 3, icon: react },
    { id: 5, icon: tailwind },
    { id: 6, icon: next },
    { id: 7, icon: node },
    { id: 8, icon: mongo },
    { id: 9, icon: git },
    { id: 10, icon: excel },
    { id: 11, icon: word },
  ];

  return (
    <section className="relative w-full pt-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Animated Glow */}
        <div className="absolute top-20 right-20 w-44 h-96 bg-orange-600/10 rounded-full blur-2xl animate-pulse" />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-amber-600/10 rounded-full  blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-1/2 w-32 h-72 bg-amber-600/10 rounded-2xl blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        {/* Section Header */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white uppercase tracking-wider">
              Expertise
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
        {/* Skills list bar */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className=" group max-w-full w-full grid grid-cols-1 sm:grid-cols-2 gap-6 bg-linear-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border lg:border-b-0 lg:rounded-b-none border-orange-600/20 rounded-md p-5 sm:p-6 md:p-8 hover:border-orange-500/40 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 to-transparent rounded-md opacity-0 group-hover:opacity-100 transition-opacity" />
          {skills.map((skill) => (
            <SkillBufferBar
              key={skill.name}
              name={skill.name}
              target={skill.value}
              color={skill.color}
            />
          ))}
        </motion.div>
        <div>
          <div className="hidden group lg:flex gap-9 items-center justify-center bg-linear-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-orange-600/20 rounded-b-md py-4 px-10 hover:border-orange-500/40 transition-all duration-300 ">
            <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 to-transparent rounded-md opacity-0 group-hover:opacity-100 transition-opacity" />
            {icons.map((icon) => (
              <img key={icon.id} src={icon.icon} alt="" className="w-20 px-1" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
