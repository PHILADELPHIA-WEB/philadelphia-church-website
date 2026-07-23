import Hero from '@components/Hero/Hero';
import { Card } from '@components/Common/Common';
import { Calendar, MapPin, Users } from 'lucide-react';

export default function Events() {
  const events = [
    {
      title: 'Sunday Worship Service',
      date: 'Every Sunday',
      time: '10:00 AM',
      location: 'Main Sanctuary',
      description: 'Join us for our weekly worship service.',
    },
    {
      title: 'Midweek Bible Study',
      date: 'Wednesdays',
      time: '7:00 PM',
      location: 'Fellowship Hall',
      description: 'Study Scripture and grow together in faith.',
    },
    {
      title: 'Youth Group Meeting',
      date: 'Fridays',
      time: '6:30 PM',
      location: 'Youth Center',
      description: 'Fun games, fellowship, and spiritual growth for teens.',
    },
  ];

  return (
    <div>
      <Hero title="Church Events & Calendar" subtitle="Stay connected with what's happening at Philadelphia Church" />

      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="space-y-6">
            {events.map((event, index) => (
              <div key={index} className="card border-l-4 border-primary-600">
                <h3 className="text-2xl font-bold mb-3 text-secondary-700">{event.title}</h3>
                <div className="space-y-2 text-gray-600 mb-4">
                  <div className="flex items-center space-x-3">
                    <Calendar size={18} className="text-primary-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users size={18} className="text-primary-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={18} className="text-primary-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button className="btn-primary">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Special Events Coming Up</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Community Service Day" description="Join us as we serve our neighborhood." />
            <Card title="Men's Conference" description="Spiritual growth and fellowship for men." />
            <Card title="Women's Retreat" description="A time of reflection, prayer, and connection." />
          </div>
        </div>
      </section>
    </div>
  );
}
