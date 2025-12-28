
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-cinzel text-4xl text-neutral-900 dark:text-white mb-4">Contact & Inquiry</h2>
        <div className="h-[1px] w-12 bg-orange-600 mx-auto mb-4"></div>
        <p className="text-neutral-600 dark:text-neutral-400 font-light">For algorithms script-codes and NFT source-work inquiries.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass bg-white dark:bg-neutral-950/70 p-10 flex flex-col items-center text-center border border-neutral-200 dark:border-white/10 shadow-lg dark:shadow-none hover:border-orange-600/30 transition-colors duration-500">
          <div className="w-12 h-12 bg-orange-600/10 dark:bg-orange-600/20 rounded-full flex items-center justify-center mb-6 text-orange-600 dark:text-orange-500">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
             </svg>
          </div>
          <h3 className="font-cinzel text-lg text-neutral-900 dark:text-white mb-4">Location Roots</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-mono tracking-tighter">
            Sevilla<br/>Cordoba-Toledo<br/>Constantine
          </p>
        </div>

        <div className="glass bg-white dark:bg-neutral-950/70 p-10 flex flex-col items-center text-center border border-neutral-200 dark:border-white/10 shadow-lg dark:shadow-none hover:border-orange-600/30 transition-colors duration-500">
          <div className="w-12 h-12 bg-orange-600/10 dark:bg-orange-600/20 rounded-full flex items-center justify-center mb-6 text-orange-600 dark:text-orange-500">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
             </svg>
          </div>
          <h3 className="font-cinzel text-lg text-neutral-900 dark:text-white mb-4">Digital Mail</h3>
          <div className="flex flex-col gap-2">
            <a 
              href="mailto:algorithmic.generative.art@gmail.com" 
              className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed hover:text-orange-600 dark:hover:text-orange-500 transition-colors font-mono"
            >
              algorithmic.generative.art@gmail.com
            </a>
            <a 
              href="mailto:alandalussi@algorithmic-generative-art.net" 
              className="text-neutral-600 dark:text-neutral-400 text-xs leading-relaxed hover:text-orange-600 dark:hover:text-orange-500 transition-colors font-mono opacity-60"
            >
              alandalussi@algorithmic-generative-art.net
            </a>
          </div>
        </div>

        <div className="glass bg-white dark:bg-neutral-950/70 p-10 flex flex-col items-center text-center border border-neutral-200 dark:border-white/10 shadow-lg dark:shadow-none hover:border-orange-600/30 transition-colors duration-500">
          <div className="w-12 h-12 bg-orange-600/10 dark:bg-orange-600/20 rounded-full flex items-center justify-center mb-6 text-orange-600 dark:text-orange-500">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
             </svg>
          </div>
          <h3 className="font-cinzel text-lg text-neutral-900 dark:text-white mb-4">Presence</h3>
          <div className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4 font-mono">
            <a href="https://www.deviantart.com/alandalussii" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors">deviantart.com/alandalussii</a><br/>
            <a href="https://algorithmic-generative-art.net" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors">algorithmic-generative-art.net</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
