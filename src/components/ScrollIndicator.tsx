import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  text?: string;
}

export function ScrollIndicator({ text = "Continue descobrindo" }: ScrollIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
    >
      <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-2 text-center">
        {text}
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
      </motion.div>
    </motion.div>
  );
}
