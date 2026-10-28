import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { Sun, Moon, Code2, Globe, Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: 'en' | 'ar';
  toggleLanguage: () => void;
}

const navLinks = [
  { to: '/', en: 'Home', ar: 'الرئيسية', exact: true },
  { to: '/#about', en: 'About', ar: 'عنّي', exact: false },
  { to: '/#projects', en: 'Projects', ar: 'المشاريع', exact: false },
  { to: '/#contact', en: 'Contact', ar: 'تواصل', exact: false },
  { to: '/resume', en: 'Resume', ar: 'السيرة الذاتية', exact: false },
];

export const Navbar: React.FC<NavbarProps> = ({ lang, toggleLanguage }) => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  // دالة لتحديد التنسيق النشط أو العادي للروابط مع خط تحتي وتغيير اللون
  const getLinkClassName = ({ isActive }: { isActive: boolean }) => {
    return `relative pb-1 transition-colors font-medium text-sm ${
      isActive
        ? 'text-[var(--accent-burgundy)] font-semibold border-b-2 border-[var(--accent-burgundy)]'
        : 'text-[var(--text-secondary)] hover:text-[var(--accent-burgundy)]'
    }`;
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-(--bg-primary)/80 border-b border-(--border-color) transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 font-bold text-lg text-(--text-primary)">
          <div className="p-2 rounded-lg bg-(--accent-burgundy) text-white shadow-[0_0_15px_var(--glow-color)] flex items-center justify-center">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span>
            Amel<span className="text-(--accent-burgundy)">.dev</span>
          </span>
        </NavLink>

        {/* Links & Controls */}
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.exact}
                className={getLinkClassName}
              >
                {lang === 'en' ? link.en : link.ar}
              </NavLink>
            ))}
          </div>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-(--bg-secondary) border border-(--border-color) text-xs font-semibold text-(--text-primary) hover:border-(--accent-burgundy) transition-all cursor-pointer"
            aria-label={lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
          >
            <Globe className="w-4 h-4 text-(--accent-burgundy)" />
            <span>{lang === 'en' ? 'العربية' : 'English'}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-(--bg-secondary) border border-(--border-color) text-(--text-primary) hover:border-(--accent-burgundy) transition-all cursor-pointer"
            aria-label={
              theme === 'dark'
                ? lang === 'en'
                  ? 'Switch to light mode'
                  : 'التبديل إلى الوضع الفاتح'
                : lang === 'en'
                ? 'Switch to dark mode'
                : 'التبديل إلى الوضع الداكن'
            }
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-(--accent-burgundy)" />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden p-2.5 rounded-xl bg-(--bg-secondary) border border-(--border-color) text-(--text-primary) hover:border-(--accent-burgundy) transition-all cursor-pointer"
            aria-label={lang === 'en' ? 'Toggle menu' : 'فتح أو إغلاق القائمة'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-(--border-color) bg-(--bg-primary) px-6 py-4 flex flex-col gap-4 text-sm font-medium"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.exact}
              onClick={() => setMenuOpen(false)}
              className={getLinkClassName}
            >
              {lang === 'en' ? link.en : link.ar}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};