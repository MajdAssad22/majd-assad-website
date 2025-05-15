import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";
import { certificatesAndBadges } from "../data/education";
import StaggeredList from "./StaggeredList";

const Certificates = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <ScrollAnimation>
      <div className="py-8">
        <StaggeredList
          delay={0.1}
          staggerDelay={0.1}
          direction="right"
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {certificatesAndBadges.map((certificate, index) => (
            <motion.a
              key={certificate.title}
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              custom={index}
              className="group relative bg-neutral-50 dark:bg-neutral-800/50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="aspect-square relative">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h4 className="font-medium text-neutral-900 dark:text-neutral-50 mb-1 group-hover:text-primary-500 transition-colors duration-300">
                  {certificate.title}
                </h4>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {certificate.issuer}
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-500">
                    {certificate.date}
                  </span>
                </div>
              </div>
              <motion.div
                className="absolute top-2 right-2 bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Badge
              </motion.div>
            </motion.a>
          ))}
        </StaggeredList>
      </div>
    </ScrollAnimation>
  );
};

export default Certificates;
