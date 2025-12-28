
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-neutral-100 dark:bg-neutral-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-cinzel text-3xl text-orange-600 dark:text-orange-500 mb-8 underline decoration-orange-600/30 dark:decoration-orange-500/30 underline-offset-8">The Alchemy of Logic</h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 font-light">
              Algorithmic generative art is a creative fusion of math and code. It is a form of art where predefined rules, mathematical formulas, or procedural logic are used to generate visuals.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed italic border-l-2 border-orange-600 dark:border-orange-500/50 pl-6 py-2 bg-orange-600/5 dark:bg-orange-500/5">
              "No-Pixels neither Bitmaps. All of our canvas it is not a bitmap, but an executable editable generative algorithm."
            </p>
          </div>
          <div className="flex items-center justify-center">
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-sm blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-7 py-6 bg-white dark:bg-neutral-950 ring-1 ring-neutral-200 dark:ring-white/10 rounded-sm leading-none flex flex-col items-center shadow-lg">
                   <span className="text-orange-600 dark:text-orange-500 text-6xl font-cinzel mb-2 animate-float">Ω</span>
                   <span className="text-neutral-500 dark:text-neutral-400 text-xs font-mono uppercase tracking-widest">Quantum State Stability</span>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-neutral-200 dark:border-white/5 pt-16">
          <div className="space-y-4">
             <h3 className="font-cinzel text-xl text-neutral-900 dark:text-white">Fractals</h3>
             <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Self-similar patterns generated using recursive algorithms. Mandelbrot sets and organic branching designs that mimic natural complexity.
             </p>
          </div>
          <div className="space-y-4">
             <h3 className="font-cinzel text-xl text-neutral-900 dark:text-white">Cellular Automata</h3>
             <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Grid-based systems evolving based on simple local rules. Conway's Game of Life applied to aesthetic morphogenesis.
             </p>
          </div>
          <div className="space-y-4">
             <h3 className="font-cinzel text-xl text-neutral-900 dark:text-white">Perlin Noise</h3>
             <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Gradient noise algorithms creating natural-looking textures and terrains, widely used in procedural landscapes.
             </p>
          </div>
        </div>

        <div className="mt-24 p-8 bg-transparent border-t border-b border-neutral-200 dark:border-orange-500/20 text-center">
          <h2 className="font-cinzel text-2xl text-neutral-900 dark:text-white mb-6 uppercase tracking-widest">Historical Context</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-sm text-neutral-600 dark:text-neutral-400">
             <p>
                From M.C. Escher's tessellations to the 1960s pioneers like Vera Molnar and Frieder Nake, the lineage of generative art seeks to explore patterns, symmetry, and randomness.
             </p>
             <p>
                Modern tools like Processing and p5.js have democratized this alchemical process, allowing for the deep research developments under pursuit by Alandalussi since the Odyssey year 2001.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
