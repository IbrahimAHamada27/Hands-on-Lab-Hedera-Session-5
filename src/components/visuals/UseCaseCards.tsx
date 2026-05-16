import React from 'react';
import { motion } from 'framer-motion';
import { Database, ShieldCheck, Factory, Leaf } from 'lucide-react';

export function UseCaseCards() {
  const cases = [
    { icon: <Factory />, title: "Supply Chain", text: "Datahash tracks agricultural data to combat fraud." },
    { icon: <ShieldCheck />, title: "Enterprise Auditing", text: "Acoer creates tamper-proof logs for drone flights." },
    { icon: <Leaf />, title: "Sustainability", text: "Hyundai verifies carbon emissions transparently." },
    { icon: <Database />, title: "Finance", text: "Diamond Standard secures commodity token records." },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      {cases.map((c, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.2 }}
          className="bg-black/60 border border-white/20 p-6 rounded-xl flex flex-col items-center text-center shadow-lg hover:border-hedera-cyan/50 hover:shadow-glow-cyan transition-all"
        >
          <div className="w-12 h-12 rounded-full bg-hedera-navy flex items-center justify-center text-hedera-cyan mb-4">
            {c.icon}
          </div>
          <h3 className="text-white font-bold mb-2">{c.title}</h3>
          <p className="text-hedera-silver text-sm">{c.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
