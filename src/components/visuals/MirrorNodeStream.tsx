import React from 'react';
import { motion } from 'framer-motion';
import { Database, Monitor, Server, ArrowRight } from 'lucide-react';

export function MirrorNodeStream() {
  return (
    <div className="w-full flex items-center justify-between relative bg-black/40 p-8 rounded-xl border border-white/10 overflow-hidden h-64">
      
      {/* Main Consensus Network */}
      <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-black border border-hedera-blue shadow-glow-blue w-1/4 h-full relative">
        <Server className="text-hedera-cyan w-10 h-10 mb-2" />
        <span className="text-xs font-bold text-white text-center">Consensus Nodes</span>
        
        {/* Pulsing output stream */}
        <motion.div 
          className="absolute right-[-40px] top-1/2 w-8 h-1 bg-hedera-cyan shadow-glow-cyan"
          animate={{ x: [0, 80], opacity: [1, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Mirror Node (Storage) */}
      <div className="z-10 flex flex-col items-center justify-center p-6 rounded-lg bg-hedera-navy border-2 border-hedera-cyan shadow-glow-cyan w-1/3">
        <Database className="text-white w-12 h-12 mb-2" />
        <span className="text-sm font-bold text-white text-center">Mirror Node</span>
        <span className="text-[10px] text-hedera-silver text-center mt-1">Storage & APIs</span>
      </div>

      {/* API Consumers */}
      <div className="flex flex-col justify-center space-y-6 w-1/4 relative">
        
        {/* Stream to Consumer 1 */}
        <motion.div 
          className="absolute left-[-50px] top-4 w-8 h-0.5 bg-green-400 shadow-glow-cyan"
          animate={{ x: [0, 50], opacity: [1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.2 }}
        />
        
        <div className="flex items-center space-x-2 bg-black/80 p-2 rounded border border-green-400/30">
          <Monitor className="w-5 h-5 text-green-400" />
          <span className="text-[10px] text-white">App Frontend</span>
        </div>

        {/* Stream to Consumer 2 */}
        <motion.div 
          className="absolute left-[-50px] bottom-6 w-8 h-0.5 bg-blue-400 shadow-glow-blue"
          animate={{ x: [0, 50], opacity: [1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.8 }}
        />

        <div className="flex items-center space-x-2 bg-black/80 p-2 rounded border border-blue-400/30">
          <Server className="w-5 h-5 text-blue-400" />
          <span className="text-[10px] text-white">Backend Server</span>
        </div>
      </div>
    </div>
  );
}
