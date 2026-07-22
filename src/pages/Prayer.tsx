import { useState } from 'react';
import Hero from '@components/Hero/Hero';
import { Button } from '@components/Common/Common';
import { Heart } from 'lucide-react';

export default function Prayer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    request: '',
    subscribe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as any;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Azure Forms here
    console.log('Prayer request submitted:', formData);
    alert('Thank you for your prayer request. Our prayer team will lift you up in prayer.');
  };

  const categories = [
    'Healing & Health',
    'Family & Relationships',
    'Work & Career',
    'Financial',
    'Spiritual Growth',
    'Loss & Grief',
    'Thanksgiving & Praise',
    'Other',
  ];

  return (
    <div>
      <Hero
        title="Prayer Requests"
        subtitle="We believe in the power of prayer and would be honored to pray for you"
      />

      <section className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-secondary-700 text-center">Share Your Prayer Request</h2>
            <p className="text-gray-600 text-center mb-8">
              Your request will be shared with our prayer team who will intercede on your behalf. All requests are kept
              confidential.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email (optional)"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                required
              >
                <option value="">Select Prayer Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <textarea
                name="request"
                placeholder="Share your prayer request..."
                value={formData.request}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                required
              />

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
                  className="w-4 h-4 text-primary-600 rounded"
                />
                <span className="text-gray-700">Keep me updated with prayer tips and spiritual encouragement</span>
              </label>

              <Button type="submit" fullWidth>
                Submit Prayer Request
              </Button>
            </form>
          </div>

          <div className="mt-12 bg-primary-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-secondary-700 flex items-center space-x-2">
              <Heart className="text-primary-600" />
              <span>Prayer Team Information</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Our dedicated prayer team meets regularly to intercede for prayer requests from our community. Your
              request will be treated with confidentiality and compassion.
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>✓ All requests are confidential</li>
              <li>✓ Our prayer team meets weekly</li>
              <li>✓ We follow up with updates and encouragement</li>
              <li>✓ You can request anonymity if desired</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
