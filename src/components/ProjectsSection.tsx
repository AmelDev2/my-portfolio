import React from 'react';
import { FolderGit2 } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../data/projects';

interface ProjectsSectionProps {
  lang: 'en' | 'ar';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-(--bg-secondary) border border-(--border-color) text-(--accent-burgundy) text-sm font-medium mb-3">
          <FolderGit2 className="w-4 h-4" />
          <span>{lang === 'en' ? 'Portfolio Showcase' : 'معرض الأعمال'}</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-(--text-primary)">
          {lang === 'en' ? 'Featured Projects' : 'أبرز المشاريع'}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={{
              ...project,
              description: lang === 'en' ? project.descriptionEn : project.descriptionAr,
            }}
            lang={lang}
          />
        ))}
      </div>
    </section>
  );
};
