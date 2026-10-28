import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ArrowLeft, ExternalLink, GitBranch, Sparkles, CheckCircle2, AlertTriangle, Terminal } from 'lucide-react';

interface ProjectDetailsProps {
  lang: 'en' | 'ar';
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ lang }) => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-2xl font-bold text-[(--text-primary)] mb-4">
          {lang === 'en' ? 'Project Not Found' : 'المشروع غير موجود'}
        </h2>
        <Link
          to="/"
          className="px-6 py-2.5 rounded-xl bg-[(--accent-burgundy)] text-white font-semibold flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'en' ? 'Back to Home' : 'العودة للرئيسية'}</span>
        </Link>
      </div>
    );
  }

  const features = lang === 'en' ? project.featuresEn : project.featuresAr;
  const note = lang === 'en' ? project.noteEn : project.noteAr;

  return (
    <div className="py-12 px-6 max-w-5xl mx-auto space-y-10 relative z-10">
      {/* Back Button */}
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[(--text-secondary)] hover:text-[(--accent-burgundy)] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{lang === 'en' ? 'Back to Projects' : 'العودة للمشاريع'}</span>
      </Link>

      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[(--bg-secondary)] border border-[(--border-color)] text-[(--accent-burgundy)] text-xs font-mono">
          <Terminal className="w-3.5 h-3.5" />
          <span>{project.id}.app</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-[(--text-primary)]">
          {project.title}
        </h1>
        <p className="text-[(--text-secondary)] text-lg leading-relaxed">
          {lang === 'en' ? project.descriptionEn : project.descriptionAr}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          {project.demoUrl && project.demoUrl !== '#' && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[(--accent-burgundy)] text-white font-semibold hover:bg-[(--accent-hover)] transition-all flex items-center gap-2 shadow-[0_0_20px_var(--glow-color)]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{lang === 'en' ? 'Live Demo Preview' : 'معاينة المشروع المباشرة'}</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[(--bg-secondary)] text-[(--text-primary)] font-semibold border border-[(--border-color)] hover:border-[(--accent-burgundy)] transition-all flex items-center gap-2"
            >
              <GitBranch className="w-4 h-4" />
              <span>{lang === 'en' ? 'GitHub Repository' : 'المستودع البرمجي'}</span>
            </a>
          )}
        </div>
      </div>

      {/* Main Image */}
      <div className="rounded-3xl border border-[(--border-color)] overflow-hidden shadow-2xl bg-(--bg-card)">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop";
          }}
        />
      </div>

      {/* Features Section */}
      {features && features.length > 0 && (
        <div className="p-8 rounded-3xl bg-[(--bg-card)] border border-[(--border-color)] space-y-6">
          <h2 className="text-2xl font-bold text-[(--text-primary)] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[(--accent-burgundy)]" />
            <span>{lang === 'en' ? 'Key Features & Capabilities' : 'الميزات والخصائص البرمجية'}</span>
          </h2>
          <ul className="space-y-4">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-[(--text-secondary)] text-sm md:text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Responsiveness Note if available */}
      {note && (
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-start gap-3 text-sm">
          <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{note}</span>
        </div>
      )}

      {/* Tech Stack Tags */}
      <div className="p-8 rounded-3xl bg-[(--bg-card)] border border-[(--border-color)] space-y-4">
        <h3 className="text-lg font-bold text-[(--text-primary)]">
          {lang === 'en' ? 'Technologies & Libraries' : 'التقنيات والمكتبات المستعملة'}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-xl bg-[(--bg-secondary)] border border-[(--border-color)] text-[(--accent-burgundy)] font-mono text-sm font-semibold"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};