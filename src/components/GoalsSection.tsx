import React from 'react';
import { LEARNING_GOALS } from '../data/portfolioData';
import { Target, CheckCircle2, Sparkles, Compass, Lightbulb } from 'lucide-react';

export const GoalsSection: React.FC = () => {
  return (
    <section id="goals" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-medium text-cyan-400 uppercase tracking-wider mb-2">
            <Target className="w-4 h-4" />
            <span>Суралцах зорилго</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-zinc-400">Алсын хараа</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Сургалтад сурч буй зорилго
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-2xl">
            Өлзийтогтохын технологийн ертөнц дэх сурах гол зорилгууд ба хичээл зүтгэл
          </p>
        </div>

        {/* 3 Goals in Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {LEARNING_GOALS.map((goal) => (
            <div
              key={goal.number}
              className="flex flex-col justify-between rounded-2xl bg-[#09090b] border border-zinc-800 p-6 sm:p-7 hover:border-zinc-700 hover:shadow-xl transition-all duration-300 relative group"
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
                  <span className="font-mono text-2xl font-black text-cyan-400 tracking-tight">
                    {goal.number}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mt-4 font-display group-hover:text-cyan-300 transition-colors">
                  {goal.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mt-3">
                  {goal.description}
                </p>

                {/* Detailed highlights */}
                <ul className="mt-5 space-y-2.5 pt-4 border-t border-zinc-800/60">
                  {goal.details.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status footer */}
              <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
                <span>Хэрэгжүүлж буй явц</span>
                <span className="text-cyan-400 font-medium">Идэвхтэй суралцаж байна</span>
              </div>
            </div>
          ))}
        </div>

        {/* Motivational Callout */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-zinc-900/60 to-indigo-950/30 border border-zinc-800 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white font-display">
              &quot;Хамгийн шилдэг код бол өдөр бүрийн тасралтгүй дадлагаас төрдөг&quot;
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              16 настай сурагч Өлзийтогтохын сурах их аялал дөнгөж эхэлж байна.
            </p>
          </div>
          <a
            href="#projects"
            className="px-5 py-2.5 text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all whitespace-nowrap shrink-0"
          >
            Бүтээлүүд рүү буцах
          </a>
        </div>
      </div>
    </section>
  );
};
