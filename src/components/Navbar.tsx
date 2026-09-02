import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, FileSpreadsheet } from 'lucide-react';
import { KingIcon } from './ChessGraphics';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, onOpenAdmin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Format', href: '#overview' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Awards', href: '#awards' },
    { name: 'Rules', href: '#rules' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-white/15 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.9)]'
          : 'bg-black/80 backdrop-blur-sm border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center font-bold text-lg text-black shadow-md group-hover:scale-105 transition-transform">
              <KingIcon className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="font-display font-black text-xl sm:text-2xl tracking-wider uppercase text-white flex items-center gap-1.5">
                CHESS <span className="text-zinc-400">eSPORTS</span>
              </span>
              <span className="block text-[9px] font-mono tracking-[0.25em] text-zinc-400 uppercase -mt-1">
                COMPETE • THINK • CONQUER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-8 text-xs font-mono font-semibold uppercase tracking-widest text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors duration-150 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-admin-btn"
              onClick={onOpenAdmin}
              className="px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
              title="Organizer / Admin Roster & Excel Export"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-zinc-400" />
              <span>Admin Export</span>
            </button>

            <button
              id="nav-register-btn"
              onClick={onOpenRegister}
              className="px-5 py-2 bw-btn-primary text-xs font-mono font-bold rounded-md uppercase tracking-wider flex items-center gap-2"
            >
              <span>Register</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-admin-mini-btn"
              onClick={onOpenAdmin}
              className="p-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
              title="Admin Export"
            >
              <FileSpreadsheet className="w-4 h-4" />
            </button>
            <button
              id="mobile-register-mini-btn"
              onClick={onOpenRegister}
              className="px-3 py-1.5 rounded-md bg-white text-xs font-mono font-bold text-black shadow-sm"
            >
              Register
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-3 pb-6 space-y-2 mt-3 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-md text-sm font-mono text-zinc-300 hover:bg-zinc-900 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 space-y-2">
              <button
                id="mobile-menu-admin-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full py-2.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-200 font-mono text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>Admin / Excel Export</span>
              </button>

              <button
                id="mobile-menu-register-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full py-2.5 rounded-md bg-white text-black font-mono font-bold text-xs uppercase tracking-wider text-center shadow-lg flex items-center justify-center gap-2"
              >
                <span>Register for Tournament</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
