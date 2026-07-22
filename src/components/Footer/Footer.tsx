import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-700 text-white mt-16">
      <div className="section-container bg-secondary-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Philadelphia Church</h3>
            <p className="text-gray-300">
              A community of faith committed to serving God and our neighbors with love and purpose.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>Community Room 2, 104 Shipwright Parade, Werribee VIC 3030</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:0475301444" className="hover:text-white">0475 301 444</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:admin@philadelphia-church.com.au" className="hover:text-white">
                  admin@philadelphia-church.com.au
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-secondary-600 pt-8 flex justify-center space-x-6">
          <a href="#" className="hover:text-primary-400 transition-colors"><Facebook size={24} /></a>
          <a href="#" className="hover:text-primary-400 transition-colors"><Twitter size={24} /></a>
          <a href="#" className="hover:text-primary-400 transition-colors"><Instagram size={24} /></a>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Philadelphia Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
