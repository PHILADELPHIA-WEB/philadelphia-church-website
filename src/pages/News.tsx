import Hero from '@components/Hero/Hero';

export default function News() {
  const newsItems = [
    {
      title: 'New Small Groups Launching',
      date: '2024-01-25',
      content: 'We\'re excited to announce new small group options for Bible study, prayer, and fellowship.',
      image: '/images/news-1.jpg',
    },
    {
      title: 'Community Outreach Success',
      date: '2024-01-20',
      content: 'Our recent community service day impacted over 50 families in need.',
      image: '/images/news-2.jpg',
    },
    {
      title: 'Youth Mission Trip Announced',
      date: '2024-01-15',
      content: 'Our youth group will be serving on a mission trip this summer.',
      image: '/images/news-3.jpg',
    },
  ];

  return (
    <div>
      <Hero title="Church News & Updates" subtitle="Stay informed about what's happening in our community" />

      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Latest News</h2>
          <div className="grid grid-cols-1 gap-8">
            {newsItems.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 pb-8 border-b">
                <div className="md:w-1/3">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
                </div>
                <div className="md:w-2/3">
                  <p className="text-sm text-gray-500 mb-2">{new Date(item.date).toLocaleDateString()}</p>
                  <h3 className="text-2xl font-bold mb-3 text-secondary-700">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.content}</p>
                  <a href="#" className="text-primary-600 font-semibold hover:text-primary-700">
                    Read Full Story →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Stay Updated</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, updates, and announcements directly to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              required
            />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
