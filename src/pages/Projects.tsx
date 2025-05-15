import { useState } from "react";
import { projects, categories } from "../data/projects";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import StaggeredList from "../components/StaggeredList";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <StaggeredList
            delay={0.4}
            staggerDelay={0.1}
            direction="up"
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 text-primary-500">
              My Projects
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              A collection of my work showcasing my skills in web development,
              full-stack applications, and innovative solutions.
            </p>
          </StaggeredList>

          {/* Category Filter */}
          <StaggeredList
            delay={0.6}
            staggerDelay={0.1}
            direction="up"
            layout="horizontal"
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30"
                    : "bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700"
                }`}
              >
                {category}
              </button>
            ))}
          </StaggeredList>

          {/* Projects Grid */}
          <StaggeredList
            delay={1.1}
            staggerDelay={0.1}
            direction="up"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                className="group relative bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to={`/projects/${project.slug}`} className="block">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 p-6 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="px-4 py-1 text-xs bg-primary-500 text-white rounded-full mb-3 inline-block">
                        {project.category}
                      </span>
                      <h3 className="text-sm font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-primary-500/10 text-primary-500 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 px-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
                      >
                        View Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 px-4 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </StaggeredList>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
