import React, { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Instagram, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('');
  const [draft, setDraft] = useState({ name: '', email: '', message: '' });
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
      setCopied(true);
      setStatus('Email address copied.');
    } catch {
      setStatus('Copy unavailable. Select the email address or open the email link.');
    }
  };
  const openEmail = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${draft.name}`);
    const body = encodeURIComponent(`Hi Akshad,\n\n${draft.message}\n\n${draft.name}\nReply to: ${draft.email}`);
    window.location.href = `mailto:${PERSONAL_INFO.socials.email}?subject=${subject}&body=${body}`;
    setStatus('Your email app has been requested. Review and send your message there. If it does not open, email me directly using the address shown here.');
  };
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="contact-layout">
        <div>
          <span className="bento-label">HAVE SOMETHING IN MIND?</span>
          <h2 className="contact-heading">Let's make<br />it <span>happen.</span></h2>
          <p className="text-[#B5B5B5] leading-relaxed max-w-sm">An internship, a website, a content idea, or a collaboration. I'd love to hear about it.</p>
          <div className="contact-email-row"><a href={`mailto:${PERSONAL_INFO.socials.email}`}>{PERSONAL_INFO.socials.email}</a><button type="button" onClick={copyEmail} aria-label="Copy email address">{copied ? <Check size={18} /> : <Copy size={18} />}</button></div>
          <div className="hero-socials">
            <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub</a>
            <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} /> LinkedIn</a>
            <a href={PERSONAL_INFO.socials.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={17} /> Instagram</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={openEmail}>
          <h3>Start a conversation <ArrowUpRight size={22} /></h3>
          <div className="grid sm:grid-cols-2 gap-5">
            <div><label htmlFor="contact-name-input">Your name</label><input id="contact-name-input" name="name" autoComplete="name" required maxLength={100} placeholder="Your name" value={draft.name} onChange={e => setDraft({ ...draft, name: e.target.value })} /></div>
            <div><label htmlFor="contact-email-input">Email address</label><input id="contact-email-input" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" value={draft.email} onChange={e => setDraft({ ...draft, email: e.target.value })} /></div>
          </div>
          <label htmlFor="contact-message-input">What are you thinking?</label>
          <textarea id="contact-message-input" name="message" required maxLength={1500} rows={5} placeholder="Tell me a little about your idea or opportunity…" value={draft.message} onChange={e => setDraft({ ...draft, message: e.target.value })} />
          <button className="primary-action" type="submit" id="contact-submit-btn">Continue in email <ArrowUpRight size={18} /></button>
          <p className="text-xs text-[#B5B5B5] leading-relaxed">Opens a draft in your email app. You review and send it.</p>
        </form>
      </div>
      <p role="status" className="mt-4 text-sm text-[#B5B5B5]">{status}</p>
    </section>
  );
};
