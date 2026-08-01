import { useEffect, useState } from 'react';
import { sermons as fallbackSermons, type Sermon } from '@/data/sermons';

export function useSermons(): Sermon[] {
  const [sermons, setSermons] = useState<Sermon[]>(fallbackSermons);

  useEffect(() => {
    let cancelled = false;

    fetch('/api/sermons')
      .then((response) => {
        if (!response.ok) throw new Error(`Sermons API returned ${response.status}`);
        return response.json();
      })
      .then((data: { sermons: Sermon[] }) => {
        if (!cancelled && Array.isArray(data.sermons) && data.sermons.length > 0) {
          setSermons(data.sermons);
        }
      })
      .catch((err) => console.error('useSermons: falling back to static list', err));

    return () => {
      cancelled = true;
    };
  }, []);

  return sermons;
}
