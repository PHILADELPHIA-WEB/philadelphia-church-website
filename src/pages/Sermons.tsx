import Hero from '@components/Hero/Hero';
import { Card } from '@components/Common/Common';
import { sermons, extractServiceDate } from '@/data/sermons';

export default function Sermons() {
  return (
    <div>
      <Hero title="Sermons & Messages" subtitle="Watch and listen to our latest sermons online" />

      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Latest Messages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.map((sermon) => {
              const serviceDate = extractServiceDate(sermon.title);
              const videoUrl = `https://www.youtube.com/watch?v=${sermon.videoId}`;
              return (
                <div key={sermon.videoId} className="card overflow-hidden flex flex-col">
                  <a
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block aspect-video rounded-lg overflow-hidden mb-4 bg-gray-200"
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${sermon.videoId}/hqdefault.jpg`}
                      alt={sermon.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </a>
                  <div className="flex flex-col flex-1">
                    <h3 className="text-lg font-bold mb-2 text-secondary-700 line-clamp-2">{sermon.title}</h3>
                    {serviceDate && (
                      <p className="text-sm text-gray-500 mb-4">
                        {serviceDate.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                    )}
                    <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-auto text-center">
                      Watch Sermon
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.youtube.com/@PhiladelphiaChurch-AU/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 font-semibold hover:text-primary-700"
            >
              View all sermons on YouTube →
            </a>
          </div>
        </div>
      </section>

      <section className="section-container bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Bible Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Daily Devotional" description="Start your day with Scripture and reflection." />
            <Card title="Sermon Transcripts" description="Read the full text of any sermon." />
            <Card title="Study Guides" description="Deep dive into Scripture with our study guides." />
          </div>
        </div>
      </section>
    </div>
  );
}
