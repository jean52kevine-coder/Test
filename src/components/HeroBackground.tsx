import { useEffect, useRef } from 'react';

type Variant = 'matrix' | 'constellation' | 'circuit' | 'dataflow';

export default function HeroBackground({ variant = 'matrix' }:
  { variant?: Variant }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    let animId: number;

    if (variant === 'matrix') {
      const chars = '01アイウエオカキクケコ</>{}[]#@$%&ABCDEF';
      const fontSize = 11;
      const isMobile = window.innerWidth < 768;
      const cols = Math.floor(canvas.width / (fontSize * 1.4));
      const drops: number[] = Array(cols).fill(0).map(
        () => Math.random() * -50
      );
      const opacities: number[] = Array(cols).fill(0).map(
        () => Math.random() * 0.5 + 0.1
      );

      const nodes = Array.from({ length: isMobile ? 25 : 70 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 1,
        pulse: Math.random() * Math.PI * 2,
      }));

      const draw = () => {
        ctx.fillStyle = 'rgba(10, 15, 10, 0.06)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px "Courier New", monospace`;
        drops.forEach((y, i) => {
          const char = chars[Math.floor(Math.random() * chars.length)];
          const x = i * (fontSize * 1.4);
          const isHead = y * fontSize > 0 &&
                         y * fontSize < canvas.height;
          ctx.fillStyle = isHead
            ? `rgba(180, 255, 200, ${opacities[i] * 2})`
            : `rgba(29, 185, 84, ${opacities[i] * 0.6})`;
          ctx.fillText(char, x, y * fontSize);

          if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i] += 0.35;
        });

        nodes.forEach(n => {
          n.x = (n.x + n.vx + canvas.width) % canvas.width;
          n.y = (n.y + n.vy + canvas.height) % canvas.height;
          n.pulse += 0.03;
          const p = (Math.sin(n.pulse) + 1) / 2;

          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + p * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(29,185,84,${0.3 + p * 0.4})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + p * 6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(29,185,84,${0.04 + p * 0.06})`;
          ctx.fill();
        });

        nodes.forEach((a, i) => nodes.slice(i + 1).forEach(b => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(29,185,84,${0.15 * (1 - d / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }));

        animId = requestAnimationFrame(draw);
      };
      draw();
    }

    if (variant === 'constellation') {
      const isMobile = window.innerWidth < 768;
      const stars = Array.from({ length: isMobile ? 70 : 120 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        a: Math.random() * 0.6 + 0.1,
        twinkle: Math.random() * Math.PI * 2,
        speed: 0.015 + Math.random() * 0.025,
      }));

      const shoots: Array<{
        x: number; y: number; len: number;
        angle: number; speed: number; life: number
      }> = [];

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const bg = ctx.createRadialGradient(
          canvas.width * 0.5, canvas.height * 0.3, 0,
          canvas.width * 0.5, canvas.height * 0.3,
          canvas.width * 0.8
        );
        bg.addColorStop(0, 'rgba(17, 24, 17, 0.4)');
        bg.addColorStop(1, 'rgba(10, 15, 10, 0)');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach(s => {
          s.twinkle += s.speed;
          const tw = (Math.sin(s.twinkle) + 1) / 2;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * (0.7 + tw * 0.5), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(29,185,84,${s.a * (0.5 + tw * 0.5)})`;
          ctx.fill();
        });

        stars.forEach((a, i) => stars.slice(i + 1, i + 6).forEach(b => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 160) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            g.addColorStop(0, `rgba(29,185,84,${0.12 * (1 - d / 160)})`);
            g.addColorStop(0.5, `rgba(100,220,140,${0.08 * (1 - d / 160)})`);
            g.addColorStop(1, `rgba(29,185,84,${0.12 * (1 - d / 160)})`);
            ctx.strokeStyle = g;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }));

        if (Math.random() < 0.004) {
          shoots.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height * 0.5,
            len: 80 + Math.random() * 120,
            angle: Math.PI / 4 + (Math.random() - 0.5) * 0.4,
            speed: 8 + Math.random() * 6,
            life: 1,
          });
        }
        shoots.forEach((s, i) => {
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(
            s.x - Math.cos(s.angle) * s.len * s.life,
            s.y - Math.sin(s.angle) * s.len * s.life
          );
          const sg = ctx.createLinearGradient(
            s.x, s.y,
            s.x - Math.cos(s.angle) * s.len,
            s.y - Math.sin(s.angle) * s.len
          );
          sg.addColorStop(0, `rgba(180,255,200,${s.life * 0.9})`);
          sg.addColorStop(1, 'rgba(29,185,84,0)');
          ctx.strokeStyle = sg;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          s.x += Math.cos(s.angle) * s.speed;
          s.y += Math.sin(s.angle) * s.speed;
          s.life -= 0.04;
          if (s.life <= 0) shoots.splice(i, 1);
        });

        animId = requestAnimationFrame(draw);
      };
      draw();
    }

    if (variant === 'circuit') {
      const W = canvas.width;
      const H = canvas.height;
      const lines: Array<{
        x1: number; y1: number; x2: number; y2: number
      }> = [];
      const nodes: Array<{ x: number; y: number }> = [];

      const xs = Array.from({ length: 12 }, () => Math.random() * W);
      const ys = Array.from({ length: 8 }, () => Math.random() * H);
      xs.sort((a, b) => a - b); ys.sort((a, b) => a - b);

      xs.forEach((x, i) => {
        if (i < xs.length - 1 && Math.random() > 0.3) {
          const y = ys[Math.floor(Math.random() * ys.length)];
          lines.push({ x1: x, y1: y, x2: xs[i + 1], y2: y });
          nodes.push({ x, y });
        }
      });
      ys.forEach((y, i) => {
        if (i < ys.length - 1 && Math.random() > 0.3) {
          const x = xs[Math.floor(Math.random() * xs.length)];
          lines.push({ x1: x, y1: y, x2: x, y2: ys[i + 1] });
          nodes.push({ x, y });
        }
      });

      const isMobile = window.innerWidth < 768;
      const signals: Array<{
        line: number; t: number; speed: number
      }> = Array.from({ length: isMobile ? 8 : 15 }, () => ({
        line: Math.floor(Math.random() * lines.length),
        t: Math.random(),
        speed: 0.003 + Math.random() * 0.005,
      }));

      const draw = () => {
        ctx.clearRect(0, 0, W, H);

        lines.forEach(l => {
          ctx.beginPath();
          ctx.moveTo(l.x1, l.y1);
          ctx.lineTo(l.x2, l.y2);
          ctx.strokeStyle = 'rgba(29,185,84,0.08)';
          ctx.lineWidth = 1;
          ctx.stroke();
        });

        nodes.forEach(n => {
          ctx.beginPath();
          ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(29,185,84,0.2)';
          ctx.fill();
          ctx.beginPath();
          ctx.arc(n.x, n.y, 5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(29,185,84,0.05)';
          ctx.fill();
        });

        signals.forEach(sig => {
          sig.t += sig.speed;
          if (sig.t > 1) {
            sig.t = 0;
            sig.line = Math.floor(Math.random() * lines.length);
          }
          const l = lines[sig.line];
          if (!l) return;
          const x = l.x1 + (l.x2 - l.x1) * sig.t;
          const y = l.y1 + (l.y2 - l.y1) * sig.t;
          const trail = ctx.createRadialGradient(x, y, 0, x, y, 12);
          trail.addColorStop(0, 'rgba(29,185,84,0.9)');
          trail.addColorStop(0.3, 'rgba(29,185,84,0.3)');
          trail.addColorStop(1, 'rgba(29,185,84,0)');
          ctx.beginPath();
          ctx.arc(x, y, 12, 0, Math.PI * 2);
          ctx.fillStyle = trail;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(180,255,200,1)';
          ctx.fill();
        });

        animId = requestAnimationFrame(draw);
      };
      draw();
    }

    if (variant === 'dataflow') {
      const W = canvas.width;
      const H = canvas.height;

      const drawHex = (
        x: number, y: number, size: number, alpha: number
      ) => {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i - Math.PI / 6;
          const hx = x + size * Math.cos(angle);
          const hy = y + size * Math.sin(angle);
          if (i === 0) {
            ctx.moveTo(hx, hy);
          } else {
            ctx.lineTo(hx, hy);
          }
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(29,185,84,${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      };

      const hexSize = 45;
      const hexW = hexSize * 2;
      const hexH = Math.sqrt(3) * hexSize;
      const hexCols = Math.ceil(W / (hexW * 0.75)) + 2;
      const hexRows = Math.ceil(H / hexH) + 2;
      const hexGrid: Array<{ x: number; y: number; pulse: number }> = [];
      for (let r = 0; r < hexRows; r++) {
        for (let c = 0; c < hexCols; c++) {
          hexGrid.push({
            x: c * hexW * 0.75 - hexSize,
            y: r * hexH + (c % 2 === 0 ? 0 : hexH / 2) - hexH,
            pulse: Math.random() * Math.PI * 2,
          });
        }
      }

      const isMobile = window.innerWidth < 768;
      const particles = Array.from({ length: isMobile ? 25 : 70 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vy: 0.4 + Math.random() * 0.8,
        vx: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        a: Math.random() * 0.5 + 0.2,
        trail: [] as Array<{ x: number; y: number }>,
      }));

      const draw = () => {
        ctx.clearRect(0, 0, W, H);

        hexGrid.forEach(h => {
          h.pulse += 0.008;
          const p = (Math.sin(h.pulse) + 1) / 2;
          drawHex(h.x, h.y, hexSize, 0.03 + p * 0.05);
        });

        particles.forEach(p => {
          p.trail.push({ x: p.x, y: p.y });
          if (p.trail.length > 12) p.trail.shift();
          p.x += p.vx;
          p.y += p.vy;
          if (p.y > H + 10) {
            p.y = -10;
            p.x = Math.random() * W;
            p.trail = [];
          }

          p.trail.forEach((pt, i) => {
            const ratio = i / p.trail.length;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, p.size * ratio, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(29,185,84,${p.a * ratio * 0.5})`;
            ctx.fill();
          });

          const grad = ctx.createRadialGradient(
            p.x, p.y, 0, p.x, p.y, p.size * 3
          );
          grad.addColorStop(0, `rgba(180,255,200,${p.a})`);
          grad.addColorStop(1, 'rgba(29,185,84,0)');
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        });

        animId = requestAnimationFrame(draw);
      };
      draw();
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
