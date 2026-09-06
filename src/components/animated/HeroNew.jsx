import React, { useEffect, useRef } from 'react';
import './HeroNew.scss';

const HeroNew = ({ children, videoRef }) => {
  const blobRef = useRef(null);
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      const targetX = (clientX - window.innerWidth / 2) / 25;
      const targetY = (clientY - window.innerHeight / 2) / 25;

      const updatePosition = () => {
        if (blobRef.current) {
          blobRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
        }
      };

      cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(updatePosition);
    };

    const handleScroll = () => {
      if (!videoRef || !videoRef.current) return;

      const scrollProgress = Math.min(window.scrollY / 500, 1);
      const scale = 1 + scrollProgress * 0.2;
      const translateY = scrollProgress * 28;

      videoRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <section className="hero-kitchen-container">
      {/* Layer 1: The paper texture (highest z-index to affect everything) */}
      <div className="grain-texture"></div>
      
      {/* Layer 2: The "Ingredients" (Middle layer) */}
      <div className="blobs-layer" ref={blobRef}>
        <div className="blob blob-navy"></div>
        <div className="blob blob-saffron"></div>
        <div className="blob blob-salmon"></div>
      </div>

      {/* Layer 3: Your content (Foreground) */}
      <div className="hero-interface-content">
        {children}
      </div>
    </section>
  );
};

export default HeroNew;