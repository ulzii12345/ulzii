import React from 'react';
import { useNetlify } from '../context/NetlifyContext';
import { USER_INFO, RAW_PROJECTS } from '../data/portfolioData';
import { WaveVisual } from './WaveVisual';
import { ArrowDown, ExternalLink, Code2, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { getBaseUrl } = useNetlify();

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-950/20 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-950/20 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Split / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            {/* Unboxed Metadata Kicker (Anti-pill discipline) */}
            <div className="flex items-center gap-2 text-xs font-medium text-cyan-400 tracking-wider uppercase">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Сурагч хөгжүүлэгчийн портфолио</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">16 настай</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance font-display">
              Сайн байна уу, намайг{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-cyan-300">
                {USER_INFO.name}
              </span>{' '}
              гэдэг.
            </h1>

            {/* Narrative Body */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl">
              Би 16 настай, орчин үеийн вэб технологиуд болон хэрэглэгчийн интерактив интерфэйс бүтээж сурч байна. Өөрийн бүтээсэн вэб сайтууд болон сонирхолтой төслүүдээ энд нэгтгэн танилцуулж байна.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-lg shadow-cyan-950/50 hover:shadow-cyan-400/20 transition-all group"
              >
                <span>Миний бүтээлүүдтэй танилцах</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={getBaseUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 rounded-xl transition-all"
              >
                <span>Үндсэн Netlify сайт</span>
                <ExternalLink className="w-4 h-4 text-zinc-400" />
              </a>
            </div>

            {/* Subtext info */}
            <div className="flex items-center gap-3 text-xs text-zinc-500 pt-1">
              <div className="flex items-center gap-1.5 text-zinc-400">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Загвар: 3D долгион хөдөлгөөнт загвар</span>
              </div>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>Цэвэр монгол тайлбартай</span>
            </div>
          </div>

          {/* Right Column: Wave Visual Container */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="relative group">
              {/* Outer frame styling */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-zinc-700/20 to-indigo-500/20 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-700" />
              <WaveVisual className="relative" />
            </div>
          </div>
        </div>

        {/* 4-Column Metric Strip below the split */}
        <div className="mt-14 pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight tabular-nums">
              16
            </div>
            <div className="text-xs text-zinc-400 mt-1">Насны ангилал · Сурагч</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 tracking-tight tabular-nums">
              {RAW_PROJECTS.length} Төсөл
            </div>
            <div className="text-xs text-zinc-400 mt-1">Бүтээлүүд нэг жагсаалтад</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
              Код бичих
            </div>
            <div className="text-xs text-zinc-400 mt-1">Үндсэн хобби ба сонирхол</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-indigo-400 tracking-tight">
              AI + Вэб
            </div>
            <div className="text-xs text-zinc-400 mt-1">Сургалтын гол зорилго</div>
          </div>
        </div>
      </div>
    </section>
  );
};
