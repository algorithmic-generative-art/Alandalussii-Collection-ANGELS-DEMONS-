
import React from 'react';
import { MasterSigil } from './Navbar';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 border-t border-neutral-200 dark:border-white/5 bg-neutral-100 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-4">
           <MasterSigil className="w-10 h-10 opacity-50 dark:opacity-40" />
           <div className="flex flex-col">
              <span className="font-cinzel text-sm text-neutral-900 dark:text-white tracking-[0.3em] font-bold">ALANDALUSSI</span>
              <span className="text-[10px] text-neutral-500 dark:text-neutral-500 font-mono mt-1">THE IMMORTAL COLLECTION &copy; 2026</span>
           </div>
        </div>
        
        <div className="flex space-x-10 text-[10px] font-mono tracking-widest text-neutral-500 dark:text-neutral-500 uppercase">
           <span className="hover:text-orange-600 dark:hover:text-orange-500 cursor-pointer transition-colors border-b border-transparent hover:border-orange-500 pb-1">Privacy</span>
           <span className="hover:text-orange-600 dark:hover:text-orange-500 cursor-pointer transition-colors border-b border-transparent hover:border-orange-500 pb-1">Algorithm Rights</span>
           <span className="hover:text-orange-600 dark:hover:text-orange-500 cursor-pointer transition-colors border-b border-transparent hover:border-orange-500 pb-1">Matrix Source</span>
        </div>
        
        <div className="text-[10px] font-mono text-orange-600 dark:text-orange-500/60 uppercase tracking-[0.4em] font-bold border border-orange-600/20 px-4 py-2">
           ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};

export default Footer;
