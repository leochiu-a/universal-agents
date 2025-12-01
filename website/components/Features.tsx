import React from 'react';
import { Layout, BookOpen, Repeat } from 'lucide-react';

const features = [
  {
    icon: <BookOpen size={24} />,
    title: "Execution Protocol",
    description: "A strict manifesto that tells agents exactly how to load skills, enforce rules, and declare context before starting a task."
  },
  {
    icon: <Layout size={24} />,
    title: "Unified Structure",
    description: "Forget fragmentation. Organize everything in .agents/ with a clear separation between passive Rules and executable Skills."
  },
  {
    icon: <Repeat size={24} />,
    title: "Cross-Runtime",
    description: "Whether you use Cursor, Claude Code, or a custom LLM loop, Universal Agents provides a common language they all understand."
  }
];

const Features: React.FC = () => {
  return (
    <section id="protocol" className="py-24 relative bg-[#0B0C10]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-[#66FCF1] font-semibold tracking-wide uppercase">Why Use It?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            One Standard to Rule Them All
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Bring order to your AI workflow with a reference layout that scales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-2xl hover:border-[#66FCF1]/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-[#1F2833] rounded-lg flex items-center justify-center text-[#66FCF1] mb-6 group-hover:bg-[#66FCF1] group-hover:text-[#0B0C10] transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div id="comparison" className="mt-24 glass-card rounded-2xl overflow-hidden border border-gray-800">
            <div className="px-6 py-4 border-b border-gray-800 bg-[#1F2833]">
                <h3 className="text-lg font-bold text-white">Rules vs. Skills</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-800">
                    <thead className="bg-[#171f26]">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Aspect</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-[#66FCF1] uppercase tracking-wider">Rules (Cursor-style)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-[#45a29e] uppercase tracking-wider">Skills (Claude-style)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Content Type</td>
                            <td className="px-6 py-4 text-sm text-gray-400">Textual guardrails & guidelines</td>
                            <td className="px-6 py-4 text-sm text-gray-400">End-to-end packages & tooling</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Execution</td>
                            <td className="px-6 py-4 text-sm text-gray-400">Agent interprets manually</td>
                            <td className="px-6 py-4 text-sm text-gray-400">Production-tested snippets</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Analogy</td>
                            <td className="px-6 py-4 text-sm text-gray-400">The Manual</td>
                            <td className="px-6 py-4 text-sm text-gray-400">The Manual + Toolbox</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Features;