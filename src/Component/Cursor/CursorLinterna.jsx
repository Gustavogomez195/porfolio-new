import React, { useState, useEffect } from 'react';

const CursorLinterna = () => {
  const [position, setPosition] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0">
      <div
        className="absolute bg-transparent pointer-events-none"
        style={{
          width: '100vw',
          height: '100vh',
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(240, 240, 240, 0.1), rgba(0, 0, 0, 0) 110px)`,
          zIndex: -1
        }}
      />
    </div>
  );
};

export default CursorLinterna;
