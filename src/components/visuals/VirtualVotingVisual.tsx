import React from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';

export function VirtualVotingVisual() {
  const nodes = [
    { id: 0, x: 50, y: 15 },
    { id: 1, x: 85, y: 40 },
    { id: 2, x: 75, y: 85 },
    { id: 3, x: 25, y: 85 },
    { id: 4, x: 15, y: 40 },
    { id: 5, x: 50, y: 50 }, // Center
  ];

  const mathSymbols = ["∑", "f(x)", "hash()", "v++", "true"];

  return (
    <div className="w-full max-w-sm aspect-square relative bg-black/40 rounded-full border border-white/10 p-8 shadow-glow-blue">
      {/* Central icon to represent computation instead of network edges */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <Calculator size={100} className="text-hedera-cyan" />
      </div>

      <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
        
        {/* Nodes doing local math */}
        {nodes.map((node, i) => (
          <g key={`node-${node.id}`}>
            {/* Glowing Aura indicating local processing */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={12}
              fill="rgba(0, 255, 255, 0.1)"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            />
            
            {/* Base Node */}
            <circle cx={node.x} cy={node.y} r={6} fill="#00FFFF" className="drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
            
            {/* Math Symbols popping up next to nodes */}
            <motion.text
              x={node.x + 8}
              y={node.y - 8}
              fill="#FFFFFF"
              fontSize="8"
              fontFamily="monospace"
              className="drop-shadow-md"
              animate={{ opacity: [0, 1, 0], y: [node.y - 5, node.y - 15] }}
              transition={{ duration: 1.5, delay: i * 0.4, repeat: Infinity, repeatDelay: 1 }}
            >
              {mathSymbols[i % mathSymbols.length]}
            </motion.text>
          </g>
        ))}
      </svg>
      
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="text-xs font-mono text-hedera-silver/80">No vote messages sent over network.</p>
        <p className="text-xs font-mono text-hedera-cyan">100% Local Calculation</p>
      </div>
    </div>
  );
}
