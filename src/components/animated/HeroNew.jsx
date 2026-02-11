import React, { useEffect, useRef } from 'react';
import './HeroNew.scss';

const HeroNew = ({ children }) => {
  const blobRef = useRef(null);
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      // We calculate the target position
      const targetX = (clientX - window.innerWidth / 2) / 25;
      const targetY = (clientY - window.innerHeight / 2) / 25;

      // Using requestAnimationFrame for "Seated" levels of smoothness
      const updatePosition = () => {
        if (blobRef.current) {
          blobRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
        }
      };
      
      cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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