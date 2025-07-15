"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/hooks";
import Image from "next/image";

const PrismBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { currentTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${currentTheme.primary}${Math.floor(
          particle.opacity * 255
        )
          .toString(16)
          .padStart(2, "0")}`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentTheme]);

  return (
    <div className="fixed inset-0 z-0">
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <Image
          src="/bg1.png"
          alt="Prismxy Background"
          fill
          className="object-cover"
          priority
          style={{
            filter: "brightness(0.3) contrast(1.2)",
          }}
        />
        {/* Overlay for better text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.background}80, ${currentTheme.background}40)`,
          }}
        />
      </div>

      {/* Floating Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
    </div>
  );
};

export default PrismBackground;
