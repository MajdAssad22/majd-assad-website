import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar.tsx";
import CustomCursor from "./components/CustomCursor.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";
import ProjectDetail from "./pages/projects/ProjectDetail.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // Simulate initial app loading
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen font-sans bg-primary-800">
          <AnimatePresence mode="wait">
            {isInitialLoading ? (
              <LoadingScreen key="loading" />
            ) : (
              <>
                <CustomCursor />
                <ScrollToTop />
                <Navbar />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:slug" element={<ProjectDetail />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
              </>
            )}
          </AnimatePresence>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
