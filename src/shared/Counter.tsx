import { useEffect, useState } from 'react';
import { useMotionValue, useSpring, useTransform, motion, animate } from 'motion/react';

interface CounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function Counter({ value, duration = 2, prefix = '', suffix = '', decimals = 0 }: CounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return prefix + latest.toLocaleString('pt-BR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) + suffix;
  });

  const [displayValue, setDisplayValue] = useState(prefix + "0" + suffix);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: duration,
      ease: "easeOut",
    });

    return rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
  }, [value, duration]);

  return <motion.span>{displayValue}</motion.span>;
}
