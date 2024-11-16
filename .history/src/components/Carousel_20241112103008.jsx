
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselSlide = ({ imageSrc, isMobile }) => {
  const content = [
    {
      text: {
        title: "Protected",
        subtitle: "BY NATURE",
        description: "THE NEW PROTECT COLLECTION,\nULTRA WATER-REPELLENT TO WEATHER IT ALL."
      },
      buttons: ["SHOP MEN", "SHOP WOMEN"]
    },
    {
        
    }
  ];

  return (
    <div className="relative w-full h-full">
      {/* Content container */}
      <div className={`absolute inset-0 flex ${isMobile ? 'flex-col items-center justify-end pb-16' : 'items-center justify-end pr-16'}`}>
        <div className={`text-center ${isMobile ? 'w-full px-4' : 'w-1/2'}`}>
          <h1 className="text-4xl md:text-6xl font-serif mb-2">{content[0].text.title}</h1>
          <h2 className="text-xl md:text-2xl mb-4">{content[0].text.subtitle}</h2>
          <p className="text-sm md:text-base mb-6 whitespace-pre-line">
            {content[0].text.description}
          </p>
          <div className="flex justify-center gap-4">
            {content[0].buttons.map((button, index) => (
              <button
                key={index}
                className="bg-white text-black px-6 py-2 text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                {button}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background image */}
      <div className="w-full h-full">
        <img
          src="/api/placeholder/1200/800"
          alt="Protected Collection"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Simulated window resize effect
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [0]; // We only have one slide in this example

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen bg-[#e5d3c5]">
      {/* Main carousel container */}
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((_, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <CarouselSlide isMobile={isMobile} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/50 rounded-full hover:bg-white/75 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/50 rounded-full hover:bg-white/75 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;