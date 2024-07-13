// PageTransition.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from "../components/common/logo";
import NavBar from "../components/common/navBar";
import "./styles/pageTransition.css";
import "../data/styles.css";


const routeVariants = {
    initial: {
      opacity: 0,
      y: "100vh",
    },
    animate: {
      opacity: 1,
      y: "0vh",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: "-100vh",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.3,
      },
    },
  };
  

  const childVariants = {
    initial: {
      opacity: 0,
      y: "50px",
    },
    animate: {
      opacity: 1,
      y: "0px",
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: "-50px",
      transition: {
        duration: 0.3,
      },
    },
  };


  const LogoTransition = () => {
    const [progress, setProgress] = useState(0);
    const circleRef = useRef(null);
  
    useEffect(() => {
      const circle = circleRef.current;
      const radius = circle.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;
      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = circumference;
  
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        setProgress(scrollPercent);
  
        const offset = circumference - scrollPercent * circumference;
        circle.style.strokeDashoffset = offset;
      }
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <div className="logo-container">
        <div className="fixed-logo">
          <Logo width={46} link={false} />
          <svg className="progress-ring" width="86" height="86">
            <circle
              ref={circleRef}
              className="progress-ring__circle"
              stroke='#265bac'
              strokeWidth="3"
              fill='transparent'
              r="24"
              cx="43"
              cy="43"
            />
          </svg>
        </div>
      </div>
    )
  }
  
  const PageTransition = ({ children }) => {
    const location = useLocation();
  
    return (
      <div className="page-content">
        <div className="logo-navbar-container">
            <div className="logo-container">
              <LogoTransition />
            </div>
            <div className="navbar-container">
              <NavBar active={location.pathname} />
            </div>
        </div>
        <div className="main-content">
          <AnimatePresence mode='wait'>
            <motion.div
              key={location.pathname}
              variants={routeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  };
  
  export { PageTransition, routeVariants, childVariants };