// PageTransition.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from "../components/common/logo";
import NavBar from "../components/common/navBar";
import "./styles/pageTransition.css";


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


const LogoTransition = ( {stay} ) => {

        const [stayLogo, setStayLogo] = useState(false);
        const [logoSize, setLogoSize] = useState(80);
        const [oldLogoSize, setOldLogoSize] = useState(80);

        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        useEffect(() => {
            const handleScroll = () => {
            let scroll = Math.round(window.pageYOffset, 2);
            let newLogoSize = Math.round(80 - (scroll * 2.7) / 10, 2);

            if (newLogoSize < oldLogoSize) {
                if (newLogoSize > 46) {
                setLogoSize(newLogoSize);
                setOldLogoSize(newLogoSize);
                setStayLogo(false);
                } else {
                setStayLogo(true);
                }
            } else {
                setLogoSize(newLogoSize);
                setStayLogo(false);
            }
            }

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, [logoSize, oldLogoSize]);

        const logoStyle = {
            display: "flex",
            position: stayLogo ? "fixed" : "relative",
            top: stayLogo ? "3vh" : "auto",
            marginLeft: "15%",
            zIndex: 999,
            border: "1px solid white",
            borderRadius: "50%",
            boxShadow:  "0px 4px 10px rgba(0, 0, 0, 0.25)" ,
        };
    

    return (
        <React.Fragment>
            <div className={stay === "true" ? "fixed-logo-container" : stayLogo ? "fixed-logo-container" : "relative-logo-container"} style={stay==="false" && stayLogo ? {paddingBottom: '13.5%'} : {}}>
                <div className={stay === "true" ? "fixed-logo" : stayLogo ? "fixed-logo" : ""} style={stay === "true" ? {} : !stayLogo ? logoStyle : {}}>
                <Logo width={stay === "true" ? 46 : stayLogo ? 46 : logoSize}  link={false}/>
                </div>
            </div>
        </React.Fragment>
    )
}

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <div className="page-content">
    <NavBar active={location.pathname} />
    <LogoTransition stay={location.pathname==="/" ? "false" : "true"} />
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
  );
};

export { PageTransition, routeVariants, childVariants };
