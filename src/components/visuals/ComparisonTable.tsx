import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export function ComparisonTable() {
  const rows = [
    { feature: "Goal", trad: "Block Creation", hcs: "Event Ordering" },
    { feature: "Mining", trad: "Required", hcs: "No Mining" },
    { feature: "Finality", trad: "Slow (Minutes)", hcs: "Fast (Seconds)" },
    { feature: "Fees", trad: "High & Variable", hcs: "Low & Predictable" },
    { feature: "Throughput", trad: "Limited (TPS)", hcs: "High (10,000+ TPS)" }
  ];

  return (
    <div className="w-full bg-black/60 border border-white/20 rounded-xl overflow-hidden shadow-2xl">
      <div className="grid grid-cols-3 bg-hedera-navy/50 p-4 border-b border-white/10 font-bold text-center">
        <div className="text-left text-white">Feature</div>
        <div className="text-red-400">Traditional Systems</div>
        <div className="text-hedera-cyan">Hedera HCS</div>
      </div>
      
      {rows.map((row, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="grid grid-cols-3 p-4 border-b border-white/5 hover:bg-white/5 transition-colors text-center text-sm"
        >
          <div className="text-left font-semibold text-hedera-silver">{row.feature}</div>
          <div className="text-white/70">{row.trad}</div>
          <div className="text-white font-bold">{row.hcs}</div>
        </motion.div>
      ))}
    </div>
  );
}
