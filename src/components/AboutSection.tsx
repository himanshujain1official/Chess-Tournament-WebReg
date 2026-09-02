import React from 'react';
import { motion } from 'motion/react';
import { Globe, Tv, Sparkles, Trophy, ArrowRight, Target, Users } from 'lucide-react';
import { ABOUT_FEATURES } from '../data/tournamentData';

interface AboutSectionProps {
  onOpenRegister: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenRegister }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-5 h-5 text-white" />,
    Tv: <Tv className="w-5 h-5 text-white" />,
    Sparkles: <Sparkles className="w-5 h-5 text-white" />,
    Trophy: <Trophy className="w-5 h-5 text-white" />
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 pb-4 border-b border-zinc-800">
          <div>
            <div className="text-zinc-400 text-xs font-mono uppercase tracking-widest mb-1">
              Event Blueprint
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-wide uppercase">
              ABOUT THE <span className="text-zinc-400 font-light">EVENT</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">Inter-College Showdown</span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono font-bold text-xs">
              STAGE 01
            </span>
          </div>
        </div>

        {/* Narrative Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bw-panel-deep rounded-xl p-6 sm:p-8 mb-10 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <p className="text-lg sm:text-xl text-zinc-200 font-normal leading-relaxed mb-4">
                <strong className="text-white font-bold">Chess eSports</strong> is an inter-college championship bringing together <span className="text-white font-bold">100 players</span> to compete, calculate under clock duress, and battle for the grand title.
              </p>
              <p className="text-sm sm:text-base text-zinc-400 font-mono flex items-center gap-2">
                <Target className="w-4 h-4 text-white" />
                <span>It&apos;s more than a game — it&apos;s a battle of minds.</span>
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="flex items-center gap-3 p-3.5 rounded-lg bg-zinc-900 border border-zinc-800">
                <div className="w-9 h-9 rounded bg-black border border-zinc-700 flex items-center justify-center text-white shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">Tournament Field</div>
                  <div className="text-sm font-bold text-white font-mono">100 Collegiate Players</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-lg bg-zinc-900 border border-zinc-800">
                <div className="w-9 h-9 rounded bg-black border border-zinc-700 flex items-center justify-center text-white shrink-0">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">Championship Crown</div>
                  <div className="text-sm font-bold text-white font-mono">1 Grand Champion</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ABOUT_FEATURES.map((feature, index) => {
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bw-card bw-card-hover rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                      {iconMap[feature.icon]}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                      {feature.badge}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1">
                    {feature.tagline}
                  </div>

                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                  <span>Explore Spec</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
