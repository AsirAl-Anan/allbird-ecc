import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselData = [
  {
    desktopImage: {
      layout: "split",
      left: {
        type: "model",
        image: '../../../images/left1.png',
        alt: "Model wearing Protected Collection"
      },
      right: {
        type: "product",
        image: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_2688/cms/7oZppFmWgHjcm5DyZgB3li/e82aabd59f45859c7e696d484edb5dde/24Q4_Protect_Site_HomepageHero_ProtectRunnerUp_Mobile_860x1078.png",
        alt: "Protected Collection shoe with water droplets"
      }
    },
    mobileImage: {
      type: "product",
      image: "/api/placeholder/400/600",
      alt: "Protected Collection shoe mobile view"
    },
    text: {
      title: "Protected",
      subtitle: "BY NATURE",
      description: "THE NEW PROTECT COLLECTION,\nULTRA WATER-REPELLENT TO WEATHER IT ALL."
    }
    des
  },
  {
    desktopImage: {
      layout: "full",
      image: "/api/placeholder/1200/800",
      alt: "Protected Collection lifestyle"
    },
    mobileImage: {
      type: "lifestyle",
      image: "/api/placeholder/400/600",
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
      {isMobile ? (
        // Mobile layout
        <div className="relative h-full">
          <img
            src={data.mobileImage.image}
            alt={data.mobileImage.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-4 text-center">
            <h1 className="text-4xl font-serif mb-2">{data.text.title}</h1>
            <h2 className="text-xl mb-4">{data.text.subtitle}</h2>
            <p className="text-sm mb-6 whitespace-pre-line">
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
      ) : (
        // Desktop layout
        <div className="relative h-full">
          {data.desktopImage.layout === "split" ? (
            <div className="flex h-full">
              <div className="w-1/3 h-full">
                <img
                  src={data.desktopImage.left.image}
                  alt={data.desktopImage.left.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-2/3 h-full relative">
                <img
                  src={data.desktopImage.right.image}
                  alt={data.desktopImage.right.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <h1 className="text-6xl font-serif mb-2">{data.text.title}</h1>
                  <h2 className="text-2xl mb-4">{data.text.subtitle}</h2>
                  <p className="text-base mb-6 whitespace-pre-line">
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
          ) : (
            <div className="relative h-full">
              <img
                src={data.desktopImage.image}
                alt={data.desktopImage.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-end pr-16">
                <div className="w-1/2 text-center">
                  <h1 className="text-6xl font-serif mb-2">{data.text.title}</h1>
                  <h2 className="text-2xl mb-4">{data.text.subtitle}</h2>
                  <p className="text-base mb-6 whitespace-pre-line">
                    {data.text.description}
                  </p>
                  <div className="flex justify-center gap-4">
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
          )}
        </div>
      )}
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
    <div className="relative w-full h-screen overflow-hidden">
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

      {/* Navigation arrows */}
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

      {/* Dot indicators */}
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