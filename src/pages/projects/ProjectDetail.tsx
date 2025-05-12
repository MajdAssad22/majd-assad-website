import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import StaggeredList from "../../components/StaggeredList";
import ScrollAnimation from "../../components/ScrollAnimation";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            {/* Back Button */}
            <Link
              to="/projects"
              className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-8 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </Link>

            {/* Project Header */}
            <StaggeredList
              delay={0.4}
              staggerDelay={0.1}
              direction="up"
              className="mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-1 bg-primary-500 text-white rounded-full text-sm">
                  {project.category}
                </span>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </StaggeredList>

            {/* Project Image */}
            <ScrollAnimation
              delay={0.7}
              direction="up"
              className="mb-12 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </ScrollAnimation>

            {/* Project Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:col-span-2"
              >
                <h2 className="text-2xl font-semibold mb-6 text-neutral-900 dark:text-white">
                  About the Project
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-6"
              >
                {/* Project Links */}
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">
                    Project Links
                  </h3>
                  <div className="space-y-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center py-3 px-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-300"
                      >
                        View on GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center py-3 px-4 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors duration-300"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary-500/10 text-primary-500 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
