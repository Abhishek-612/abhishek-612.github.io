import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

const CustomCarousel = (props) => {
  const getOffsetRadius = (width) => {
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return 3;
  };

  const getDimensions = (width) => {
    if (width < 768) return { width: "70%", height: "500px" };
    if (width < 1024) return { width: "70%", height: "500px" };
    return { width: props.width, height: props.height };
  };

  const table = props.cards.map((element, index) => {
    
    return { ...element, onClick: (e) => handleCardClick(e, index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(getOffsetRadius(window.innerWidth));
  const [dimensions, setDimensions] = useState(getDimensions(window.innerWidth));
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);
  const touchTimeoutRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(touchTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    setShowArrows(props.showArrows);
  }, [props.showArrows]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setOffsetRadius(getOffsetRadius(width));
      setDimensions(getDimensions(width));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startAutoSlide = (delay = 3000) => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % cards.length);
    }, delay); 
  };

  useEffect(() => {
    setGoToSlide(currentSlide);
  }, [currentSlide]);

  const resetAutoSlide = () => {
    clearTimeout(touchTimeoutRef.current);
    touchTimeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, 3000); 
  };

  const handleCardClick = (e, index) => {
    const linkElement = e.target.innerHTML;
    if (linkElement.includes('<a')) {
      window.location.href = linkElement.match(/href="([^"]*)/)[1]; 
    }
    setGoToSlide(index);
  };
  

  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
    clearInterval(intervalRef.current);
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current - touchEndXRef.current > 50) {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % cards.length);
    } else if (touchStartXRef.current - touchEndXRef.current < -50) {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + cards.length) % cards.length);
    }
    resetAutoSlide(); 
  };

  
  const handleKeyDown = (e) => {
    resetAutoSlide();
    if (e.key === "ArrowRight") {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % cards.length);
    } else if (e.key === "ArrowLeft") {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + cards.length) % cards.length);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="carousel-container"
      style={{ width: dimensions.width, height: dimensions.height, margin: props.margin }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.molasses}
      />
    </div>
  );
};

export default CustomCarousel;
