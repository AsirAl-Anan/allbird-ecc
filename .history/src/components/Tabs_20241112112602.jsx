import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const Tabs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  const sliderRef = useRef(null);
  
  const categories = [
    {
      title: "Men's Collection",
      image: "/api/placeholder/600/400",
      bgColor: "bg-amber-100"
    },
    {
      title: "Women's Collection",
      image: "/api/placeholder/600/400",
      bgColor: "bg-rose-100"
    },
    {
      title: "Jewelry",
      image: "/api/placeholder/600/400",
      bgColor: "bg-purple-100"
    },
    {
      title: "Electronics",
      image: "/api/placeholder/600/400",
      bgColor: "bg-blue-100"
    }
  ];

  const nextSlide = () => {
    if (currentSlide < categories.length - 1) {
      setCurrentSlide(prev => prev + 1);
      setActiveTab(prev => prev + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
      setActiveTab(prev => prev - 1);
    }
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartPos(e.pageX);
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'none';
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    const currentPosition = e.pageX;
    const diff = currentPosition - startPos;
    const newTranslate = prevTranslate + diff;
    
    // Add boundaries to prevent dragging beyond first and last slides
    const maxTranslate = 0;
    const minTranslate = -(categories.length - 1) * sliderRef.current?.offsetWidth;
    
    if (newTranslate > maxTranslate || newTranslate < minTranslate) return;
    
    setCurrentTranslate(newTranslate);
    
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${newTranslate}px)`;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;
    
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 0.3s ease-out';
    }

    // If moved more than 100px, change slide
    if (Math.abs(movedBy) > 100) {
      if (movedBy > 0 && currentSlide > 0) {
        previousSlide();
      } else if (movedBy < 0 && currentSlide < categories.length - 1) {
        nextSlide();
      }
    } else {
      // Return to current slide if not moved enough
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
      }
    }

    setPrevTranslate(-(currentSlide * sliderRef.current?.offsetWidth));
  };

  // Reset transition when slide changes
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
      setPrevTranslate(-(currentSlide * sliderRef.current.offsetWidth));
      setCurrentTranslate(-(currentSlide * sliderRef.current.offsetWidth));
    }
  }, [currentSlide]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Navigation Tabs */}
      <nav className="flex gap-8 mb-6 px-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setActiveTab(index);
            }}
            className={`text-sm font-medium py-2 transition-all ${
              index === activeTab 
                ? 'border-b-2 border-black text-black' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {category.title.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div 
          ref={sliderRef}
          className="flex transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
        >
          {categories.map((category, index) => (
            <div 
              key={index}
              className="w-full flex-shrink-0 flex gap-4 px-4"
            >
              <div className={`w-1/2 relative rounded-lg overflow-hidden ${category.bgColor} p-8`}>
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-[400px] object-cover rounded-lg"
                  draggable="false"
                />
                <h2 className="absolute bottom-12 left-12 text-2xl font-bold text-white">
                  {category.title}
                </h2>
              </div>
              <div className={`w-1/2 relative rounded-lg overflow-hidden ${category.bgColor} p-8`}>
                <img
                  src={category.image}
                  alt="Featured Items"
                  className="w-full h-[400px] object-cover rounded-lg"
                  draggable="false"
                />
                <h2 className="absolute bottom-12 left-12 text-2xl font-bold text-white">
                  Featured {category.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button 
          onClick={nextSlide}
          className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors ${
            currentSlide === categories.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={currentSlide === categories.length - 1}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default CategorySlider;