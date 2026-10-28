import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// react-router لا يمرّر للقسم تلقائياً عند روابط مثل /#projects — هذا المكوّن يسوي ذلك،
// ويرجّع الصفحة للأعلى عند فتح صفحة جديدة (مثل تفاصيل المشروع).
export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView();
      }, 50);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}
