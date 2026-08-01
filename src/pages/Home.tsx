import { Link } from 'react-router-dom';
import Hero from '@components/Hero/Hero';
import { Card, Button } from '@components/Common/Common';
import RotatingMediaGallery from '@components/RotatingMediaGallery/RotatingMediaGallery';
import { useSermons } from '@hooks/useSermons';
import {
  MapPin,
  Video,
  Users,
  HeartHandshake,
  Gift,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';

export default function Home() {
  const sermons = useSermons();
  const latestSermon = sermons[0];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Welcome to Philadelphia Church"
        subtitle="Join us every Sunday at 10 AM for worship, prayer, and community fellowship"
        backgroundVideo="https://philadelphiamedia.blob.core.windows.net/media/videos/Background.mp4"
        primaryCTA={{
          text: 'Join Us This Sunday',
          href: '/join',
        }}
        secondaryCTA={{
          text: 'Learn More',
          href: '/about',
        }}
      />

      {/* Ministries Section */}
      <section className="section-container bg-surface">
        <h2 className="section-title">A Place for You and Your Family</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          From our youngest members to our most seasoned believers, there's a ministry here for every stage of faith.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RotatingMediaGallery
            folder="ChildrensMinistry"
            title="Children's Ministry"
            description="Age-appropriate programs for kids 0-12 during the main service."
            altPrefix="Children's Ministry photo"
          />
          <RotatingMediaGallery
            folder="WomentsMinistry"
            title="Women's Ministry"
            description="A community for women to grow together in faith and friendship."
            altPrefix="Women's Ministry photo"
          />
          <RotatingMediaGallery
            folder="Anniversary"
            title="Special Meeting"
            description="We celebrated our first year anniversary together as a church family!"
            altPrefix="Anniversary celebration photo"
          />
          <RotatingMediaGallery
            folder="Baptism"
            title="Baptism Service"
            description="Celebrating new believers as they are baptized into their faith."
            altPrefix="Baptism Service photo"
          />
          <RotatingMediaGallery
            folder="VBS"
            title="VBS Celebration 2026"
            description="Kids had a blast at our Vacation Bible School celebration!"
            altPrefix="VBS Celebration 2026 photo"
          />
          <RotatingMediaGallery
            videoSrc="https://philadelphiamedia.blob.core.windows.net/media/videos/OneYearVideo.mp4"
            title="One Year of God's Faithfulness"
            description="Looking back with gratitude on our first year as a church family."
            altPrefix="One Year of God's Faithfulness video"
          />
        </div>
      </section>

      {/* Ways to Connect Section */}
      <section className="section-container">
        <h2 className="section-title">Find the Right Way to Connect</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          No matter where you are, become part of all God is doing at Philadelphia Church.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            icon={<MapPin size={32} />}
            title="In-Person Worship"
            description="Join us Sundays 10:00 - 11:30 AM at Community Room 2, 104 Shipwright Parade, Werribee VIC 3030."
            cta={{ text: 'Get directions', href: '/contact' }}
          />
          <Card
            icon={<Video size={32} />}
            title="Watch Online"
            description="Can't make it in person? Watch our latest messages anytime on our YouTube channel."
            cta={{ text: 'Watch now', href: '/sermons' }}
          />
          <Card
            icon={<Users size={32} />}
            title="Midweek & Youth"
            description="Grow deeper with our Midweek Bible Study on Wednesdays 7 PM and Youth Group Fridays 6:30 PM."
            cta={{ text: 'Learn more', href: '/services' }}
          />
        </div>
      </section>

      {/* About Section */}
      <section className="section-container bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-secondary-700">About Our Church</h2>
            <p className="text-gray-600 mb-4">
              Philadelphia Church was founded in January 2025 and has been operating independently since 6 April 2025.
              The church is inspired by the message in Revelation 3:8 and is actively engaged in regular worship
              services, evangelism, pastoral care, community support, and teaching ministries.
            </p>
            <p className="text-gray-600 mb-4">
              Philadelphia Church is a vibrant community of believers empowered by the Spirit to teach, baptize, and
              disciple. We are dedicated to fulfilling the Great Commission by reaching out, transforming lives through
              the Gospel of Jesus Christ.
            </p>
            <p className="text-gray-600 mb-4">
              Our vision guides us daily to share God's Word with clarity, welcome believers through baptism, and walk
              alongside others in their spiritual journey. Whether you're new to the faith or a longtime believer, we
              welcome you to join us and discover a place of spiritual growth, genuine friendship, and meaningful service.
            </p>
            <Link to="/about" className="btn-primary inline-block">
              Our Mission & Vision
            </Link>
          </div>
          <img
            src="https://philadelphiamedia.blob.core.windows.net/media/images/about-image.jpg"
            alt="Church community"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="section-container">
        <h2 className="section-title">How to Get Involved</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Use your gifts and time to make an eternal impact with us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            icon={<HeartHandshake size={32} />}
            title="Volunteer"
            description="Serve alongside our team on Sundays or in one of our ministries."
            cta={{ text: 'Get started', href: '/join' }}
          />
          <Card
            icon={<Users size={32} />}
            title="Join a Small Group"
            description="Study Scripture, pray, and build friendships with a small group."
            cta={{ text: 'Find a group', href: '/services' }}
          />
          <Card
            icon={<Gift size={32} />}
            title="Give"
            description="Support the mission and ministries of Philadelphia Church."
            cta={{ text: 'Give online', href: '/giving' }}
          />
        </div>
      </section>

      {/* Latest News Section */}
      <section className="section-container bg-surface">
        <h2 className="section-title">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title={latestSermon.title}
            description="Catch up on our latest Sunday message, now available to watch online."
            image={`https://i.ytimg.com/vi/${latestSermon.videoId}/hqdefault.jpg`}
            cta={{ text: 'Watch now', href: '/sermons' }}
          />
          <Card
            title="Prayer Groups"
            description="Join one of our prayer groups to seek God together and intercede for our church and community."
            image="https://philadelphiamedia.blob.core.windows.net/media/Prayer/IMG_5622.png"
            cta={{ text: 'Learn more', href: '/services' }}
          />
          <Card
            title="Community Outreach"
            description="Serving our neighborhood with the love of Christ through outreach and practical care."
            image="https://philadelphiamedia.blob.core.windows.net/media/Outreach/IMG_5622.png"
            cta={{ text: 'Learn more', href: '/events' }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Connect?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you want to visit us, join our community, or have questions, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary">Get Involved</Button>
            <Link to="/contact" className="btn-outline-white">
              Contact Us
            </Link>
          </div>

          <div className="flex justify-center gap-6 mt-10">
            <a
              href="https://www.facebook.com/PhiladelphiaChurchAU"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-200 transition-colors"
            >
              <Facebook size={28} />
            </a>
            <a
              href="https://www.instagram.com/philadelphiaau/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-200 transition-colors"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://www.youtube.com/@PhiladelphiaChurch-AU"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-200 transition-colors"
            >
              <Youtube size={28} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
