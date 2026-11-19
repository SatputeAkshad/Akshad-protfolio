import { useEffect, useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';
import { SocialLinks } from './SocialLinks';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('');
  const [draft, setDraft] = useState({ name: '', email: '', message: '' });
  const email = PERSONAL_INFO.socials.email;

  // Reset the "copied" tick after a moment so the button can be used again.
  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setStatus('Email address copied.');
    } catch {
      setStatus('Copy unavailable — select the address above instead.');
    }
  };

  const openEmail = (event: React.FormEvent) => {
    event.preventDefault();
    const name = draft.name.trim();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Hi Akshad,\n\n${draft.message.trim()}\n\n${name}\nReply to: ${draft.email.trim()}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setStatus('Opening your email app — review and send it from there.');
  };

  const update = (field: keyof typeof draft) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setDraft(d => ({ ...d, [field]: e.target.value }));

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader icon={Send} title="Get in touch" />
        <div className="contact-grid">
          <div data-depth>
          <div className="contact-intro glass d3">
            <p className="contact-heading">Let's make it happen.</p>
            <p className="contact-copy">An internship, a website, a content idea or a collaboration — I'd love to hear about it.</p>
            <div className="contact-email">
              <Mail size={20} aria-hidden="true" />
              <a className="link" href={`mailto:${email}`}>{email}</a>
              <button type="button" className="icon-btn" onClick={copyEmail} aria-label="Copy email address">
                {copied ? <Check size={17} /> : <Copy size={17} />}
              </button>
            </div>
            <SocialLinks className="contact-socials" />
          </div>
          </div>

          <div data-depth>
          <form className="form glass d3" onSubmit={openEmail}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="contact-name">Name</label>
                <input id="contact-name" name="name" autoComplete="name" required maxLength={100} value={draft.name} onChange={update('name')} />
              </div>
              <div className="field">
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} value={draft.email} onChange={update('email')} />
              </div>
            </div>
            <div className="field">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" required maxLength={1500} rows={4} value={draft.message} onChange={update('message')} />
            </div>
            <button className="btn btn-ink glass" type="submit">Continue in email <ArrowUpRight size={16} /></button>
            <p className="form-note">Opens a draft in your email app — nothing is sent until you hit send there.</p>
            <p role="status" className="form-status">{status}</p>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
};
