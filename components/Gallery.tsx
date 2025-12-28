
import React, { useState, useMemo, useEffect } from 'react';
import { ARTWORKS } from '../constants';
import { GoogleGenAI } from "@google/genai";
import { Artwork } from '../types';

const ImageWithSkeleton: React.FC<{ src: string; alt: string; className: string }> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse overflow-hidden">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent animate-[shimmer_2s_infinite]"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
    </div>
  );
};

const Gallery: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | (Artwork & { isGenerated?: boolean }) | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [isForging, setIsForging] = useState(false);
  const [forgePrompt, setForgePrompt] = useState('');
  const [generatedArtworks, setGeneratedArtworks] = useState<Artwork[]>([]);
  const [forgeError, setForgeError] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(ARTWORKS.map(a => a.category)));
    return ['ALL', 'EXPERIMENTAL FORGE', ...cats];
  }, []);

  const filteredArtworks = useMemo(() => {
    if (activeFilter === 'EXPERIMENTAL FORGE') return generatedArtworks;
    if (activeFilter === 'ALL') return [...generatedArtworks, ...ARTWORKS];
    return ARTWORKS.filter(a => a.category === activeFilter);
  }, [activeFilter, generatedArtworks]);

  const handleForge = async () => {
    if (!forgePrompt.trim()) return;
    
    setIsForging(true);
    setForgeError(null);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const styleInstruction = "Alandalussi style algorithmic generative art, complex recursive geometry, alchemical craft, angels and demons theme, high contrast, intricate skeletal structures, symmetrical chaos.";
      const fullPrompt = `${styleInstruction} Artifact description: ${forgePrompt}`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: fullPrompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1"
          }
        },
      });

      let imageData = '';
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          imageData = `data:image/png;base64,${part.inlineData.data}`;
          break;
        }
      }

      if (imageData) {
        const newArt: Artwork = {
          id: `gen-${Date.now()}`,
          title: `ARTIFACT-${Math.floor(Math.random() * 9000) + 1000}`,
          description: `Forged from the prompt: "${forgePrompt}". A transient algorithmic manifestation.`,
          imageUrl: imageData,
          category: 'Experimental'
        };
        setGeneratedArtworks(prev => [newArt, ...prev]);
        setForgePrompt('');
        setActiveFilter('EXPERIMENTAL FORGE');
      } else {
        throw new Error("No image was returned by the forge.");
      }
    } catch (err: any) {
      console.error("Forge failure:", err);
      setForgeError(err.message || "The alchemical forge failed to stabilize the artifact.");
    } finally {
      setIsForging(false);
    }
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-neutral-200 dark:border-white/10 pb-8">
        <div>
          <h2 className="font-cinzel text-4xl mb-4 text-neutral-900 dark:text-white">The Immortal Gallery</h2>
          <p className="text-neutral-500 dark:text-neutral-400 tracking-wide uppercase text-sm font-mono">[ AUTHENTICATED ARTIFACTS ]</p>
        </div>
        <div className="mt-4 md:mt-0 font-mono text-orange-600 dark:text-orange-500/60 text-xs">
          [ SYSTEM ACTIVE: {filteredArtworks.length} SEQUENCES RENDERED ]
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-4 mb-12 border-b border-neutral-100 dark:border-white/5 pb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`font-mono text-[10px] tracking-[0.2em] px-4 py-2 transition-all duration-300 ${
              activeFilter === cat 
              ? 'text-orange-600 dark:text-orange-500 border-b-2 border-orange-600 dark:border-orange-500 font-bold' 
              : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200'
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Alchemical Forge Interface */}
      {activeFilter === 'EXPERIMENTAL FORGE' && (
        <div className="mb-16 p-8 glass border-orange-500/30 bg-orange-600/5 rounded-sm animate-in fade-in slide-in-from-top-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-cinzel text-2xl text-white mb-4 tracking-widest">THE ALCHEMICAL FORGE</h3>
            <p className="text-neutral-400 text-sm mb-8 font-mono tracking-tight">
              Inject logic into the matrix to synthesize new artifacts. The forge interprets your prompt through the Alandalussi algorithmic lens.
            </p>
            
            <div className="relative">
              <textarea
                value={forgePrompt}
                onChange={(e) => setForgePrompt(e.target.value)}
                placeholder="Describe a divine geometry or abyssal pattern..."
                className="w-full bg-black/40 border border-neutral-700 dark:border-white/10 p-4 font-mono text-sm text-white focus:border-orange-500 outline-none transition-colors h-24 resize-none"
                disabled={isForging}
              />
              <button
                onClick={handleForge}
                disabled={isForging || !forgePrompt.trim()}
                className={`mt-4 w-full py-4 font-cinzel tracking-widest transition-all duration-500 ${
                  isForging 
                  ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed' 
                  : 'bg-orange-600 text-white hover:bg-orange-500 shadow-lg shadow-orange-600/20'
                }`}
              >
                {isForging ? 'TRANSMUTING ARTIFACT...' : 'FORGE NEW ARTIFACT'}
              </button>
            </div>
            
            {forgeError && (
              <p className="mt-4 text-red-500 font-mono text-[10px] uppercase tracking-widest">{forgeError}</p>
            )}

            {isForging && (
              <div className="mt-8 flex justify-center space-x-4 animate-pulse">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
        {filteredArtworks.map((art) => (
          <div 
            key={art.id}
            className="group relative aspect-square overflow-hidden bg-neutral-200 dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 cursor-pointer shadow-lg hover:shadow-orange-500/10 transition-shadow duration-500"
            onClick={() => setSelectedArtwork(art)}
          >
            <ImageWithSkeleton 
              src={art.imageUrl} 
              alt={art.title} 
              className="w-full h-full object-cover grayscale opacity-70 dark:opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-110"
            />
            
            {/* Top Badge for Source Code / Generated */}
            <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <span className={`text-white text-[8px] font-mono px-2 py-1 tracking-tighter uppercase rounded-sm ${art.id.startsWith('gen-') ? 'bg-blue-600' : 'bg-orange-600'}`}>
                 {art.id.startsWith('gen-') ? 'Synthesized Artifact' : 'Source-Code Available'}
               </span>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 dark:from-black via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
            
            <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-orange-500 text-xs font-mono mb-2 block tracking-widest uppercase">{art.category}</span>
              <h3 className="font-cinzel text-2xl text-white mb-2">{art.title}</h3>
              <p className="text-neutral-200 dark:text-neutral-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-light line-clamp-2">
                {art.description}
              </p>
            </div>

            {/* Frame Corner Decoration */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-orange-600 dark:border-orange-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-4"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-orange-600 dark:border-orange-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-4"></div>
          </div>
        ))}
        {filteredArtworks.length === 0 && activeFilter === 'EXPERIMENTAL FORGE' && !isForging && (
          <div className="col-span-full py-20 text-center border-2 border-dashed border-neutral-800 dark:border-white/5 opacity-50">
            <p className="font-mono text-xs tracking-[0.5em] text-neutral-500 uppercase">Forge remains cold. Enter a prompt above.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedArtwork && (
        <div 
          className="fixed inset-0 z-[100] bg-white/95 dark:bg-black/95 flex items-center justify-center p-6 animate-in fade-in duration-300"
          onClick={() => setSelectedArtwork(null)}
        >
          <div 
            className="max-w-5xl w-full flex flex-col md:flex-row gap-8 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-white/10 p-2 md:p-8 relative shadow-2xl animate-in zoom-in-95 duration-300 overflow-y-auto max-h-[90vh] md:max-h-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 text-neutral-800 dark:text-white text-3xl hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
              onClick={() => setSelectedArtwork(null)}
            >
              &times;
            </button>
            <div className="md:w-2/3 aspect-square overflow-hidden bg-neutral-200 dark:bg-black group border-4 border-neutral-300 dark:border-neutral-800 shadow-inner">
              <ImageWithSkeleton 
                src={selectedArtwork.imageUrl} 
                alt={selectedArtwork.title} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="md:w-1/3 flex flex-col justify-center py-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-orange-600 dark:text-orange-500 font-mono text-sm uppercase tracking-[0.3em]">{selectedArtwork.category}</span>
                <span className="h-[1px] flex-grow bg-neutral-200 dark:bg-white/10"></span>
              </div>
              <h2 className="font-cinzel text-4xl text-neutral-900 dark:text-white mb-6 uppercase tracking-tighter">{selectedArtwork.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 italic">
                {selectedArtwork.description}
              </p>
              
              <div className="space-y-4">
                <div className="bg-orange-600/5 dark:bg-orange-500/5 p-4 border border-orange-600/20 dark:border-orange-500/20">
                   <p className="text-[10px] font-mono text-orange-600 dark:text-orange-500 uppercase tracking-widest mb-1 font-bold">
                     {selectedArtwork.id.startsWith('gen-') ? 'AI Synthetic Manifestation' : 'Executable Software Available'}
                   </p>
                   <p className="text-[10px] text-neutral-500 dark:text-neutral-400 font-mono">
                     {selectedArtwork.id.startsWith('gen-') 
                       ? 'This artifact was forged in the matrix using experimental diffusion algorithms.' 
                       : 'Includes full algorithm source-code for local compilation and manipulation.'}
                   </p>
                </div>

                <div className="border-t border-neutral-200 dark:border-white/10 pt-6">
                  <p className="text-xs text-neutral-500 font-mono mb-2 uppercase">Authenticity Token</p>
                  <div className="bg-neutral-200 dark:bg-white/5 p-4 text-[10px] font-mono text-neutral-600 dark:text-neutral-400 break-all leading-relaxed border border-neutral-300 dark:border-white/5">
                    ALANDALUSSI_2026_ARTIFACT_{selectedArtwork.id.toUpperCase()}_0xAF3...E21
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
