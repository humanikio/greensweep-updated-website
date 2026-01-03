'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = 'Before',
  afterAlt = 'After',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-white shadow-xl cursor-ew-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={handleClick}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          className="object-cover pointer-events-none"
          draggable={false}
        />
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-md text-sm font-semibold z-10">
          AFTER
        </div>
      </div>

      {/* Before Image (Overlay with clip) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="relative w-full h-full" style={{ width: `${100 / (sliderPosition / 100)}%` }}>
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            className="object-cover brightness-75 saturate-50 pointer-events-none"
            draggable={false}
          />
        </div>
        <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-semibold z-10">
          BEFORE
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onMouseDown={handleMouseDown}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white shadow-lg -translate-x-1/2" />

        {/* Handle Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white rounded-full p-2 shadow-lg border-4 border-accent hover:scale-110 transition-transform">
            <div className="flex items-center gap-0">
              <ChevronLeft className="h-5 w-5 text-accent" />
              <ChevronRight className="h-5 w-5 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
