import React, { useEffect, useRef } from 'react';

export const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // النجوم التي تنزل للأسفل بحركة سلسة جداً
    const stars = Array.from({ length: 150 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.5 + 0.1, // حركة النزول للأسفل
      alpha: Math.random(),
    }));

    // زاوية دوران الكوكب
    let planetAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. السديم الفضائي المتوهج (Deep Nebula Glow)
      const nebula = ctx.createRadialGradient(
        canvas.width * 0.7, canvas.height * 0.3, 20,
        canvas.width * 0.7, canvas.height * 0.3, 500
      );
      nebula.addColorStop(0, 'rgba(128, 0, 32, 0.18)'); // Burgundy Glow
      nebula.addColorStop(1, 'transparent');
      ctx.fillStyle = nebula;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. الكوكب المتوهج 3D مع الحزام المداري
      planetAngle += 0.002;
      const planetX = canvas.width * 0.85;
      const planetY = canvas.height * 0.25;
      const planetRadius = 60;

      // توهج الكوكب
      const planetGlow = ctx.createRadialGradient(
        planetX, planetY, planetRadius * 0.2,
        planetX, planetY, planetRadius * 2
      );
      planetGlow.addColorStop(0, 'rgba(128, 0, 32, 0.9)');
      planetGlow.addColorStop(0.5, 'rgba(30, 27, 75, 0.5)');
      planetGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = planetGlow;
      ctx.beginPath();
      ctx.arc(planetX, planetY, planetRadius * 2, 0, Math.PI * 2);
      ctx.fill();

      // جسم الكوكب
      const planetBody = ctx.createLinearGradient(
        planetX - planetRadius, planetY - planetRadius,
        planetX + planetRadius, planetY + planetRadius
      );
      planetBody.addColorStop(0, '#800020');
      planetBody.addColorStop(0.5, '#2e1065');
      planetBody.addColorStop(1, '#0f172a');
      ctx.fillStyle = planetBody;
      ctx.beginPath();
      ctx.arc(planetX, planetY, planetRadius, 0, Math.PI * 2);
      ctx.fill();

      // حزام الكوكب (Planet Ring)
      ctx.save();
      ctx.translate(planetX, planetY);
      ctx.rotate(0.4);
      ctx.beginPath();
      ctx.ellipse(0, 0, planetRadius * 1.8, planetRadius * 0.4, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();

      // 3. رسم وتحديث النجوم التي تنزل للأسفل
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-90 transition-opacity duration-500"
    />
  );
};