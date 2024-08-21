import React, { useState, useEffect } from 'react';

const CursorLinterna = ({darkMode}) => {
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
    <div className="pointer-events-none lg:fixed inset-0">
      <div
        className={`absolute ${darkMode ? "bg-white" : "bg-black"} rounded-full pointer-events-none`}
        style={{
          width: '18px',
          height: '18px',
          top: position.y - 10,
          left: position.x - 10,
          zIndex: 99999, 
        }}
      />
    </div>
  );
};

export default CursorLinterna;
