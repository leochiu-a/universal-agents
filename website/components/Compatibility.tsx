import React from 'react';
import { Terminal, MousePointer2, MessageSquareCode, Code2, Sparkles, FileJson } from 'lucide-react';

const Compatibility: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0B0C10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Universal Compatibility</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Write your rules once. Run them everywhere. The Universal Agents standard bridges the gap between different AI assistants.
          </p>
        </div>

        {/* Animation Container */}
        <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center select-none">
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#66FCF1]/5 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Central Hub */}
          <div className="relative z-20 flex flex-col items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-[#1F2833] border-2 border-[#66FCF1] shadow-[0_0_50px_rgba(102,252,241,0.2)] flex items-center justify-center relative z-20">
              <Terminal size={48} className="text-[#66FCF1]" />
              {/* Pulsing effect */}
              <div className="absolute inset-0 bg-[#66FCF1] rounded-2xl animate-ping opacity-20"></div>
            </div>
            <div className="mt-4 text-center">
              <div className="text-white font-bold text-lg">Universal Agents</div>
              <div className="text-[#66FCF1] text-xs font-mono bg-[#66FCF1]/10 px-2 py-1 rounded mt-1">AGENTS.md</div>
            </div>
          </div>

          {/* Orbiting Agents */}
          {/* We position them absolutely around the center using a predefined layout for clarity */}
          
          {/* Top Left: Claude */}
          <div className="absolute top-[10%] left-[5%] md:top-[15%] md:left-[20%] z-20 flex flex-col items-center animate-float" style={{ animationDelay: '0s' }}>
            <div className="w-16 h-16 rounded-xl bg-[#2d3a4b] border border-[#d97757]/50 flex items-center justify-center shadow-lg mb-2">
              <MessageSquareCode size={32} className="text-[#d97757]" />
            </div>
            <span className="text-gray-300 font-medium">Claude Code</span>
          </div>

          {/* Top Right: Cursor */}
          <div className="absolute top-[10%] right-[5%] md:top-[15%] md:right-[20%] z-20 flex flex-col items-center animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="w-16 h-16 rounded-xl bg-[#2d3a4b] border border-[#3b82f6]/50 flex items-center justify-center shadow-lg mb-2">
              <MousePointer2 size={32} className="text-[#3b82f6]" />
            </div>
            <span className="text-gray-300 font-medium">Cursor</span>
          </div>

          {/* Bottom Left: Codex */}
          <div className="absolute bottom-[10%] left-[5%] md:bottom-[15%] md:left-[20%] z-20 flex flex-col items-center animate-float" style={{ animationDelay: '2s' }}>
             <div className="w-16 h-16 rounded-xl bg-[#2d3a4b] border border-[#10b981]/50 flex items-center justify-center shadow-lg mb-2">
              <Code2 size={32} className="text-[#10b981]" />
            </div>
            <span className="text-gray-300 font-medium">Codex</span>
          </div>

          {/* Bottom Right: Gemini */}
          <div className="absolute bottom-[10%] right-[5%] md:bottom-[15%] md:right-[20%] z-20 flex flex-col items-center animate-float" style={{ animationDelay: '0.5s' }}>
             <div className="w-16 h-16 rounded-xl bg-[#2d3a4b] border border-[#8b5cf6]/50 flex items-center justify-center shadow-lg mb-2">
              <Sparkles size={32} className="text-[#8b5cf6]" />
            </div>
            <span className="text-gray-300 font-medium">Gemini</span>
          </div>

          {/* Connecting Lines (SVG Overlay) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block">
             <defs>
               <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="rgba(102, 252, 241, 0)" />
                 <stop offset="50%" stopColor="rgba(102, 252, 241, 0.5)" />
                 <stop offset="100%" stopColor="rgba(102, 252, 241, 0)" />
               </linearGradient>
               <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#45a29e" fillOpacity="0.5" />
              </marker>
             </defs>
             
             {/* Lines radiating from center to approximate node positions */}
             {/* Note: Coordinates are approximations based on % positions above. 
                 Center is roughly 50% 50%.
                 TL: 20% 15% -> x1=50% y1=50%, x2=23% y2=23%
             */}
             
             {/* Top Left Line */}
             <line x1="50%" y1="50%" x2="23%" y2="23%" stroke="#1F2833" strokeWidth="2" />
             <circle r="4" fill="#d97757">
               <animateMotion dur="3s" repeatCount="indefinite" path="M500,300 L230,138" calcMode="linear" />
             </circle>

             {/* Top Right Line */}
             <line x1="50%" y1="50%" x2="77%" y2="23%" stroke="#1F2833" strokeWidth="2" />
             <circle r="4" fill="#3b82f6">
               <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s" path="M500,300 L770,138" calcMode="linear" />
             </circle>

             {/* Bottom Left Line */}
             <line x1="50%" y1="50%" x2="23%" y2="77%" stroke="#1F2833" strokeWidth="2" />
             <circle r="4" fill="#10b981">
               <animateMotion dur="3s" repeatCount="indefinite" begin="2s" path="M500,300 L230,462" calcMode="linear" />
             </circle>

             {/* Bottom Right Line */}
             <line x1="50%" y1="50%" x2="77%" y2="77%" stroke="#1F2833" strokeWidth="2" />
             <circle r="4" fill="#8b5cf6">
               <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s" path="M500,300 L770,462" calcMode="linear" />
             </circle>
          </svg>
          
          {/* Mobile Lines (Simpler) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 md:hidden opacity-30">
             <line x1="50%" y1="50%" x2="15%" y2="15%" stroke="#66FCF1" strokeWidth="1" strokeDasharray="5,5" />
             <line x1="50%" y1="50%" x2="85%" y2="15%" stroke="#66FCF1" strokeWidth="1" strokeDasharray="5,5" />
             <line x1="50%" y1="50%" x2="15%" y2="85%" stroke="#66FCF1" strokeWidth="1" strokeDasharray="5,5" />
             <line x1="50%" y1="50%" x2="85%" y2="85%" stroke="#66FCF1" strokeWidth="1" strokeDasharray="5,5" />
          </svg>

        </div>
      </div>
    </section>
  );
};

export default Compatibility;