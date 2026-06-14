import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { submitContact } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);
    try {
      await submitContact(formData);
      setFeedback({ type: 'success', message: "Message sent successfully! I'll get back to you soon." });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFeedback({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">

          {/* Left */}
          <div>
            <h2
              className="font-bold text-white tracking-tight mb-6 break-words"
              style={{ fontSize: 'clamp(2rem, 8vw, 3.75rem)' }}
            >
              Get In Touch
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-transparent mb-8" />

            <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light mb-10 max-w-xl">
              Available for full-time opportunities.{' '}
              If you have an exciting project or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:mamttta226@gmail.com"
                className="group flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors duration-300"
              >
                <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl group-hover:border-emerald-400/30 transition-all duration-300">
                  <Mail size={18} />
                </div>
                <span className="text-sm md:text-base font-light tracking-wide break-all">
                  mamttta226@gmail.com
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/mamta-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors duration-300"
              >
                <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl group-hover:border-emerald-400/30 transition-all duration-300">
                  <Linkedin size={18} />
                </div>
                <span className="text-sm md:text-base font-light tracking-wide break-all">
                  linkedin.com/in/mamta-dev
                </span>
              </a>

              <a
                href="https://github.com/Mamta653"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors duration-300"
              >
                <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl group-hover:border-emerald-400/30 transition-all duration-300">
                  <Github size={18} />
                </div>
                <span className="text-sm md:text-base font-light tracking-wide break-all">
                  github.com/Mamta653
                </span>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative">
            <div
              className="relative backdrop-blur-[40px] bg-white/[0.02] border border-white/[0.12] rounded-2xl p-6 md:p-8"
              style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37), inset 0 1px 0 0 rgba(255,255,255,0.05)' }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 tracking-tight">
                Send a Message
              </h3>

              {feedback && (
                <div className={`mb-6 p-4 rounded-xl text-sm ${feedback.type === 'success' ? 'bg-emerald-500/10 border border-emerald-400/30 text-emerald-300' : 'bg-red-500/10 border border-red-400/30 text-red-300'}`}>
                  {feedback.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400/30 transition-all duration-300 text-sm md:text-base"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400/30 transition-all duration-300 text-sm md:text-base"
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400/30 transition-all duration-300 resize-none text-sm md:text-base"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full px-6 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-slate-500/20 border border-emerald-400/30 rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2 text-emerald-300 font-medium tracking-wide text-sm md:text-base whitespace-nowrap">
                    {loading ? 'Sending...' : 'Send Message'}
                    <Send size={16} className="flex-shrink-0" />
                  </span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
