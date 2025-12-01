import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050608] border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl text-white mb-2">universal-agents</h3>
        <p className="text-gray-400">
          An open-source community project
        </p>
      </div>
    </footer>
  );
};

export default Footer;