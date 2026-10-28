import React from 'react';
import { Code2, Cpu, Rocket, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutProps {
  lang: 'en' | 'ar';
}

export const AboutSection: React.FC<AboutProps> = ({ lang }) => {
  const stats = [
    { icon: <Code2 className="w-6 h-6 text-[(--accent-burgundy)]" />, value: '15+', labelEn: 'Completed Projects', labelAr: 'مشروعاً مكتملًا' },
    { icon: <Cpu className="w-6 h-6 text-[(--accent-burgundy)]" />, value: '3+', labelEn: 'Years Experience', labelAr: 'سنوات خبرة' },
    { icon: <Rocket className="w-6 h-6 text-[(--accent-burgundy)]" />, value: '100%', labelEn: 'Clean Code Rate', labelAr: 'جودة كود عالية' },
    { icon: <Award className="w-6 h-6 text-[(--accent-burgundy)]" />, value: 'React & TS', labelEn: 'Core Stack', labelAr: 'التقنيات الأساسية' },
  ];

  const techStack = [
    { name: 'React.js', color: 'text-cyan-500 border-cyan-400/40 bg-cyan-500/10' },
    { name: 'TypeScript', color: 'text-blue-500 border-blue-400/40 bg-blue-500/10' },
    { name: 'Tailwind CSS', color: 'text-sky-500 border-sky-400/40 bg-sky-500/10' },
    { name: 'Vite / Next.js', color: 'text-amber-500 border-amber-400/40 bg-amber-500/10' },
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Story & Bio */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[(--bg-secondary)] border border-[(--border-color)] text-[(--accent-burgundy)] text-sm font-medium">
            <span>{lang === 'en' ? '✨ Passionate Frontend Developer' : '✨ مطورة واجهات أمامية شغوفة'}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[(--text-primary)] leading-tight">
            {lang === 'en' ? (
              <>Crafting Digital Experiences That <span className="text-[(--accent-burgundy)]">Stand Out</span></>
            ) : (
              <>أصمم تجارب رقمية <span className="text-[(--accent-burgundy)]">استثنائية وتفاعلية</span></>
            )}
          </h2>

          <p className="text-[(--text-secondary)] text-lg leading-relaxed">
            {lang === 'en'
              ? 'I specialize in building high-performance, scalable, and visually stunning web applications. With a strong foundation in React, TypeScript, and modern UI engineering, I transform ideas into smooth interactive realities.'
              : 'أنا متخصصة في بناء تطبيقات ويب عصرية ذات أداء عالي وتصاميم مبهرة. مع خلفية قوية في React و TypeScript وهندسة الواجهات، أحول الأفكار إلى واقع تفاعلي سلس وباهر.'}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-[(--bg-card)] border border-[(--border-color)] text-center transition-transform hover:-translate-y-1 shadow-md hover:border-[(--accent-burgundy)]"
              >
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-[(--text-primary)]">{stat.value}</div>
                <div className="text-xs text-[(--text-secondary)] mt-1">
                  {lang === 'en' ? stat.labelEn : stat.labelAr}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Interactive Orbiting Tech Stack */}
        <div className="relative flex items-center justify-center min-h-87.5">
          
          {/* الدائرة المدارية المنقطة */}
          <div className="absolute w-72 h-72 rounded-full border border-dashed border-[(--border-color)] opacity-60"></div>
          
          {/* مربع اسم Amel - واضح ومقروء في Light و Dark mode */}
          <div className="relative z-10 px-6 py-4 rounded-3xl bg-[(--bg-card)] border border-[(--border-color)] shadow-[0_0_30px_var(--glow-color)] flex items-center justify-center transition-all duration-300">
            <span className="text-2xl font-black text-[(--text-primary)] tracking-wide">
              Amel
            </span>
          </div>

          {/* دوران جميع التقنيات الأربعة حول الاسم في مدار دائري */}
          <motion.div
            className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            {techStack.map((tech, index) => {
              const angle = (index * 360) / techStack.length;
              const radius = 135; // مسافة البعد عن المركز
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              return (
                <motion.div
                  key={tech.name}
                  className="absolute pointer-events-auto"
                  style={{ x, y }}
                  // إلغاء تدوير النص ليبقى أفقياً دائماً ومقروءاً
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className={`px-3.5 py-1.5 rounded-full border ${tech.color} backdrop-blur-md shadow-md text-xs font-mono font-bold whitespace-nowrap cursor-pointer transition-all duration-300`}
                  >
                    {tech.name}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
};