import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TournamentOverview } from './components/TournamentOverview';
import { InteractiveSchedule } from './components/InteractiveSchedule';
import { AwardsGallery } from './components/AwardsGallery';
import { ESportsArenaSection } from './components/ESportsArenaSection';
import { InteractivePuzzle } from './components/InteractivePuzzle';
import { RulesSection } from './components/RulesSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { AdminExportModal } from './components/AdminExportModal';

export default function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  const handleOpenRegister = () => {
    setIsRegisterModalOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterModalOpen(false);
  };

  const handleOpenAdmin = () => {
    setIsAdminModalOpen(true);
  };

  const handleCloseAdmin = () => {
    setIsAdminModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-white selection:text-black relative overflow-x-hidden">
      {/* Fixed Navigation Header */}
      <Navbar 
        onOpenRegister={handleOpenRegister} 
        onOpenAdmin={handleOpenAdmin}
      />

      {/* Main Sections */}
      <main id="main-content" className="relative z-10">
        {/* Section 01: Hero */}
        <Hero onOpenRegister={handleOpenRegister} />

        {/* Section 02: About The Event & 4 Core Pillars */}
        <AboutSection onOpenRegister={handleOpenRegister} />

        {/* Section 03 & 06: Tournament Overview Progression & Format Rules */}
        <TournamentOverview />

        {/* Section 04 & 05: Interactive Day 1 & Day 2 Schedule */}
        <InteractiveSchedule />

        {/* Section 09: Awards & Recognition Gallery */}
        <AwardsGallery />

        {/* Section 08: eSports Arena Broadcast & Live Experience */}
        <ESportsArenaSection />

        {/* Interactive Audience Tactical Challenge */}
        <InteractivePuzzle />

        {/* Section 07: Rules at a Glance & Arbiters */}
        <RulesSection />
      </main>

      {/* Section 10: Slogan Finale & Footer */}
      <Footer 
        onOpenRegister={handleOpenRegister} 
        onOpenAdmin={handleOpenAdmin}
      />

      {/* Interactive Registration Modal & Digital Player Pass */}
      <RegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={handleCloseRegister}
      />

      {/* Organizer / Admin Player Roster & CSV/Excel Export Modal */}
      <AdminExportModal
        isOpen={isAdminModalOpen}
        onClose={handleCloseAdmin}
      />
    </div>
  );
}
