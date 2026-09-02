import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { KingIcon } from './ChessGraphics';

interface HeroProps {
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bw-grid-bg">
      {/* Dynamic Ambient Background Shadow & Vignette */}
      <div className="absolute inset-0 bw-radial-shadow pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Minimal Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 border-b border-zinc-800 pb-4"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span className="text-zinc-400 font-mono text-xs font-semibold tracking-widest uppercase">
              INTER-COLLEGE INVITATIONAL • 2026
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-zinc-400 uppercase">
            <span className="text-white font-bold">STRATEGY</span>
            <span className="text-zinc-700">•</span>
            <span className="text-white font-bold">FOCUS</span>
            <span className="text-zinc-700">•</span>
            <span className="text-white font-bold">VICTORY</span>
          </div>
        </motion.div>

        {/* Main Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <div className="inline-block px-3 py-1 mb-4 rounded border border-zinc-800 bg-zinc-950 text-zinc-400 font-mono text-xs uppercase tracking-widest">
              Are you ready to make your move?
            </div>

            {/* Main Bold Monochrome Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.92] tracking-tight mb-5 uppercase text-white font-display">
              CHESS <span className="text-zinc-400 font-light">eSPORTS</span>
              <br />
              <span className="text-2xl sm:text-3xl text-zinc-300 font-medium tracking-normal block mt-2">
                COMPETE. THINK. CONQUER.
              </span>
            </h1>

            {/* Minimal Stat Cards in Black & White */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bw-card p-4 rounded-lg text-left">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white">2 DAYS</div>
                <div className="text-[10px] font-mono uppercase text-zinc-400 font-medium tracking-wider">Tournament</div>
              </div>

              <div className="bw-card p-4 rounded-lg text-left">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white">100</div>
                <div className="text-[10px] font-mono uppercase text-zinc-400 font-medium tracking-wider">Players Max</div>
              </div>

              <div className="bw-card p-4 rounded-lg text-left">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white">1</div>
                <div className="text-[10px] font-mono uppercase text-zinc-400 font-medium tracking-wider">Grand Champion</div>
              </div>
            </div>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              The premier collegiate chess championship bringing 100 tacticians together in standard Swiss rounds and sudden-death knockout eliminations under official regulations.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <button
                id="hero-register-btn"
                onClick={onOpenRegister}
                className="w-full sm:w-auto px-8 py-3.5 bw-btn-primary font-mono font-bold text-xs uppercase tracking-wider rounded-md flex items-center justify-center gap-2 group"
              >
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#schedule"
                id="hero-view-schedule-btn"
                className="w-full sm:w-auto px-6 py-3.5 bw-btn-secondary font-mono font-semibold text-xs uppercase tracking-wider rounded-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-zinc-400" />
                <span>Explore Timeline</span>
              </a>
            </div>

            {/* Format Summary Mini Bar */}
            <div className="bw-card p-4 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-zinc-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-zinc-400" />
                <span>Time Control: <strong>10m + 5s Rapid</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-zinc-400" />
                <span>Format: <strong>5 Swiss Rounds + Top 32 Knockouts</strong></span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Event Specification Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="bw-panel-deep p-6 sm:p-8 rounded-xl relative overflow-hidden">
              
              {/* Header */}
              <div className="text-center mb-6 pb-6 border-b border-zinc-800">
                <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white shadow-inner">
                  <KingIcon className="w-9 h-9" />
                </div>
                <h3 className="text-lg font-display font-bold text-white tracking-wider uppercase">
                  Tournament Specifications
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1 flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  <span>Official Championship Standards</span>
                </p>
              </div>

              {/* Event Specification List */}
              <div className="space-y-3 text-xs font-mono text-zinc-300">
                <div className="flex items-center justify-between py-2 border-b border-zinc-800/80">
                  <span className="text-zinc-400">Total Capacity</span>
                  <span className="text-white font-bold">100 Players Max</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-zinc-800/80">
                  <span className="text-zinc-400">Tournament Format</span>
                  <span className="text-white font-bold">Swiss + Knockout</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-zinc-800/80">
                  <span className="text-zinc-400">Time Control</span>
                  <span className="text-white font-bold">10m + 5s Rapid</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-zinc-800/80">
                  <span className="text-zinc-400">Eligibility</span>
                  <span className="text-white font-bold">Open to All Ratings</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-zinc-800/80">
                  <span className="text-zinc-400">Prizes & Honours</span>
                  <span className="text-white font-bold">8 Official Awards</span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="text-zinc-400">Chief Arbiter</span>
                  <span className="text-white font-bold">Certified Panel</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
