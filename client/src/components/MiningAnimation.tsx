import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Play, Pause, Lock, GitMerge, Globe } from 'lucide-react';

const MiningAnimation = () => {
  const [nonce, setNonce] = useState(0);
  const [hash, setHash] = useState('');
  const [isRunning, setIsRunning] = useState(true);
  const [foundValid, setFoundValid] = useState(false);
  
  useEffect(() => {
    if (!isRunning) return;
    const frame = { current: 0 };
    const animate = () => {
      if (!isRunning) return;
      setNonce(n => n + 1);
      if (frame.current % 3 === 0) {
        setHash(Array.from({ length: 64 }, () => 
          Math.floor(Math.random() * 16).toString(16)).join('')
        );
      }
      frame.current = requestAnimationFrame(animate);
    };
    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, [isRunning]);

  useEffect(() => {
    if (hash.startsWith('000')) {
      setFoundValid(true);
      setTimeout(() => setFoundValid(false), 1000);
    }
  }, [hash]);

  return (
    <Card className="p-3 sm:p-4 bg-gray-50 dark:bg-[#171717] max-w-full overflow-hidden dark:border-neutral-800">
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm">
          <div className="flex flex-wrap items-center gap-3">
            <span>Mining...</span>
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4 text-blue-500" />
              <span className="text-gray-600 text-xs sm:text-sm">Network: 823.74 EH/s</span>
            </div>
          </div>
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="p-1.5 bg-blue-500 text-white rounded hover:bg-blue-600 self-end sm:self-auto"
          >
            {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>

        <div className={`font-mono text-[0.7rem] sm:text-sm ${foundValid ? 'bg-green-100 dark:bg-green-900' : 'bg-white dark:bg-[#1a1a1a]'} 
          p-2 rounded flex flex-wrap transition-colors duration-300 dark:text-white`}>
          {hash.split('').map((char, i) => (
            <span key={i} className={`w-4 sm:w-5 text-center ${i < 3 ? 'text-red-500 font-bold' : ''}`}>
              {char}
            </span>
          ))}
        </div>

        <div className="text-xs sm:text-sm space-y-1.5">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <span>Global race for "000" hash</span>
          </div>
          <div className="flex items-center gap-2">
            <GitMerge className="w-4 h-4 text-purple-500 flex-shrink-0" />
            <span>Winner earns: BTC + ELA rewards</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MiningAnimation;
