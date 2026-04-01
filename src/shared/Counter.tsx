import { useEffect, useState, useRef } from 'react';
import { useMotionValue, useTransform, motion, animate, useInView } from 'motion/react';

interface CounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function Counter({ value, duration = 4, prefix = '', suffix = '', decimals = 0 }: CounterProps) {
  const count = useMotionValue(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const rounded = useTransform(count, (latest) => {
    return prefix + latest.toLocaleString('pt-BR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) + suffix;
  });

  const [displayValue, setDisplayValue] = useState(prefix + "0" + suffix);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: duration,
      ease: [0.16, 1, 0.3, 1], // Custom slow-out curve
    });

    return rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
  }, [isInView, value, duration]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}
