import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import './landing.css';
import Image from '@/public/0.png';

export default function Landing() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: containerRef, 
      offset: ["start start", "end start"],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-40%", "200%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "373%"]);
  const textX = useTransform(scrollYProgress, [0,1], ["0", "600%"]);

  return (
    <div className="Background">
      <div className="container" ref={containerRef}>
        <div className="title-container">
          <motion.h1 className="title" style={{ y: textY }}>DAAN KOEKKOEK</motion.h1>
        </div>
        <div className="parallax">
          <motion.div className="image1" style={{ y: backgroundY,}}>  </motion.div>
          <div className="text-container">
            <motion.p className="background-text" style={{ y: textX }}>Daanoontje</motion.p>
            <motion.p className="background-text" style={{ y: textX }}>KockKock</motion.p>
            <motion.p className="background-text" style={{ y: textX }}>MrKoekkoek</motion.p>
            <motion.p className="background-text" style={{ y: textX }}>Daanoontje</motion.p>
            <motion.p className="background-text" style={{ y: textX }}>KockKock</motion.p>
            <motion.p className="background-text" style={{ y: textX }}>MrKoekkoek</motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
