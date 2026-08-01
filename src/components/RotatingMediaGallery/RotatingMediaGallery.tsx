import { useEffect, useState } from 'react';

interface MediaSlide {
  type: 'image' | 'video';
  src: string;
}

interface RotatingMediaGalleryProps {
  folder: string;
  title: string;
  description: string;
  altPrefix: string;
  slideDurationMs?: number;
}

const CONTAINER_URL = 'https://philadelphiamedia.blob.core.windows.net/media';
const VIDEO_EXTENSIONS = ['.mp4', '.mov', '.webm'];

function slideTypeFor(name: string): MediaSlide['type'] {
  const lower = name.toLowerCase();
  return VIDEO_EXTENSIONS.some((ext) => lower.endsWith(ext)) ? 'video' : 'image';
}

async function listFolderSlides(folder: string): Promise<MediaSlide[]> {
  const response = await fetch(
    `${CONTAINER_URL}?restype=container&comp=list&prefix=${encodeURIComponent(folder)}/`
  );
  if (!response.ok) throw new Error(`Failed to list ${folder}`);

  const xml = new DOMParser().parseFromString(await response.text(), 'application/xml');
  const names = Array.from(xml.querySelectorAll('Blobs > Blob > Name'))
    .map((node) => node.textContent ?? '')
    .filter((name) => name && !name.endsWith('/'));

  return names
    .sort()
    .map((name) => ({
      type: slideTypeFor(name),
      src: `${CONTAINER_URL}/${name}`,
    }));
}

export default function RotatingMediaGallery({
  folder,
  title,
  description,
  altPrefix,
  slideDurationMs = 4000,
}: RotatingMediaGalleryProps) {
  const [slides, setSlides] = useState<MediaSlide[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    listFolderSlides(folder)
      .then((result) => {
        if (!cancelled) setSlides(result);
      })
      .catch((err) => console.error(`RotatingMediaGallery: could not load "${folder}"`, err));
    return () => {
      cancelled = true;
    };
  }, [folder]);

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, slideDurationMs);
    return () => clearInterval(timer);
  }, [slides.length, slideDurationMs]);

  return (
    <div className="card overflow-hidden">
      <div className="relative w-full h-96 md:h-[32rem] rounded-lg overflow-hidden mb-4 bg-gray-100">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.type === 'image' ? (
              <img src={slide.src} alt={`${altPrefix} ${i + 1}`} className="w-full h-full object-cover" />
            ) : (
              <video src={slide.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
            )}
          </div>
        ))}
      </div>
      <h3 className="text-xl font-bold mb-2 text-secondary-700">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
