import { useEffect, useRef } from "react";

/**
 * Animated starfield + shooting stars background.
 * Pure canvas for performance — no DOM spam.
 */
const PageBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;

    // Stars
    const STAR_COUNT = 350;
    const stars: { x: number; y: number; r: number; baseAlpha: number; speed: number; phase: number }[] = [];

    // Shooting stars
    const SHOOTERS_MAX = 3;
    const shooters: { x: number; y: number; len: number; speed: number; angle: number; alpha: number; life: number; maxLife: number }[] = [];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.8 + 0.5,
          baseAlpha: Math.random() * 0.6 + 0.35,
          speed: Math.random() * 0.0008 + 0.0003,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const spawnShooter = () => {
      if (shooters.length >= SHOOTERS_MAX) return;
      const angle = Math.PI * 0.15 + Math.random() * Math.PI * 0.2; // roughly top-left to bottom-right
      shooters.push({
        x: Math.random() * w * 0.8,
        y: -20 + Math.random() * h * 0.3,
        len: 60 + Math.random() * 100,
        speed: 6 + Math.random() * 8,
        angle,
        alpha: 1,
        life: 0,
        maxLife: 40 + Math.random() * 30,
      });
    };

    resize();
    initStars();

    let t = 0;
    let nextShooter = 80 + Math.random() * 200;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t++;

      // Draw stars
      for (const s of stars) {
        const twinkle = Math.sin(t * s.speed * 60 + s.phase) * 0.3 + 0.7;
        const alpha = s.baseAlpha * twinkle;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(29,185,84,${alpha})`;
        ctx.fill();
      }

      // Spawn shooters
      nextShooter--;
      if (nextShooter <= 0) {
        spawnShooter();
        nextShooter = 120 + Math.random() * 300;
      }

      // Draw shooting stars
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i];
        s.life++;
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;

        // Fade in then out
        const progress = s.life / s.maxLife;
        s.alpha = progress < 0.2 ? progress / 0.2 : 1 - (progress - 0.2) / 0.8;

        const tailX = s.x - Math.cos(s.angle) * s.len;
        const tailY = s.y - Math.sin(s.angle) * s.len;

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, `rgba(29,185,84,0)`);
        grad.addColorStop(0.6, `rgba(29,185,84,${s.alpha * 0.4})`);
        grad.addColorStop(1, `rgba(255,255,255,${s.alpha * 0.9})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.stroke();

        // Head glow
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha * 0.8})`;
        ctx.fill();

        if (s.life >= s.maxLife || s.x > w + 100 || s.y > h + 100) {
          shooters.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener("resize", () => {
      resize();
      initStars();
    });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Orb top-left */}
      <div
        className="absolute -top-[200px] -left-[150px] w-[600px] h-[600px] rounded-full"
        style={{ background: "hsl(var(--primary) / 0.04)", filter: "blur(120px)" }}
      />

      {/* Orb bottom-right */}
      <div
        className="absolute -bottom-[180px] -right-[120px] w-[500px] h-[500px] rounded-full"
        style={{ background: "hsl(var(--primary) / 0.03)", filter: "blur(100px)" }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(var(--background)) 100%)" }}
      />
    </div>
  );
};

export default PageBackground;
