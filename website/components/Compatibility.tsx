import React from 'react';
import { Terminal, MousePointer2, MessageSquareCode, Code2, Sparkles } from 'lucide-react';

type AgentConfig = {
  id: string;
  label: string;
  color: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  positionClass: string;
};

const AGENTS: AgentConfig[] = [
  {
    id: 'claude',
    label: 'Claude Code',
    color: '#d97757',
    Icon: MessageSquareCode,
    positionClass: 'absolute top-[10%] left-[5%] md:top-[15%] md:left-[20%]',
  },
  {
    id: 'cursor',
    label: 'Cursor',
    color: '#3b82f6',
    Icon: MousePointer2,
    positionClass: 'absolute top-[10%] right-[5%] md:top-[15%] md:right-[20%]',
  },
  {
    id: 'codex',
    label: 'Codex',
    color: '#10b981',
    Icon: Code2,
    positionClass: 'absolute bottom-[10%] left-[5%] md:bottom-[15%] md:left-[20%]',
  },
  {
    id: 'gemini',
    label: 'Gemini',
    color: '#8b5cf6',
    Icon: Sparkles,
    positionClass: 'absolute bottom-[10%] right-[5%] md:bottom-[15%] md:right-[20%]',
  },
];

const Compatibility: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const hubRef = React.useRef<HTMLDivElement | null>(null);
  const nodeRefs = React.useRef<Record<string, HTMLDivElement | null>>({});
  const [dimensions, setDimensions] = React.useState({ width: 1000, height: 600 });
  const [connections, setConnections] = React.useState<
    Record<string, { x1: number; y1: number; x2: number; y2: number }>
  >({});

  const updatePositions = React.useCallback(() => {
    const container = containerRef.current;
    const hub = hubRef.current;
    if (!container || !hub) return;

    const containerRect = container.getBoundingClientRect();
    const hubRect = hub.getBoundingClientRect();

    setDimensions({
      width: containerRect.width || 1000,
      height: containerRect.height || 600,
    });

    const hubCenter = {
      x: hubRect.left - containerRect.left + hubRect.width / 2,
      y: hubRect.top - containerRect.top + hubRect.height / 2,
    };

    const connectorPositions: Record<string, { x1: number; y1: number; x2: number; y2: number }> = {};

    AGENTS.forEach((agent) => {
      const node = nodeRefs.current[agent.id];
      if (!node) return;
      const nodeRect = node.getBoundingClientRect();
      connectorPositions[agent.id] = {
        x1: hubCenter.x,
        y1: hubCenter.y,
        x2: nodeRect.left - containerRect.left + nodeRect.width / 2,
        y2: nodeRect.top - containerRect.top + nodeRect.height / 2,
      };
    });

    setConnections((prev) => {
      const changed =
        Object.keys(connectorPositions).length !== Object.keys(prev).length ||
        Object.entries(connectorPositions).some(([key, value]) => {
          const prevValue = prev[key];
          if (!prevValue) return true;
          return (
            prevValue.x1 !== value.x1 ||
            prevValue.y1 !== value.y1 ||
            prevValue.x2 !== value.x2 ||
            prevValue.y2 !== value.y2
          );
        });

      return changed ? connectorPositions : prev;
    });
  }, []);

  React.useEffect(() => {
    updatePositions();
    window.addEventListener('resize', updatePositions);
    return () => {
      window.removeEventListener('resize', updatePositions);
    };
  }, [updatePositions]);

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
        <div
          ref={containerRef}
          className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center select-none"
        >
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#66FCF1]/5 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Central Hub */}
          <div className="relative z-20 flex flex-col items-center justify-center" ref={hubRef}>
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
          
          {AGENTS.map(({ id, label, color, Icon, positionClass }) => (
            <div
              key={id}
              ref={(el) => {
                nodeRefs.current[id] = el;
              }}
              className={`${positionClass} z-20 flex flex-col items-center`}
            >
              <div className="w-16 h-16 rounded-xl bg-[#2d3a4b] border border-[#ffffff]/10 flex items-center justify-center shadow-lg mb-2" style={{ borderColor: `${color}80` }}>
                <Icon size={32} className="text-current" style={{ color }} />
              </div>
              <span className="text-gray-300 font-medium">{label}</span>
            </div>
          ))}

          {/* Connecting Lines (SVG Overlay) */}
          {dimensions.width > 0 && dimensions.height > 0 && (
            <>
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block"
                viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
                preserveAspectRatio="none"
              >
                {AGENTS.map(({ id, color }) => {
                  const positions = connections[id];
                  if (!positions) return null;
                  const path = `M${positions.x1},${positions.y1} L${positions.x2},${positions.y2}`;
                  return (
                    <g key={id}>
                      <line
                        x1={positions.x1}
                        y1={positions.y1}
                        x2={positions.x2}
                        y2={positions.y2}
                        stroke="#1F2833"
                        strokeWidth="2"
                      />
                      <circle r="4" fill={color}>
                        <animateMotion dur="3s" repeatCount="indefinite" path={path} />
                      </circle>
                    </g>
                  );
                })}
              </svg>

              {/* Mobile Lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10 md:hidden opacity-60"
                viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
                preserveAspectRatio="none"
              >
                {AGENTS.map(({ id }) => {
                  const positions = connections[id];
                  if (!positions) return null;
                  return (
                    <line
                      key={id}
                      x1={positions.x1}
                      y1={positions.y1}
                      x2={positions.x2}
                      y2={positions.y2}
                      stroke="#66FCF1"
                      strokeWidth="1.5"
                      strokeDasharray="6,8"
                    />
                  );
                })}
              </svg>
            </>
          )}

        </div>
      </div>
    </section>
  );
};

export default Compatibility;
