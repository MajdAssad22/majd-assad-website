import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch device
    const checkMobile = () => {
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768; // You can adjust this breakpoint
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Don't add mouse event listeners on mobile

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if any element at the cursor point has cursor: pointer
      let el = document.elementFromPoint(
        e.clientX,
        e.clientY
      ) as HTMLElement | null;
      let hasPointer = false;
      while (el && el !== document.documentElement) {
        const cursorStyle = window.getComputedStyle(el).cursor;
        if (cursorStyle === "pointer") {
          hasPointer = true;
          break;
        }
        el = el.parentElement;
      }
      setIsPointer(hasPointer);
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      document.body.style.cursor = "auto";
      return;
    }

    // Hide the default cursor
    document.body.style.cursor = "none";
    return () => {
      // Restore the default cursor when the component unmounts
      document.body.style.cursor = "auto";
    };
  }, [isMobile]);

  // Don't render cursor on mobile
  if (isMobile) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed w-8 h-8 rounded-full border-[1px] backdrop-hue-rotate-180 backdrop-invert pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          left: `${position.x - 16}px`,
          top: `${position.y - 16}px`,
          transform: `scale(${isPointer ? 2.5 : 0})`,
        }}
      />
      {/* Cursor dot */}
      <div
        className="fixed w-2 h-2 rounded-full bg-primary-500 pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          left: `${position.x - 4}px`,
          top: `${position.y - 4}px`,
          transform: `scale(${isPointer ? 1 : 1.5})`,
        }}
      />
    </>
  );
};

export default CustomCursor;
