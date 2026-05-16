import React from 'react';
import { motion } from 'framer-motion';

export function GossipAnimation() {
  const nodes = [
    { id: 0, x: 50, y: 15 },
    { id: 1, x: 85, y: 40 },
    { id: 2, x: 75, y: 85 },
    { id: 3, x: 25, y: 85 },
    { id: 4, x: 15, y: 40 },
    { id: 5, x: 50, y: 50 }, // Center
  ];

  // Stage 1: Node 0 pulses
  // Stage 2: Node 0 sends to 1 and 4
  // Stage 3: Nodes 1 and 4 pulse
  // Stage 4: 1 sends to 2,5. 4 sends to 3,5.
  // Stage 5: 2,3,5 pulse.

  return (
    <div className="w-full max-w-sm aspect-square relative bg-black/40 rounded-full border border-white/10 p-8 shadow-glow-blue">
      <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
        
        {/* Static Edges */}
        {[ [0,1], [1,2], [2,3], [3,4], [4,0], [0,5], [1,5], [2,5], [3,5], [4,5] ].map(([s, t], i) => (
          <line key={`edge-${i}`} x1={nodes[s].x} y1={nodes[s].y} x2={nodes[t].x} y2={nodes[t].y} stroke="#165D9E" strokeWidth="1" opacity="0.3" />
        ))}

        {/* Animated Pulses (Gossip Spread) */}
        {/* 0 -> 1 */}
        <motion.circle cx={nodes[0].x} cy={nodes[0].y} r={3} fill="#00FFFF"
          animate={{ cx: [nodes[0].x, nodes[1].x], cy: [nodes[0].y, nodes[1].y], opacity: [0, 1, 0] }}
          transition={{ duration: 1, delay: 1, repeat: Infinity, repeatDelay: 4 }}
        />
        {/* 0 -> 4 */}
        <motion.circle cx={nodes[0].x} cy={nodes[0].y} r={3} fill="#00FFFF"
          animate={{ cx: [nodes[0].x, nodes[4].x], cy: [nodes[0].y, nodes[4].y], opacity: [0, 1, 0] }}
          transition={{ duration: 1, delay: 1, repeat: Infinity, repeatDelay: 4 }}
        />

        {/* 1 -> 2, 1 -> 5 */}
        <motion.circle cx={nodes[1].x} cy={nodes[1].y} r={3} fill="#00FFFF"
          animate={{ cx: [nodes[1].x, nodes[2].x], cy: [nodes[1].y, nodes[2].y], opacity: [0, 1, 0] }}
          transition={{ duration: 1, delay: 2.2, repeat: Infinity, repeatDelay: 4 }}
        />
        <motion.circle cx={nodes[1].x} cy={nodes[1].y} r={3} fill="#00FFFF"
          animate={{ cx: [nodes[1].x, nodes[5].x], cy: [nodes[1].y, nodes[5].y], opacity: [0, 1, 0] }}
          transition={{ duration: 1, delay: 2.2, repeat: Infinity, repeatDelay: 4 }}
        />

        {/* 4 -> 3 */}
        <motion.circle cx={nodes[4].x} cy={nodes[4].y} r={3} fill="#00FFFF"
          animate={{ cx: [nodes[4].x, nodes[3].x], cy: [nodes[4].y, nodes[3].y], opacity: [0, 1, 0] }}
          transition={{ duration: 1, delay: 2.2, repeat: Infinity, repeatDelay: 4 }}
        />

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={`node-${node.id}`}>
            {/* Base Node */}
            <circle cx={node.x} cy={node.y} r={5} fill="#165D9E" />
            
            {/* Highlight Animation based on stages */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={6}
              fill="#00FFFF"
              className="drop-shadow-[0_0_15px_rgba(0,255,255,1)]"
              animate={{ 
                opacity: 
                  node.id === 0 ? [1, 0, 0, 0, 1] :
                  (node.id === 1 || node.id === 4) ? [0, 1, 0, 0, 0] :
                  [0, 0, 1, 0, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
