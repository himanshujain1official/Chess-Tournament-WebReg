import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, RotateCcw, Brain } from 'lucide-react';
import { SAMPLE_PUZZLE } from '../data/tournamentData';
import { QueenIcon, KingIcon, BishopIcon } from './ChessGraphics';

export const InteractivePuzzle: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSelect = (optId: string) => {
    setSelectedOption(optId);
    setHasSubmitted(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setHasSubmitted(false);
  };

  const currentOption = SAMPLE_PUZZLE.options.find(o => o.id === selectedOption);

  return (
    <section id="tactics-challenge" className="py-16 relative overflow-hidden bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-xl p-6 sm:p-8 bw-card bw-card-hover relative overflow-hidden">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <span className="text-zinc-400 text-[10px] font-mono uppercase font-bold tracking-widest block mb-0.5">
                  Interactive Tactics
                </span>
                <h3 className="text-xl font-display font-black text-white uppercase tracking-wide">
                  {SAMPLE_PUZZLE.title}
                </h3>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          {/* Puzzle Body */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Visual Mini Board Graphic */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-lg bg-zinc-950 border border-zinc-800 text-center font-mono">
              <div className="grid grid-cols-4 gap-1 p-2 rounded-lg bg-black border border-zinc-800 mb-4">
                <div className="w-9 h-9 bg-zinc-900 rounded flex items-center justify-center text-zinc-400">
                  <KingIcon className="w-5 h-5" />
                </div>
                <div className="w-9 h-9 bg-zinc-950 rounded flex items-center justify-center text-[10px] text-zinc-600">
                  f7
                </div>
                <div className="w-9 h-9 bg-zinc-900 rounded flex items-center justify-center text-white border border-zinc-700">
                  <QueenIcon className="w-5 h-5" />
                </div>
                <div className="w-9 h-9 bg-zinc-900 rounded flex items-center justify-center text-zinc-300">
                  <BishopIcon className="w-5 h-5" />
                </div>
              </div>

              <div className="text-xs text-zinc-400">
                White Queen on e4 + Bishop on d3 battery aiming at h7.
              </div>
              <div className="mt-2 text-xs font-bold text-white uppercase">
                Find the fastest checkmate
              </div>
            </div>

            {/* Tactical Options */}
            <div className="md:col-span-7 space-y-2 font-mono">
              <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block mb-2">
                Select White&apos;s Move:
              </span>

              {SAMPLE_PUZZLE.options.map((option) => {
                const isSelected = selectedOption === option.id;
                let btnStyle = 'border-zinc-800 bg-zinc-900 hover:border-zinc-600 text-zinc-300';

                if (hasSubmitted && isSelected) {
                  btnStyle = option.isCorrect
                    ? 'border-white bg-white text-black font-bold'
                    : 'border-zinc-600 bg-zinc-800 text-white';
                } else if (hasSubmitted && option.isCorrect) {
                  btnStyle = 'border-zinc-600 bg-zinc-900 text-white';
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    className={`w-full p-3 rounded border text-left text-xs transition-all duration-150 flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{option.label}</span>
                    {hasSubmitted && isSelected && (
                      option.isCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-black" />
                      ) : (
                        <XCircle className="w-4 h-4 text-zinc-400" />
                      )
                    )}
                  </button>
                );
              })}

              {/* Feedback Alert */}
              {hasSubmitted && currentOption && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 rounded border border-zinc-800 bg-zinc-950 mt-3 text-xs leading-relaxed text-zinc-300 font-mono"
                >
                  <div className="font-bold text-xs mb-1 flex items-center gap-1.5 text-white">
                    {currentOption.isCorrect ? (
                      <span>✓ Solution Verified! Checkmate Found!</span>
                    ) : (
                      <span>✕ Alternative line. Keep calculating.</span>
                    )}
                  </div>
                  <p className="text-zinc-400">{currentOption.explanation}</p>
                </motion.div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
