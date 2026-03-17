import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { submitContact } from '../services/api';


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);


    const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [dragOver, setDragOver] = useState(false);

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
      setFeedback({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
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
    <section className="min-h-screen py-32 px-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-6xl font-bold text-white tracking-tight mb-6">
             Get In Touch
           </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-transparent mb-8" />

            <p className="text-slate-400 text-lg leading-relaxed font-light mb-12 max-w-xl">
              Available for full-time opportunities.
             <br />
             if you have an exciting project or just want to say hi, feel free to reach out!
            
            </p>

            <div className="space-y-4">
              <a
                href="mailto:contact@example.com"
                className="group flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl group-hover:border-emerald-400/30 transition-all duration-300">
                  <Mail size={20} />
                </div>
                <span className="text-lg font-light tracking-wide">
                  mamttta226@gmail.com
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/mamta-dev/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYhSEyveLR6aNrWnv1DTDFw%3D%3D"
                className="group flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl group-hover:border-emerald-400/30 transition-all duration-300">
                  <Linkedin size={20} />
                </div>
                <span className="text-lg font-light tracking-wide">
                  linkedin.com/in/mamta-dev
                </span>
              </a>

              <a
                href="https://github.com/Mamta653"
                className="group flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl group-hover:border-emerald-400/30 transition-all duration-300">
                  <Github size={20} />
                </div>
                <span className="text-lg font-light tracking-wide">
                  github.com/Mamta653
                </span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              className="relative backdrop-blur-[40px] bg-white/[0.02] border border-white/[0.12] rounded-2xl p-8"
              style={{
                boxShadow:
                  '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
              }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">
                Send a Message
              </h3>

              {feedback && (
                <div className={`mb-6 p-4 rounded-xl ${feedback.type === 'success' ? 'bg-emerald-500/10 border border-emerald-400/30 text-emerald-300' : 'bg-red-500/10 border border-red-400/30 text-red-300'}`}>
                  {feedback.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400/30 transition-all duration-300"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400/30 transition-all duration-300"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400/30 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full px-6 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-slate-500/20 border border-emerald-400/30 rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2 text-emerald-300 font-medium tracking-wide">
                    {loading ? 'Sending...' : 'Send Message'}
                    <Send size={18} />
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
