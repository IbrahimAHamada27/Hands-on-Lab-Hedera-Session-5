import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { SlideData } from '../../data/slides';

import { NetworkGraph } from '../visuals/NetworkGraph';
import { TopicWorkflow } from '../visuals/TopicWorkflow';
import { ComparisonTable } from '../visuals/ComparisonTable';
import { UseCaseCards } from '../visuals/UseCaseCards';
import { AuditLogTable } from '../visuals/AuditLogTable';
import { GossipAnimation } from '../visuals/GossipAnimation';
import { VirtualVotingVisual } from '../visuals/VirtualVotingVisual';
import { FairOrderingQueue } from '../visuals/FairOrderingQueue';
import { ABFTVisual } from '../visuals/ABFTVisual';
import { MirrorNodeStream } from '../visuals/MirrorNodeStream';

interface SlideRendererProps {
  slide: SlideData;
}

export function SlideRenderer({ slide }: SlideRendererProps) {
  const isCenter = slide.visual === 'hero' || slide.visual === 'none';

  return (
    <div className={`flex flex-col md:flex-row w-full max-w-7xl items-center gap-12 ${isCenter ? 'justify-center' : 'justify-between'}`}>
      
      {/* Text Content */}
      <div className={`flex-1 flex flex-col ${isCenter ? 'items-center text-center' : 'items-start'}`}>
        <motion.h2 
          key={`title-${slide.id}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-5xl md:text-6xl font-bold mb-4 text-glow-cyan text-white tracking-tight ${isCenter ? 'text-center' : 'text-left'}`}
        >
          {slide.title}
        </motion.h2>

        {slide.subtitle && (
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-light text-hedera-cyan mb-8 border-l-4 border-hedera-cyan pl-4"
          >
            {slide.subtitle}
          </motion.p>
        )}

        {slide.highlight && (
          <motion.h3
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`text-4xl md:text-5xl font-light text-white mb-8 bg-black/50 px-8 py-4 rounded-2xl border border-hedera-cyan/40 shadow-glow-cyan ${isCenter ? 'text-center' : 'text-left'}`}
          >
            {slide.highlight}
          </motion.h3>
        )}

        <GlassCard className="w-full bg-black/60 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl">
          <ul className={`space-y-6 text-xl text-hedera-silver ${isCenter ? 'text-center' : 'text-left'}`}>
            {slide.content.map((line, idx) => {
              const isBullet = line.trim().startsWith('•');
              const text = isBullet ? line.replace('•', '').trim() : line;
              
              return (
                <motion.li
                  key={`${slide.id}-line-${idx}`}
                  initial={{ opacity: 0, x: isCenter ? 0 : -30, y: isCenter ? 20 : 0 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.15 }}
                  className={`flex items-start ${isCenter ? 'justify-center' : 'justify-start'} ${isBullet ? 'text-white/90 font-light' : 'font-semibold text-white'}`}
                >
                  {isBullet && (
                    <span className="mr-3 mt-1 text-hedera-cyan">
                      <ChevronRight size={20} />
                    </span>
                  )}
                  {!isBullet && slide.visual === 'useCases' && (
                    <span className="mr-3 mt-1 text-green-400">
                      <CheckCircle2 size={24} />
                    </span>
                  )}
                  <span className="leading-relaxed">{text}</span>
                </motion.li>
              );
            })}
          </ul>
        </GlassCard>
      </div>

      {/* Visual Content */}
      {!isCenter && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex-1 w-full flex items-center justify-center relative"
        >
          {slide.visual === 'network' && <NetworkGraph />}
          {slide.visual === 'workflow' && <TopicWorkflow />}
          {slide.visual === 'comparison' && <ComparisonTable />}
          {slide.visual === 'useCases' && <UseCaseCards />}
          {slide.visual === 'auditLog' && <AuditLogTable />}
          {slide.visual === 'gossip' && <GossipAnimation />}
          {slide.visual === 'voting' && <VirtualVotingVisual />}
          {slide.visual === 'ordering' && <FairOrderingQueue />}
          {slide.visual === 'abft' && <ABFTVisual />}
          {slide.visual === 'mirror' && <MirrorNodeStream />}
        </motion.div>
      )}

      {/* Footer for Final Slide */}
      {slide.id === 36 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="fixed bottom-6 left-0 w-full flex items-center justify-center space-x-2 text-xs md:text-sm text-hedera-silver tracking-widest z-50 pointer-events-auto whitespace-nowrap"
        >
          <span className="font-light">Developed by Eng. Ibrahim A. Hamada</span>
          <span className="text-white/30">|</span>
          <span className="text-hedera-cyan font-semibold">Microsoft Student Club AOU - Web Team</span>
        </motion.div>
      )}
    </div>
  );
}
