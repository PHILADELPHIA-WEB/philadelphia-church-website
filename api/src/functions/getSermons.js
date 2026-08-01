const { app } = require('@azure/functions');

const CHANNEL_ID = 'UCGBlzLVOerd5-0Gyu1Vx7Ew';
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const MAX_SERMONS = 10;

function unescapeXml(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function parseSermons(xml) {
  const entries = xml.split('<entry>').slice(1);
  return entries
    .map((entry) => {
      const videoId = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
      const title = entry.match(/<title>([^<]*)<\/title>/)?.[1];
      if (!videoId || !title) return null;
      return { videoId, title: unescapeXml(title) };
    })
    .filter(Boolean)
    .slice(0, MAX_SERMONS);
}

app.http('getSermons', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'sermons',
  handler: async (_request, context) => {
    try {
      const response = await fetch(FEED_URL);
      if (!response.ok) throw new Error(`YouTube feed returned ${response.status}`);

      const xml = await response.text();
      const sermons = parseSermons(xml);
      if (sermons.length === 0) throw new Error('No sermons found in feed');

      return {
        status: 200,
        headers: { 'Cache-Control': 'public, max-age=3600' },
        jsonBody: { sermons },
      };
    } catch (err) {
      context.error('Failed to fetch sermons feed:', err);
      return { status: 502, jsonBody: { error: 'Failed to fetch latest sermons' } };
    }
  },
});
