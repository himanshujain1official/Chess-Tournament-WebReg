import { ScheduleItem, AwardItem, RuleItem } from '../types';

export const EVENT_STATS = {
  duration: "2 Days",
  playerCount: "100 Players",
  championCount: "1 Champion",
  format: "Swiss + Single Elimination",
  prizePool: "Trophies, Titles & Cash Rewards",
  registeredCount: 82,
  maxCapacity: 100,
};

export const ABOUT_FEATURES = [
  {
    id: 'global_vibes',
    title: 'Global Vibes',
    tagline: 'International Arena',
    description: 'Experience an international eSports style chess tournament with high-energy broadcast staging and electric stage ambiance.',
    icon: 'Globe',
    badge: 'Stage 01'
  },
  {
    id: 'fun_engagement',
    title: 'Fun & Engagement',
    tagline: 'Interactive Show',
    description: 'Audience move prediction contests, speed tactical puzzles, crowd challenges, and live polls between matches.',
    icon: 'Sparkles',
    badge: 'Stage 02'
  },
  {
    id: 'one_goal',
    title: 'One Goal',
    tagline: 'Battle of Minds',
    description: 'Outplay your opponent. Calculate deeply under clock pressure and be the last one standing to lift the Grand Trophy.',
    icon: 'Trophy',
    badge: 'Stage 03'
  }
];

export const DAY1_SCHEDULE: ScheduleItem[] = [
  {
    id: 'd1-1',
    day: 1,
    time: '09:00 - 09:30',
    activity: 'Player Registration & Check-In',
    category: 'ceremony',
    description: 'Player pass verification, kit collection, and locker allocation in the main arena.',
    iconName: 'UserCheck'
  },
  {
    id: 'd1-2',
    day: 1,
    time: '09:30 - 09:45',
    activity: 'Opening Ceremony & Grand Keynote',
    category: 'ceremony',
    description: 'Chief Arbiter welcome, presentation of the Championship Trophy, and lighting of the stage.',
    iconName: 'Flame'
  },
  {
    id: 'd1-3',
    day: 1,
    time: '09:45 - 10:00',
    activity: 'Tournament Rules & Round 1 Pairings',
    category: 'ceremony',
    description: 'setup brief, Swiss system pairing disclosure on digital displays.',
    iconName: 'FileText'
  },
  {
    id: 'd1-4',
    day: 1,
    time: '10:00 - 10:35',
    activity: 'Swiss Round 1',
    category: 'match',
    description: 'All 100 players clash simultaneously across 50 digital broadcast boards.',
    iconName: 'Swords'
  },
  {
    id: 'd1-5',
    day: 1,
    time: '10:45 - 11:20',
    activity: 'Swiss Round 2',
    category: 'match',
    description: 'Performance-based pairings with top board broadcast commentary.',
    iconName: 'Swords'
  },
  {
    id: 'd1-6',
    day: 1,
    time: '11:30 - 12:05',
    activity: 'Swiss Round 3',
    category: 'match',
    description: 'High-stakes battle for early tournament leaderboard dominance.',
    iconName: 'Swords'
  },
  {
    id: 'd1-7',
    day: 1,
    time: '12:05 - 12:45',
    activity: 'Lunch Break & Player Lounge',
    category: 'break',
    description: 'Nutritional refresh for players, audience chess puzzle zone open.',
    iconName: 'Coffee'
  },
  {
    id: 'd1-8',
    day: 1,
    time: '12:45 - 01:20',
    activity: 'Swiss Round 4',
    category: 'match',
    description: 'Penultimate Swiss round; players fight for crucial qualification cut-off points.',
    iconName: 'Swords'
  },
  {
    id: 'd1-9',
    day: 1,
    time: '01:30 - 02:05',
    activity: 'Swiss Round 5 (Decider)',
    category: 'match',
    description: 'Final Swiss round deciding which 32 players punch their ticket to knockout stage.',
    iconName: 'Flame'
  },
  {
    id: 'd1-10',
    day: 1,
    time: '02:15 - 02:45',
    activity: 'Results & Top 32 Announcement',
    category: 'results',
    description: 'Official tie-break verifications (Buchholz / Sonneborn-Berger) and bracket seeding reveal.',
    iconName: 'ListOrdered'
  },
  {
    id: 'd1-11',
    day: 1,
    time: '03:00 - 05:00',
    activity: 'Round of 32 (Knockout - Best of 3)',
    category: 'match',
    description: 'Sudden death knockout begins! 32 players battle down to 16 survivors with blitz tie-breaks if needed.',
    iconName: 'Zap'
  },
  {
    id: 'd1-12',
    day: 1,
    time: '05:00 - 05:30',
    activity: 'Day 1 Closing & Day 2 Preview',
    category: 'ceremony',
    description: 'Day 1 highlights recap, player interviews, and bracket presentation for Championship Sunday.',
    iconName: 'Award'
  }
];

