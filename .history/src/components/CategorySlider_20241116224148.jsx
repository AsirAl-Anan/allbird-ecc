import React, { useState, useRef } from 'react';
import { ChevronRight } from 'lucide-react';


const CategorySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  const sliderRef = useRef(null);
  
  const categories = [
    {
      id: 'mens',
      title: "MEN'S COLLECTION",
      image: '',
      featured: ''
    },
    {
      id: 'womens',
      title: "WOMEN'S COLLECTION",
      image: '',
      featured: ''
    },
   
  
  ];

  // Drag functionality handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartPos(e.pageX || e.touches[0].clientX);
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'none';
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    const currentPosition = e.pageX || e.touches[0].clientX;
    const diff = currentPosition - startPos;
    const newTranslate = prevTranslate + diff;
    
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

    if (Math.abs(movedBy) > 100) {
      if (movedBy > 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      } else if (movedBy < 0 && currentSlide < categories.length - 1) {
        setCurrentSlide(prev => prev + 1);
      }
    } else {
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
      }
    }

    setPrevTranslate(-(currentSlide * sliderRef.current?.offsetWidth));
  };

  const nextSlide = () => {
    if (currentSlide < categories.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Navigation Tabs */}
      <nav className="flex justify-center mb-4 sm:mb-8 flex-wrap">
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => setCurrentSlide(index)}
            className={`px-2 py-1 sm:px-6 sm:py-2 text-sm transition-all relative ${
              index === currentSlide 
                ? 'text-black font-medium' 
                : 'text-gray-500'
            }`}
          >
            {category.title}
            {index === currentSlide && (
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black" />
            )}
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
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className="w-full flex-shrink-0 flex flex-col sm:flex-row gap-4"
            >
              <div className="w-full sm:w-1/2 relative bg-[#FFF8E7] rounded-lg overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-[300px] sm:h-[600px] object-cover"
                  draggable="false"
                />
                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8">
                  <h2 className="text-xl sm:text-2xl font-medium text-black">
                    {category.title}
                  </h2>
                </div>
              </div>
              <div className="w-full sm:w-1/2 relative bg-[#FFF8E7] rounded-lg overflow-hidden">
                <img
                  src={category.featured}
                  alt={`Featured ${category.title}`}
                  className="w-full h-[300px] sm:h-[600px] object-cover"
                  draggable="false"
                />
                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8">
                  <h2 className="text-xl sm:text-2xl font-medium text-black">
                    Featured {category.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button 
          onClick={nextSlide}
          className={`absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-md flex items-center justify-center ${
            currentSlide === categories.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
          }`}
          disabled={currentSlide === categories.length - 1}
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};

export default CategorySlider;
