import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-3xl md:text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:flex-nowrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3 xl:w-1/4 p-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded mb-6"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-2/3 xl:w-3/4 p-2"
            >
              <h6 className="mb-2 font-semibold text-lg lg:text-xl">
                {project.title}
              </h6>
              <div className="flex flex-wrap mb-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <button className="m-2 px-4 py-2 bg-neutral-900 text-sm font-medium text-white rounded mb-4">
                    Code
                  </button>
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <button className="m-2 px-4 py-2 bg-neutral-900 text-sm font-medium text-white rounded mb-4">
                    Live
                  </button>
                </a>
              </div>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
