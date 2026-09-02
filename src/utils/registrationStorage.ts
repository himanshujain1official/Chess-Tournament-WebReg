import { RegisteredPlayerPass } from '../types';

const STORAGE_KEY = 'chess_esports_registered_players_v1';
const WEBHOOK_KEY = 'chess_esports_webhook_url_v1';

// Clean initial tournament registrations (no mock data or fake names)
const DEFAULT_REGISTRATIONS: RegisteredPlayerPass[] = [];

export function getStoredRegistrations(): RegisteredPlayerPass[] {
  if (typeof window === 'undefined') return DEFAULT_REGISTRATIONS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_REGISTRATIONS));
      return DEFAULT_REGISTRATIONS;
    }
    const parsed: RegisteredPlayerPass[] = JSON.parse(raw);
    // Filter out any legacy sample names from earlier demo runs
    const cleanList = parsed.filter(p => 
      !['ESP-2026-CH-1042', 'ESP-2026-CH-1088', 'ESP-2026-CH-2015', 'ESP-2026-CH-3041'].includes(p.passId) &&
      !['aarav sharma', 'rhea patel', 'marcus vance', 'elena rostova'].includes((p.playerData?.fullName || '').toLowerCase().trim())
    );
    if (cleanList.length !== parsed.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanList));
    }
    return cleanList;
  } catch {
    return DEFAULT_REGISTRATIONS;
  }
}

export function saveRegistration(pass: RegisteredPlayerPass): void {
  if (typeof window === 'undefined') return;
  try {
    const list = getStoredRegistrations();
    const updated = [pass, ...list.filter(p => p.passId !== pass.passId)];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to store registration locally:', err);
  }
}

export function clearRegistrations(): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
}

export function getWebhookUrl(): string {
  if (typeof window === 'undefined') return '';
  const stored = localStorage.getItem(WEBHOOK_KEY);
  if (stored && stored.trim()) return stored.trim();
  return (import.meta.env.VITE_WEBHOOK_URL as string) || '';
}

export function setWebhookUrl(url: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(WEBHOOK_KEY, url.trim());
}

/**
 * Dispatches registration data to an optional Google Apps Script / Make / Excel Online webhook
 */
export async function dispatchToWebhook(pass: RegisteredPlayerPass): Promise<boolean> {
  const url = getWebhookUrl();
  if (!url) return false;

  try {
    const payload = {
      timestamp: new Date().toISOString(),
      passId: pass.passId,
      fullName: pass.playerData.fullName,
      dob: pass.playerData.dob,
      email: pass.playerData.email,
      phone: pass.playerData.phone,
      collegeOrOrg: pass.playerData.collegeOrOrg,
      registeredAt: pass.registeredAt,
      seed: pass.assignedSeed
    };

    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(payload),
      mode: 'no-cors' // Bypasses browser CORS preflight for Google Apps Script Web Apps
    });
    return true;
  } catch (err) {
    console.warn('Webhook dispatch failed or was offline:', err);
    return false;
  }
}

/**
 * Generates an Excel-compatible CSV file and triggers download directly in browser
 */
export function exportToCSV(registrations: RegisteredPlayerPass[]): void {
  const headers = ['Pass ID', 'Full Name', 'Date of Birth (DOB)', 'Email Address', 'Contact Phone', 'College / Institute', 'Registration Date', 'Seed Number'];
  
  const escapeCell = (val: string | number | undefined) => {
    if (val === undefined || val === null) return '""';
    const text = String(val).replace(/"/g, '""');
    return `"${text}"`;
  };

  const rows = registrations.map(r => [
    escapeCell(r.passId),
    escapeCell(r.playerData.fullName),
    escapeCell(r.playerData.dob),
    escapeCell(r.playerData.email),
    escapeCell(r.playerData.phone),
    escapeCell(r.playerData.collegeOrOrg),
    escapeCell(r.registeredAt),
    escapeCell(r.assignedSeed)
  ].join(','));

  // Prepend UTF-8 BOM so Microsoft Excel correctly parses UTF-8 characters
  const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  const dateStr = new Date().toISOString().slice(0, 10);
  link.setAttribute('download', `chess_tournament_player_roster_${dateStr}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
