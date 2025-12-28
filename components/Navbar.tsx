
import React from 'react';
import { Page } from '../types';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const MasterSigil = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Base 8-pointed star (Rub el Hizb style) */}
    <path 
      d="M50 5 L62 38 L95 50 L62 62 L50 95 L38 62 L5 50 L38 38 Z" 
      stroke="#EA580C" 
      strokeWidth="3" 
      strokeLinejoin="round"
    />
    <path 
      d="M50 15 L58 42 L85 50 L58 58 L50 85 L42 58 L15 50 L42 42 Z" 
      stroke="#F59E0B" 
      strokeWidth="2" 
      strokeLinejoin="round"
      opacity="0.8"
    />
    
    {/* Interlacing Geometric Inner Pattern */}
    <rect x="25" y="25" width="50" height="50" stroke="#EA580C" strokeWidth="2" transform="rotate(45 50 50)" />
    <rect x="25" y="25" width="50" height="50" stroke="#EA580C" strokeWidth="2" />
    
    {/* Central Core Sigil */}
    <circle cx="50" cy="50" r="12" stroke="#F59E0B" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="4" fill="#EA580C" />
    
    {/* Ornamental Corner Dots (Andalusian Detail) */}
    <circle cx="50" cy="12" r="1.5" fill="#EA580C" />
    <circle cx="50" cy="88" r="1.5" fill="#EA580C" />
    <circle cx="12" cy="50" r="1.5" fill="#EA580C" />
    <circle cx="88" cy="50" r="1.5" fill="#EA580C" />
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, theme, onToggleTheme }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-neutral-200 dark:border-white/5 bg-white/80 dark:bg-neutral-950/70 h-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setCurrentPage(Page.Home)}
        >
          <div className="animate-sigil">
            <MasterSigil className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:rotate-90" />
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-xl tracking-widest text-neutral-900 dark:text-white gold-glow leading-none">ALANDALUSSI</span>
            <span className="text-[9px] tracking-[0.4em] text-orange-600 dark:text-orange-500/80 uppercase mt-1">Angels & Demons</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id as Page)}
              className={`text-[11px] font-bold tracking-[0.3em] transition-all duration-300 hover:text-orange-600 dark:hover:text-orange-500 ${
                currentPage === item.id ? 'text-orange-600 dark:text-orange-500 border-b border-orange-600 dark:border-orange-500' : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <button 
            onClick={onToggleTheme}
            className="p-2 ml-4 rounded-full bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
           <button 
            onClick={onToggleTheme}
            className="p-2 rounded-full bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-400"
          >
             {theme === 'dark' ? '☀' : '🌙'}
          </button>
          <button className="text-neutral-900 dark:text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
