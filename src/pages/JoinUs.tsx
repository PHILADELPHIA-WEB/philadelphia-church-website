import { useState } from 'react';
import Hero from '@components/Hero/Hero';
import { Card, Button } from '@components/Common/Common';

const YES_NO_DEFAULTS = {
  partOfFamily: '',
  receivedSalvation: '',
  immersedBaptism: '',
  attendedChurchBefore: '',
};

const YES_NO_QUESTIONS: { name: keyof typeof YES_NO_DEFAULTS; label: string }[] = [
  { name: 'partOfFamily', label: 'Would you like to be part of the Philadelphia Church family?' },
  { name: 'receivedSalvation', label: 'Have you received salvation?' },
  { name: 'immersedBaptism', label: 'Have you been baptized by immersion?' },
  { name: 'attendedChurchBefore', label: 'Have you attended a church before?' },
];

export default function JoinUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interestAreas: [] as string[],
    ...YES_NO_DEFAULTS,
    baptismYear: '',
    churchDetails: '',
    comments: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (value: string) => {
    setFormData({
      ...formData,
      interestAreas: formData.interestAreas.includes(value)
        ? formData.interestAreas.filter((item) => item !== value)
        : [...formData.interestAreas, value],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Azure Forms here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll be in touch soon.');
  };

  return (
    <div>
      <Hero title="Join Our Community" subtitle="We'd love to welcome you to Philadelphia Church" />

      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Column - Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-secondary-700">Why Join Us?</h2>

            <Card
              title="Spiritual Growth"
              description="Connect with God and grow in your faith through sermons, Bible studies, and prayer."
              className="mb-4"
            />
            <Card
              title="Community & Fellowship"
              description="Find genuine friendships and meaningful connections with people who share your values."
              className="mb-4"
            />
            <Card
              title="Purpose & Service"
              description="Discover how you can use your gifts to serve God and make a difference in our community."
              className="mb-4"
            />
            <Card
              title="Support & Care"
              description="Experience pastoral care, prayer support, and a community that walks with you through life."
            />
          </div>

          {/* Right Column - Form */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6 text-secondary-700">Let's Connect</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              />

              <div className="space-y-4">
                {YES_NO_QUESTIONS.map((q) => (
                  <div key={q.name}>
                    <label className="block font-semibold text-secondary-700 mb-2">{q.label}</label>
                    <div className="flex gap-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name={q.name}
                          value="yes"
                          checked={formData[q.name] === 'yes'}
                          onChange={handleChange}
                          className="w-4 h-4 text-primary-600"
                        />
                        <span className="ml-2 text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name={q.name}
                          value="no"
                          checked={formData[q.name] === 'no'}
                          onChange={handleChange}
                          className="w-4 h-4 text-primary-600"
                        />
                        <span className="ml-2 text-gray-700">No</span>
                      </label>
                    </div>
                  </div>
                ))}

                {formData.immersedBaptism === 'yes' && (
                  <input
                    type="text"
                    name="baptismYear"
                    placeholder="What year were you baptized?"
                    value={formData.baptismYear}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  />
                )}

                {formData.attendedChurchBefore === 'yes' && (
                  <input
                    type="text"
                    name="churchDetails"
                    placeholder="Which church did you attend? (name & location)"
                    value={formData.churchDetails}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  />
                )}
              </div>

              <div>
                <label className="block font-semibold text-secondary-700 mb-3">I'm interested in:</label>
                <div className="space-y-2">
                  {['Sunday Worship', 'Small Groups', 'Volunteering', 'Prayer Ministry', 'Youth Group', 'Women\'s Ministry'].map(
                    (area) => (
                      <label key={area} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.interestAreas.includes(area)}
                          onChange={() => handleCheckbox(area)}
                          className="w-4 h-4 text-primary-600 rounded"
                        />
                        <span className="ml-2 text-gray-700">{area}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              <textarea
                name="comments"
                placeholder="Tell us about yourself (optional)"
                value={formData.comments}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              />

              <Button type="submit" fullWidth>
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="section-container bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">First Time Visitor?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're glad you're thinking about visiting! Here's what to expect when you join us for a Sunday service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Warm Welcome" description="You'll be greeted by our friendly team at the entrance." />
            <Card title="No Pressure" description="Come as you are. There's no pressure to participate or commit." />
            <Card title="Great Worship" description="Experience inspiring music, prayer, and a meaningful message." />
          </div>
        </div>
      </section>
    </div>
  );
}
