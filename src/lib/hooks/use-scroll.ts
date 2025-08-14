// src/lib/hooks/use-scroll.ts
"use client";

import { useState, useEffect } from "react";

export function useScroll() {
  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0,
    scrolled: false,
    direction: "up" as "up" | "down",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((prevState) => {
        const currentY = window.scrollY;
        const direction = currentY > prevState.lastY ? "down" : "up";
        return {
          y: currentY,
          lastY: prevState.y,
          scrolled: currentY > 10,
          direction: direction,
        };
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollData;
}