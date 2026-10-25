import React, { useState } from 'react';
import { useNetlify } from '../context/NetlifyContext';
import { X, Globe, Check, RotateCcw, ExternalLink } from 'lucide-react';
import { RAW_PROJECTS } from '../data/portfolioData';

export const NetlifyConfigModal: React.FC = () => {
  const {
    subdomain,
    setSubdomain,
    resetSubdomain,
    getBaseUrl,
    getUrlForSlug,
    isConfigOpen,
    setIsConfigOpen,
    isCustomized,
  } = useNetlify();

  const [inputVal, setInputVal] = useState(subdomain);

  if (!isConfigOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSubdomain(inputVal);
    setIsConfigOpen(false);
  };

  const handleReset = () => {
    resetSubdomain();
    setInputVal('[НЕТЛИФАЙ]');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-2xl text-zinc-100">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Netlify Холбоос Тохиргоо</h3>
              <p className="text-xs text-zinc-400">Өөрийн Netlify сайтын нэрийг солих</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsConfigOpen(false)}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSave} className="mt-5 space-y-4">
          <p className="text-xs leading-relaxed text-zinc-400">
            Даалгаварт өгөгдсөн стандарт хаяг нь <code className="text-cyan-400 bg-zinc-900 px-1.5 py-0.5 rounded text-[11px]">https://[НЕТЛИФАЙ].netlify.app</code> юм. Хэрэв та Netlify дээрх өөрийн сайтын бодит нэрийг оруулахыг хүсвэл энд бичиж хадгална уу.
          </p>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Netlify домэйн нэр
            </label>
            <div className="flex items-center rounded-xl bg-zinc-900 border border-zinc-800 px-3 py-2 focus-within:border-cyan-500/80 focus-within:ring-1 focus-within:ring-cyan-500/80 transition-all">
              <span className="text-xs text-zinc-500 select-none mr-1">https://</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="жишээ нь: ulziitogtokh"
                className="w-full bg-transparent text-sm text-white focus:outline-none placeholder:text-zinc-600 font-mono"
              />
              <span className="text-xs text-zinc-500 select-none ml-1">.netlify.app</span>
            </div>
          </div>

          {/* Active Preview */}
          <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-2 text-xs">
            <div className="text-zinc-400 flex items-center justify-between">
              <span>Одоогийн үндсэн сайт:</span>
              <a
                href={getBaseUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline flex items-center gap-1 font-mono text-[11px]"
              >
                <span>{getBaseUrl()}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="text-zinc-500 text-[11px] pt-1 border-t border-zinc-800/60">
              Бүх бүтээлийн картын холбоос энэ хаягийн дагуу шинэ цонхонд автоматаар нээгдэнэ.
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-3 border-t border-zinc-800/80">
            <button
              type="button"
              onClick={handleReset}
              disabled={!isCustomized && inputVal === '[НЕТЛИФАЙ]'}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-400 hover:text-zinc-200 disabled:opacity-40 disabled:pointer-events-none transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Анхны хэлбэрт оруулах ([НЕТЛИФАЙ])</span>
            </button>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsConfigOpen(false)}
                className="px-3.5 py-2 text-xs font-medium text-zinc-400 hover:text-white rounded-lg transition-colors"
              >
                Болих
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Хадгалах</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
