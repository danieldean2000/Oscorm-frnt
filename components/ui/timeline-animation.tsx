"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface TimelineContentProps {
  children: React.ReactNode;
  className?: string;
  animationNum: number;
  timelineRef: React.RefObject<HTMLDivElement | null>;
  customVariants?: any;
  as?: keyof React.JSX.IntrinsicElements;
}

export function TimelineContent({ 
  children, 
  className, 
  animationNum, 
  timelineRef, 
  customVariants,
  as: Component = "div" 
}: TimelineContentProps) {
  const MotionComponent = motion[Component as keyof typeof motion] as any;
  
  return (
    <MotionComponent
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={animationNum}
      variants={customVariants}
      ref={timelineRef}
    >
      {children}
    </MotionComponent>
  );
}
