import { motion } from "framer-motion";
import React from "react";

// Le delay détermine aussi la direction (si delay===3, on fait x:50, sinon x:-50)
type MotionSectionProps = {
  delay: number;
  children: React.ReactNode;
  className?: string;
};

export default function MotionSection({
  delay,
  children,
  className,
}: MotionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: delay === 3 ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: delay * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, amount: 0.4 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
