import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiCheckCircle, FiAlertCircle, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import confetti from 'canvas-confetti';
import { personalInfo } from '../utils/portfolioData';
import { submitContactMessage } from '../utils/api';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side quick check
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({ submitting: false, success: false, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await submitContactMessage(formData);
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Trigger celebratory confetti explosion in Instagram brand colors
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#f09433', '#e6683c', '#dc2743', '#cc2366', '#833ab4', '#fcaf45'],
      });
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'Failed to submit your message. Please try again.',
      });
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-[#f09433]/15 via-[#dc2743]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#e1306c]/30 bg-[#e1306c]/10 text-[#dc2743] dark:text-[#f77737] text-xs font-mono font-semibold mb-3">
            <span>// 07. CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-3">
            Get In Touch
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Have an analytics project in mind, seeking a Data Analyst, or want to discuss business intelligence? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Channels (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 border border-[#e1306c]/15 space-y-6 shadow-sm"
          >
            <div>
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
                Let's turn your raw data into actionable insights
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                I am actively considering full-time Data Analyst roles, Business Analyst opportunities, Data Science projects, and BI consulting collaborations.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#e1306c]/15">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f09433] to-[#dc2743] text-white flex items-center justify-center shadow-sm">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-semibold">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-[#dc2743] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#dc2743] to-[#833ab4] text-white flex items-center justify-center shadow-sm">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-semibold">
                    Location & Timezone
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {personalInfo.location} (IST / UTC+5:30)
                  </span>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <FiCheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-semibold">
                    Current Status
                  </span>
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    Open for Job Offers &amp; Contracts
                  </span>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-4 border-t border-[#e1306c]/15">
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3 font-semibold">
                Social Networks
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-btn text-slate-700 dark:text-slate-200 hover:text-[#dc2743] shadow-sm transition-all"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-btn text-slate-700 dark:text-slate-200 hover:text-[#833ab4] shadow-sm transition-all"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-btn text-slate-700 dark:text-slate-200 hover:text-[#e1306c] shadow-sm transition-all"
                  aria-label="X (Twitter)"
                  title="X (Twitter)"
                >
                  <FaXTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-[#e1306c]/15 relative shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Success Alert */}
              {status.success && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-700 dark:text-emerald-300 text-xs">
                  <FiCheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-emerald-500" />
                  <div>
                    <h4 className="font-semibold text-sm">Message Delivered!</h4>
                    <p className="mt-1">
                      Thank you for reaching out. Your message has been received and I will respond to you promptly!
                    </p>
                  </div>
                </div>
              )}

              {/* Error Alert */}
              {status.error && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-700 dark:text-red-300 text-xs">
                  <FiAlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
                  <div>
                    <h4 className="font-semibold text-sm">Submission Error</h4>
                    <p className="mt-1">{status.error}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-2 font-semibold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/5 border border-[#e1306c]/20 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#dc2743] transition-all font-mono shadow-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-2 font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/5 border border-[#e1306c]/20 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#dc2743] transition-all font-mono shadow-sm"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-2 font-semibold">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Opportunity / Collaboration / Data Consultation"
                  className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/5 border border-[#e1306c]/20 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#dc2743] transition-all font-mono shadow-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-2 font-semibold">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hello Saurabh, I would like to discuss..."
                  className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/5 border border-[#e1306c]/20 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#dc2743] transition-all resize-y font-sans shadow-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-mono text-xs font-bold tracking-wider insta-btn shadow-md disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
              >
                {status.submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>DISPATCHING MESSAGE...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
