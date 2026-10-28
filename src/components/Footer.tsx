import React from 'react';
import { Mail } from 'lucide-react';
import profile from '../data/profile';

interface FooterProps {
  lang: 'en' | 'ar';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const linkClass = 'text-(--text-secondary) hover:text-(--accent-burgundy) transition-colors';

  return (
    <footer className="relative z-10 border-t border-(--border-color) mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-(--text-secondary)">
        <p>
          © {new Date().getFullYear()} Amel.dev —{' '}
          {lang === 'en' ? 'Built with React, TypeScript & Tailwind CSS' : 'مبني بـ React و TypeScript و Tailwind CSS'}
        </p>

        <div className="flex items-center gap-5">
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
              LinkedIn
            </a>
          )}
          {profile.email && (
            <a href={`mailto:${profile.email}`} className={`${linkClass} inline-flex items-center gap-1.5`}>
              <Mail className="w-4 h-4" />
              <span>{lang === 'en' ? 'Email' : 'البريد'}</span>
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};