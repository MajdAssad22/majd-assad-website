import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface StaggeredListProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  layout?: "vertical" | "horizontal";
  gap?: number;
}

const StaggeredList = ({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
  direction = "up",
  duration = 0.5,
  layout = "vertical",
  gap = 8,
}: StaggeredListProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: 50 };
      case "down":
        return { y: -50 };
      case "left":
        return { x: 50 };
      case "right":
        return { x: -50 };
      default:
        return { y: 50 };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const containerClasses =
    layout === "horizontal"
      ? `flex flex-wrap gap-${gap} ${className}`
      : `flex flex-col gap-${gap} ${className}`;

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={containerClasses}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={layout === "horizontal" ? "flex-shrink-0" : "w-full"}
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>{children}</motion.div>
      )}
    </motion.div>
  );
};

export default StaggeredList;
