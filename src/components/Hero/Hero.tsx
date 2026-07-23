import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  backgroundVideo,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  return (
    <section
      className="relative h-96 md:h-[500px] flex items-center justify-center text-center text-white bg-gradient-to-r from-primary-600 to-primary-800 overflow-hidden"
      style={
        !backgroundVideo && backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      {backgroundVideo && (
        <>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={backgroundVideo}
            poster={backgroundImage}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-800/50 to-primary-900/70" />
        </>
      )}
      <div className="container mx-auto px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 animate-fade-in">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto animate-fade-in">
            {subtitle}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {primaryCTA && (
              <Link
                to={primaryCTA.href}
                className="btn-primary"
              >
                {primaryCTA.text}
              </Link>
            )}
            {secondaryCTA && (
              <Link
                to={secondaryCTA.href}
                className="btn-outline-white"
              >
                {secondaryCTA.text}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
