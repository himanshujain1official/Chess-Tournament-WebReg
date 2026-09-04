import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  Search, 
  Check, 
  Trophy,
  Activity
} from 'lucide-react';
import { DAY1_SCHEDULE, DAY2_SCHEDULE } from '../data/tournamentData';
import { ScheduleItem } from '../types';

export const InteractiveSchedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [savedReminders, setSavedReminders] = useState<Record<string, boolean>>({});

  const scheduleList = activeDay === 1 ? DAY1_SCHEDULE : DAY2_SCHEDULE;

  const filteredSchedule = scheduleList.filter((item: ScheduleItem) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.activity.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.time.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleReminder = (id: string) => {
    setSavedReminders(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="schedule" className="py-8 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header comment out
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 pb-4 border-b border-zinc-800">
          <div>
            <div className="text-zinc-400 text-xs font-mono uppercase tracking-widest mb-1">
              Event Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-wide uppercase">
              TOURNAMENT <span className="text-zinc-400 font-light">SCHEDULE</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">Interactive Timeline</span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono font-bold text-xs">
              
            </span>
          </div>
        </div>

        {/* Top Control Bar: Day Tabs, Search & Filters 
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-8">
          
          {/* Main Day 1 vs Day 2 Switcher 
          <div className="flex items-center p-1 rounded-lg bg-zinc-900 border border-zinc-800 w-full sm:w-auto">
            <button
              id="schedule-day1-tab"
              onClick={() => {
                setActiveDay(1);
                setSelectedCategory('all');
              }}
              className={`flex-1 sm:flex-initial px-6 py-2.5 rounded font-mono font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 ${
                activeDay === 1
                  ? 'bg-white text-black shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>DAY 1</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${activeDay === 1 ? 'bg-zinc-200 text-black' : 'bg-black text-zinc-400'}`}>
                Swiss & R32
              </span>
            </button>

            <button
              id="schedule-day2-tab"
              onClick={() => {
                setActiveDay(2);
                setSelectedCategory('all');
              }}
              className={`flex-1 sm:flex-initial px-6 py-2.5 rounded font-mono font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 ${
                activeDay === 2
                  ? 'bg-white text-black shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>DAY 2</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${activeDay === 2 ? 'bg-zinc-200 text-black' : 'bg-black text-zinc-400'}`}>
                Knockouts & Finals
              </span>
            </button>
          </div>

          {/* Search & Category Filter 
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input 
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="schedule-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sessions (e.g., Swiss, Final)..."
                className="w-full sm:w-64 pl-9 pr-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
              />
            </div>

            {/* Category Dropdown/Pills 
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {['all', 'match', 'ceremony', 'break', 'special'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded text-xs font-mono capitalize tracking-wider whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-white text-black font-bold'
                      : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:bg-zinc-800'
                  }`}
                >
                  {cat === 'all' ? 'All Activities' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Day Summary Indicator 
        <div className="mb-6 p-4 rounded-lg bw-panel-deep flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="uppercase font-semibold">
              {activeDay === 1 ? 'Day 1: Swiss 5-Round Battle & Round of 32 Qualification' : 'Day 2: Knockouts, Quarter/Semi Finals, and Grand Championship'}
            </span>
          </div>
          <span className="text-zinc-400">
            {filteredSchedule.length} session{filteredSchedule.length !== 1 ? 's' : ''} shown
          </span>
        </div>

        {/* Timeline Grid 
        <AnimatePresence mode="wait">
          <motion.div
            key={`day-${activeDay}-${selectedCategory}-${searchQuery}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-2.5"
          >
            {filteredSchedule.length === 0 ? (
              <div className="text-center py-16 rounded-xl bw-panel-deep">
                <Calendar className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
                <p className="text-zinc-400 font-mono text-xs">No sessions matching this criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-3 px-4 py-2 rounded bg-white text-black font-mono text-xs font-bold"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredSchedule.map((item, index) => {
                const isSaved = savedReminders[item.id];

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15, delay: index * 0.015 }}
                    className="p-4 rounded-lg bw-card bw-card-hover flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                  >
                    {/* Left: Time & Badge 
                    <div className="flex items-center gap-3 min-w-[200px]">
                      <div className="w-9 h-9 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white shrink-0 font-mono text-xs">
                        <Clock className="w-4 h-4 text-zinc-400" />
                      </div>

                      <div>
                        <div className="font-mono text-white font-bold text-sm">
                          {item.time}
                        </div>
                        <span className="inline-block mt-0.5 px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-zinc-900 border border-zinc-800 text-zinc-400 font-semibold">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Center: Activity Name & Description 
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-white uppercase tracking-wider font-mono">
                        {item.activity}
                      </h4>
                      {item.description && (
                        <p className="text-xs text-zinc-400 mt-0.5 font-mono leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Right: Quick Action 
                    <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                      <button
                        onClick={() => toggleReminder(item.id)}
                        className={`px-3 py-1.5 rounded text-xs font-mono font-semibold transition-colors flex items-center gap-1.5 ${
                          isSaved
                            ? 'bg-white text-black font-bold'
                            : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                        }`}
                      >
                      </button>
                    </div>
                  </motion.div>
                );
              })
            )}
          </motion.div>
        </AnimatePresence>
        */}
      </div>
    </section>
  );
};
