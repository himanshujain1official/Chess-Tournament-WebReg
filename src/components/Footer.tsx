import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { KingIcon } from './ChessGraphics';

interface FooterProps {
  onOpenRegister: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegister, onOpenAdmin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative text-zinc-400 pt-20 pb-12 overflow-hidden border-t border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Grand CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="rounded-xl p-8 sm:p-12 bw-panel-deep text-center relative overflow-hidden mb-16"
        >
          <div className="text-zinc-400 text-xs font-mono uppercase tracking-widest mb-3">
            Final Call for Competitors
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tight leading-none mb-3">
            YOUR MOVE. <span className="text-zinc-400 font-light">YOUR LEGACY.</span>
          </h2>

          <div className="text-sm sm:text-base font-mono font-bold text-zinc-300 tracking-wider uppercase mb-4">
            THINK DEEP. MOVE SMART. BE THE CHAMPION.
          </div>

          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed font-mono">
            100 players enter the arena, only 1 champion will emerge. Secure your tournament registration today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              id="footer-register-btn"
              onClick={onOpenRegister}
              className="w-full sm:w-auto px-8 py-3 rounded-lg bw-btn-primary font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Register Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="#schedule"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bw-btn-secondary font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>View Timeline</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800 font-mono text-xs text-zinc-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <span>STAGE 10: CONQUER</span>
          </div>
        </motion.div>

        {/* Footer Navigation & Brand columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-zinc-800 font-mono">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                <KingIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-wider text-white">
                  CHESS <span className="text-zinc-400 font-light">eSPORTS</span>
                </span>
                <span className="block text-[10px] tracking-widest text-zinc-400 uppercase -mt-0.5">
                  Compete • Think • Conquer
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
              Inter-college competitive chess tournament featuring Swiss rounds, single-elimination playoffs, and digital smart board arena broadcasting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#overview" className="hover:text-white transition-colors">Progression</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Schedule</a></li>
              <li><a href="#awards" className="hover:text-white transition-colors">Awards</a></li>
              <li><a href="#arena" className="hover:text-white transition-colors">Arena</a></li>
              <li><a href="#rules" className="hover:text-white transition-colors">Rules</a></li>
            </ul>
          </div>

          {/* Event Venue & Contact */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Tournament Details
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                <span>BCS Govt. PG College, Dhamtari</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>https://bcspgcdmt.com/#/home</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-4">
            <span>© 2026 Chess eSports Championship.</span>
            <span className="hidden sm:inline">All rights reserved.</span>
        
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
