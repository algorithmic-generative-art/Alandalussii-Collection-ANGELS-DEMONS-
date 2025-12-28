
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Handle dark mode class on document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const renderContent = () => {
    switch (currentPage) {
      case Page.Home:
        return (
          <>
            <Hero onExplore={setCurrentPage} />
            <section className="py-24 px-6 text-center max-w-4xl mx-auto">
              <h2 className="font-cinzel text-3xl text-neutral-900 dark:text-white mb-8 tracking-widest underline decoration-orange-500/30 underline-offset-8">THE CRAFT & THE ART</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg mb-12">
                A metaverse world of discovery and explorations into ALANDALUSSI algorithmic generative processes, schemes and methods, breaking down the limits and frontiers of computational synthesis, IT, Artificial Intelligence, mind and imagination.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                 <div className="aspect-square bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-white/10 overflow-hidden group">
                    <img 
                      src="https://picsum.photos/seed/hermetica/1280/1024" 
                      className="w-full h-full object-cover opacity-80 dark:opacity-50 group-hover:opacity-100 transition-opacity duration-1000"
                      alt="Hermetica Sinica"
                    />
                 </div>
                 <div className="text-left space-y-6">
                    <h3 className="font-cinzel text-xl text-orange-600 dark:text-orange-500">Beyond Bitmaps</h3>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                       Our work is sculpted and painted through years of AI-trained algorithmic programming. Each canvas render goes with the algorithm which generated it.
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm italic font-light">
                       "Any of our canvas is not a bitmap stuff, but an executable editable generative algorithm."
                    </p>
                    <button 
                      onClick={() => setCurrentPage(Page.About)}
                      className="px-6 py-3 border border-orange-600 dark:border-orange-500/50 text-orange-600 dark:text-orange-500 hover:bg-orange-600 dark:hover:bg-orange-500 hover:text-white transition-all duration-300 text-xs tracking-widest font-bold"
                    >
                      READ THE MANIFESTO
                    </button>
                 </div>
              </div>
            </section>
          </>
        );
      case Page.Gallery:
        return <Gallery />;
      case Page.About:
        return <AboutSection />;
      case Page.Contact:
        return <ContactSection />;
      default:
        return <Hero onExplore={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen theme-transition bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-orange-600/30 selection:text-orange-600 dark:selection:text-orange-500">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} theme={theme} onToggleTheme={toggleTheme} />
      
      <main className="pt-20">
        {renderContent()}
      </main>

      <Footer />

      {/* Persistent Call to Action - Scroll to top if on long page */}
      {currentPage !== Page.Home && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-[60] w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-700 transition-transform active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default App;
