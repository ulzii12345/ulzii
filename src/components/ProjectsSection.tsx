import React, { useState } from 'react';
import { useNetlify } from '../context/NetlifyContext';
import { RAW_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import {
  ExternalLink,
  Briefcase,
  Youtube,
  Gamepad2,
  TreePine,
  Layers,
  Sparkles,
  ArrowUpRight,
  Settings2,
  Code2,
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { getUrlForSlug, setIsConfigOpen, subdomain, isCustomized } = useNetlify();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Helper to render appropriate icon
  const renderIcon = (iconType: Project['icon']) => {
    switch (iconType) {
      case 'briefcase':
        return <Briefcase className="w-5 h-5 text-sky-400" />;
      case 'youtube':
        return <Youtube className="w-5 h-5 text-rose-400" />;
      case 'gamepad':
        return <Gamepad2 className="w-5 h-5 text-purple-400" />;
      case 'livestock':
        return <TreePine className="w-5 h-5 text-emerald-400" />;
      default:
        return <Layers className="w-5 h-5 text-zinc-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-cyan-400 uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>Төслүүдийн жагсаалт</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">Нийт {RAW_PROJECTS.length} бүтээл</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
              Миний бүтээлүүд
            </h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-2xl">
              Бие даан болон сургалтын хүрээнд хийсэн вэб төслүүд. Карт бүр дээр дарж тухайн сайтыг шинэ цонхонд нээнэ.
            </p>
          </div>

          {/* Subdomain Notice & Quick Config */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsConfigOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors"
            >
              <Settings2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Netlify хаяг:</span>
              <span className="font-mono text-cyan-300 text-[11px] truncate max-w-[130px]">
                {subdomain}
              </span>
            </button>
          </div>
        </div>

        {/* Projects Grid: 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {RAW_PROJECTS.map((item, index) => {
            const projectUrl = getUrlForSlug(item.originalSlug);
            const projectNumber = String(index + 1).padStart(2, '0');

            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#09090b] border border-zinc-800 hover:border-zinc-700 hover:shadow-xl hover:shadow-cyan-950/20 transition-all duration-300 overflow-hidden"
              >
                {/* Visual Preview / Media Header */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/80">
                  {item.previewImage ? (
                    <img
                      src={item.previewImage}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* Elegant styled fallback container */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-zinc-900 to-zinc-950 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center mb-3 text-cyan-400">
                        {renderIcon(item.icon)}
                      </div>
                      <span className="text-base font-bold text-white tracking-tight">
                        {item.title}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono mt-1">
                        {item.originalSlug}
                      </span>
                    </div>
                  )}

                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-black/30 pointer-events-none" />

                  {/* Top-right index number */}
                  <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-zinc-800 text-xs font-mono font-bold text-zinc-300">
                    {projectNumber}
                  </div>

                  {/* Icon badge top left */}
                  <div className="absolute top-3 left-3 z-10 p-2 rounded-lg bg-black/70 backdrop-blur-md border border-zinc-800">
                    {renderIcon(item.icon)}
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Unboxed Metadata (Zero-pill discipline) */}
                    <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                      <span className="text-cyan-400 font-medium">{item.category}</span>
                      <span aria-hidden="true" className="text-zinc-600">·</span>
                      <span className="font-mono text-zinc-500">{item.originalSlug}</span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {projectNumber}. {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-zinc-400 leading-relaxed mt-2.5">
                      {item.description}
                    </p>

                    {/* Clean highlight points */}
                    <div className="mt-4 pt-3 border-t border-zinc-800/60 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400">
                      {item.highlights.map((hl, i) => (
                        <span key={i} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-cyan-400" />
                          <span>{hl}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action row */}
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-4">
                    {/* Destination URL */}
                    <div className="min-w-0">
                      <div className="text-[11px] text-zinc-500">Очих хаяг:</div>
                      <div className="font-mono text-xs text-zinc-300 truncate max-w-[220px] sm:max-w-xs">
                        {projectUrl}
                      </div>
                    </div>

                    {/* Primary Open Button */}
                    <a
                      href={projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-sm hover:shadow-cyan-400/20 whitespace-nowrap shrink-0 group/btn"
                    >
                      <span>Шинэ цонхонд нээх</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick reminder note */}
        <div className="mt-10 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              Бүх төслүүд нэг жагсаалт (array) бүтцээр кодлогдсон бөгөөд карт бүрийн холбоос шинэ табд нээгдэнэ.
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsConfigOpen(true)}
            className="text-cyan-400 hover:underline font-medium whitespace-nowrap shrink-0 self-start sm:self-auto"
          >
            Netlify домэйн өөрчлөх →
          </button>
        </div>
      </div>
    </section>
  );
};
