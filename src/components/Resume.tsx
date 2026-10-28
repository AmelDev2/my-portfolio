import React from 'react';
import {  Download, Briefcase, GraduationCap, Code, CheckCircle2, Calendar, Mail, GitBranch, ExternalLink } from 'lucide-react';

interface ResumeProps {
  lang: 'en' | 'ar';
}

const CONTACT = {
  email: 'amelbusiness60@gmail.com',
  github: 'https://github.com/AmelDev2',
  
};

const PROJECT_LINKS = {
  store: { demo: 'https://exclusive-store-ruddy.vercel.app', code: 'https://github.com/AmelDev2/exclusive-store' },
  kanban: { demo: 'https://kanban-board-one-liard.vercel.app/', code: 'https://github.com/AmelDev2/kanban-board' },
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
  'inline-flex items-center gap-1 text-xs font-medium text-[var(--accent-burgundy)] hover:underline';

export const Resume: React.FC<ResumeProps> = ({ lang }) => {
  const isEn = lang === 'en';

  // مسار الملف في مجلد public مباشرة
  const pdfFileName = isEn ? '/Amel_CV_EN.pdf' : '/Amel_CV_AR.pdf';

  return (
    <div className="py-10 px-4 max-w-3xl mx-auto relative z-10">
      {/* زر التحميل المباشر من مجلد public */}
      <div className="flex justify-end mb-4">
        <a
          href={pdfFileName}
          download
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-(--accent-burgundy) text-white font-medium shadow hover:opacity-95 transition-all text-xs cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>{isEn ? 'Download PDF CV' : 'تحميل السيرة الذاتية PDF'}</span>
        </a>
      </div>

      {/* الحاوية الرسمية للسي في */}
      <div className="bg-white text-gray-800 p-8 rounded-xl shadow-sm space-y-5 text-sm">
        
        {/* Header */}
        <div className="border-b border-gray-200 pb-4 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {isEn ? 'Amel Ahmed' : 'أمل أحمد'}
            </h1>
            <p className="text-sm font-semibold text-(--accent-burgundy) mt-0.5">
              {isEn ? 'Junior Frontend Developer | React' : 'مطورة واجهات أمامية مبتدئة | React'}
            </p>
            <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-600">
              <a href={`mailto:${CONTACT.email}`} className={linkClass}>
                <Mail className="w-3.5 h-3.5" />
                <span>{CONTACT.email}</span>
              </a>
              <a href={CONTACT.github} target="_blank" rel="noreferrer" className={linkClass}>
                <GitBranch className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-(--accent-burgundy)"></span>
            {isEn ? 'Professional Summary' : 'النبذة المهنية'}
          </h2>
          <p className="text-gray-700 leading-relaxed text-xs">
            {isEn
              ? 'Junior Frontend Developer who recently completed a Frontend Development Diploma. I build responsive web applications with React, TypeScript, and Tailwind CSS, with hands-on experience in Supabase authentication, cart and wishlist flows, and drag-and-drop interfaces.'
              : 'مطورة واجهات أمامية مبتدئة، أنهيت مؤخراً دبلومة تطوير الواجهات الأمامية. أبني تطبيقات ويب متجاوبة باستخدام React و TypeScript و Tailwind CSS، ولدي خبرة عملية في مصادقة Supabase وبناء سلة التسوق وقائمة الأمنيات.'}
          </p>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
            <Code className="w-3.5 h-3.5 text-(--accent-burgundy)" />
            {isEn ? 'Technical Skills' : 'المهارات التقنية'}
          </h2>
          <div className="grid grid-cols-3 gap-1.5">
            {SKILLS.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-50 border border-gray-100 text-xs text-gray-700"
              >
                <CheckCircle2 className="w-3 h-3 text-(--accent-burgundy) shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-(--accent-burgundy)" />
            {isEn ? 'Featured Projects' : 'أبرز المشاريع'}
          </h2>
          <div className="space-y-3">
            <div className="border-s-2 border-(--accent-burgundy) ps-3">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-900 text-xs">
                  {isEn ? 'Exclusive – E-Commerce Web Application' : 'Exclusive – متجر إلكتروني'}
                </h3>
                <div className="flex gap-3">
                  <a href={PROJECT_LINKS.store.demo} target="_blank" rel="noreferrer" className={linkClass}>
                    <ExternalLink className="w-3 h-3" /> Demo
                  </a>
                  <a href={PROJECT_LINKS.store.code} target="_blank" rel="noreferrer" className={linkClass}>
                    <GitBranch className="w-3 h-3" /> Code
                  </a>
                </div>
              </div>
              <p className="text-gray-600 text-[11px] mt-0.5">
                {isEn ? 'A responsive e-commerce platform built with React 19, Vite, and Tailwind CSS.' : 'منصة تجارة إلكترونية متجاوبة مبنية بـ React 19 و Vite و Tailwind CSS.'}
              </p>
            </div>

            <div className="border-s-2 border-(--accent-burgundy) ps-3">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-900 text-xs">
                  {isEn ? 'Kanban Task Management Board' : 'لوحة إدارة المهام (Kanban Board)'}
                </h3>
                <a href={PROJECT_LINKS.kanban.demo} target="_blank" rel="noreferrer" className={linkClass}>
                  <ExternalLink className="w-3 h-3" /> Demo
                </a>
              </div>
              <p className="text-gray-600 text-[11px] mt-0.5">
                {isEn ? 'A Kanban task management app built with React and dnd-kit.' : 'تطبيق Kanban لإدارة المهام مبني بـ React.'}
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-(--accent-burgundy)" />
            {isEn ? 'Education & Certification' : 'التعليم والشهادات'}
          </h2>
          <div className="flex justify-between items-center text-xs">
            <div>
              <p className="font-semibold text-gray-900">
                {isEn ? 'Frontend Development Diploma' : 'دبلومة تطوير الواجهات الأمامية'}
              </p>
              <p className="text-gray-500 text-[11px]">
                {isEn ? 'Elm School Platform' : 'منصة المدرسة'}
              </p>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-(--accent-burgundy) font-medium">
              <Calendar className="w-3 h-3" />
              <span>{isEn ? 'Oct 15, 2026' : '15 أكتوبر 2026'}</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};