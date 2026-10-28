import React, { useRef } from 'react';
import { FileText, Download, Briefcase, GraduationCap, Code, CheckCircle2, Calendar, Mail, GitBranch, Link2, ExternalLink } from 'lucide-react';
import html2pdf from 'html2pdf.js';

interface ResumeProps {
  lang: 'en' | 'ar';
}

const CONTACT = {
  email: 'amelbuisiness60@gmail.com',
  github: 'https://github.com/AmelDev2',
  linkedin: 'https://www.linkedin.com/in/your-username',
};

const PROJECT_LINKS = {
  store: { demo: 'https://exclusive-store-ruddy.vercel.app', code: 'https://github.com/AmelDev2/exclusive-store' },
  kanban: { demo: 'https://kanban-board-one-liard.vercel.app/', code: '' },
};

const SKILLS = [
  'React.js / Vite',
  'JavaScript (ES6+)',
  'Tailwind CSS',
  'React Router DOM',
  'Supabase (Auth)',
  'Context API & Immer',
  'Radix UI & dnd-kit',
  'Git & GitHub',
  'Responsive Web Design',
];

const linkClass =
  'inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-[var(--accent-burgundy)] hover:underline';

export const Resume: React.FC<ResumeProps> = ({ lang }) => {
  const isEn = lang === 'en';
  
  // الـ ref هنا يشمل الصفحة كاملة (ليظهر الاسم والعنوان في الـ PDF)
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    const element = resumeRef.current;
    if (!element) return;

    const options = {
      margin:        10 ,
      filename:     isEn ? 'Amel_CV_EN.pdf' : 'Amel_CV_AR.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    // الـ ref محيط بكل محتوى الصفحة الآن لضمان ظهور الاسم في الـ PDF
    <div ref={resumeRef} className="py-16 px-6 max-w-4xl mx-auto relative z-10 bg-(--bg-primary)">
      
      {/* Header & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6 border-b border-(--border-color) pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-(--bg-secondary) border border-(--border-color) text-(--accent-burgundy) text-xs font-semibold mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>{isEn ? 'Professional Portfolio & CV' : 'الملف المهني والسيرة الذاتية'}</span>
          </div>
          
          {/* اسمك هنا بوضوح تام */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-(--text-primary)">
            {isEn ? 'Amel Ahmed' : 'أمل أحمد'}
          </h1>
          <p className="text-(--text-secondary) mt-1 font-medium">
            {isEn
              ? 'Junior Frontend Developer | React'
              : 'مطورة واجهات أمامية مبتدئة | React '}
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap gap-4 mt-3">
            <a href={`mailto:${CONTACT.email}`} className={linkClass}>
              <Mail className="w-4 h-4" />
              <span>{CONTACT.email}</span>
            </a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className={linkClass}>
              <GitBranch className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
              <Link2 className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* زر التحميل التلقائي */}
        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-(--accent-burgundy) text-white font-medium shadow-md hover:opacity-90 transition-all text-sm cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>{isEn ? 'Download PDF CV' : 'تحميل السيرة الذاتية PDF'}</span>
        </button>
      </div>

      <div className="space-y-8">
        {/* Professional Summary */}
        <section className="bg-(--bg-secondary) p-6 rounded-2xl border border-(--border-color) shadow-sm">
          <h2 className="text-lg font-bold text-(--text-primary) mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-(--accent-burgundy)"></span>
            {isEn ? 'Professional Summary' : 'النبذة المهنية'}
          </h2>
          <p className="text-(--text-secondary) leading-relaxed text-sm md:text-base">
            {isEn
              ? 'Junior Frontend Developer who recently completed a Frontend Development Diploma. I build responsive web applications with React, TypeScript, and Tailwind CSS, with hands-on experience in Supabase authentication, cart and wishlist flows, and drag-and-drop interfaces.'
              : 'مطورة واجهات أمامية مبتدئة، أنهيت مؤخراً دبلومة تطوير الواجهات الأمامية. أبني تطبيقات ويب متجاوبة باستخدام React و TypeScript و Tailwind CSS، ولدي خبرة عملية في مصادقة Supabase وبناء سلة التسوق وقائمة الأمنيات.'}
          </p>
        </section>

        {/* Technical Skills */}
        <section className="bg-(--bg-secondary) p-6 rounded-2xl border border-(--border-color) shadow-sm">
          <h2 className="text-lg font-bold text-(--text-primary) mb-4 flex items-center gap-2">
            <Code className="w-5 h-5 text-(--accent-burgundy)" />
            {isEn ? 'Technical Skills' : 'المهارات التقنية'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {SKILLS.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-(--bg-primary) border border-(--border-color) text-xs md:text-sm font-medium text-(--text-primary)"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-(--accent-burgundy) shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="bg-(--bg-secondary) p-6 rounded-2xl border border-(--border-color) shadow-sm">
          <h2 className="text-lg font-bold text-(--text-primary) mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-(--accent-burgundy)" />
            {isEn ? 'Featured Projects' : 'أبرز المشاريع'}
          </h2>
          <div className="space-y-6">
            <div className="border-s-2 border-(--accent-burgundy) ps-4 py-1">
              <h3 className="font-bold text-(--text-primary) text-sm md:text-base">
                {isEn ? 'Exclusive – E-Commerce Web Application' : 'Exclusive – متجر إلكتروني'}
              </h3>
              <p className="text-xs md:text-sm text-(--text-secondary) mt-1 leading-relaxed">
                {isEn ? 'A responsive e-commerce platform built with React 19, Vite, and Tailwind CSS.' : 'منصة تجارة إلكترونية متجاوبة مبنية بـ React 19 و Vite و Tailwind CSS.'}
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <a href={PROJECT_LINKS.store.demo} target="_blank" rel="noreferrer" className={linkClass}>
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
                <a href={PROJECT_LINKS.store.code} target="_blank" rel="noreferrer" className={linkClass}>
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div className="border-s-2 border-(--accent-burgundy) ps-4 py-1">
              <h3 className="font-bold text-(--text-primary) text-sm md:text-base">
                {isEn ? 'Kanban Task Management Board' : 'لوحة إدارة المهام (Kanban Board)'}
              </h3>
              <p className="text-xs md:text-sm text-(--text-secondary) mt-1 leading-relaxed">
                {isEn ? 'A Kanban task management app built with React.' : 'تطبيق Kanban لإدارة المهام مبني بـ React.'}
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <a href={PROJECT_LINKS.kanban.demo} target="_blank" rel="noreferrer" className={linkClass}>
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-(--bg-secondary) p-6 rounded-2xl border border-(--border-color) shadow-sm">
          <h2 className="text-lg font-bold text-(--text-primary) mb-3 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-(--accent-burgundy)" />
            {isEn ? 'Education & Certification' : 'التعليم والشهادات'}
          </h2>
          <div>
            <p className="text-sm mb-1 font-semibold text-(--text-primary)">
              {isEn ? 'Frontend Development Diploma' : 'دبلومة تطوير الواجهات الأمامية'}
            </p>
            <div className="flex items-center gap-1 text-xs text-(--accent-burgundy) font-medium">
              <Calendar className="w-3.5 h-3.5" />
              <span>{isEn ? 'Completed: Oct 15, 2026' : 'تاريخ الإتمام: 15 أكتوبر 2026'}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};