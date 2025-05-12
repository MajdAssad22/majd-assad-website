import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary-800/95 backdrop-blur-sm"
    >
      <div className="relative flex flex-col items-center gap-4">
        {/* Logo or Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-bold text-white mb-8"
        >
          MAJD ASSAD
        </motion.div>

        {/* Modern Loading Animation */}
        <div className="relative w-24 h-24">
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Middle Ring */}
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-white/40"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: -360,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Inner Ring */}
          <motion.div
            className="absolute inset-4 rounded-full border-2 border-white/60"
            animate={{
              scale: [1, 1.2, 1],
              rotate: 360,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Center Dot */}
          <motion.div
            className="absolute inset-[45%] rounded-full bg-white"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white/60 text-sm font-medium tracking-wider"
        >
          LOADING
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
