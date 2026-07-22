export interface Sermon {
  title: string;
  videoId: string;
}

export const sermons: Sermon[] = [
  { title: '28/06/2026 Sunday Service - Boss, Bullies & Authority', videoId: 'xVp3QNpQPIg' },
  { title: 'The Keys of the Kingdom Pt 2 | How Spiritual gifts Enable Binding & Loosing | 21/6/26 Sunday Service', videoId: '5iPwdbz0upg' },
  { title: 'The Keys of the Kingdom Pt 1 | How Spiritual gifts Enable Binding & Loosing | 14/6/26 Sunday Service', videoId: 'djMRYoCYVv4' },
  { title: 'One Thing I Desire | June 2026 Promise Message - 7/06/2026 Sunday Service', videoId: 'HsEUtgJMcis' },
  { title: 'From Presence to Power | Understanding Presence, Holy Spirit & Anointing | 31/05/2026 Sunday Service', videoId: 'TXi9mjK6a1w' },
  { title: '24/05/2026 Sunday Service - The Spirit Of Truth | Guides, Speaks & Empowers your Life', videoId: 'aDVwJ92Ahmg' },
  { title: '17/05/2026 Sunday Service | Before Breakthrough - Season Of Isolation', videoId: 'CMG359_EWVM' },
  { title: '15/05/2026 Night of Faith - Prayer and Perseverance', videoId: 'mU0Jm0MSQ9A' },
  { title: '10/05/2026 Sunday Service - Sacrificial Love', videoId: 'oiMtU_0-VHs' },
  { title: '03/05/2026 Sunday Service | From Brokenness to Rejoicing | May 2026 Promise Message', videoId: 'QoyFC0Jzdow' },
];

export function extractServiceDate(title: string) {
  const match = title.match(/(\d{1,2})\/(\d{1,2})\/(\d{2,4})/);
  if (!match) return null;
  const [, day, month, yearRaw] = match;
  const year = yearRaw.length === 2 ? `20${yearRaw}` : yearRaw;
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  return isNaN(date.getTime()) ? null : date;
}
