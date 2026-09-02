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
    <section id="arena" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 pb-4 border-b border-zinc-800">
          <div>
            <div className="text-zinc-400 text-xs font-mono uppercase tracking-widest mb-1">
              Arena Production & Setup
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-wide uppercase">
              eSPORTS <span className="text-zinc-400 font-light">EXPERIENCE</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">Arena Standards</span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono font-bold text-xs">
              STAGE 05
            </span>
          </div>
        </div>

        {/* Live Broadcast Arena Telemetry Layout */}
        <div className="rounded-xl p-6 bw-panel-deep mb-10">
          
          {/* Top Broadcast Bar */}
          <div className="flex items-center justify-between px-3 py-2 mb-6 bg-zinc-950 rounded-lg border border-zinc-800">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white text-black font-mono text-xs font-bold uppercase tracking-wider">
                <Radio className="w-3.5 h-3.5" />
                CENTER BOARD BROADCAST
              </span>
              <span className="hidden sm:inline-block text-xs font-mono text-zinc-400">
                Championship Stage • DGT Sensor Live Relays
              </span>
            </div>

            <div className="text-xs font-mono text-zinc-400 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
              Live Engine Feed: 60 FPS
            </div>
          </div>

          {/* Broadcast Stage Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Visual Chess Arena View */}
            <div className="lg:col-span-8 bg-zinc-950 rounded-xl p-6 border border-zinc-800">
              
              {/* Player 2 Header */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900 border border-zinc-800 mb-4 font-mono">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-black border border-zinc-800 flex items-center justify-center font-bold text-white text-xs">
                    02
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm">BLACK POSITION</span>
                    <span className="block text-[10px] text-zinc-500">Official Tournament Board</span>
                  </div>
                </div>

                <div className="text-sm font-bold text-white bg-black px-2.5 py-1 rounded border border-zinc-800">
                  10:00 + 5s
                </div>
              </div>

              {/* Center Arena Visualization */}
              <div className="aspect-video w-full rounded-lg bg-black border border-zinc-800 flex flex-col items-center justify-center relative p-4">
                
                {/* Visual Chess Piece Duo */}
                <div className="flex items-center justify-center gap-8 sm:gap-16">
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white flex flex-col items-center">
                    <KingIcon className="w-12 h-12" />
                    <span className="font-mono text-[11px] font-bold text-white mt-2 tracking-wider">WHITE</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="font-display font-black text-2xl text-white tracking-widest font-mono">VS</span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">SWISS MATCH</span>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 flex flex-col items-center">
                    <QueenIcon className="w-12 h-12" />
                    <span className="font-mono text-[11px] font-bold text-zinc-400 mt-2 tracking-wider">BLACK</span>
                  </div>
                </div>

                {/* Bottom Overlay: Move Notation */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between px-3 py-1.5 rounded bg-zinc-900/90 border border-zinc-800 text-xs font-mono">
                  <span className="text-zinc-300">DGT Smartboard Link: <strong className="text-white">Active</strong></span>
                  <span className="text-zinc-400">Time Control: 10m + 5s</span>
                </div>
              </div>

              {/* Player 1 Footer */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900 border border-zinc-800 mt-4 font-mono">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-white text-black flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm">WHITE POSITION</span>
                    <span className="block text-[10px] text-zinc-500">Official Tournament Board</span>
                  </div>
                </div>

                <div className="text-sm font-bold text-white bg-black px-2.5 py-1 rounded border border-zinc-800">
                  10:00 + 5s
                </div>
              </div>
            </div>

            {/* Right: Telemetry & Production Specs */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4">
              
              {/* Production Console */}
              <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 font-mono">
                <div className="text-xs uppercase font-bold text-white mb-3 pb-2 border-b border-zinc-800 flex items-center justify-between">
                  <span>Arena Infrastructure</span>
                  <span className="text-zinc-500">STATUS: OK</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-zinc-900">
                    <span className="text-zinc-400">Projection System</span>
                    <span className="text-white font-bold">Large Displays</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-900">
                    <span className="text-zinc-400">Board Sensors</span>
                    <span className="text-white font-bold">Smart Monitors</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-900">
                    <span className="text-zinc-400">Audio Desk</span>
                    <span className="text-white font-bold">Dual Casters</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-900">
                    <span className="text-zinc-400">Clocks</span>
                    <span className="text-white font-bold">Digital Clocks</span>
                  </div>
                </div>
              </div>

              {/* Live Spec Notice */}
              <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs">
                <div className="text-zinc-300 font-bold uppercase mb-1">
                  Spectator Seating
                </div>
                <p className="text-zinc-500 leading-relaxed text-[11px]">
                  Audience members can follow top board evaluations, grandmaster commentary, and key tactical moments live in the arena.
                </p>
              </div>

            </div>

          </div>
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
