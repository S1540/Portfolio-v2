import React, { useState } from "react";

const techStackList = [
  "Vanilla JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "MUI",
  "Bootstrap",
  "Framer Motion",
  "Ai-Integration",
];

const AdminDashboard = () => {
  const [projectData, setProjectData] = useState({
    projectName: "",
    techStack: [],
    githubLink: "",
    liveLink: "",
    projectImage: null,
    projectStatus: "",
    projectDescription: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("projectName", projectData.projectName);
    formData.append("techStack", JSON.stringify(projectData.techStack));
    formData.append("githubLink", projectData.githubLink);
    formData.append("liveLink", projectData.liveLink);
    formData.append("projectImage", projectData.projectImage);
    formData.append("projectStatus", projectData.projectStatus);
    formData.append("projectDescription", projectData.projectDescription);
    console.log(formData);
  };

  return (
    <section className="bg-zinc-950 min-h-screen text-white px-4 py-10">
      {/* Header */}
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider">
          Admin Command Center
        </h1>
        <ul className="flex gap-8 mt-3 text-sm text-gray-400">
          <li>Safe</li>
          <li>Secure</li>
          <li>Reliable</li>
        </ul>
      </div>

      {/* Admin Board */}
      <form onSubmit={handleOnSubmit}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* Project Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Project Name</label>
              <input
                type="text"
                name="projectName"
                value={projectData.projectName}
                onChange={handleOnChange}
                required
                placeholder="Project Name"
                className="bg-zinc-800 border border-orange-600/30 p-2 rounded outline-none focus:border-orange-500"
              />
            </div>

            {/* Status */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Status</label>
              <select
                required
                name="projectStatus"
                value={projectData.projectStatus}
                onChange={handleOnChange}
                className="bg-zinc-800 border border-orange-600/30 p-2 rounded outline-none focus:border-orange-500"
              >
                <option value="Live">Live</option>
                <option value="Planning">Planning</option>
                <option value="Ongoing">Ongoing</option>
              </select>
            </div>

            {/* Snapshot Upload */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Project Snapshot</label>
              <input
                type="file"
                className="bg-zinc-800 border border-dashed border-orange-600/40 p-2 rounded cursor-pointer file:text-sm file:bg-orange-600 file:border-0 file:px-3 file:py-1 file:text-black"
              />
            </div>

            {/* GitHub URL */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">GitHub Repository</label>
              <input
                type="url"
                name="githubLink"
                value={projectData.githubLink}
                onChange={handleOnChange}
                required
                placeholder="https://github.com/username/project"
                className="bg-zinc-800 border border-orange-600/30 p-2 rounded outline-none focus:border-orange-500"
              />
            </div>

            {/* Live URL */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Live Project URL</label>
              <input
                type="url"
                name="liveLink"
                value={projectData.liveLink}
                onChange={handleOnChange}
                required
                placeholder="https://project-live.vercel.app"
                className="bg-zinc-800 border border-orange-600/30 p-2 rounded outline-none focus:border-orange-500"
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* Description */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">
                Project Description
              </label>
              <textarea
                name="projectDescription"
                value={projectData.projectDescription}
                onChange={handleOnChange}
                required
                rows="6"
                placeholder="Describe project features, tech decisions, and purpose..."
                className="bg-zinc-800 border border-orange-600/30 p-2 rounded outline-none resize-none focus:border-orange-500"
              />
            </div>

            {/* Tech Stack */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Tech Stack Used</label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {techStackList.map((tech) => (
                  <label
                    key={tech}
                    className="flex items-center gap-2 text-sm bg-zinc-800 border border-orange-600/20 px-3 py-2 rounded cursor-pointer hover:border-orange-500 transition"
                  >
                    <input
                      type="checkbox"
                      name="techStack"
                      value={tech}
                      checked={projectData.techStack.includes(tech)}
                      onChange={handleOnChange}
                      className="accent-orange-500"
                    />
                    {tech}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center mt-12">
          <button
            type="submit"
            className="px-10 py-3 bg-orange-600 hover:bg-orange-500 text-black font-bold rounded transition"
          >
            Save Project
          </button>
        </div>
      </form>
    </section>
  );
};

export default AdminDashboard;
