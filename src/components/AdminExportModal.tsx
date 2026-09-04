import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Download, 
  FileSpreadsheet, 
  Search, 
  Trash2, 
  RotateCcw, 
  Check, 
  Copy, 
  Link as LinkIcon, 
  Lock,
  Unlock,
  ShieldAlert,
  Mail,
  ArrowRight,
  LogOut,
  AlertCircle
} from 'lucide-react';
import { RegisteredPlayerPass } from '../types';
import { 
  getStoredRegistrations, 
  exportToCSV, 
  clearRegistrations, 
  getWebhookUrl, 
  setWebhookUrl 
} from '../utils/registrationStorage';
import { KingIcon } from './ChessGraphics';

// Authorized admin emails explicitly designated by organizer
const AUTHORIZED_ADMIN_EMAILS = [
  'himanshujain1official@gmail.com',
  'kakashif879@gmail.com'
];

const ADMIN_AUTH_STORAGE_KEY = 'chess_esports_authorized_admin_email';

interface AdminExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminExportModal: React.FC<AdminExportModalProps> = ({ isOpen, onClose }) => {
  const [registrations, setRegistrations] = useState<RegisteredPlayerPass[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [authenticatedEmail, setAuthenticatedEmail] = useState<string | null>(null);
  const [inputEmail, setInputEmail] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [webhookInput, setWebhookInput] = useState('');
  const [webhookSaved, setWebhookSaved] = useState(false);
  const [copiedRoster, setCopiedRoster] = useState(false);
  const [showWebhookGuide, setShowWebhookGuide] = useState(false);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        // Yahan apna Google Apps Script ka URL dalein
        const scriptURL = 'https://script.google.com/macros/s/AKfycbymtgovijxiND891z53Ykfv_5vRcqTycPMJQMIU_chw0_lnmLzcIXMUyFPa0YghxXPkLw/exec'; 
        const response = await fetch(scriptURL);
        const data = await response.json();
        
        // Data ko aapke React table ke format me convert karna
        const formattedData = data.map(item => ({
          passId: item.passId,
          playerData: {
            fullName: item.name,
            dob: item.dob,
            collegeOrOrg: item.college,
            email: item.email,
            phone: item.phone
          },
          registeredAt: new Date(item.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        }));
        
        // Data ko state me save karna (Apne state setter function ka naam check kar lein, jaise setRegistrations)
        setRegistrations(formattedData); 

      } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
      }
    };

    fetchRegistrations();
  }, []);

  useEffect(() => {
    if (isOpen) {
      setRegistrations(getStoredRegistrations());
      setWebhookInput(getWebhookUrl());

      // Check previously authenticated session
      const savedAuth = localStorage.getItem(ADMIN_AUTH_STORAGE_KEY);
      if (savedAuth && AUTHORIZED_ADMIN_EMAILS.includes(savedAuth.toLowerCase().trim())) {
        setAuthenticatedEmail(savedAuth.toLowerCase().trim());
      } else {
        setAuthenticatedEmail(null);
      }
      setAuthError(null);
      setInputEmail('');
    }
  }, [isOpen]);

  const handleVerifyEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setIsVerifying(true);

    const formatted = inputEmail.trim().toLowerCase();

    setTimeout(() => {
      if (AUTHORIZED_ADMIN_EMAILS.includes(formatted)) {
        setAuthenticatedEmail(formatted);
        localStorage.setItem(ADMIN_AUTH_STORAGE_KEY, formatted);
        setAuthError(null);
      } else {
        setAuthError('Access Denied: Email address is not in the authorized organizer whitelist.');
      }
      setIsVerifying(false);
    }, 300);
  };

  const handleSignOut = () => {
    localStorage.removeItem(ADMIN_AUTH_STORAGE_KEY);
    setAuthenticatedEmail(null);
    setInputEmail('');
    setAuthError(null);
  };

  const handleExport = () => {
    exportToCSV(registrations);
  };

  const handleSaveWebhook = (e: React.FormEvent) => {
    e.preventDefault();
    setWebhookUrl(webhookInput);
    setWebhookSaved(true);
    setTimeout(() => setWebhookSaved(false), 2500);
  };

  const handleClear = () => {
    if (confirm('Are you sure you want to clear all registrations?')) {
      clearRegistrations();
      setRegistrations([]);
    }
  };

  const handleCopyJSON = () => {
    navigator.clipboard?.writeText(JSON.stringify(registrations, null, 2));
    setCopiedRoster(true);
    setTimeout(() => setCopiedRoster(false), 2000);
  };

  const filteredRegistrations = registrations.filter(r => 
    r.playerData.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.playerData.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.playerData.collegeOrOrg.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.passId.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          className="fixed inset-0 bg-black/90 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-xl p-6 sm:p-8 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto font-mono text-zinc-300"
        >
          {/* Close button */}
          <button
            id="close-admin-export-modal"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* VIEW A: Locked State - Email Verification */}
          {!authenticatedEmail ? (
            <div className="py-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-4">
                <Lock className="w-6 h-6" />
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">
                    Restricted Area
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[9px] text-zinc-400 font-bold uppercase">
                    Admin Authentication
                  </span>
                </div>
                <h3 className="text-2xl font-display font-black text-white uppercase tracking-wide">
                  Organizer Access Only
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  To protect player personal data and export the tournament roster to Excel/CSV, please enter an authorized organizer email.
                </p>
              </div>

              <form onSubmit={handleVerifyEmail} className="space-y-4 max-w-md">
                <div>
                  <label className="block text-[11px] uppercase font-semibold text-zinc-400 mb-1.5">
                    Authorized Organizer Email
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      autoFocus
                      value={inputEmail}
                      onChange={(e) => {
                        setInputEmail(e.target.value);
                        if (authError) setAuthError(null);
                      }}
                      placeholder="e.g. himanshujain@gmail.com"
                      className="w-full pl-9 pr-3 py-2.5 rounded bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
                    />
                  </div>
                </div>

                {authError && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded bg-zinc-900 border border-zinc-700 flex items-start gap-2.5 text-xs text-zinc-200"
                  >
                    <AlertCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <div className="text-[11px] leading-relaxed">
                      {authError}
                    </div>
                  </motion.div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isVerifying || !inputEmail.trim()}
                    className="w-full py-2.5 rounded bw-btn-primary font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isVerifying ? (
                      <span>Verifying Credentials...</span>
                    ) : (
                      <>
                        <Unlock className="w-3.5 h-3.5" />
                        <span>Authenticate & Access Roster</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-8 pt-4 border-t border-zinc-800/80 text-[10px] text-zinc-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>All player data is protected under strict privacy and compliance.</span>
                <span className="text-zinc-400">Strict Privacy Enforcement</span>
              </div>
            </div>
          ) : (
            /* VIEW B: Authenticated State - Full Roster & Excel Export */
            <div>
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">
                        Organizer Portal
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-white text-black text-[9px] font-bold uppercase">
                        AUTHENTICATED
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-black text-white uppercase tracking-wide">
                      Player Roster & Excel Export
                    </h3>
                  </div>
                </div>

                {/* Logged in User & Sign out */}
                <div className="flex items-center gap-3">
                  <div className="text-right hidden sm:block">
                    <div className="text-[9px] text-zinc-500 uppercase">Signed in as</div>
                    <div className="text-xs text-zinc-300 font-bold">{authenticatedEmail}</div>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="px-2.5 py-1.5 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white text-xs flex items-center gap-1.5 transition-colors"
                    title="Sign out of organizer mode"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Lock</span>
                  </button>
                </div>
              </div>

              {/* Top Actions: Export CSV Button */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-6">
                <button
                  id="download-excel-csv-btn"
                  onClick={handleExport}
                  disabled={registrations.length === 0}
                  className="sm:col-span-8 py-3 px-4 rounded bw-btn-primary font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Excel / CSV (.csv)</span>
                </button>

                <button
                  onClick={handleCopyJSON}
                  disabled={registrations.length === 0}
                  className="sm:col-span-4 py-3 px-3 rounded bw-btn-secondary text-xs flex items-center justify-center gap-1.5"
                >
                  {copiedRoster ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedRoster ? 'JSON Copied' : 'Copy JSON'}</span>
                </button>
              </div>

              {/* Optional Live Google Sheets Webhook Sync */}
              <div className="mb-6 p-4 rounded-lg bg-zinc-900/90 border border-zinc-800">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-white uppercase">
                    <LinkIcon className="w-3.5 h-3.5" />
                    <span>Live Google Sheet / Excel Webhook Sync (Optional)</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowWebhookGuide(!showWebhookGuide)}
                    className="text-[10px] text-zinc-400 hover:text-white underline"
                  >
                    {showWebhookGuide ? 'Hide Setup Guide' : 'How to connect Sheet?'}
                  </button>
                </div>

                <p className="text-[11px] text-zinc-400 mb-3 leading-relaxed">
                  Paste your Google Apps Script Web App URL or Make/Zapier Webhook. Any new tournament registration will automatically append a row to your online spreadsheet.
                </p>

                <form onSubmit={handleSaveWebhook} className="flex gap-2">
                  <input
                    type="url"
                    value={webhookInput}
                    onChange={(e) => setWebhookInput(e.target.value)}
                    placeholder="https://script.google.com/macros/s/.../exec"
                    className="flex-1 px-3 py-2 rounded bg-black border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded bw-btn-primary text-xs font-bold uppercase shrink-0 flex items-center gap-1.5"
                  >
                    {webhookSaved ? <Check className="w-3.5 h-3.5" /> : null}
                    <span>{webhookSaved ? 'Saved' : 'Save URL'}</span>
                  </button>
                </form>

                {/* Step-by-step setup instructions drawer */}
                {showWebhookGuide && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-3 border-t border-zinc-800 text-[11px] text-zinc-400 space-y-2"
                  >
                    <div className="font-bold text-zinc-300">Quick 1-Minute Live Google Sheets Setup:</div>
                    <ol className="list-decimal list-inside space-y-1.5 text-zinc-400">
                      <li>Open your Google Sheet, add headers in Row 1: <strong className="text-zinc-300">Timestamp, Pass ID, Full Name, DOB, Email, Phone, College/Org</strong>.</li>
                      <li>Click <strong>Extensions &gt; Apps Script</strong> and paste:
                        <div className="mt-1 p-2 rounded bg-black border border-zinc-800 text-[10px] text-zinc-300 select-all font-mono">
                          {`function doPost(e) {
  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var d = JSON.parse(e.postData.contents);
  s.appendRow([new Date(), d.passId, d.fullName, d.dob, d.email, d.phone, d.collegeOrOrg]);
  return ContentService.createTextOutput("OK");
}`}
                        </div>
                      </li>
                      <li>Click <strong>Deploy &gt; New deployment &gt; Web app</strong>. Set <em>Execute as: Me</em> and <em>Who has access: Anyone</em>.</li>
                      <li>Click <strong>Deploy</strong>, copy the generated Web App URL, paste it in the box above, and click <strong>Save URL</strong>.</li>
                    </ol>
                  </motion.div>
                )}
              </div>

              {/* Search and Roster Table */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="relative flex-1">
                    <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by name, DOB, email, college, or Pass ID..."
                      className="w-full pl-9 pr-3 py-2 rounded bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="px-3 py-2 rounded bg-zinc-900 border border-zinc-800 text-xs whitespace-nowrap">
                      <span className="text-zinc-500">Total: </span>
                      <span className="text-white font-bold">{registrations.length} / 100</span>
                    </div>

                    {registrations.length > 0 && (
                      <button
                        onClick={handleClear}
                        className="px-3 py-2 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-200 text-xs flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Clear Roster</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Table Container */}
                <div className="border border-zinc-800 rounded-lg overflow-x-auto bg-black">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-zinc-900 border-b border-zinc-800 text-zinc-400 text-[10px] uppercase font-bold tracking-wider">
                        <th className="p-3">Pass ID</th>
                        <th className="p-3">Full Name</th>
                        <th className="p-3">DOB</th>
                        <th className="p-3">College / Org</th>
                        <th className="p-3">Contact</th>
                        <th className="p-3">Registered</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/60">
                      {filteredRegistrations.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="p-8 text-center text-zinc-500 text-xs">
                            No registrations found matching your query.
                          </td>
                        </tr>
                      ) : (
                        filteredRegistrations.map((player) => (
                          <tr key={player.passId} className="hover:bg-zinc-900/50 transition-colors">
                            <td className="p-3 font-bold text-white whitespace-nowrap">
                              {player.passId}
                            </td>
                            <td className="p-3 text-zinc-200 font-semibold whitespace-nowrap">
                              {player.playerData.fullName}
                            </td>
                            <td className="p-3 text-zinc-300 whitespace-nowrap">
                              {player.playerData.dob || '—'}
                            </td>
                            <td className="p-3 text-zinc-400 whitespace-nowrap">
                              {player.playerData.collegeOrOrg}
                            </td>
                            <td className="p-3 text-zinc-400 text-[11px] whitespace-nowrap">
                              <div>{player.playerData.email}</div>
                              <div className="text-zinc-500 text-[10px]">{player.playerData.phone}</div>
                            </td>
                            <td className="p-3 text-zinc-500 text-[11px] whitespace-nowrap">
                              {player.registeredAt}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Footer note */}
              <div className="mt-6 pt-4 border-t border-zinc-800 text-[10px] text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-2">
                <span>Official tournament roster data is stored with UTF-8 Excel export compatibility.</span>
                <span className="text-zinc-400 font-bold">Authorized Session: {authenticatedEmail}</span>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
