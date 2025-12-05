import React from "react";
import { ArrowRight, Terminal, BookOpen } from "lucide-react";
import Button from "./ui/Button";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#66FCF1] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#45a29e] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#45a29e]/30 bg-[#45a29e]/10 text-[#66FCF1] text-xs font-medium mb-8 backdrop-blur-sm animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-[#66FCF1] mr-2 animate-pulse"></span>
            Standardize your AI behavior
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
            The Lightest Shared Standard for <br />
            <span className="text-gradient">AI Agents</span>
          </h1>

          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            One <code className="bg-[#1F2833] px-2 py-1 rounded text-[#66FCF1]">AGENTS.md</code> file.
            Works across Claude Code, Cursor, and every AI coding assistant.
            No fragmentation. No complex tooling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/leochiu-a/universal-agents"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg" icon={<Terminal size={20} />}>
                Install CLI
              </Button>
            </a>
            <Button variant="secondary" size="lg" icon={<BookOpen size={18} />}>
              Read the Protocol
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-gray-500 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <span>Protocol Standard</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <span>CLI Included</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <span>Runtime Agnostic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
