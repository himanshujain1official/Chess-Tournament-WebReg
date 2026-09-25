import React, { useState } from 'react';

export const TournamentOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flowchart' | 'format_rules'>('flowchart');
  const [selectedStage, setSelectedStage] = useState<string>('grand_final');

  const stages = [  ];

  return (
    <section id="overview" className="py-2 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
      </div>
    </section>
  );
};
