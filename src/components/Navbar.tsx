import React, { useState, useEffect } from 'react';
import { useNetlify } from '../context/NetlifyContext';
import { USER_INFO } from '../data/portfolioData';
import { ExternalLink, Settings2, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { getBaseUrl, setIsConfigOpen, subdomain, isCustomized } = useNetlify();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Эхлэл', href: '#hero' },
    { label: 'Бүтээлүүд', href: '#projects' },
    { label: 'Танилцуулга', href: '#about' },
    { label: 'Сонирхол', href: '#interests' },
    { label: 'Зорилго', href: '#goals' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/85 backdrop-blur-md border-b border-zinc-800/80 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2 group"
        >
          <span className="font-display group-hover:text-cyan-400 transition-colors">
            {USER_INFO.name}
          </span>
          <span className="text-zinc-600 font-normal">/</span>
          <span className="text-xs text-zinc-400 font-mono tracking-normal">16 настай</span>
        </a>

        {/* Zone 2: 4-5 single-line clean navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => setIsConfigOpen(true)}
            title="Netlify холбоос тохируулах"
            className="p-2 text-zinc-400 hover:text-cyan-400 hover:bg-zinc-900 rounded-lg border border-zinc-800/80 transition-colors"
          >
            <Settings2 className="w-4 h-4" />
          </button>

          <a
            href={getBaseUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-white hover:bg-cyan-300 rounded-lg shadow-sm hover:shadow-cyan-500/20 transition-all whitespace-nowrap shrink-0"
          >
            <span>Үндсэн сайт</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
            aria-label="Цэс нээх"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0c] border-b border-zinc-800 px-5 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-zinc-300 hover:text-cyan-400 py-1.5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
            <span>Netlify сайт:</span>
            <span className="font-mono text-cyan-400">{subdomain}.netlify.app</span>
          </div>
        </div>
      )}
    </header>
  );
};
