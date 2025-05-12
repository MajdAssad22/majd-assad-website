import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  // Function to check if a link is active
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const menuVariants = {
    closed: {
      y: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const menuItemVariants = {
    closed: (i: number) => ({
      opacity: 0,
      y: 50,
      transition: {
        delay: i * 0.15,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  const closeButtonVariants = {
    closed: {
      opacity: 0,
      rotate: -90,
    },
    open: {
      opacity: 1,
      rotate: 0,
      transition: {
        delay: 0.7,
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <nav className="fixed w-full z-50">
      <PageTransition>
        <div
          className={`transition-all duration-500 px-4 sm:px-6 lg:px-8 ${
            scrolled
              ? "bg-neutral-900/85 dark:bg-neutral-900/85 shadow-lg backdrop-blur-md"
              : "bg-transparent"
          }`}
        >
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="group text-xl sm:text-2xl font-bold text-primary-500 hover:text-primary-600 transition-colors duration-300"
            >
              <span className="inline-block relative h-6 overflow-hidden min-w-[10ch] min-h-[1.5em]">
                <span className="block transition-all duration-300 transform group-hover:translate-y-6 group-hover:opacity-0">
                  MA
                </span>
                <span className="block absolute top-0 left-0 transition-all duration-300 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  Majd Assad
                </span>
              </span>
            </Link>

            {/* Hamburger button */}
            <button
              className="p-5 rounded-md text-neutral-400 hover:text-primary-500 focus:outline-none transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={24} className="text-primary-700" />
            </button>
          </div>
        </div>
      </PageTransition>

      {/* Full-screen Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 h-screen bg-neutral-900/95 dark:bg-neutral-900/95 z-60 backdrop-blur-md"
            onClick={(e) => {
              // Close menu when clicking outside the menu content
              if (e.target === e.currentTarget) {
                setIsMenuOpen(false);
              }
            }}
          >
            {/* Close button */}
            <motion.button
              variants={closeButtonVariants}
              initial="closed"
              animate="open"
              className="absolute right-8 top-0 p-5 text-neutral-400 hover:text-primary-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </motion.button>

            <div className="h-full flex flex-col items-center justify-center">
              <div className="space-y-10 text-center">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    custom={i}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      to={link.to}
                      className={`block text-3xl sm:text-6xl text-start transition-all duration-300 hover:translate-x-6 ${
                        isActive(link.to)
                          ? "text-primary-500"
                          : "text-neutral-400 hover:text-primary-500"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
