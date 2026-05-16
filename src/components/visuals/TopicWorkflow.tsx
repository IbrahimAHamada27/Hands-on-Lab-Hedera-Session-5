import React from 'react';
import { motion } from 'framer-motion';
import { Server, Send, Hash, ArrowRight } from 'lucide-react';

export function TopicWorkflow() {
  const steps = [
    { id: 1, icon: <Hash />, title: "Create Topic", desc: "Topic ID Generated" },
    { id: 2, icon: <Send />, title: "Submit Msg", desc: "App sends data" },
    { id: 3, icon: <Server />, title: "Consensus", desc: "Network orders it" },
  ];

  return (
    <div className="w-full flex items-center justify-between relative bg-black/40 p-8 rounded-xl border border-white/10">
      <div className="absolute top-1/2 left-10 right-10 h-1 bg-hedera-blue/30 -translate-y-1/2 -z-10" />
      
      {steps.map((step, i) => (
        <React.Fragment key={step.id}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
            className="flex flex-col items-center bg-black/80 p-4 rounded-xl border border-hedera-cyan/30 shadow-glow-cyan"
          >
            <div className="text-hedera-cyan mb-2">{step.icon}</div>
            <h4 className="font-bold text-white text-sm whitespace-nowrap">{step.title}</h4>
            <p className="text-xs text-hedera-silver mt-1">{step.desc}</p>
          </motion.div>
          
          {i < steps.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.3 + 0.2 }}
              className="text-hedera-cyan/50"
            >
              <ArrowRight />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
