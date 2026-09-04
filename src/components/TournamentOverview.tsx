import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GitFork, 
  CheckCircle2, 
  Layers, 
  ChevronDown,
  Info
} from 'lucide-react';
import { KingIcon, QueenIcon, KnightIcon, BishopIcon, RookIcon, PawnIcon } from './ChessGraphics';

export const TournamentOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flowchart' | 'format_rules'>('flowchart');
  const [selectedStage, setSelectedStage] = useState<string>('grand_final');

  const stages = [
    {
      id: 'swiss',
      day: 'Day 1',
      title: 'Swiss System 5 Rounds',
      players: '100 → Top 32 Qualify',
      format: '100 players compete in 5 rapid rounds (10+5). Points: Win = 1, Draw = 0.5, Loss = 0. Top 32 on Buchholz advance.',
      icon: <PawnIcon className="w-4 h-4 text-white" />
    },
    {
      id: 'r32',
      day: 'Day 1',
      title: 'Round of 32',
      players: '32 → 16 Players',
      format: 'Best of 3 rapid series. Sudden death elimination. 1-1 ties settled with Blitz playoff.',
      icon: <KnightIcon className="w-4 h-4 text-white" />
    },
    {
      id: 'r16',
      day: 'Day 2',
      title: 'Round of 16',
      players: '16 → 8 Players',
      format: 'Best of 3 rapid games. Broadcast spotlights on top 4 boards.',
      icon: <BishopIcon className="w-4 h-4 text-white" />
    },
    {
      id: 'quarter',
      day: 'Day 2',
      title: 'Quarter Finals',
      players: '8 → 4 Players',
      format: 'Best of 3 rapid games. Intense tactical clash for the Final Four seats.',
      icon: <RookIcon className="w-4 h-4 text-white" />
    },
    {
      id: 'semi',
      day: 'Day 2',
      title: 'Semi Finals',
      players: '4 → 2 Players',
      format: 'Best of 3 / 5 match series. Main stage lighting with spectator prediction.',
      icon: <QueenIcon className="w-4 h-4 text-white" />
    },
    {
      id: 'grand_final',
      day: 'Day 2',
      title: 'Grand Final',
      players: '2 → 1 Champion',
      format: 'Best of 5 championship series. Ties go to Blitz (3+2), followed by Armageddon (5 min White vs 4 min Black with draw odds for Black).',
      icon: <KingIcon className="w-4 h-4 text-white" />
    }
  ];

  return (
    <section id="overview" className="py-8 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 pb-4 border-b border-zinc-800">
          <div>
            <div className="text-zinc-400 text-xs font-mono uppercase tracking-widest mb-1">
              Tournament Progression
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-wide uppercase">
              TOURNAMENT <span className="text-zinc-400 font-light">OVERVIEW & FORMAT</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">Progression Tree</span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono font-bold text-xs">
              
            </span>
          </div>
        </div>

        {/* View Mode Toggle Buttons */}
        <div className="flex items-center justify-center mb-10">
          <div className="p-1 rounded-lg bg-zinc-900 border border-zinc-800 flex gap-1">
            <button
              id="tab-flowchart-btn"
              onClick={() => setActiveTab('flowchart')}
              className={`px-5 py-2.5 rounded font-mono font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'flowchart'
                  ? 'bg-white text-black shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <GitFork className="w-3.5 h-3.5" />
              <span>Progression Flowchart</span>
            </button>

            <button
              id="tab-rules-btn"
              onClick={() => setActiveTab('format_rules')}
              className={`px-5 py-2.5 rounded font-mono font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'format_rules'
                  ? 'bg-white text-black shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <Info className="w-3.5 h-3.5" />
              <span>Format Rules & Tie-Breaks</span>
            </button>
          </div>
        </div>

        {/* Dynamic Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'flowchart' ? (
            <motion.div
              key="flowchart-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Flowchart Diagram */}
              <div className="p-6 sm:p-8 rounded-xl bw-panel-deep relative overflow-hidden">
                
                {/* 100 Players Top Pillar */}
                <div className="flex flex-col items-center justify-center mb-8">
                  <div className="px-8 py-3 rounded-lg bg-white text-black font-mono font-black text-base tracking-widest uppercase shadow-md flex items-center gap-2.5">
                    <KingIcon className="w-5 h-5 text-black" />
                    <span>100 PLAYERS FIELD</span>
                  </div>
                  <div className="w-px h-6 bg-zinc-700 my-1" />
                </div>

                {/* Day 1 & Day 2 Progression Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
                  
                  {/* DAY 1 BRACKET */}
                  <div className="rounded-xl p-5 bg-zinc-900/60 border border-zinc-800 relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-800 text-white font-mono font-bold text-[10px] uppercase tracking-wider mb-5">
                      <span>DAY 1: QUALIFYING</span>
                    </div>

                    <div className="space-y-3">
                      {/* Swiss System Card */}
                      <div 
                        onClick={() => setSelectedStage('swiss')}
                        className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                          selectedStage === 'swiss' 
                            ? 'border-white bg-zinc-800 text-white' 
                            : 'border-zinc-800 bg-zinc-950/60 text-zinc-300 hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-bold text-sm text-white uppercase flex items-center gap-2 font-mono">
                            <PawnIcon className="w-4 h-4 text-zinc-400" />
                            SWISS SYSTEM (5 ROUNDS)
                          </span>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                            100 Players
                          </span>
                        </div>
                        <div className="text-xs text-zinc-300 font-mono flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                          <span>TOP 32 PLAYERS ADVANCE</span>
                        </div>
                      </div>

                      {/* Arrow Down */}
                      <div className="flex justify-center text-zinc-600">
                        <ChevronDown className="w-4 h-4" />
                      </div>

                      {/* Round of 32 Card */}
                      <div 
                        onClick={() => setSelectedStage('r32')}
                        className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                          selectedStage === 'r32' 
                            ? 'border-white bg-zinc-800 text-white' 
                            : 'border-zinc-800 bg-zinc-950/60 text-zinc-300 hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-bold text-sm text-white uppercase flex items-center gap-2 font-mono">
                            <KnightIcon className="w-4 h-4 text-zinc-400" />
                            ROUND OF 32
                          </span>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                            Best of 3
                          </span>
                        </div>
                        <div className="text-xs text-zinc-400 font-mono flex items-center justify-between">
                          <span>32 → 16 SURVIVE</span>
                          <span className="text-white font-bold">Advances to Day 2 →</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DAY 2 BRACKET */}
                  <div className="rounded-xl p-5 bg-zinc-900/60 border border-zinc-800 relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-800 text-white font-mono font-bold text-[10px] uppercase tracking-wider mb-5">
                      <span>DAY 2: CHAMPIONSHIP FINALS</span>
                    </div>

                    <div className="space-y-2.5">
                      {/* Round of 16 */}
                      <div 
                        onClick={() => setSelectedStage('r16')}
                        className={`p-3 rounded-lg border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                          selectedStage === 'r16' 
                            ? 'border-white bg-zinc-800 text-white' 
                            : 'border-zinc-800 bg-zinc-950/60 text-zinc-300 hover:border-zinc-700'
                        }`}
                      >
                        <span className="font-bold text-xs text-white uppercase flex items-center gap-2 font-mono">
                          <BishopIcon className="w-3.5 h-3.5 text-zinc-400" />
                          ROUND OF 16
                        </span>
                        <span className="font-mono text-[10px] font-bold text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded">
                          16 → 8 PLAYERS
                        </span>
                      </div>

                      {/* Quarter Final */}
                      <div 
                        onClick={() => setSelectedStage('quarter')}
                        className={`p-3 rounded-lg border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                          selectedStage === 'quarter' 
                            ? 'border-white bg-zinc-800 text-white' 
                            : 'border-zinc-800 bg-zinc-950/60 text-zinc-300 hover:border-zinc-700'
                        }`}
                      >
                        <span className="font-bold text-xs text-white uppercase flex items-center gap-2 font-mono">
                          <RookIcon className="w-3.5 h-3.5 text-zinc-400" />
                          QUARTER FINAL
                        </span>
                        <span className="font-mono text-[10px] font-bold text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded">
                          8 → 4 PLAYERS
                        </span>
                      </div>

                      {/* Semi Final */}
                      <div 
                        onClick={() => setSelectedStage('semi')}
                        className={`p-3 rounded-lg border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                          selectedStage === 'semi' 
                            ? 'border-white bg-zinc-800 text-white' 
                            : 'border-zinc-800 bg-zinc-950/60 text-zinc-300 hover:border-zinc-700'
                        }`}
                      >
                        <span className="font-bold text-xs text-white uppercase flex items-center gap-2 font-mono">
                          <QueenIcon className="w-3.5 h-3.5 text-zinc-400" />
                          SEMI FINAL
                        </span>
                        <span className="font-mono text-[10px] font-bold text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded">
                          4 → 2 PLAYERS
                        </span>
                      </div>

                      {/* Grand Final Centerpiece */}
                      <div 
                        onClick={() => setSelectedStage('grand_final')}
                        className={`p-3.5 rounded-lg border-2 transition-all duration-200 cursor-pointer flex items-center justify-between ${
                          selectedStage === 'grand_final' 
                            ? 'border-white bg-zinc-800 text-white' 
                            : 'border-zinc-700 bg-zinc-950/80 text-zinc-300 hover:border-zinc-600'
                        }`}
                      >
                        <span className="font-black text-sm text-white uppercase flex items-center gap-2 font-mono">
                          <KingIcon className="w-4 h-4 text-white" />
                          GRAND FINAL
                        </span>
                        <span className="font-mono text-xs font-black text-black bg-white px-2 py-0.5 rounded uppercase tracking-wider">
                          2 → 1 CHAMPION
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Selected Stage Detail Inspector */}
                {selectedStage && (
                  <motion.div
                    key={selectedStage}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded bg-black border border-zinc-700 flex items-center justify-center text-white">
                        {stages.find(s => s.id === selectedStage)?.icon}
                      </div>
                      <div>
                        <div className="text-[10px] font-mono uppercase text-zinc-400 font-bold">
                          {stages.find(s => s.id === selectedStage)?.day}
                        </div>
                        <h4 className="text-sm font-bold text-white uppercase font-mono">
                          {stages.find(s => s.id === selectedStage)?.title} ({stages.find(s => s.id === selectedStage)?.players})
                        </h4>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-400 max-w-xl font-mono leading-relaxed">
                      {stages.find(s => s.id === selectedStage)?.format}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="rules-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Box 1: Swiss System */}
              <div className="bw-panel-deep rounded-xl p-6 relative">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-zinc-800">
                  <div className="w-8 h-8 rounded bg-zinc-900 text-white flex items-center justify-center font-bold text-sm border border-zinc-700 font-mono">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-wide font-display">
                      SWISS SYSTEM <span className="text-zinc-400 font-light">(DAY 1)</span>
                    </h3>
                    <span className="text-[10px] text-zinc-400 font-mono">100-Player Qualification Stage</span>
                  </div>
                </div>

                <ul className="space-y-3 text-zinc-300 text-xs font-mono">
                  <li className="flex items-start gap-2.5 p-3 rounded bg-zinc-900 border border-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                    <span><strong>All 100 players</strong> will play 5 rounds across digital sensor boards.</span>
                  </li>

                  <li className="flex items-start gap-2.5 p-3 rounded bg-zinc-900 border border-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                    <span><strong>Pairings based on performance:</strong> High scorers play fellow leaders each round.</span>
                  </li>

                  <li className="flex items-start gap-2.5 p-3 rounded bg-zinc-900 border border-zinc-800 text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                    <span className="font-bold">
                      Scoring: Win = 1 point | Draw = 0.5 point | Loss = 0 point
                    </span>
                  </li>

                  <li className="flex items-start gap-2.5 p-3 rounded bg-zinc-900 border border-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                    <span>
                      <strong>Top 32 players</strong> on the leaderboard qualify directly for the knockout phase.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Box 2: Knockout Matches */}
              <div className="bw-panel-deep rounded-xl p-6 relative">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-zinc-800">
                  <div className="w-8 h-8 rounded bg-zinc-900 text-white flex items-center justify-center font-bold text-sm border border-zinc-700 font-mono">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-wide font-display">
                      KNOCKOUT MATCHES <span className="text-zinc-400 font-light">(DAY 1 & 2)</span>
                    </h3>
                    <span className="text-[10px] text-zinc-400 font-mono">Single Elimination & Tie-Breaks</span>
                  </div>
                </div>

                <ul className="space-y-3 text-zinc-300 text-xs font-mono">
                  <li className="flex items-start gap-2.5 p-3 rounded bg-zinc-900 border border-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                    <span><strong>Round of 32 to Semi Final:</strong> Best of 3 Rapid Games series.</span>
                  </li>

                  <li className="flex items-start gap-2.5 p-3 rounded bg-zinc-900 border border-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                    <span><strong>Grand Final:</strong> Best of 5 Championship clash under tournament spotlights.</span>
                  </li>

                  <li className="flex items-start gap-2.5 p-3 rounded bg-zinc-900 border border-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                    <span><strong>Best of 3 Tie-Break:</strong> If score is 1-1 → Sudden death Blitz Tie break (3m + 2s).</span>
                  </li>

                  <li className="flex items-start gap-2.5 p-3 rounded bg-zinc-900 border border-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                    <span>
                      <strong>Grand Final Tie-Break:</strong> If score is tied in Best of 5 → Blitz Tie break → <strong>Armageddon</strong> (White 5 min, Black 4 min with draw odds for Black).
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
