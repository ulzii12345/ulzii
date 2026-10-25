import React, { useState } from 'react';
import { INTERESTS_DATA } from '../data/portfolioData';
import { Heart, Film, Utensils, Code2, Sparkles, Terminal } from 'lucide-react';

export const InterestsSection: React.FC = () => {
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrorMap((prev) => ({ ...prev, [id]: true }));
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'hobby-code':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'movie-avengers':
        return <Film className="w-5 h-5 text-rose-400" />;
      case 'food-sushi':
        return <Utensils className="w-5 h-5 text-emerald-400" />;
      default:
        return <Heart className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="interests" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-medium text-cyan-400 uppercase tracking-wider mb-2">
            <Heart className="w-4 h-4" />
            <span>Сонирхол ба хобби</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-zinc-400">Чөлөөт цаг ба таашаал</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Миний сонирхдог зүйлс
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-2xl">
            Код бичих дур сонирхлоос эхлээд дуртай кино, амтат зоог хүртэлх миний ертөнц
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {INTERESTS_DATA.map((item, idx) => {
            const hasError = imageErrorMap[item.id];
            const displayImg = hasError && item.fallbackImage ? item.fallbackImage : item.imageUrl;

            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between rounded-2xl bg-[#09090b] border border-zinc-800 hover:border-zinc-700 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Visual Image container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/80">
                  <img
                    src={displayImg}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(item.id)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent pointer-events-none" />

                  {/* Icon badge */}
                  <div className="absolute top-3 left-3 p-2 rounded-lg bg-black/70 backdrop-blur-md border border-zinc-800">
                    {getIcon(item.id)}
                  </div>

                  {/* Category badge */}
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-zinc-300 font-medium">
                    <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-zinc-800/80 text-[11px] text-cyan-300">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mt-2.5">
                      {item.description}
                    </p>
                  </div>

                  {/* Meta strip */}
                  <div className="pt-3 border-t border-zinc-800/80 text-xs text-zinc-500 flex items-center justify-between">
                    <span>{item.meta}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Code aesthetic interactive snippet below */}
        <div className="mt-10 rounded-2xl bg-zinc-950 border border-zinc-800/90 p-5 sm:p-6 font-mono text-xs text-zinc-300 space-y-2 overflow-x-auto">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-zinc-500 text-[11px]">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>profile_interests.json</span>
            </div>
            <span>UTF-8 · JSON</span>
          </div>
          <pre className="text-zinc-400 leading-relaxed pt-2">
            {`{
  "name": "Өлзийтогтох",
  "age": 16,
  "hobbies": ["Код бичих", "Шинэ вэб бүтээх"],
  "favoriteMovie": "Avengers",
  "favoriteFood": "Sushi",
  "motto": "Өдөр бүр шинийг сурч, бүтээлчээр хөгжих"
}`}
          </pre>
        </div>
      </div>
    </section>
  );
};
