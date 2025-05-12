import { useState } from "react";
import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import StaggeredList from "./StaggeredList";

interface PreviewPosition {
  x: number;
  y: number;
}

const ProjectTable = () => {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [previewPosition, setPreviewPosition] = useState<PreviewPosition>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLTableRowElement>) => {
    setPreviewPosition({
      x: e.clientX + 50,
      y: e.clientY,
    });
  };

  const handleRowClick = (projectSlug: string) => {
    navigate(`/projects/${projectSlug}`);
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative">
      {/* Mobile Card Layout */}
      <div className="block md:hidden space-y-4">
        {projects.map((project) => (
          <StaggeredList
            delay={0.5}
            staggerDelay={0.2}
            direction="right"
            className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-4 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700/50"
          >
            <h3 className="font-medium text-neutral-900 dark:text-neutral-50 mb-2">
              {project.title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-2 py-1 text-xs bg-primary-500/10 text-primary-500 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-200 hover:bg-primary-500 rounded-full p-2 transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-200 hover:bg-primary-500 rounded-full p-2 transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </StaggeredList>
        ))}
      </div>

      {/* Desktop Table Layout */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-200 dark:border-neutral-800">
              <th className="text-left py-4 px-6 text-neutral-600 dark:text-neutral-400 font-medium">
                Project
              </th>
              <th className="text-left py-4 px-6 text-neutral-600 dark:text-neutral-400 font-medium">
                Description
              </th>
              <th className="text-left py-4 px-6 text-neutral-600 dark:text-neutral-400 font-medium">
                Technologies
              </th>
              <th className="text-left py-4 px-6 text-neutral-600 dark:text-neutral-400 font-medium">
                Links
              </th>
            </tr>
          </thead>
          {/* <StaggeredList delay={0.5} staggerDelay={0.2} direction="right"> */}
          <tbody>
            {projects.map((project, i) => (
              <motion.tr
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
                key={project.title}
                className="border-b border-neutral-200 dark:border-neutral-800 cursor-pointer dark:hover:bg-neutral-700/20"
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
                onMouseMove={handleMouseMove}
                onClick={() => handleRowClick(project.slug)}
              >
                <td className="py-4 px-6">
                  <span className="font-medium text-neutral-900 dark:text-neutral-50">
                    {project.title}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary-500/10 text-primary-500 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-200 hover:bg-primary-500 rounded-full p-2 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-200 hover:bg-primary-500 rounded-full p-2 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
          {/* </StaggeredList> */}
        </table>
      </div>

      {/* Preview Image - Only show on desktop */}
      {hoveredProject && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="hidden md:block fixed pointer-events-none z-50 w-96 rounded-lg overflow-hidden shadow-xl transform -translate-y-1/2"
          style={{
            left: previewPosition.x,
            top: previewPosition.y,
          }}
        >
          <img
            src={projects.find((p) => p.title === hoveredProject)?.image}
            alt={hoveredProject}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-3">
            <h3 className="text-white font-medium">{hoveredProject}</h3>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectTable;
