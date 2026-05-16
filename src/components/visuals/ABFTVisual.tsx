import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ShieldAlert } from 'lucide-react';

export function ABFTVisual() {
  const nodes = [
    { id: 0, x: 50, y: 15, status: 'good' },
    { id: 1, x: 85, y: 40, status: 'good' },
    { id: 2, x: 75, y: 85, status: 'bad' },
    { id: 3, x: 25, y: 85, status: 'good' },
    { id: 4, x: 15, y: 40, status: 'bad' },
    { id: 5, x: 50, y: 50, status: 'good' }, // Center
  ];

  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 0],
    [0, 5], [1, 5], [2, 5], [3, 5], [4, 5]
  ];

  return (
    <div className="w-full max-w-sm aspect-square relative bg-black/40 rounded-full border border-white/10 p-8 shadow-glow-blue">
      
      {/* Central Consensus Shield */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <ShieldCheck size={120} className="text-green-400" />
        </motion.div>
      </div>

      <svg className="w-full h-full overflow-visible relative z-10" viewBox="0 0 100 100">
        
        {/* Edges */}
        {edges.map(([source, target], i) => {
          const isBadEdge = nodes[source].status === 'bad' || nodes[target].status === 'bad';
          return (
            <motion.line
              key={`edge-${i}`}
              x1={nodes[source].x}
              y1={nodes[source].y}
              x2={nodes[target].x}
              y2={nodes[target].y}
              stroke={isBadEdge ? "#ef4444" : "#165D9E"}
              strokeWidth={isBadEdge ? "1" : "1.5"}
              strokeDasharray={isBadEdge ? "4 4" : "0"}
              opacity={isBadEdge ? 0.5 : 1}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={`node-${node.id}`}>
            {/* Glowing Aura indicating local processing */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={8}
              fill={node.status === 'bad' ? "rgba(239, 68, 68, 0.3)" : "rgba(0, 255, 255, 0.3)"}
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: node.status === 'bad' ? 0.5 : 2, delay: node.id * 0.3, repeat: Infinity }}
            />
            
            <circle 
              cx={node.x} 
              cy={node.y} 
              r={5} 
              fill={node.status === 'bad' ? "#ef4444" : "#00FFFF"} 
              className={node.status === 'bad' ? "drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]" : "drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"} 
            />
          </g>
        ))}
      </svg>

      <div className="absolute bottom-2 left-0 right-0 text-center">
        <p className="text-xs font-mono text-hedera-silver flex items-center justify-center">
          <ShieldAlert size={14} className="text-red-400 mr-2" /> Malicious Nodes Handled
        </p>
        <p className="text-xs font-mono text-green-400 font-bold mt-1">Consensus Reached 100%</p>
      </div>
    </div>
  );
}
