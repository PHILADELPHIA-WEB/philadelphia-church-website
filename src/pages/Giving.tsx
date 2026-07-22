import Hero from '@components/Hero/Hero';
import { Card } from '@components/Common/Common';
import { Heart } from 'lucide-react';

export default function Giving() {
  const givingOptions = [
    {
      title: 'Online Giving',
      description: 'Give securely online using our secure payment portal.',
      link: '#',
    },
    {
      title: 'Mobile App',
      description: 'Download our app to give on the go.',
      link: '#',
    },
    {
      title: 'In Person',
      description: 'Give during our Sunday worship service.',
      link: '#',
    },
  ];

  return (
    <div>
      <Hero
        title="Generosity & Giving"
        subtitle="Support our mission and help us serve our community"
        primaryCTA={{
          text: 'Give Now',
          href: '#',
        }}
      />

      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Why We Give</h2>
          <p className="text-gray-600 text-lg mb-8 text-center max-w-2xl mx-auto">
            Your generosity enables us to fulfill our mission of sharing the gospel, discipling believers, and serving
            our community with love and compassion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card title="Local Ministry" description="Support our Sunday services, small groups, and community outreach." />
            <Card title="Missions" description="Contribute to global mission work and community partnerships." />
            <Card title="Youth Programs" description="Invest in the spiritual development of the next generation." />
          </div>

          <h2 className="section-title mt-12">Ways to Give</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {givingOptions.map((option, index) => (
              <Card
                key={index}
                icon={<Heart size={32} className="text-primary-600" />}
                title={option.title}
                description={option.description}
                cta={{ text: 'Give', href: option.link }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-container bg-primary-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-secondary-700">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Is my gift tax-deductible?',
                a: 'Yes, Philadelphia Church is a 501(c)(3) nonprofit organization. Your gift is tax-deductible to the extent allowed by law.',
              },
              {
                q: 'How is my money used?',
                a: 'All gifts are used for ministry purposes including worship, discipleship, community outreach, and operational costs.',
              },
              {
                q: 'Can I give anonymously?',
                a: 'Yes, you can choose to remain anonymous when giving. We respect your privacy.',
              },
            ].map((faq, index) => (
              <div key={index}>
                <h3 className="font-bold text-secondary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 ml-4 border-l-4 border-primary-600 pl-4">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
