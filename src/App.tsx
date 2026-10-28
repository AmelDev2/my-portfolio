import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { Certifications } from './components/Certifications';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetails } from './components/ProjectDetails';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ScrollToHash } from './components/ScrollToHash';
import { Resume } from './components/Resume'; // استيراد صفحة السيرة الذاتية

type Lang = 'en' | 'ar';

const LANG_KEY = 'portfolio-lang';

const getInitialLang = (): Lang => {
  try {
    return localStorage.getItem(LANG_KEY) === 'ar' ? 'ar' : 'en';
  } catch {
    return 'en';
  }
};

export function App() {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      // نتجاهل
    }
  }, [lang]);

  const toggleLanguage = () => setLang((prev) => (prev === 'en' ? 'ar' : 'en'));

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[(--bg-primary)] text-[(--text-primary)] transition-colors duration-300">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:inset-s-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[(--accent-burgundy)] focus:text-white"
        >
          {lang === 'en' ? 'Skip to content' : 'تخطي إلى المحتوى'}
        </a>

        <Navbar lang={lang} toggleLanguage={toggleLanguage} />
        <ScrollToHash />

        <main id="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero lang={lang} />
                  <AboutSection lang={lang} />
                  <Certifications lang={lang} />
                  <ProjectsSection lang={lang} />
                  <ContactForm lang={lang} />
                </>
              }
            />
            <Route path="/project/:id" element={<ProjectDetails lang={lang} />} />
            <Route path="/resume" element={<Resume lang={lang} />} />
          </Routes>
        </main>

        <Footer lang={lang} />
      </div>
    </ThemeProvider>
  );
}

export default App;