export const DAY2_SCHEDULE: ScheduleItem[] = [
  {
    id: 'd2-1',
    day: 2,
    time: '09:30 - 10:30',
    activity: 'Round of 16 (Best of 3)',
    category: 'match',
    description: '16 elite players battle in best-of-3 rapid games to secure Quarter-Final berths.',
    iconName: 'Swords'
  },
  {
    id: 'd2-2',
    day: 2,
    time: '10:45 - 11:45',
    activity: 'Quarter Finals (Best of 3)',
    category: 'match',
    description: '8 contenders battle down to the Final 4 with intense time pressure.',
    iconName: 'Zap'
  },
  {
    id: 'd2-3',
    day: 2,
    time: '12:00 - 01:00',
    activity: 'Lunch Break & Strategy Time',
    category: 'break',
    description: 'Player recharge, tactical review, and arena intermission shows.',
    iconName: 'Coffee'
  },
  {
    id: 'd2-4',
    day: 2,
    time: '01:00 - 02:15',
    activity: 'Semi Finals (Best of 3 / 5)',
    category: 'match',
    description: 'The Final 4 clash on the main stage under full stadium spotlights and live caster hype.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'd2-5',
    day: 2,
    time: '02:15 - 03:00',
    activity: 'Chess Puzzle / Challenges & Audience Poll',
    category: 'special',
    description: 'Interactive audience tactical showdown on big screens with instant audience prize giveaways.',
    iconName: 'Sparkles'
  },
  {
    id: 'd2-6',
    day: 2,
    time: '03:00 - 04:30',
    activity: 'Grand Final (Best of 5 Clash)',
    category: 'match',
    description: 'The ultimate showdown for the Chess eSports Crown! Best of 5 rapid series + Armageddon if tied.',
    iconName: 'Crown'
  },
  {
    id: 'd2-7',
    day: 2,
    time: '04:30 - 05:00',
    activity: 'Prize Distribution & Grand Closing Ceremony',
    category: 'ceremony',
    description: 'Crowning of the Champion, presentation of 8 prestigious awards, medals, and confetti drop!',
    iconName: 'Trophy'
  }
];

export const AWARDS_LIST: AwardItem[] = [
  {
    id: 'champion',
    title: 'CHAMPION',
    subtitle: 'Take the crown!',
    description: 'Grand Winner Trophy, Championship Ring, Cash Purse, and supreme glory as the tournament king.',
    icon: 'Crown',
    tier: 'champion',
    glowColor: 'gold',
    rewardHighlight: 'Grand Trophy + Gold Title'
  },
  {
    id: 'runner_up',
    title: 'RUNNER-UP',
    subtitle: 'The valiant contender',
    description: 'Silver Trophy, Runner-Up Medal, and honorable recognition for reaching the ultimate final match.',
    icon: 'Shield',
    tier: 'runner_up',
    glowColor: 'violet',
    rewardHighlight: 'Silver Trophy + Elite Medal'
  },
  {
    id: 'fastest_checkmate',
    title: 'FASTEST CHECKMATE',
    subtitle: 'Speed meets skill',
    description: 'Celebrates the fewest-moves checkmate recorded in official tournament match play.',
    icon: 'Timer',
    tier: 'specialty',
    glowColor: 'gold',
    rewardHighlight: 'Blitz Speed Trophy'
  },
];

export const RULES_LIST: RuleItem[] = [
  {
    id: 'fide_rules',
    text: 'All matches will follow standard rules.',
    detail: 'Touch-move rule strictly enforced, standard illegal move penalties, and official clock regulations apply to every board.',
    icon: 'BookOpen',
    critical: true
  },
  {
    id: 'sportsmanship',
    text: 'Respect your opponent and tournament officials.',
    detail: 'Maintain professional conduct at all times. Unsportsmanlike behavior, harassment, or distraction attempts lead to immediate forfeiture.',
    icon: 'Handshake',
    critical: false
  },
  {
    id: 'arbiter_final',
    text: 'Decisions of the chief arbiter will be final.',
    detail: 'Chief Arbiter and certified arbiters have supreme jurisdiction on all disputes, clock corrections, and claim verdicts.',
    icon: 'Scale',
    critical: false
  },
  {
    id: 'punctuality',
    text: 'Players must be present at least 10 minutes before their match.',
    detail: 'A default time of 5 minutes applies. Players arriving after their board clock starts will lose on forfeit.',
    icon: 'Clock',
    critical: true
  }
];

export const ESPORTS_HIGHLIGHTS = [
  {
    id: 'esports_feel',
    title: 'Real eSports Feel',
    subtitle: 'Scoreboards & Player Intros',
    description: 'Dynamic entrance music, player statistics cards, real-time evaluation bars, heart-rate monitors for top finalists, and post-game analysis.',
    icon: 'BarChart3',
    accent: 'from-fuchsia-500/20 to-pink-600/20'
  }
];

export const SAMPLE_PUZZLE = {
  fen: "r1b2rk1/pp3ppp/2n5/2b3B1/4Q3/3B1N2/P1P2PPP/q4RK1 w - - 0 1",
  title: "White to Move and Win!",
  subtitle: "Audience Puzzle Challenge - Can you find the lethal mate threat?",
  solutionDescription: "Queen sacrifice and bishop mate threat: 1. Qxh7# (Checkmate!) or Queen threats creating unstoppable checkmate on h7.",
  options: [
    { id: 'opt1', move: '1. Qxh7#', label: '1. Qxh7# (Instant Checkmate)', isCorrect: true, explanation: 'Boom! The Queen is protected by the Bishop on d3, delivering unstoppable checkmate!' },
    { id: 'opt2', move: '1. Rxa1', label: '1. Rxa1 (Capture Queen)', isCorrect: false, explanation: 'Capturing the queen is okay, but you missed the immediate 1-move checkmate on h7!' },
    { id: 'opt3', move: '1. Bc4', label: '1. Bc4 (Develop Bishop)', isCorrect: false, explanation: 'Too slow! White can win the game immediately with 1. Qxh7#.' },
    { id: 'opt4', move: '1. Bf6', label: '1. Bf6 (Attack Queen)', isCorrect: false, explanation: 'Interesting deflection, but 1. Qxh7# finishes the game immediately!' },
  ]
};
