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
    { name: "HTML", value: 90, color: "#f56565", duration: 2000 },
    { name: "CSS", value: 80, color: "#60a5fa", duration: 2000 },
    { name: "React", value: 80, color: "#61dafb", duration: 2000 },
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
    <section className="relative w-full pt-20 pb-10 overflow-hidden">
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
        <div className="mb-12 sm:mb-16  w-full">
          <h2 className="heading text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">
            Tech Skills
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-orange-500 to-orange-600 mt-3 rounded-full"></div>
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
