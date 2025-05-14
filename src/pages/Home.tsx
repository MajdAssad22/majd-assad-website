import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Mouse,
  Briefcase,
  Mail,
  ArrowRight,
  Github,
  Linkedin,
  Sparkles,
  Instagram,
} from "lucide-react";
import ProjectTable from "../components/ProjectTable";
import ScrollAnimation from "../components/ScrollAnimation";
import PageTransition from "../components/PageTransition";
import LandingBackground from "../components/LandingBackground";
import { links } from "../data/links";

const Home = () => {
  const [showImage, setShowImage] = useState(false);

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-neutral-900">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center overflow-hidden">
          {/* Dynamic Background */}
          <LandingBackground />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation delay={0.2}>
                <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm">
                  <Sparkles className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-semibold text-primary-600">
                    Full Stack Developer
                  </span>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <div className="space-y-6 mb-10">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white leading-[1.2] tracking-tight">
                    Hi, I'm{" "}
                    <span
                      className="relative inline-block group"
                      onMouseEnter={() => setShowImage(true)}
                      onMouseLeave={() => setShowImage(false)}
                    >
                      <span className="relative z-10 text-primary-600 cursor-cell group-hover:dark:text-primary-100 group-hover:text-neutral-900 transition-colors duration-300">
                        Majd Assad
                      </span>
                      <span className="absolute -bottom-1 left-0 w-full h-2 bg-primary-600/20 -rotate-1 group-hover:dark:bg-white/40 group-hover:bg-neutral-900/40 transition-colors duration-300" />

                      {/* Hover Image */}
                      <div
                        className={`absolute left-full ml-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                          showImage
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-2 pointer-events-none"
                        }`}
                      >
                        <div className="relative aspect-auto w-64 rounded-lg overflow-hidden shadow-xl border-2 border-primary-600/20">
                          <img
                            src="/my-pic.jpg"
                            alt="Majd Assad"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-neutral-800 rotate-45 border-l-2 border-t-2 border-primary-600/20" />
                      </div>
                    </span>
                  </h1>
                  <p className="text-xl sm:text-2xl text-neutral-700 dark:text-neutral-200 max-w-2xl leading-relaxed font-medium">
                    Crafting digital experiences through{" "}
                    <span className="text-primary-600 font-semibold">
                      clean code
                    </span>{" "}
                    and{" "}
                    <span className="text-primary-600 font-semibold">
                      creative solutions
                    </span>
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <div className="flex flex-wrap gap-4 mb-12">
                  <Link
                    to="/projects"
                    className="group inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/20"
                  >
                    <Briefcase className="w-5 h-5" />
                    View Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg border border-neutral-200 dark:border-neutral-700"
                  >
                    <Mail className="w-5 h-5" />
                    Contact Me
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollAnimation>

              {/* Social Links */}
              <ScrollAnimation delay={0.5}>
                <div className="flex gap-6">
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-500 hover:shadow-lg transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-500 hover:shadow-lg transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-500 hover:shadow-lg transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <Mouse className="w-6 h-6 text-primary-600 animate-bounce" />
          </div>
        </div>

        {/* Skills & Technologies Section */}
        <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
          <div className="container mx-auto px-4">
            <ScrollAnimation className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                Skills & Technologies
              </h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-200 max-w-2xl mx-auto font-medium">
                I work with modern technologies to build robust and scalable
                applications
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "React", level: "Advanced" },
                { name: "TypeScript", level: "Advanced" },
                { name: "Node.js", level: "Advanced" },
                { name: "Next.js", level: "Advanced" },
                { name: "Tailwind CSS", level: "Advanced" },
                { name: "GraphQL", level: "Intermediate" },
                { name: "PostgreSQL", level: "Advanced" },
                { name: "Docker", level: "Intermediate" },
              ].map((skill, index) => (
                <ScrollAnimation key={skill.name} delay={0.1 * index}>
                  <div className="group hover:shadow-lg transition-all duration-300 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                        {skill.name}
                      </h3>
                      <div className="flex items-center gap-3">
                        <div className="h-2.5 flex-1 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary-600 rounded-full transition-all duration-300 group-hover:bg-primary-700"
                            style={{
                              width:
                                skill.level === "Advanced"
                                  ? "90%"
                                  : skill.level === "Intermediate"
                                  ? "70%"
                                  : "50%",
                            }}
                          />
                        </div>
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-white dark:bg-neutral-900">
          <div className="container mx-auto px-4">
            <ScrollAnimation className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-200 max-w-2xl mx-auto font-medium">
                Explore my latest work and see how I bring ideas to life through
                code and creativity.
              </p>
            </ScrollAnimation>

            <div className="card">
              <ProjectTable />
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
          <div className="container mx-auto px-4">
            <ScrollAnimation className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                Let's Work Together
              </h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-200 mb-8 font-medium">
                Have a project in mind? I'd love to hear about it. Let's discuss
                how we can create something amazing together.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/20"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
