import { Link } from 'react-router-dom';
import Hero from '@components/Hero/Hero';
import { Card } from '@components/Common/Common';

export default function About() {
  return (
    <div>
      <Hero title="About Our Church" subtitle="Our Story, Mission & Values" />

      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-secondary-700">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Philadelphia Church was founded in January 2025 and has been operating independently since 6 April 2025.
            The church is inspired by the message in Revelation 3:8 and is actively engaged in regular worship
            services, evangelism, pastoral care, community support, and teaching ministries.
          </p>
          <p className="text-gray-600 mb-4 italic">
            Revelation 3:8 - "I know your works. See, I have set before you an open door, and no one can shut it;
            for you have a little strength, have kept My word, and have not denied My name."
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-8 text-secondary-700">Our Vision</h2>
          <p className="text-lg font-semibold text-primary-600 mb-4">
            "Empowered by the Spirit to teach, baptize, and disciple"
          </p>
          <p className="text-gray-600 mb-4 italic">
            Matthew 28:19 - "Go therefore and make disciples of all nations, baptizing them in the name of the Father 
            and of the Son and of the Holy Spirit, teaching them to observe all things that God has commanded us"
          </p>
          <p className="text-gray-600 mb-6">
            This Great Commission continues to inspire and guide our mission to reach out, disciple, and transform 
            lives through the power of the Gospel. We are committed to:
          </p>
          <ul className="text-gray-600 space-y-2 ml-6 mb-6">
            <li className="flex items-start space-x-3">
              <span className="text-primary-600 font-bold">✓</span>
              <span><strong>Teaching</strong> - Sharing God's Word with clarity and passion</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary-600 font-bold">✓</span>
              <span><strong>Baptizing</strong> - Welcoming believers into God's family through baptism</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary-600 font-bold">✓</span>
              <span><strong>Discipling</strong> - Walking alongside believers in their spiritual journey</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold mb-6 mt-8 text-secondary-700">Our Core Values</h2>

          <Link
            to="/articles-of-faith"
            className="block bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-2xl p-8 md:p-10 mb-8 text-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Philadelphia Declaration</h3>
            <p className="text-gray-100 max-w-2xl mx-auto mb-4">
              Our foundational statement of faith - what we believe, as revealed in God's Word.
            </p>
            <span className="inline-block font-semibold underline underline-offset-4">
              Read our Articles of Faith →
            </span>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              title="Faith in Jesus"
              description="We believe Jesus Christ is Lord and Savior, and we center our lives and ministry on His teachings."
            />
            <Card
              title="Community & Fellowship"
              description="We value authentic relationships, mutual support, and doing life together as God's family."
            />
            <Card
              title="Service & Compassion"
              description="We're called to serve others, especially the vulnerable, with the love of Christ."
            />
            <Card
              title="Spiritual Growth"
              description="We're committed to helping people grow in their understanding and experience of God."
            />
            <Card
              title="Excellence & Integrity"
              description="We strive to do all things with excellence and maintain high standards of honesty and transparency."
            />
            <Card
              title="Outreach & Mission"
              description="We're passionate about sharing the gospel and making a difference in our community and world."
            />
          </div>
        </div>
      </section>

      <section className="section-container bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-secondary-700">Leadership</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Our church is led by dedicated pastors who are passionate about sharing God's Word and shepherding our community.
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col items-center text-center">
            <div className="w-64 md:w-80 rounded-2xl overflow-hidden ring-4 ring-primary-100 shadow-md mb-6">
              <img
                src="https://philadelphiamedia.blob.core.windows.net/media/images/pastors-team.jpg"
                alt="Pastor Arun Abraham and Pastor Lovelyn Arun"
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-3xl font-bold text-secondary-700 mb-2">Pastor Arun Abraham & Pastor Lovelyn Arun</h3>
            <p className="text-lg text-primary-600 font-semibold mb-4">Senior Pastors</p>
            <p className="text-gray-600 max-w-2xl">
              With a heart for God and a passion for discipleship, our Senior Pastors lead Philadelphia Church with vision,
              integrity, and devotion to the Great Commission. Together, they shepherd our flock and guide us in fulfilling
              our mission to teach, baptize, and disciple.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
