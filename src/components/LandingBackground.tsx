import { useEffect, useRef } from "react";

const LandingBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      drawCircles();
    };

    // Draw concentric circles
    const drawCircles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#7c7780";

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.min(canvas.width, canvas.height);

      const circles = [
        { radius: maxRadius, dots: 100, size: 2 },
        { radius: maxRadius * 0.95, dots: 95, size: 1.5 },
        { radius: maxRadius * 0.9, dots: 90, size: 1 },
        { radius: maxRadius * 0.85, dots: 85, size: 0.5 },
        { radius: maxRadius * 0.205, dots: 400, size: 0.3 },
        { radius: maxRadius * 0.2, dots: 85, size: 1 },
        { radius: maxRadius * 0.175, dots: 85, size: 1 },
        { radius: maxRadius * 0.155, dots: 300, size: 0.2 },
        { radius: maxRadius * 0.15, dots: 80, size: 0.8 },
        { radius: maxRadius * 0.125, dots: 70, size: 0.8 },
        { radius: maxRadius * 0.105, dots: 150, size: 0.1 },
        { radius: maxRadius * 0.1, dots: 65, size: 0.6 },
        { radius: maxRadius * 0.075, dots: 50, size: 0.4 },
        { radius: maxRadius * 0.05, dots: 50, size: 0.4 },
        { radius: maxRadius * 0.025, dots: 50, size: 0.8 },
        { radius: maxRadius * 0.02, dots: 15, size: 0.8 },
        { radius: maxRadius * 0, dots: 1, size: 3 },
      ];

      circles.forEach((circle) => {
        for (let i = 0; i < circle.dots; i++) {
          const angle = (i / circle.dots) * Math.PI * 2;
          const x = centerX + Math.cos(angle) * circle.radius;
          const y = centerY + Math.sin(angle) * circle.radius;

          ctx.beginPath();
          ctx.arc(x, y, circle.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    };

    // Initialize
    resizeCanvas();

    // Event listeners
    window.addEventListener("resize", resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          maskImage:
            "radial-gradient(ellipse 60% 70% at 50% 50%, #000 70%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-500/5" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
    </div>
  );
};

export default LandingBackground;
