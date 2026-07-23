import Hero from '@components/Hero/Hero';
import { Card } from '@components/Common/Common';

export default function Services() {
  return (
    <div>
      <Hero title="Sunday Services" subtitle="Join us every Sunday for worship and spiritual growth" />

      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-secondary-700">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="text-2xl font-bold mb-2">Sunday Morning Worship</h3>
              <p className="text-gray-600 mb-2"><strong>Time:</strong> 10:00 AM - 12:00 PM</p>
              <p className="text-gray-600 mb-4">
                Join us for inspiring worship, dynamic preaching, and meaningful connection with our church community.
              </p>
            </div>

            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="text-2xl font-bold mb-2">Children's Ministry</h3>
              <p className="text-gray-600 mb-2"><strong>Age:</strong> 0-12 years</p>
              <p className="text-gray-600 mb-4">
                Specialized age-appropriate programs for children during the main service.
              </p>
            </div>

            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="text-2xl font-bold mb-2">Youth Group</h3>
              <p className="text-gray-600 mb-2"><strong>Age:</strong> 13-18 years</p>
              <p className="text-gray-600 mb-4">
                Fun, engaging programs that help teens grow in faith and friendships.
              </p>
            </div>

            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="text-2xl font-bold mb-2">Foundations Midweek</h3>
              <p className="text-gray-600 mb-2"><strong>Time:</strong> Wednesdays 7:00 PM</p>
              <p className="text-gray-600 mb-4">
                Deep dives into Scripture with opportunities for discussion and reflection.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-secondary-700">Service Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Inspiring Worship" description="Contemporary and traditional worship that touches your heart." />
            <Card title="Practical Teaching" description="Bible-centered messages that apply to real life." />
            <Card title="Prayer Ministry" description="Dedicated intercessors available to pray with you." />
            <Card title="Welcoming Community" description="A place where everyone feels valued and accepted." />
          </div>
        </div>
      </section>
    </div>
  );
}
