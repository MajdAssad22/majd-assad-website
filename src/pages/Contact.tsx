import { Mail, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { links } from "../data/links";
import PageTransition from "../components/PageTransition";
import ScrollAnimation from "../components/ScrollAnimation";
import StaggeredList from "../components/StaggeredList";
import ContactForm from "../components/ContactForm";
import { contact } from "../data/contact";

const Contact = () => {
  return (
    <PageTransition>
      <div className="pt-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ScrollAnimation className="text-center mb-16" delay={0.4}>
            <h1 className="text-5xl font-bold mb-6 text-primary-500">
              Get in Touch
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Have a project in mind or want to discuss potential opportunities?
              I'd love to hear from you. Fill out the form below or reach out
              through any of the provided channels.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 grid-rows-1 lg:grid-rows-3 lg:grid-cols-2 gap-5 h-fit">
            {/* Contact Form */}
            <ScrollAnimation
              delay={0.6}
              className="row-span-auto lg:row-span-2"
            >
              <ContactForm />
            </ScrollAnimation>

            <ScrollAnimation delay={0.5}>
              <div className="card lg:h-full">
                <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-6">
                  Availability
                </h2>
                <StaggeredList
                  delay={0.6}
                  staggerDelay={0.1}
                  direction="left"
                  layout="vertical"
                >
                  <p className="text-neutral-600 dark:text-neutral-400">
                    I'm currently available for freelance work and full-time
                    positions. My typical response time is within 24 hours.
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span className="text-neutral-900 dark:text-neutral-100">
                      Available for new opportunities
                    </span>
                  </div>
                </StaggeredList>
              </div>
            </ScrollAnimation>
            {/* Contact Information */}
            <div className="card lg:h-full">
              <StaggeredList
                staggerDelay={0.1}
                direction="left"
                layout="vertical"
              >
                <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-6">
                  Contact Information
                </h2>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Email
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500 transition-colors duration-300"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Location
                    </p>
                    <p className="text-neutral-900 dark:text-neutral-100">
                      {contact.location}
                    </p>
                  </div>
                </div>
              </StaggeredList>
            </div>
            <div className="col-span-auto lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-6">
                  Connect with Me
                </h2>
                <StaggeredList
                  staggerDelay={0.1}
                  direction="up"
                  layout="horizontal"
                >
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-white dark:bg-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-300"
                  >
                    <Github className="w-6 h-6 text-primary-500" />
                    <span className="text-neutral-900 dark:text-neutral-100">
                      GitHub
                    </span>
                  </a>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-white dark:bg-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-300"
                  >
                    <Linkedin className="w-6 h-6 text-primary-500" />
                    <span className="text-neutral-900 dark:text-neutral-100">
                      LinkedIn
                    </span>
                  </a>
                  <a
                    href={links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-white dark:bg-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-300"
                  >
                    <Instagram className="w-6 h-6 text-primary-500" />
                    <span className="text-neutral-900 dark:text-neutral-100">
                      Instagram
                    </span>
                  </a>
                </StaggeredList>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
