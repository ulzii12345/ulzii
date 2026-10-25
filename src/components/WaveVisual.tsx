import React, { useEffect, useRef, useState } from 'react';
import { TEMPLATE_VIDEO_URL } from '../data/portfolioData';
import { Play, Sparkles, RefreshCw } from 'lucide-react';

interface WaveVisualProps {
  mode?: 'interactive' | 'video' | 'hybrid';
  className?: string;
}

export const WaveVisual: React.FC<WaveVisualProps> = ({
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<'interactive' | 'video'>('interactive');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mousePos = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  // Canvas 3D particle wave implementation mirroring the template video
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const ROWS = 42;
    const COLS = 42;
    const SPACING = 15;

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Deep pitch black background
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      time += 0.035;

      const centerX = width / 2;
      const centerY = height / 2 + 10;

      // Isometric tilt angles
      const pitch = 1.05; // angle of tilt
      const yaw = Math.PI / 4; // 45 deg isometric rotation

      const cosYaw = Math.cos(yaw);
      const sinYaw = Math.sin(yaw);

      // Sort points from back to front for proper 3D depth rendering
      interface Point3D {
        screenX: number;
        screenY: number;
        depth: number;
        radius: number;
        alpha: number;
        elevation: number;
      }

      const points: Point3D[] = [];

      for (let i = -ROWS / 2; i <= ROWS / 2; i++) {
        for (let j = -COLS / 2; j <= COLS / 2; j++) {
          const x0 = i * SPACING;
          const y0 = j * SPACING;

          // Distance from center for radial ripple
          const dist = Math.sqrt(x0 * x0 + y0 * y0);

          // Primary concentric ripples (like in the template video)
          const wave1 = Math.sin(dist * 0.055 - time * 1.5) * 36;
          const wave2 = Math.cos(dist * 0.025 + time * 0.7) * 14;

          // Corner curl effect matching the template
          const cornerFactor = (Math.abs(x0) + Math.abs(y0)) * 0.06;
          const cornerWave = Math.sin(cornerFactor - time) * 12;

          // Mouse perturbation
          let mouseInfluence = 0;
          if (mousePos.current.active) {
            const mDist = Math.hypot(
              x0 - (mousePos.current.x - centerX) * 0.8,
              y0 - (mousePos.current.y - centerY) * 0.8
            );
            mouseInfluence = Math.exp(-mDist / 60) * Math.sin(mDist * 0.1 - time * 3) * 30;
          }

          const z = wave1 + wave2 + cornerWave + mouseInfluence;

          // Isometric 3D projection
          const rotX = x0 * cosYaw - y0 * sinYaw;
          const rotY = x0 * sinYaw + y0 * cosYaw;

          const screenX = centerX + rotX;
          const screenY = centerY + rotY * Math.cos(pitch) - z * Math.sin(pitch);
          const depth = rotY * Math.sin(pitch) + z * Math.cos(pitch);

          // Shading calculation based on elevation (higher = brighter white, lower = subtle cool grey)
          const normZ = (z + 45) / 90;
          const clampedNorm = Math.max(0.15, Math.min(1, normZ));
          const radius = Math.max(1.2, 1.8 + clampedNorm * 2.1);
          const alpha = 0.25 + clampedNorm * 0.75;

          points.push({
            screenX,
            screenY,
            depth,
            radius,
            alpha,
            elevation: clampedNorm,
          });
        }
      }

      // Draw all points
      for (let p = 0; p < points.length; p++) {
        const pt = points[p];
        ctx.beginPath();
        ctx.arc(pt.screenX, pt.screenY, pt.radius, 0, Math.PI * 2);

        // Highlight peaks with pure brilliant white, slopes with cool silver
        if (pt.elevation > 0.75) {
          ctx.fillStyle = `rgba(255, 255, 255, ${pt.alpha})`;
        } else if (pt.elevation > 0.4) {
          ctx.fillStyle = `rgba(225, 231, 239, ${pt.alpha * 0.85})`;
        } else {
          ctx.fillStyle = `rgba(130, 140, 155, ${pt.alpha * 0.6})`;
        }

        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mousePos.current.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden border border-zinc-800/80 bg-[#050505] shadow-2xl ${className}`}
    >
      {/* Visual Canvas or Video */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden flex items-center justify-center">
        {/* Interactive 3D Canvas */}
        <canvas
          ref={canvasRef}
          className={`w-full h-full block cursor-crosshair transition-opacity duration-500 ${
            activeTab === 'interactive' ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none absolute inset-0'
          }`}
          style={{ width: '100%', height: '100%' }}
        />

        {/* Original Template Video */}
        <div
          className={`w-full h-full flex items-center justify-center bg-black transition-opacity duration-500 ${
            activeTab === 'video' ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none absolute inset-0'
          }`}
        >
          <video
            ref={videoRef}
            src={TEMPLATE_VIDEO_URL}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Ambient Vignette Gradients */}
        <div className="absolute inset-0 pointer-events-none bg-radial from-transparent via-[#050505]/20 to-[#050505]/90" />
        <div className="absolute top-0 inset-x-0 h-16 pointer-events-none bg-gradient-to-b from-[#050505] to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-20 pointer-events-none bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

        {/* Interactive hint on canvas mode */}
        {activeTab === 'interactive' && (
          <div className="absolute bottom-4 left-4 z-20 pointer-events-none flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-800">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Хулганаар хөдөлгөж долгионыг удирдах боломжтой</span>
          </div>
        )}

        {/* View Mode Switcher */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1 p-1 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-xl">
          <button
            type="button"
            onClick={() => setActiveTab('interactive')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'interactive'
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <RefreshCw className="w-3 h-3 text-cyan-400" />
            <span>Интерактив 3D</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('video')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'video'
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Play className="w-3 h-3 text-emerald-400" />
            <span>Загварын видео</span>
          </button>
        </div>
      </div>
    </div>
  );
};
