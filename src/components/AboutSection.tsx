import React, { useState } from 'react';
import { useNetlify } from '../context/NetlifyContext';
import { USER_INFO } from '../data/portfolioData';
import { User, Code, Heart, Target, ExternalLink, Calendar, MapPin, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { getUrlForSlug, getBaseUrl } = useNetlify();
  const photoUrl = getUrlForSlug('my-photo.png');
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-medium text-cyan-400 uppercase tracking-wider mb-2">
            <User className="w-4 h-4" />
            <span>Миний тухай</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-zinc-400">Хувийн танилцуулга</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Өлзийтогтохтой танилцах
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-2xl">
            Вэб технологи, бүтээлч сэтгэлгээ ба ирээдүйн хүсэл мөрөөдөл
          </p>
        </div>

        {/* 2-Column Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Photo & Quick Meta */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 group shadow-2xl">
              {/* Photo Display */}
              <div className="relative aspect-square w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
                <img
                  src={imgError ? USER_INFO.fallbackAvatar : photoUrl}
                  alt={USER_INFO.name}
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Status indicator on photo */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white text-base font-display">
                      {USER_INFO.name}
                    </div>
                    <div className="text-zinc-300 text-xs">
                      {USER_INFO.role} · 16 настай
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-zinc-700 text-cyan-400 text-[11px] font-mono">
                    Суралцагч
                  </div>
                </div>
              </div>

              {/* Photo source info */}
              <div className="p-4 bg-zinc-950/80 border-t border-zinc-800/80 space-y-1.5 text-xs text-zinc-400">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Зургийн эх сурвалж:</span>
                  <a
                    href={photoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1 font-mono text-[11px] truncate max-w-[200px]"
                  >
                    <span>my-photo.png</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                {imgError && (
                  <p className="text-[11px] text-zinc-500 italic">
                    (Хэрэв таны Netlify дээр зураг хараахан байршаагүй бол урьдчилан бэлтгэсэн зураг харагдана)
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Bio Details & Personal Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl bg-[#09090b] border border-zinc-800 p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  Сайн байна уу!
                </h3>
                <p className="text-zinc-300 leading-relaxed text-sm sm:text-base mt-3">
                  Миний нэрийг Өлзийтогтох гэдэг. Би одоо 16 настай бөгөөд вэб технологи, код бичих сонирхолдоо хөтлөгдөн бие даан болон сургалтаар системтэйгээр суралцаж байна.
                </p>
                <p className="text-zinc-400 leading-relaxed text-sm mt-3">
                  Миний үндсэн зорилго бол энгийн статик хуудсуудаас эхлээд орчин үеийн интерактив вэб аппликейшн, хэрэглэгчдэд таатай хөдөлгөөнт интерфэйс бүтээж сурах, мөн хиймэл оюун ухааны загваруудад зөв оновчтой даалгавар өгч бүтээмжээ нэмэгдүүлэх явдал юм.
                </p>
              </div>

              {/* Quick specs grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800/80">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
                  <div className="text-xs text-zinc-500">Нас ба ангилал</div>
                  <div className="text-sm font-semibold text-white">16 настай · Сурагч</div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
                  <div className="text-xs text-zinc-500">Үндсэн хобби</div>
                  <div className="text-sm font-semibold text-white">Код бичих (HTML, CSS)</div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
                  <div className="text-xs text-zinc-500">Дуртай кино</div>
                  <div className="text-sm font-semibold text-white">Avengers (Өшөө авагчид)</div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
                  <div className="text-xs text-zinc-500">Дуртай хоол</div>
                  <div className="text-sm font-semibold text-white">Sushi (Сүши зоог)</div>
                </div>
              </div>

              {/* Primary Link to Netlify */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={getBaseUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all"
                >
                  <span>Миний үндсэн сайт нээх</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#interests"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-xl transition-all"
                >
                  <span>Сонирхол ба хобби үзэх →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
