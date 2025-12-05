import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CodePreview from './components/CodePreview';
import Footer from './components/Footer';
import Compatibility from './components/Compatibility';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0C10] text-[#C5C6C7]">
      <Navbar />
      <main>
        <Hero />
        <Compatibility />
        <CodePreview />
        <Features />
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto glass-card rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#66FCF1] rounded-full mix-blend-overlay filter blur-[100px] opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-10"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to standardize your agents?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              No vendor lock-in. No complex tooling. Just a single Markdown file that every AI assistant understands.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <div className="bg-[#0B0C10] px-6 py-3 rounded-lg border border-gray-800 font-mono text-sm text-gray-300">
                npx universal-agents init
              </div>
              <a href="https://github.com/leochiu-a/universal-agents" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#66FCF1] text-[#0B0C10] px-8 py-3 rounded-lg font-bold hover:bg-[#45a29e] transition-colors shadow-[0_0_20px_rgba(102,252,241,0.4)]">
                  View on GitHub
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;