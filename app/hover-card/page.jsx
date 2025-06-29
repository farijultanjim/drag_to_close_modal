"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CardStack() {
  const [hovered, setHovered] = useState(false);

  const cards = [
    { zIndex: 3, bg: "bg-blue-500", y: 0 },
    { zIndex: 2, bg: "bg-pink-500", y: 10 },
    { zIndex: 1, bg: "bg-green-500", y: 20 },
  ];

  // On hover, spread in X and rotate on X-axis (tilting toward/away from screen)
  const hoverVariants = [
    { rotateX: 15, x: -60, y: -20 },
    { rotateX: 0, x: 0, y: 0 },
    { rotateX: -15, x: 60, y: 20 },
  ];

  return (
    <div
      className="relative w-[250px] h-[400px] mx-auto cursor-pointer perspective-1000"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{
            rotateX: 0,
            x: 0,
            y: card.y,
            zIndex: card.zIndex,
          }}
          animate={
            hovered
              ? {
                  rotateX: hoverVariants[i].rotateX,
                  x: hoverVariants[i].x,
                  y: hoverVariants[i].y,
                  zIndex: card.zIndex,
                }
              : {
                  rotateX: 0,
                  x: 0,
                  y: card.y,
                  zIndex: card.zIndex,
                }
          }
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
          }}
          className={`absolute w-full h-full rounded-xl shadow-2xl ${card.bg} origin-center`}
          style={{
            transformStyle: "preserve-3d",
          }}
        />
      ))}
    </div>
  );
}
