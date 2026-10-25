import React from 'react';
import { useNetlify } from '../context/NetlifyContext';
import { USER_INFO, RAW_PROJECTS } from '../data/portfolioData';
import { ArrowUp, ExternalLink, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const { getUrlForSlug, getBaseUrl } = useNetlify();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800 bg-[#050505] text-zinc-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-800/80">
          <div>
            <div className="text-lg font-bold text-white font-display">
              {USER_INFO.name}
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              16 настай вэб хөгжүүлэгчийн бүтээлүүд ба хувийн портфолио сайт.
            </p>
          </div>

          {/* Quick Netlify domain link */}
          <div className="flex items-center gap-3">
            <a
              href={getBaseUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:underline font-mono"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{getBaseUrl()}</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              title="Дээш буцах"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Project Links Row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
          <span className="text-zinc-500">Бүтээлүүд:</span>
          {RAW_PROJECTS.map((proj) => (
            <a
              key={proj.id}
              href={getUrlForSlug(proj.originalSlug)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
            >
              <span>{proj.title}</span>
              <ExternalLink className="w-2.5 h-2.5 text-zinc-500" />
            </a>
          ))}
        </div>

        {/* Copyright and Unboxed metadata */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 pt-2">
          <div>
            © 2026 {USER_INFO.name}. Бүх эрх хуулиар хамгаалагдсан.
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <span>Вэб хөгжүүлэлт</span>
            <span aria-hidden="true">·</span>
            <span>16 настай</span>
            <span aria-hidden="true">·</span>
            <span>Монгол</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
