import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import Hero from '@components/Hero/Hero';
import { Card, Button } from '@components/Common/Common';

const JOIN_FORM_URL = 'https://lemon-river-0d241c200.7.azurestaticapps.net/join';

export default function JoinUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interestAreas: [] as string[],
    comments: '',
    consentToContact: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, consentToContact: e.target.checked });
  };

  const handleCheckbox = (value: string) => {
    setFormData({
      ...formData,
      interestAreas: formData.interestAreas.includes(value)
        ? formData.interestAreas.filter((item) => item !== value)
        : [...formData.interestAreas, value],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submitJoinForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Submission failed');

      alert('Thank you for your interest! We\'ll be in touch soon.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interestAreas: [],
        comments: '',
        consentToContact: false,
      });
    } catch (err) {
      console.error(err);
      alert('Sorry, something went wrong submitting the form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
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
            <h2 className="text-2xl font-bold mb-4 text-secondary-700">Let's Connect</h2>
            <div className="flex flex-col items-center mb-6 pb-6 border-b">
              <QRCodeSVG value={JOIN_FORM_URL} size={140} />
              <p className="text-sm text-gray-500 mt-3 text-center">
                Already know someone who wants to join? Scan to open this form on your phone.
              </p>
            </div>
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

              <label className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  checked={formData.consentToContact}
                  onChange={handleConsentChange}
                  className="w-4 h-4 mt-1 text-primary-600 rounded"
                  required
                />
                <span className="text-sm text-gray-600">
                  I consent to Philadelphia Church contacting me about my submission via phone, email, or text.
                </span>
              </label>

              <Button type="submit" fullWidth disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
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
