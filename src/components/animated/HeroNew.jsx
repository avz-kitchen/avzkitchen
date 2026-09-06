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
      const startX = -160;
      const endX = 180;
      const startWidth = 440;
      const endWidth = 820;
      const startHeight = 440;
      const endHeight = 492;

      const x = startX + scrollProgress * (endX - startX);
      const y = scrollProgress * 20;
      const width = startWidth + scrollProgress * (endWidth - startWidth);
      const height = startHeight + scrollProgress * (endHeight - startHeight);

      videoRef.current.style.width = `${width}px`;
      videoRef.current.style.height = `${height}px`;
      videoRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
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