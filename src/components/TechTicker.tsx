import React from 'react';

export const TechTicker: React.FC = () => {
  const techList = [
    'React.js', 'TypeScript', 'Tailwind CSS v4', 'Vite', 'React Router', 'HTML5 / CSS3', 'JavaScript ES6+', 'Git & GitHub', 'REST APIs', 'Responsive Design'
  ];

  return (
    <div className="w-full overflow-hidden py-4 border-y border-[(--border-color)] bg-[(--bg-secondary)]/50 backdrop-blur-md relative z-10 my-12">
      <div className="flex gap-8 whitespace-nowrap animate-marquee">
        {[...techList, ...techList, ...techList].map((tech, i) => (
          <div key={i} className="flex items-center gap-3 text-sm font-mono font-semibold text-[(--text-secondary)]">
            <span className="w-2 h-2 rounded-full bg-[(--accent-burgundy)] shadow-[0_0_8px_var(--glow-color)]"></span>
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};