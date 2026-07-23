import { useState } from 'react';
import Hero from '@components/Hero/Hero';
import { Button } from '@components/Common/Common';
import { Mail, Phone, MapPin } from 'lucide-react';

const CHURCH_ADDRESS = 'Community Room 2, 104 Shipwright Parade, Werribee VIC 3030, Australia';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for contacting us! We\'ll get back to you soon.');
  };

  return (
    <div>
      <Hero title="Contact Us" subtitle="We'd love to hear from you" />

      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-secondary-700">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-secondary-700 mb-1">Address</h3>
                    <p className="text-gray-600">Community Room 2</p>
                    <p className="text-gray-600">104 Shipwright Parade</p>
                    <p className="text-gray-600">Werribee VIC 3030, Australia</p>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CHURCH_ADDRESS)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 font-semibold hover:text-primary-700 inline-block mt-1"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-primary-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-secondary-700 mb-1">Phone</h3>
                    <p className="text-gray-600">0475 301 444</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-primary-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-secondary-700 mb-1">Email</h3>
                    <p className="text-gray-600">admin@philadelphia-church.com.au</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-secondary-700 mb-4">Service Times</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Sunday Worship:</strong> 10:00 AM - 11:30 AM</li>
                    <li><strong>Location:</strong> Community Room 2, 104 Shipwright Parade, Werribee VIC 3030</li>
                    <li><strong>Midweek Study:</strong> Wednesdays 7:00 PM</li>
                    <li><strong>Youth Group:</strong> Fridays 6:30 PM</li>
                  </ul>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-surface p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-secondary-700">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                />

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="prayer-request">Prayer Request</option>
                  <option value="general-inquiry">General Inquiry</option>
                  <option value="volunteer">Volunteer Opportunity</option>
                  <option value="event">Event Question</option>
                  <option value="other">Other</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  required
                />

                <Button type="submit" fullWidth>
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Philadelphia Church location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(CHURCH_ADDRESS)}&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
