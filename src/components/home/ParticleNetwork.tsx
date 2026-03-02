import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const PARTICLE_COUNT = 60;
const LINE_DIST = 120;
const SPEED = 0.4;
const LINE_OPACITY = 0.15;
const PARTICLE_OPACITY_MIN = 0.15;
const PARTICLE_OPACITY_MAX = 0.4;
const MOUSE_RADIUS = 100;
const MOUSE_FORCE = 0.02;

const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -9999, y: -9999 });
  const animId = useRef(0);
  const dpr = useRef(1);

  const init = useCallback((w: number, h: number) => {
    particles.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      radius: Math.random() * 1.2 + 0.6,
      opacity: Math.random() * (PARTICLE_OPACITY_MAX - PARTICLE_OPACITY_MIN) + PARTICLE_OPACITY_MIN,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Respect reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    dpr.current = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const w = rect.width;
      const h = rect.height;
      canvas.width = w * dpr.current;
      canvas.height = h * dpr.current;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr.current, 0, 0, dpr.current, 0, 0);
      if (particles.current.length === 0) init(w, h);
    };

    resize();
    window.addEventListener("resize", resize);

    // Mouse tracking
    const isMobile = "ontouchstart" in window;
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    if (!isMobile) {
      canvas.addEventListener("mousemove", onMove);
      canvas.addEventListener("mouseleave", () => {
        mouse.current.x = -9999;
        mouse.current.y = -9999;
      });
    }

    // Visibility API – pause when tab hidden
    let paused = false;
    const onVis = () => { paused = document.hidden; };
    document.addEventListener("visibilitychange", onVis);

    const w = () => canvas.width / dpr.current;
    const h = () => canvas.height / dpr.current;

    const draw = () => {
      animId.current = requestAnimationFrame(draw);
      if (paused) return;

      const cw = w();
      const ch = h();
      ctx.clearRect(0, 0, cw, ch);

      const pts = particles.current;

      // Update positions
      for (const p of pts) {
        // Mouse interaction (desktop only)
        if (!isMobile) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS && dist > 0) {
            p.vx += (dx / dist) * MOUSE_FORCE;
            p.vy += (dy / dist) * MOUSE_FORCE;
          }
        }

        // Dampen velocity
        p.vx *= 0.998;
        p.vy *= 0.998;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = cw;
        if (p.x > cw) p.x = 0;
        if (p.y < 0) p.y = ch;
        if (p.y > ch) p.y = 0;
      }

      // Draw lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = dx * dx + dy * dy;
          if (dist < LINE_DIST * LINE_DIST) {
            const alpha = (1 - Math.sqrt(dist) / LINE_DIST) * LINE_OPACITY;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(147, 197, 253, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(219, 234, 254, ${p.opacity})`;
        ctx.fill();
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(animId.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
      if (!isMobile) {
        canvas.removeEventListener("mousemove", onMove);
      }
    };
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto z-[1]"
      aria-hidden="true"
    />
  );
};

export default ParticleNetwork;
