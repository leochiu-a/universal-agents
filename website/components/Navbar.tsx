import React, { useState, useEffect } from 'react';
import { Github, Terminal } from 'lucide-react';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-card border-b-0' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#66FCF1] to-[#45a29e] flex items-center justify-center">
              <Terminal className="text-[#0B0C10]" size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Universal Agents</span>
          </div>

          <div className="flex items-center">
            <a href="https://github.com/leochiu-a/universal-agents" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm" icon={<Github size={16} />}>
                Star on GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;