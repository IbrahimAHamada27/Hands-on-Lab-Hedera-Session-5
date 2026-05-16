import React from 'react';
import { motion } from 'framer-motion';

export function NetworkGraph() {
  const nodes = [
    { id: 0, x: 50, y: 20 },
    { id: 1, x: 80, y: 50 },
    { id: 2, x: 65, y: 80 },
    { id: 3, x: 35, y: 80 },
    { id: 4, x: 20, y: 50 },
    { id: 5, x: 50, y: 50 }, // Center
  ];

  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 0],
    [0, 5], [1, 5], [2, 5], [3, 5], [4, 5]
  ];

  return (
    <div className="w-full max-w-sm aspect-square relative bg-black/40 rounded-full border border-white/10 p-8 shadow-glow-blue">
      <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
        {edges.map(([source, target], i) => (
          <motion.line
            key={`edge-${i}`}
            x1={nodes[source].x}
            y1={nodes[source].y}
            x2={nodes[target].x}
            y2={nodes[target].y}
            stroke="#165D9E"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: i * 0.1 }}
          />
        ))}

        {nodes.map((node) => (
          <g key={`node-${node.id}`}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={4}
              fill="#00FFFF"
              className="drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: node.id * 0.1 + 0.5 }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
