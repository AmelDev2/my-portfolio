import React, { useState } from "react";
import { Send, CheckCircle2, Terminal, Loader2 } from "lucide-react";

interface ContactFormProps {
  lang: "en" | "ar";
}

export const ContactForm: React.FC<ContactFormProps> = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/xdeezoqz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json();
        setError(data.error || (lang === "en" ? "Failed to send message. Please try again." : "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى."));
      }
    } catch {
      setError(lang === "en" ? "Network error. Please check your connection." : "خطأ في الشبكة. يرجى التحقق من اتصالك.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-4xl mx-auto relative z-10"
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-(--bg-secondary) border border-(--border-color) text-(--accent-burgundy) text-sm font-medium mb-3">
          <Terminal className="w-4 h-4" />
          <span>{lang === "en" ? "Get In Touch" : "تواصل معي"}</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-(--text-primary)">
          {lang === "en"
            ? "Let's Build Something Amazing Together!"
            : "لنبتكر شيئاً استثنائياً معاً!"}
        </h2>
      </div>

      <div className="rounded-3xl bg-(--bg-card) border border-(--border-color) p-8 md:p-12 shadow-[0_0_50px_var(--glow-color)] relative overflow-hidden">
        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
            <h3 className="text-2xl font-bold text-(--text-primary)">
              {lang === "en"
                ? "Message Sent Successfully!"
                : "تم إرسال رسالتك بنجاح!"}
            </h3>
            <p className="text-(--text-secondary)">
              {lang === "en"
                ? "Thank you for reaching out. I'll get back to you shortly."
                : "شكراً لتواصلك، سأرد عليكِ في أقرب وقت ممكن."}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-(--text-primary)">
                  {lang === "en" ? "Your Name" : "الاسم"}
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder={
                    lang === "en" ? "e.g., Sarah Ahmad" : "مثال: أمل"
                  }
                  className="w-full px-4 py-3 rounded-xl bg-(--bg-secondary) border border-(--border-color) text-(--text-primary) focus:outline-none focus:border-(--accent-burgundy) transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-(--text-primary)">
                  {lang === "en" ? "Your Email" : "البريد الإلكتروني"}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="amel@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-(--bg-secondary) border border-(--border-color) text-(--text-primary) focus:outline-none focus:border-(--accent-burgundy) transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-(--text-primary)">
                {lang === "en" ? "Your Message" : "الرسالة"}
              </label>
              <textarea
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder={
                  lang === "en"
                    ? "Tell me about your project or idea..."
                    : "اكتبي تفاصيل مشروعكِ أو فكرتكِ هنا..."
                }
                className="w-full px-4 py-3 rounded-xl bg-(--bg-secondary) border border-(--border-color) text-(--text-primary) focus:outline-none focus:border-(--accent-burgundy) transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-[#800020] text-white font-semibold hover:opacity-90 transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 text-white animate-spin" />
                  <span className="text-white">
                    {lang === "en" ? "Sending..." : "جاري الإرسال..."}
                  </span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 text-white" />
                  <span className="text-white">
                    {lang === "en" ? "Send Message" : "إرسال الرسالة"}
                  </span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};