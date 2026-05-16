import React from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

export function FairOrderingQueue() {
  const inputs = [
    { id: 'C', delay: 0.5, color: 'bg-red-400' },
    { id: 'A', delay: 0, color: 'bg-blue-400' },
    { id: 'B', delay: 1, color: 'bg-green-400' },
  ];

  const outputs = [
    { id: 'A', delay: 2, color: 'bg-blue-400' },
    { id: 'B', delay: 2.5, color: 'bg-green-400' },
    { id: 'C', delay: 3, color: 'bg-red-400' },
  ];

  return (
    <div className="w-full flex items-center justify-between relative bg-black/40 p-8 rounded-xl border border-white/10 overflow-hidden h-64">
      
      {/* Input Stream (Random Order) */}
      <div className="flex flex-col space-y-4 w-1/4">
        {inputs.map((msg) => (
          <motion.div
            key={`in-${msg.id}`}
            className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-black shadow-lg ${msg.color}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: [0, 1, 0], x: [-50, 100] }}
            transition={{ duration: 2, delay: msg.delay, repeat: Infinity, repeatDelay: 2 }}
          >
            {msg.id}
          </motion.div>
        ))}
        <div className="text-xs text-hedera-silver text-center mt-2 absolute bottom-2 left-4">Network Arrival</div>
      </div>

      {/* Consensus Engine */}
      <div className="z-10 flex flex-col items-center justify-center p-6 rounded-full bg-hedera-navy border-4 border-hedera-cyan shadow-glow-cyan w-32 h-32">
        <Filter className="text-hedera-cyan w-8 h-8 mb-2" />
        <span className="text-xs font-bold text-white text-center">Consensus Engine</span>
      </div>

      {/* Output Stream (Fair Ordered) */}
      <div className="flex space-x-2 w-1/3 justify-end items-center h-full">
        {outputs.map((msg) => (
          <motion.div
            key={`out-${msg.id}`}
            className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-black shadow-lg ${msg.color}`}
            initial={{ opacity: 0, x: -50, scale: 0 }}
            animate={{ opacity: [0, 1, 1], x: [-50, 0, 0], scale: [0.5, 1, 1] }}
            transition={{ duration: 2, delay: msg.delay, repeat: Infinity, repeatDelay: 2 }}
          >
            {msg.id}
          </motion.div>
        ))}
        <div className="text-xs text-hedera-cyan text-center mt-2 absolute bottom-2 right-4 font-mono">Fair Ordered Output</div>
      </div>
    </div>
  );
}
