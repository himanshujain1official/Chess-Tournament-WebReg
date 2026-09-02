export interface ScheduleItem {
  id: string;
  time: string;
  activity: string;
  category: 'ceremony' | 'match' | 'break' | 'results' | 'special';
  description?: string;
  day: 1 | 2;
  iconName?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  tier: 'champion' | 'runner_up' | 'specialty';
  glowColor: 'gold' | 'violet' | 'cyan' | 'emerald';
  rewardHighlight?: string;
}

export interface TournamentStage {
  id: string;
  day: number;
  title: string;
  subtitle: string;
  playerCount: string;
  formatDescription: string;
  icon: string;
}

export interface RuleItem {
  id: string;
  text: string;
  detail: string;
  icon: string;
  critical?: boolean;
}

export interface RegistrationFormData {
  fullName: string;
  dob: string;
  email: string;
  phone: string;
  collegeOrOrg: string;
  agreeToRules: boolean;
}

export interface RegisteredPlayerPass {
  passId: string;
  playerData: RegistrationFormData;
  registeredAt: string;
  assignedSeed: number;
  qrCodeSeed: string;
}
