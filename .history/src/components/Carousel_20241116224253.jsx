import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselData = [
  {
    desktopImage: {
      image: "https://imgur.com/a/qaaHvG2",
      alt: "Protected Collection shoe with water droplets"
    },
    mobileImage: {
      image: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_2688/cms/7oZppFmWgHjcm5DyZgB3li/e82aabd59f45859c7e696d484edb5dde/24Q4_Protect_Site_HomepageHero_ProtectRunnerUp_Mobile_860x1078.png",
      alt: "Protected Collection shoe mobile view"
    },
    text: {
      title: "Protected",
      subtitle: "BY NATURE",
      description: "THE NEW PROTECT COLLECTION,\nULTRA WATER-REPELLENT TO WEATHER IT ALL."
    }
  },
  {
    desktopImage: {
      image: "https://imgur.com/a/jFaozXG",
      alt: "Protected Collection lifestyle view"
    },
    mobileImage: {
      image: "../../../images/left2.png",
      alt: "Protected Collection lifestyle mobile view"
    },
    text: {
      title: "Weather Ready",
      subtitle: "ALL DAY",
      description: "DESIGNED FOR COMFORT.\nENGINEERED FOR PROTECTION."
    }
  }
];

const CarouselSlide = ({ data, isMobile }) => {
  return (
    <div className="relative w-full h-full bg-[#e5d3c5]">
      <div className="relative h-full">
        <img
          src={isMobile ? data.mobileImage.image : data.desktopImage.image}
          alt={isMobile ? data.mobileImage.alt : data.desktopImage.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className={`font-serif mb-2 ${isMobile ? 'text-4xl' : 'text-6xl'}`}>
            {data.text.title}
          </h1>
          <h2 className={`mb-4 ${isMobile ? 'text-xl' : 'text-2xl'}`}>
            {data.text.subtitle}
          </h2>
          <p className={`mb-6 whitespace-pre-line ${isMobile ? 'text-sm' : 'text-base'}`}>
            {data.text.description}
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-2 text-sm font-medium hover:bg-gray-100 transition-colors">
              SHOP MEN
            </button>
            <button className="bg-white text-black px-6 py-2 text-sm font-medium hover:bg-gray-100 transition-colors">
              SHOP WOMEN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % CarouselData.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + CarouselData.length) % CarouselData.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className={`relative w-full ${isMobile ? 'h-[60vh]' : 'h-screen'} overflow-hidden`}>
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {CarouselData.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <CarouselSlide data={slide} isMobile={isMobile} />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/50 rounded-full hover:bg-white/75 transition-colors"
        disabled={isTransitioning}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/50 rounded-full hover:bg-white/75 transition-colors"
        disabled={isTransitioning}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {CarouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;