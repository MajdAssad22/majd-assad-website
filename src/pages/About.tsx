import {
  Briefcase,
  GraduationCap,
  BookOpen,
  Database,
  Award,
} from "lucide-react";
import { skills } from "../data/skills";
import PageTransition from "../components/PageTransition";
import ScrollAnimation from "../components/ScrollAnimation";
import StaggeredList from "../components/StaggeredList";
import { education } from "../data/education";
import Certificates from "../components/Certificates";
import { jobs } from "../data/jobs";

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <StaggeredList
            delay={0.4}
            staggerDelay={0.1}
            direction="down"
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              About Me
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Passionate and forward-thinking Full Stack Developer with
              expertise in modern web technologies and a strong foundation in
              software engineering principles.
            </p>
          </StaggeredList>

          {/* Professional Experience */}
          <div className="mb-16">
            <ScrollAnimation delay={0.6} direction="right">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-2" />
                Professional Experience
              </h2>
            </ScrollAnimation>
            <StaggeredList delay={0.7} staggerDelay={0.2} direction="right">
              <div className="card">
                <div className="p-6">
                  {jobs.map((job, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                        {job.title}
                      </h3>
                      <p className="text-neutral-700 dark:text-neutral-500">
                        {job.company}
                      </p>
                      <p className="text-neutral-700 dark:text-neutral-500">
                        {job.description}
                      </p>
                      <p className="text-neutral-700 dark:text-neutral-500">
                        {job.startDate} - {job.endDate}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </StaggeredList>
          </div>

          {/* Technical Skills */}
          <div className="mb-16">
            <ScrollAnimation direction="right">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-6 flex items-center">
                <Database className="w-6 h-6 mr-2" />
                Technical Skills
              </h2>
            </ScrollAnimation>
            <StaggeredList
              delay={0.1}
              staggerDelay={0.1}
              direction="right"
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="card ">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <skillGroup.icon className="w-6 h-6" />
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 ml-2">
                        {skillGroup.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm bg-primary-500/10 text-primary-500 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </StaggeredList>
          </div>

          {/* Education */}
          <div className="mb-16">
            <ScrollAnimation direction="right">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2" />
                Education
              </h2>
            </ScrollAnimation>
            <StaggeredList
              delay={0.1}
              staggerDelay={0.1}
              direction="right"
              layout="vertical"
            >
              {education.map((edu) => (
                <div key={edu.degree} className="card p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                    {edu.degree}
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-500">
                    {edu.institution} - {edu.location}
                  </p>
                  <p className="text-neutral-700 dark:text-neutral-500 mb-4">
                    {edu.period.start} - {edu.period.end} (
                    {Number(edu.period.end) - Number(edu.period.start)}
                    {edu.period.unit})
                  </p>

                  <p className="text-neutral-600 dark:text-neutral-400 mb-10">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {edu.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary-500/10 text-primary-500 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </StaggeredList>
          </div>

          {/* Certificates */}
          <div className="mb-16">
            <ScrollAnimation direction="right">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2" />
                Certifications & Badges
              </h2>
            </ScrollAnimation>
            <Certificates />
          </div>

          {/* Interests & Hobbies */}
          <div>
            <ScrollAnimation direction="right">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-2" />
                Interests & Hobbies
              </h2>
            </ScrollAnimation>
            <StaggeredList
              delay={0.3}
              staggerDelay={0.1}
              layout="horizontal"
              direction="right"
              gap={4}
              className="grid grid-cols-1 md:grid-cols-2 "
            >
              <div className="card">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                    Professional Interests
                  </h3>
                  <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                    <li>• Full Stack Development</li>
                    <li>• Software Architecture</li>
                    <li>• Algorithm Design</li>
                    <li>• Distributed Systems</li>
                    <li>• Cloud Computing</li>
                  </ul>
                </div>
              </div>
              <div className="card">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                    Personal Interests
                  </h3>
                  <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                    <li>• Continuous Learning</li>
                    <li>• Open Source Contribution</li>
                    <li>• Technical Writing</li>
                    <li>• Problem Solving</li>
                    <li>• Team Collaboration</li>
                  </ul>
                </div>
              </div>
            </StaggeredList>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
