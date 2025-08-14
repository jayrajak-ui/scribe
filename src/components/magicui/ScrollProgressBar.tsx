// src/components/ScrollProgressBar.tsx

"use client";

import React, { useState, useEffect } from 'react';

export const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollableHeight = documentHeight - windowHeight;
    const scrolled = window.scrollY;

    if (scrollableHeight > 0) {
      const percentage = (scrolled / scrollableHeight) * 100;
      setScrollPercentage(percentage);
    } else {
      setScrollPercentage(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 z-50 h-1 w-full"
      style={{
        backgroundColor: '#e5e7eb', // This is a light gray background for the track
      }}
    >
      <div 
        className="h-full"
        style={{
          width: `${scrollPercentage}%`,
          backgroundColor: '#215FFF', // Your primary blue hex code
        }}
      />
    </div>
  );
};