import React, { useEffect, useCallback } from 'react';

interface GalleryModalProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ images, initialIndex, onClose }) => {
  const [current, setCurrent] = React.useState(initialIndex);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'Escape') onClose();
  }, [handleNext, handlePrev, onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!images.length) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <button
        className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl px-2 py-1 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70"
        onClick={handlePrev}
        aria-label="Previous image"
      >
        ‹
      </button>
      <img
        src={images[current]}
        alt={`Gallery image ${current + 1}`}
        className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg object-contain"
      />
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl px-2 py-1 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70"
        onClick={handleNext}
        aria-label="Next image"
      >
        ›
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
        {current + 1} / {images.length}
      </div>
    </div>
  );
};

export default GalleryModal; 