import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  BookOpen, 
  Handshake, 
  PhoneOff, 
  Scale, 
  Clock, 
  AlertTriangle,
  ChevronDown
} from 'lucide-react';
import { RULES_LIST } from '../data/tournamentData';

export const RulesSection: React.FC = () => {
  const [expandedRule, setExpandedRule] = useState<string | null>(null);

  const iconMapping: Record<string, React.ReactNode> = {
    BookOpen: <BookOpen className="w-4 h-4 text-white" />,
    Handshake: <Handshake className="w-4 h-4 text-white" />,
    SmartphoneOff: <PhoneOff className="w-4 h-4 text-white" />,
    Scale: <Scale className="w-4 h-4 text-white" />,
    Clock: <Clock className="w-4 h-4 text-white" />
  };

  return (
    <section id="rules" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 pb-4 border-b border-zinc-800">
          <div>
            <div className="text-zinc-400 text-xs font-mono uppercase tracking-widest mb-1">
              Tournament Code of Conduct
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-wide uppercase">
              RULES AT A <span className="text-zinc-400 font-light">GLANCE</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">Fair Play</span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono font-bold text-xs">
              
            </span>
          </div>
        </div>

        {/* Rules Grid & Arbiter Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Rules List */}
          <div className="lg:col-span-8 space-y-3">
            {RULES_LIST.map((rule, index) => {
              const isExpanded = expandedRule === rule.id;

              return (
                <motion.div
                  key={rule.id}
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.04 }}
                  className="p-5 rounded-xl bw-card bw-card-hover transition-all cursor-pointer"
                  onClick={() => setExpandedRule(isExpanded ? null : rule.id)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                        {iconMapping[rule.icon]}
                      </div>

                      <div>
                        <h4 className="font-mono font-bold text-sm text-white uppercase tracking-wide">
                          {rule.text}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {rule.critical && (
                        <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-white text-[10px] font-mono uppercase font-bold">
                          Mandatory
                        </span>
                      )}
                      <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-white' : ''}`} />
                    </div>
                  </div>

                  {/* Expanded detail explanation */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 pt-3 border-t border-zinc-800 text-xs text-zinc-400 pl-12 font-mono leading-relaxed"
                    >
                      {rule.detail}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Arbiter & Protocol Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Zero Tolerance Policy */}
            <div className="p-6 rounded-xl bw-panel-deep font-mono">
              <div className="flex items-center gap-2 mb-3 text-white font-bold text-sm uppercase">
                <AlertTriangle className="w-4 h-4 text-zinc-300" />
                <span>Fair Play Enforcement</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Anti-cheating protocols and metal screening will be strictly conducted prior to all match sessions. Unregistered communication devices are prohibited in the competition area.
              </p>
              <div className="p-3 rounded bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-400 space-y-1">
                <div>• Designated equipment lockers on site</div>
                <div>• standard arbiter review for disputes</div>
              </div>
            </div>

            {/* Time Control Summary */}
            <div className="p-6 rounded-xl bw-panel-deep font-mono">
              <div className="flex items-center gap-2 text-white font-bold text-sm uppercase mb-3">
                <Clock className="w-4 h-4 text-zinc-300" />
                <span>Time Controls</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between p-2.5 rounded bg-zinc-950 border border-zinc-800">
                  <span className="text-zinc-400">Swiss & Knockout:</span>
                  <span className="text-white font-bold">10 min + 5s</span>
                </div>
                <div className="flex justify-between p-2.5 rounded bg-zinc-950 border border-zinc-800">
                  <span className="text-zinc-400">Blitz Tie-Break:</span>
                  <span className="text-white font-bold">3 min + 2s</span>
                </div>
                <div className="flex justify-between p-2.5 rounded bg-zinc-950 border border-zinc-800">
                  <span className="text-zinc-400">Armageddon:</span>
                  <span className="text-white font-bold">5m (W) vs 4m (B)</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
