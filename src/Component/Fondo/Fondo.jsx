import React, { useRef, useEffect } from 'react';

const SmokeBackground = () => {
  const canvasRef = useRef(null);
  const NUM_PARTICLES = 50;
  let particles = [];
  const fps = 30;
  const fpsInterval = 1000 / fps;
  let then = Date.now();
  let raf;

  // Carga la textura de humo
  const smokeImage = new Image();
  smokeImage.src = "/assets/humo.png";

  class Particle {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.x = Math.random() * this.canvas.width - this.canvas.width;
      this.y = Math.random() * this.canvas.height - this.canvas.height / 2;
      this.size = Math.random() * 3000 + 1000;
      this.opacity = Math.random() * 0.2;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = Math.random() * 0.002;
    }

    update() {
      this.rotation += this.rotationSpeed;
    }

    draw() {
      const ctx = this.ctx;
      ctx.save();
      ctx.translate(this.x + this.size / 2, this.y + this.size / 2);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = this.opacity;
      ctx.drawImage(smokeImage, -this.size / 2, -this.size / 2, this.size, this.size);
      ctx.globalAlpha = 1.0;
      ctx.restore();
    }
  }

  const initParticles = (canvas) => {
    particles = [];
    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push(new Particle(canvas));
    }
  };

  const handleParticles = (canvas) => {
    const ctx = canvas.getContext('2d');
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      if (particles[i].size <= 1) {
        particles.splice(i, 1);
        i--;
        particles.push(new Particle(canvas));
      }
    }
  };

  const animate = (canvas) => {
    raf = requestAnimationFrame(() => animate(canvas));

    const now = Date.now();
    const elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);

      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles(canvas);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight + 100;

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

      if (!reducedMotion.matches) {
        window.addEventListener("resize", () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight + 100;
          cancelAnimationFrame(raf);
          handleParticles(canvas);
          animate(canvas);
        });

        smokeImage.onload = () => {
          initParticles(canvas);
          animate(canvas);
        };
      }
    }

    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div id="smoke-bkg" className="fixed top-0 -z-10 h-full w-full">
      <canvas id="smoke-canvas" ref={canvasRef} aria-label="Efecto de fondo de humo" className="opacity-70"></canvas>
    </div>
  );
};

export default SmokeBackground;
