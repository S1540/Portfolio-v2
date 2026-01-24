import { Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";

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
  const [result, setResult] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const [projectData, setProjectData] = useState({
    projectName: "",
    techStack: [],
    githubLink: "",
    liveLink: "",
    projectImage: null,
    projectStatus: "live",
    projectDescription: "",
    keyFeatures: [""],
  });

  const handleOnChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    setProjectData((prev) => {
      //file
      if (type === "file") {
        return {
          ...prev,
          [name]: files[0],
        };
      }
      //for checkbox
      if (type === "checkbox") {
        return {
          ...prev,
          techStack: checked
            ? [...prev.techStack, value]
            : prev.techStack.filter((tech) => tech !== value),
        };
      }
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // Handle Key Features
  const handleKeyFeaturesChange = (index, value) => {
    setProjectData((prev) => {
      const updatedKeyFtrs = [...prev.keyFeatures];
      updatedKeyFtrs[index] = value;
      return {
        ...prev,
        keyFeatures: updatedKeyFtrs,
      };
    });
  };

  // btn add on featurs according to key features
  const addKeyInput = () => {
    setProjectData((prev) => ({
      ...prev,
      keyFeatures: [...prev.keyFeatures, ""],
    }));
  };

  const removeKeyInput = (index) => {
    setProjectData((prev) => ({
      ...prev,
      keyFeatures: prev.keyFeatures.filter((_, i) => i !== index),
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("projectName", projectData.projectName);
    formData.append("techStack", JSON.stringify(projectData.techStack));
    formData.append("githubLink", projectData.githubLink);
    formData.append("liveLink", projectData.liveLink);
    formData.append("projectImage", projectData.projectImage);
    formData.append("projectStatus", projectData.projectStatus);
    formData.append("projectDescription", projectData.projectDescription);
    formData.append("keyFeatures", JSON.stringify(projectData.keyFeatures));
    // console.log(formData);

    try {
      const res = await fetch("/admin/new-project", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      const result = await res.json();
      setProjectData({
        projectName: "",
        techStack: [],
        githubLink: "",
        liveLink: "",
        projectImage: null,
        projectStatus: "live",
        projectDescription: "",
        keyFeatures: [""],
      });
      setResult(result);
      setShowNotification(true);
    } catch (error) {
      setResult({ error: error.message });
    }
  };
  // Notification
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <section className="bg-zinc-950 min-h-screen text-white px-4 py-10">
      {/* Header */}
      <div className="flex flex-col items-center mb-10 border-b border-orange-600/30 pb-5">
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider">
          Admin Command Center
        </h1>
        <ul className="flex gap-8 mt-3 text-sm text-gray-400">
          <li className="flex flex-row-reverse items-center gap-2">
            Safe
            <span className="bg-green-500 w-2 h-2 rounded-full inline-block animate-pulse"></span>
          </li>
          <li className="flex flex-row-reverse items-center gap-2">
            Secure
            <span className="bg-green-500 w-2 h-2 rounded-full inline-block animate-pulse"></span>
          </li>
          <li className="flex flex-row-reverse items-center gap-2">
            Reliable
            <span className="bg-green-500 w-2 h-2 rounded-full inline-block animate-pulse"></span>
          </li>
        </ul>
      </div>

      {/* Show notification on submit (success) */}
      {/* Notification */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50">
        {result.success && showNotification && (
          <div className="bg-green-500/20 border border-green-500/50 text-green-200 font-bold p-3 rounded-sm text-center w-4xl">
            {result.message}
          </div>
        )}

        {result.error && showNotification && (
          <div className="bg-red-500/20 border border-red-500/50 text-red-200 font-bold p-3 rounded-sm text-center w-4xl">
            {result.error}
          </div>
        )}
      </div>

      {/* Admin Board */}
      <form
        autoComplete="on"
        onSubmit={handleOnSubmit}
        encType="multipart/form-data"
      >
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
                name="projectImage"
                onChange={handleOnChange}
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
            {/* KeyFeatures */}
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm text-gray-300">Key Features</label>
              {projectData?.keyFeatures?.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 w-full">
                  <input
                    type="text"
                    name="keyFeatures"
                    onChange={(e) =>
                      handleKeyFeaturesChange(index, e.target.value)
                    }
                    value={feature}
                    required
                    placeholder={`Add Feature ${index + 1}`}
                    className="bg-zinc-800 border border-orange-600/30 p-2 rounded outline-none focus:border-orange-500 w-full"
                  />
                  {index === projectData.keyFeatures.length - 1 && (
                    <Plus
                      className="w-5 h-5 cursor-pointer"
                      onClick={addKeyInput}
                    />
                  )}
                  {index !== projectData.keyFeatures.length - 1 && (
                    <Minus
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => removeKeyInput(index)}
                    />
                  )}
                </div>
              ))}
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
            className="px-10 py-3 bg-orange-600 hover:bg-orange-500 text-black font-bold rounded transition cursor-pointer"
          >
            Save Project
          </button>
        </div>
      </form>
    </section>
  );
};

export default AdminDashboard;
