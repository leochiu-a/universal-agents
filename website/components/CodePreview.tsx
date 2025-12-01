import React, { useState } from 'react';
import { Copy, Check, Terminal, FolderTree } from 'lucide-react';

const CodePreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cli' | 'structure'>('cli');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    cli: `# Install the CLI globally
pnpm install --global universal-agents

# Initialize universal agents in your project
ua init

# Create a new skill (e.g. for database access)
ua create skill

# Create a new rule (e.g. for coding standards)
ua create rule`,
    structure: `project-root/
├── AGENTS.md            # Control manifest & execution protocol
└── .agents/
    ├── rules/           # Guidelines & conventions
    │   ├── typescript.md
    │   └── api-design.md
    └── skills/          # Executable actions & tools
        ├── git-commit/
        │   └── SKILL.md
        └── db-migrate/
            └── SKILL.md`
  };

  const descriptions = {
    cli: "Get started in seconds. Use the CLI to bootstrap the canonical folder structure and generate templates for rules and skills.",
    structure: "A predictable layout. Separate your 'Rules' (manuals/conventions) from 'Skills' (toolboxes/workflows) to keep agent behavior consistent."
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="cli" className="py-20 bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Unified configuration,<br/>
              <span className="text-gray-400">universal execution.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Stop fragmentation between Claude Code, Cursor, and other assistants. Universal Agents provides a single source of truth for how your AI helpers should behave.
            </p>
            
            <div className="bg-[#1F2833]/50 border border-gray-800 rounded-lg p-6">
               <p className="text-[#66FCF1] font-mono mb-2 text-sm">{activeTab.toUpperCase()}</p>
               <p className="text-gray-300">{descriptions[activeTab]}</p>
            </div>

            <ul className="space-y-4">
              {[
                "Consistent behavior across runtimes",
                "Bootstraps with known-good configurations",
                "Separates guardrails (Rules) from tools (Skills)",
                "Easy sharing of agent capabilities"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-[#45a29e]/20 flex items-center justify-center mr-3 text-[#66FCF1]">
                    <Check size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Code Window */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-[#1F2833] animate-float order-1 lg:order-2">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#171f26] border-b border-gray-800">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex space-x-1 bg-black/20 p-1 rounded-lg">
                <button
                    onClick={() => setActiveTab('cli')}
                    className={`px-3 py-1 text-xs font-medium rounded-md flex items-center gap-2 transition-all ${
                      activeTab === 'cli' ? 'bg-[#66FCF1] text-[#0B0C10]' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                  <Terminal size={12} /> CLI
                </button>
                <button
                    onClick={() => setActiveTab('structure')}
                    className={`px-3 py-1 text-xs font-medium rounded-md flex items-center gap-2 transition-all ${
                      activeTab === 'structure' ? 'bg-[#66FCF1] text-[#0B0C10]' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                  <FolderTree size={12} /> Structure
                </button>
              </div>
              <button 
                onClick={handleCopy}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Code Content */}
            <div className="p-6 overflow-x-auto min-h-[300px]">
              <pre className="font-mono text-sm text-gray-300">
                <code>{codeSnippets[activeTab]}</code>
              </pre>
            </div>
            
            {/* Terminal Footer */}
            <div className="px-4 py-2 bg-[#171f26] border-t border-gray-800 flex items-center text-xs text-gray-500 font-mono">
              <Terminal size={12} className="mr-2" />
              <span>Universal Agents v1.0.0</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CodePreview;