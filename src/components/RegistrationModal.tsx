import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone, 
  Building, 
  Calendar,
  Copy, 
  Check, 
  ArrowRight
} from 'lucide-react';
import { RegistrationFormData, RegisteredPlayerPass } from '../types';
import { KingIcon } from './ChessGraphics';
import { saveRegistration, dispatchToWebhook } from '../utils/registrationStorage';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegistrationSuccess?: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, onRegistrationSuccess }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    dob: '',
    email: '',
    phone: '',
    collegeOrOrg: '',
    agreeToRules: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedPass, setGeneratedPass] = useState<RegisteredPlayerPass | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const pass: RegisteredPlayerPass = {
        passId: `ESP-2026-CH-${Math.floor(1000 + Math.random() * 9000)}`,
        playerData: { ...formData },
        registeredAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        assignedSeed: Math.floor(1 + Math.random() * 100),
        qrCodeSeed: `https://chessesports.event/pass/${Date.now()}`
      };

      // Persist to local organizer storage and optional webhook
      saveRegistration(pass);
      dispatchToWebhook(pass);

      setGeneratedPass(pass);
      setIsSubmitting(false);
      onRegistrationSuccess?.();
    }, 400);
  };

  const handleCopyPassId = () => {
    if (generatedPass) {
      navigator.clipboard?.writeText(generatedPass.passId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  const handleReset = () => {
    setGeneratedPass(null);
    setFormData({
      fullName: '',
      dob: '',
      email: '',
      phone: '',
      collegeOrOrg: '',
      agreeToRules: true
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          className="relative w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-xl p-6 sm:p-8 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto font-mono text-zinc-300"
        >
          {/* Close button */}
          <button
            id="close-registration-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {!generatedPass ? (
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                  <KingIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest block">
                    Tournament Registration
                  </span>
                  <h3 className="text-xl font-display font-black text-white uppercase tracking-wide">
                    Player Entry Form
                  </h3>
                </div>
              </div>

              {/* Registration Form */}
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                {/* Full Name & DOB */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase font-semibold text-zinc-400 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Player Name"
                        className="w-full pl-9 pr-3 py-2 rounded bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-semibold text-zinc-400 mb-1.5">
                      Date of Birth (DOB) *
                    </label>
                    <div className="relative">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="date"
                        required
                        value={formData.dob}
                        max="2020-01-01"
                        min="1940-01-01"
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 rounded bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-zinc-500 [color-scheme:dark]"
                      />
                    </div>
                  </div>
                </div>

                {/* Email Address & Contact Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase font-semibold text-zinc-400 mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="player@domain.com"
                        className="w-full pl-9 pr-3 py-2 rounded bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-semibold text-zinc-400 mb-1.5">
                      Contact Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 706 781 4389"
                        className="w-full pl-9 pr-3 py-2 rounded bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
                      />
                    </div>
                  </div>
                </div>

                {/* College / Organization */}
                <div>
                  <label className="block text-[11px] uppercase font-semibold text-zinc-400 mb-1.5">
                    College / Institution / Organization *
                  </label>
                  <div className="relative">
                    <Building className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={formData.collegeOrOrg}
                      onChange={(e) => setFormData({ ...formData, collegeOrOrg: e.target.value })}
                      placeholder="University / Institute / Club"
                      className="w-full pl-9 pr-3 py-2 rounded bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
                    />
                  </div>
                </div>

                {/* Agree to Rules Checkbox */}
                <div className="p-3 rounded bg-zinc-900 border border-zinc-800 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agree-rules"
                    required
                    checked={formData.agreeToRules}
                    onChange={(e) => setFormData({ ...formData, agreeToRules: e.target.checked })}
                    className="mt-0.5 rounded border-zinc-700 text-white focus:ring-0"
                  />
                  <label htmlFor="agree-rules" className="text-[11px] text-zinc-400 leading-relaxed cursor-pointer">
                    I confirm adherence to the tournament rules, fair-play guidelines, and arbiter decisions.
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded bw-btn-primary font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all mt-2"
                >
                  {isSubmitting ? (
                    <span>Registering...</span>
                  ) : (
                    <>
                      <span>Complete Registration</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* Generated Digital Pass */
            <div className="text-center font-mono">
              
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-display font-black text-white uppercase tracking-wide mb-1">
                Registration Confirmed
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Your entry has been recorded for the tournament.
              </p>

              {/* Digital Pass Ticket Card */}
              <div className="rounded-lg p-5 bg-zinc-900 border border-zinc-800 text-left mb-6 text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-3">
                  <div className="flex items-center gap-2">
                    <KingIcon className="w-4 h-4 text-white" />
                    <span className="font-bold text-white uppercase tracking-wider">
                      PLAYER PASS
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-white text-black text-[10px] font-bold uppercase">
                    CONFIRMED
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase">Competitor</span>
                    <span className="font-bold text-white">{generatedPass.playerData.fullName}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase">Date of Birth</span>
                    <span className="font-bold text-zinc-300">{generatedPass.playerData.dob}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase">Pass ID</span>
                    <span className="font-bold text-white">{generatedPass.passId}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase">Institution</span>
                    <span className="font-bold text-zinc-300">{generatedPass.playerData.collegeOrOrg}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[10px] text-zinc-500">
                  <span>Day 1 Check-in: 09:00 AM</span>
                  <span className="text-zinc-300">Valid ID Required</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={handleCopyPassId}
                  className="flex-1 py-2.5 rounded bw-btn-secondary text-xs flex items-center justify-center gap-1.5"
                >
                  {copiedId ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId ? 'Copied' : 'Copy Pass ID'}</span>
                </button>

                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded bw-btn-primary text-xs font-bold uppercase tracking-wider"
                >
                  Done
                </button>
              </div>

            </div>
          )}

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
