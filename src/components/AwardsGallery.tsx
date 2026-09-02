import React from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Crown, 
  Shield, 
  Zap, 
  Crosshair, 
  Timer, 
  Sparkles, 
  TrendingUp, 
  Heart,
  Award,
  Star
} from 'lucide-react';
import { AWARDS_LIST } from '../data/tournamentData';
import { KingIcon } from './ChessGraphics';

export const AwardsGallery: React.FC = () => {
  const iconComponents: Record<string, React.ReactNode> = {
    Crown: <Crown className="w-5 h-5 text-white" />,
    Shield: <Shield className="w-5 h-5 text-zinc-300" />,
    Zap: <Zap className="w-5 h-5 text-zinc-300" />,
    Crosshair: <Crosshair className="w-5 h-5 text-zinc-300" />,
    Timer: <Timer className="w-5 h-5 text-zinc-300" />,
    Sparkles: <Sparkles className="w-5 h-5 text-zinc-300" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-zinc-300" />,
    Heart: <Heart className="w-5 h-5 text-zinc-300" />
  };

  return (
    <section id="awards" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 pb-4 border-b border-zinc-800">
          <div>
            <div className="text-zinc-400 text-xs font-mono uppercase tracking-widest mb-1">
              Hall of Glory & Recognition
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-wide uppercase">
              AWARDS & <span className="text-zinc-400 font-light">RECOGNITION</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">Honors</span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono font-bold text-xs">
              STAGE 04
            </span>
          </div>
        </div>

        {/* Top Tier: Champion & Runner-Up Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          
          {/* Champion Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 rounded-xl p-6 sm:p-8 bw-card bw-card-hover relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-white text-black flex items-center justify-center shadow-lg font-mono">
                  <KingIcon className="w-9 h-9 text-black" />
                </div>
                <div>
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                    Tier 01
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-wide mt-1">
                    CHAMPION
                  </h3>
                </div>
              </div>

              <div className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 font-mono text-zinc-300 font-bold text-xs uppercase tracking-wider">
                Grand Cup & Title
              </div>
            </div>

            <p className="text-zinc-300 text-sm font-mono mb-6 leading-relaxed">
              Awarded to the tournament victor after surviving 5 Swiss rounds and every single knockout elimination match on the championship board.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-zinc-800 font-mono text-xs">
              <div className="p-3 rounded bg-zinc-950 border border-zinc-800">
                <span className="text-zinc-500 block text-[10px] uppercase">Trophy</span>
                <span className="font-bold text-white">Grand Cup</span>
              </div>
              <div className="p-3 rounded bg-zinc-950 border border-zinc-800">
                <span className="text-zinc-500 block text-[10px] uppercase">Title</span>
                <span className="font-bold text-white">eSports Champion</span>
              </div>
              <div className="p-3 rounded bg-zinc-950 border border-zinc-800 col-span-2 sm:col-span-1">
                <span className="text-zinc-500 block text-[10px] uppercase">Recognition</span>
                <span className="font-bold text-zinc-300">Permanent Roster</span>
              </div>
            </div>
          </motion.div>

          {/* Runner-Up Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="lg:col-span-5 rounded-xl p-6 sm:p-8 bw-card bw-card-hover relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                      Tier 02
                    </span>
                    <h3 className="text-2xl font-display font-black text-white uppercase tracking-wide mt-0.5">
                      RUNNER-UP
                    </h3>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
                  Finalist
                </span>
              </div>

              <p className="text-zinc-400 text-xs sm:text-sm font-mono leading-relaxed mb-6">
                Honoring the grand finalist who battled through 100 contenders to the ultimate deciding match.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-zinc-800 font-mono text-xs">
              <div className="p-3 rounded bg-zinc-950 border border-zinc-800">
                <span className="text-zinc-500 block text-[10px] uppercase">Trophy</span>
                <span className="font-bold text-white">Silver Cup</span>
              </div>
              <div className="p-3 rounded bg-zinc-950 border border-zinc-800">
                <span className="text-zinc-500 block text-[10px] uppercase">Title</span>
                <span className="font-bold text-zinc-300">Vice-Champion</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Specialty Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AWARDS_LIST.slice(2).map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
              className="p-6 rounded-xl bw-card bw-card-hover flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                    {iconComponents[award.icon] || <Award className="w-5 h-5 text-zinc-400" />}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-white bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                    {award.rewardHighlight}
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                  {award.subtitle}
                </span>

                <h4 className="text-base font-display font-bold text-white uppercase tracking-wide mb-2 font-mono">
                  {award.title}
                </h4>

                <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                  {award.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-zinc-400" />
                  <span>Category Trophy</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
