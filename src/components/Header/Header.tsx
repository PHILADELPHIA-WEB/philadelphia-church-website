import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Church } from 'lucide-react';

const primaryNavItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Sermons', href: '/sermons' },
  { label: 'Join Us', href: '/join' },
  { label: 'Contact', href: '/contact' },
];

const moreNavItems = [
  { label: 'Events', href: '/events' },
  { label: 'News', href: '/news' },
  { label: 'Giving', href: '/giving' },
  { label: 'Articles of Faith', href: '/articles-of-faith' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Philadelphia Church" className="h-12 md:h-14" />
            <span className="text-xl md:text-2xl font-bold text-primary-600 hidden sm:inline">
              Philadelphia Church
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="px-2 py-2 text-lg font-medium text-gray-700 hover:text-primary-600 transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}

            <div className="relative" ref={moreRef}>
              <button
                className="px-2 py-2 text-lg font-medium text-gray-700 hover:text-primary-600 transition-colors flex flex-col items-center leading-none gap-0.5"
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                aria-label="More menu"
                aria-expanded={isMoreOpen}
              >
                <Church size={22} />
                <span className="text-xs font-semibold">More</span>
              </button>

              {isMoreOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-lg border py-2">
                  {moreNavItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                      onClick={() => setIsMoreOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t">
            {[...primaryNavItems, ...moreNavItems].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-3 py-2 text-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
