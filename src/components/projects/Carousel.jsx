import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

const CustomCarousel = (props) => {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
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
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  const startAutoSlide = (delay = 4000) => {
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
    }, 4000); 
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
      style={{ width: props.width, height: props.height, margin: props.margin }}
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
