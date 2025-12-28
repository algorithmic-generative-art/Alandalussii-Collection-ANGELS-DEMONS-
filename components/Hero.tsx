
import React from 'react';
import { Page } from '../types';
import { MasterSigil } from './Navbar';

interface HeroProps {
  onExplore: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,128,0,0.12)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,128,0,0.08)_0%,transparent_70%)] transition-colors duration-500"></div>
      
      {/* Floating Ambient Sigils */}
      <div className="absolute top-1/4 left-10 opacity-5 animate-float hidden md:block">
        <MasterSigil className="w-32 h-32 rotate-12" />
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-5 animate-float delay-1000 hidden md:block">
        <MasterSigil className="w-24 h-24 -rotate-12" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <div className="mb-10 flex justify-center animate-sigil">
          <MasterSigil className="w-20 h-20 md:w-24 md:h-24" />
        </div>

        <h1 className="font-cinzel text-5xl md:text-8xl mb-4 tracking-tighter text-neutral-900 dark:text-white">
          Angels <span className="text-orange-600">&</span> Demons
        </h1>
        <p className="font-cinzel text-xl md:text-2xl mb-8 tracking-[0.4em] text-neutral-600 dark:text-neutral-400 uppercase">
          The Immortal Collection
        </p>
        
        <div className="h-[1px] w-24 bg-orange-600 mx-auto mb-8"></div>
        
        <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-12 font-light italic">
          "At the limits and frontiers of visual synthesis, computability, exploration, mind and imagination."
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button 
            onClick={() => onExplore(Page.Gallery)}
            className="px-10 py-5 bg-orange-600 text-white font-bold tracking-[0.2em] rounded-sm hover:bg-orange-700 transition-all duration-300 shadow-2xl shadow-orange-600/30 hover:-translate-y-1"
          >
            ENTER THE GALLERY
          </button>
          <button 
            onClick={() => onExplore(Page.About)}
            className="px-10 py-5 border border-neutral-300 dark:border-white/20 text-neutral-800 dark:text-white font-bold tracking-[0.2em] rounded-sm hover:bg-neutral-100 dark:hover:bg-white/5 transition-all duration-300"
          >
            THE CRAFT
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg className="w-6 h-6 text-neutral-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
