import React, { useState } from "react";
import { Award, ExternalLink, CheckCircle2, X, FileText } from "lucide-react";

interface CertificationsProps {
  lang: "en" | "ar";
}

export const Certifications: React.FC<CertificationsProps> = ({ lang }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="certifications"
      className="py-20 px-6 max-w-7xl mx-auto relative z-10"
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[(--bg-secondary)] border border-[(--border-color)] text-[(--accent-burgundy)] text-sm font-medium mb-3">
          <Award className="w-4 h-4" />
          <span>
            {lang === "en" ? "Verified Credentials" : "الشهادات والمؤهلات"}
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[(--text-primary)]">
          {lang === "en"
            ? "Diploma & Qualifications"
            : "شهادة الدبلومة والمعايير"}
        </h2>
      </div>

      {/* Diploma Card */}
      <div className="max-w-3xl mx-auto rounded-3xl bg-[(--bg-card)] border border-[(--border-color)] p-8 md:p-10 shadow-[0_0_40px_var(--glow-color)] transition-all hover:border-[(--accent-burgundy)] relative overflow-hidden group">
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          {/* Badge / Icon */}
          <div className="w-24 h-24 rounded-2xl bg-[(--accent-burgundy)]/10 border border-[(--accent-burgundy)]/30 flex items-center justify-center text-[(--accent-burgundy)] shrink-0 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
            {/* <Award className="w-12 h-12" /> */}
            <img src="/diploma.png" className="w-full h-full object-cover rounded-2xl" />
          </div>

          {/* Details */}
          <div className="space-y-3 text-center md:text-start flex-1">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-[(--bg-secondary)] text-[(--accent-burgundy)] font-semibold">
              {lang === "en"
                ? "Web Development Diploma"
                : "دبلومة تطوير المواقع والواجهات"}
            </span>
            <h3 className="text-2xl font-bold text-[(--text-primary)]">
              {lang === "en"
                ? "Full-Stack Web Development Diploma"
                : "شهادة دبلومة تطوير وتصميم الويب المتكامل"}
            </h3>
            <p className="text-[(--text-secondary)] text-sm leading-relaxed">
              {lang === "en"
                ? "Certified comprehensive training covering modern Web Architecture, React.js, TypeScript, REST APIs, and UI/UX best practices."
                : "شهادة معتمدة تشمل أساسيات وبناء الواجهات الحديثة باستخدام React و TypeScript وإدارة البرمجيات بأعلى المعايير."}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-emerald-500 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {lang === "en" ? "Verified & Completed" : "مكتملة ومعتمدة"}
                </span>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[(--accent-burgundy)] hover:underline cursor-pointer"
              >
                <span>
                  {lang === "en" ? "View Certificate" : "معاينة الشهادة"}
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal Lightbox for PDF */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="relative max-w-xl w-full bg-[(--bg-card)] border border-[(--border-color)] rounded-3xl p-8 shadow-2xl text-center space-y-6">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[(--bg-secondary)] text-[(--text-primary)] hover:bg-[(--accent-burgundy)] hover:text-white transition-colors cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-[(--text-primary)]">
              {lang === "en"
                ? "Diploma Certificate (PDF)"
                : "شهادة الدبلومة المعتمدة (PDF)"}
            </h3>

            <div className="rounded-2xl border border-[(--border-color)] bg-[(--bg-secondary)] p-8 flex flex-col items-center justify-center gap-4">
              <FileText className="w-16 h-16 text-[(--accent-burgundy)] animate-pulse" />
              <p className="text-[(--text-secondary)] text-sm">
                {lang === "en"
                  ? "Click below to view your official diploma PDF document in a new tab."
                  : "انقري أدناه لعرض مستند الشهادة الرسمي بصيغة PDF في نافذة جديدة."}
              </p>
              
              <a
                href="/diploma.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[(--accent-burgundy)] text-white font-semibold hover:bg-[(--accent-hover)] transition-all shadow-[0_0_20px_var(--glow-color)] flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{lang === "en" ? "Open PDF Document" : "فتح ملف الـ PDF"}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};