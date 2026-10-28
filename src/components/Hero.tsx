import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
interface HeroProps {
  lang: 'en' | 'ar';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  // إنشاء مرجع للحاوية الرئيسية لقياس حركة الماوس عليها
  const containerRef = useRef<HTMLDivElement>(null);

  // قيم الحركة للماوس (X, Y) من (0) إلى (عوض الحاوية)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // تحويل حركة الماوس إلى قيم دوران (Z) و حرقان (Y) خفيفة (Parallax Effect)
  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  // إضافة تأثير ربيعي (Spring) لجعل الحركة أكثر نعومة وسلاسة
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  // دالة لتحديث قيم الماوس عند الحركة داخل الحاوية
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      x.set(mouseX - centerX);
      y.set(mouseY - centerY);
    }
  };

  // إعادة القيم إلى الصفر عند خروج الماوس
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden perspective-1000 z-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content (Text & Buttons) */}
        <div className="space-y-6 text-center lg:text-start">
          
          {/* شريط حالة المطور المضيء والمتفاعل مع الماوس (The Interactive 'Kawkab') */}
          <motion.div
            style={{
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
            }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-(--bg-secondary) border border-(--border-color) text-(--accent-burgundy) text-sm font-medium shadow-[0_0_15px_var(--glow-color)]"
          >
            <Sparkles className="w-4 h-4" />
            <span>{lang === 'en' ? 'Passionate Frontend Developer' : 'مطورة واجهات أمامية شغوفة'}</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-(--text-primary) leading-tight">
            {lang === 'en' ? (
              <>Hi, I'm <span className="text-(--accent-burgundy)">Amel.</span></>
            ) : (
              <>أهلاً، أنا <span className="text-(--accent-burgundy)">أمل.</span></>
            )}
          </h1>

          

          <p className="text-(--text-secondary) text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
            {lang === 'en'
              ? 'I craft modern, responsive, and user-centric web applications using React, TypeScript, and Tailwind CSS.'
              : 'أقوم ببناء تطبيقات ويب عصرية، متجاوبة، ومتمحورة حول المستخدم باستخدام React و TypeScript و Tailwind CSS.'}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-(--accent-burgundy) text-white font-semibold hover:bg-(--accent-hover) transition-all flex items-center gap-2 shadow-[0_0_20px_var(--glow-color)] hover:shadow-[0_0_25px_var(--glow-color)] group"
            >
              <span>{lang === 'en' ? 'Explore Projects' : 'استكشف المشاريع'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-(--bg-secondary) text-(--text-primary) font-semibold border border-(--border-color) hover:border-(--accent-burgundy) transition-all"
            >
              {lang === 'en' ? 'View Resume' : 'عرض السيرة الذاتية'}
            </Link>
          </div>
        </div>

        {/* Right Content (Static Tech Terminal / Image) */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute w-80 h-80 rounded-full bg-(--accent-burgundy)/10 blur-[80px] pointer-events-none"></div>
          
          <div dir="ltr" className="relative w-full max-w-lg rounded-3xl bg-(--bg-card) border border-(--border-color) p-6 shadow-2xl overflow-hidden hover:border-(--accent-burgundy) transition-all duration-300">
            {/* Terminal Header */}
            
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-(--border-color)">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs font-mono text-(--text-secondary)">amel-skills.ts — Vite</div>
            </div>

            {/* Terminal Content */}
            <div className="font-mono text-sm space-y-2.5 text-(--text-primary)">
              <p><span className="text-(--accent-burgundy)">const</span> skills = [</p>
              <div className="pl-6 space-y-1.5 border-l-2 border-(--border-color)">
                <p><span className="text-(--text-secondary)">"React.js"</span>,</p>
                <p><span className="text-(--text-secondary)">"TypeScript"</span>,</p>
                <p><span className="text-(--text-secondary)">"Tailwind CSS v4"</span>,</p>
                <p><span className="text-(--text-secondary)">"HTML5 / CSS3"</span>,</p>
                <p><span className="text-(--text-secondary)">"Git / GitHub"</span>,</p>
                <p><span className="text-(--accent-burgundy)">...softSkills</span></p>
              </div>
              <p>];</p>
              <div className="pt-2">
                <p className="text-(--text-secondary)">// Open to new opportunities 🚀</p>
                <p className="text-cyan-400">console<span className="text-(--text-primary)">.log(</span><span className="text-emerald-400">"Ready to connect!"</span><span className="text-(--text-primary)">);</span></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};