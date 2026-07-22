import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary-600 to-primary-800">
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link to="/" className="btn-secondary inline-block">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
