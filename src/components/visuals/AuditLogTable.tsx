import React from 'react';
import { motion } from 'framer-motion';
import { Activity, FileText } from 'lucide-react';

export function AuditLogTable() {
  const logs = [
    { seq: 1042, time: '08:15:02.124Z', hash: '0x4f8a...92c', action: 'Login Event' },
    { seq: 1043, time: '08:15:05.881Z', hash: '0x8b2e...11f', action: 'Data Request' },
    { seq: 1044, time: '08:16:12.003Z', hash: '0x1a9c...77a', action: 'Record Updated' },
  ];

  return (
    <div className="w-full bg-black/60 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden shadow-2xl">
      <div className="flex items-center px-6 py-4 bg-hedera-navy/40 border-b border-white/10">
        <Activity className="w-5 h-5 text-hedera-cyan mr-3" />
        <h3 className="font-semibold text-white">Immutable Event Log (HCS)</h3>
      </div>
      
      <div className="p-0">
        <div className="grid grid-cols-4 gap-4 px-6 py-3 text-xs font-semibold text-hedera-silver uppercase tracking-wider bg-black/40">
          <div>Sequence</div>
          <div>Consensus Time</div>
          <div>Action</div>
          <div>Running Hash</div>
        </div>
        
        {logs.map((log, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + idx * 0.2 }}
            className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-white/5 hover:bg-white/5 transition-colors items-center"
          >
            <div className="text-sm font-mono text-white bg-white/10 px-2 py-1 rounded w-max">#{log.seq}</div>
            <div className="text-sm font-mono text-hedera-cyan">{log.time}</div>
            <div className="text-sm text-white flex items-center">
              <FileText className="w-4 h-4 mr-2 opacity-50" />
              {log.action}
            </div>
            <div className="text-xs font-mono text-hedera-silver truncate">{log.hash}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
