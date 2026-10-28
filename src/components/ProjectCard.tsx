import React, { useRef, useState } from 'react';
import { ExternalLink, GitBranch, Sparkles, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  lang: 'en' | 'ar';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, lang }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      className="perspective-1000 my-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out, box-shadow 0.3s ease-out',
        }}
        className="group relative rounded-3xl bg-[(--bg-card)]/80 backdrop-blur-xl border border-[(--border-color)] overflow-hidden shadow-2xl hover:shadow-[0_0_50px_var(--glow-color)] hover:border-[(--accent-burgundy)] flex flex-col justify-between"
      >
        {/* شريط المطور العلوي للمشروع */}
        <div className="flex items-center justify-between px-5 py-3 bg-[(--bg-secondary)]/90 border-b border-[(--border-color)]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[(--text-secondary)]">
            <Terminal className="w-3.5 h-3.5 text-[(--accent-burgundy)]" />
            <span>{project.title.toLowerCase().replace(/\s+/g, '-')}.app</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            <Sparkles className="w-3 h-3" />
            <span>Active</span>
          </div>
        </div>

        {/* صورة المشروع */}
        <div className="relative h-56 w-full overflow-hidden bg-[(--bg-secondary)] flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-[(--bg-card)] via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
          
          <div className="absolute bottom-4 right-4 left-4 flex items-center justify-between z-10">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-xl bg-black/60 text-white backdrop-blur-md border border-white/10">
              {project.tags[0] || 'React'}
            </span>

            <div className="flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
              {project.demoUrl && project.demoUrl !== '#' && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/90 text-slate-900 rounded-xl hover:bg-[(--accent-burgundy)] hover:text-white transition-all shadow-lg hover:scale-110"
                  title={lang === 'en' ? 'Live Demo' : 'معاينة مباشرة'}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/90 text-slate-900 rounded-xl hover:bg-[(--accent-burgundy)] hover:text-white transition-all shadow-lg hover:scale-110"
                  title={lang === 'en' ? 'GitHub Repository' : 'المستودع البرمجي'}
                >
                  <GitBranch className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* تفاصيل ووصف المشروع */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div>
            {/* تم تحويل العنوان إلى رابط يفتح صفحة تفاصيل المشروع */}
            <Link to={`/project/${project.id}`}>
              <h3 className="text-2xl font-extrabold text-(--text-primary) mb-2 group-hover:text-(--accent-burgundy) transition-colors duration-200 cursor-pointer">
                {project.title}
              </h3>
            </Link>
            <p className="text-[(--text-secondary)] text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-3 border-t border-[(--border-color)]">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-lg bg-[(--bg-secondary)] border border-[(--border-color)] text-[(--accent-burgundy)] font-medium hover:border-[(--accent-burgundy)] transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};