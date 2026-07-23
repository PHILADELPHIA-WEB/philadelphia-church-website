import Hero from '@components/Hero/Hero';
import { Card } from '@components/Common/Common';
import { Calendar, MapPin, Users } from 'lucide-react';

export default function Events() {
  const events = [
    {
      title: 'Sunday Worship Service',
      date: 'Every Sunday',
      time: '10:00 AM - 12:00 PM',
      location: 'Community Room 2, 104 Shipwright Parade, Werribee VIC 3030, Australia',
      description: 'Join us for our weekly worship service.',
    },
    {
      title: 'Philadelphia Prayer Night',
      date: 'Every Friday',
      time: '6:30 PM - 8:00 PM',
      location: "Held in a believer's home (contact us for details)",
      description: 'A time of united prayer together as a church family.',
    },
    {
      title: 'Foundations Midweek (Bible Study)',
      date: 'Wednesdays',
      time: '7:00 PM',
      location: "Google Meet & Pastor's House, 17 Matheson Avenue, Wyndham Vale VIC 3024",
      description: 'Study Scripture and grow together in faith.',
    },
    {
      title: 'Morning Presence',
      date: 'Monday - Thursday',
      time: '6:00 AM - 7:00 AM',
      location: 'Google Meet',
      description: 'Start your day with prayer, joining online from wherever you are.',
      link: 'https://meet.google.com/ugj-hxqc-oep',
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
                {event.link && (
                  <a href={event.link} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                    Join Google Meet
                  </a>
                )}
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
