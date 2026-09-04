import React from 'react';
import { motion } from 'motion/react';
import { 
  Tv, 
  Mic, 
  Users, 
  BarChart3, 
  Radio
} from 'lucide-react';
import { ESPORTS_HIGHLIGHTS } from '../data/tournamentData';
import { KingIcon, QueenIcon } from './ChessGraphics';

export const ESportsArenaSection: React.FC = () => {
  return (
    <section id="arena" className="py-1 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
            {/* Right: Telemetry & Production Specs */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4">
              

        </div>

        {/* 4 Feature Columns from Flyer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ESPORTS_HIGHLIGHTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
              className="p-6 rounded-xl bw-card bw-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-4">
                  {item.id === 'live_boards' && <Tv className="w-5 h-5" />}
                  {item.id === 'live_commentary' && <Mic className="w-5 h-5" />}
                  {item.id === 'audience_engagement' && <Users className="w-5 h-5" />}
                  {item.id === 'esports_feel' && <BarChart3 className="w-5 h-5" />}
                </div>

                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                  {item.subtitle}
                </span>

                <h3 className="text-base font-display font-bold text-white uppercase tracking-wide mb-2 font-mono">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-800 text-[10px] font-mono text-zinc-500 flex items-center justify-between">
                <span>Standard</span>
                <span className="text-white font-bold">Tournament Level</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

