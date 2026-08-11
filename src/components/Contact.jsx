import { Mail, Github, Linkedin } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { contact } from '../data/portfolioData.js';

// A small config-driven list keeps the JSX below clean — add a new
// contact method by adding one object here, not by copy-pasting markup.
const links = [
  { key: 'email', label: 'Email', icon: Mail, href: contact.email ? `mailto:${contact.email}` : null },
  { key: 'github', label: 'GitHub', icon: Github, href: contact.github },
  { key: 'linkedin', label: 'LinkedIn', icon: Linkedin, href: contact.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-7 py-14">
      <SectionHeading title="Contact" label="Reach out" />
      <div className="flex flex-wrap gap-3">
        {links.map(({ key, label, icon: Icon, href }) => {
          const isReady = Boolean(href);
          const Wrapper = isReady ? 'a' : 'span';
          return (
            <Wrapper
              key={key}
              {...(isReady ? { href, target: '_blank', rel: 'noreferrer' } : {})}
              className={`
                flex items-center gap-2 text-sm px-4.5 py-3 rounded-lg border
                transition-colors duration-150
                ${
                  isReady
                    ? 'border-light-line dark:border-dark-line bg-light-surface dark:bg-dark-surface hover:border-accent hover:-translate-y-0.5'
                    : 'border-dashed border-light-line dark:border-dark-line text-light-inkSoft dark:text-dark-inkSoft'
                }
              `}
            >
              <Icon size={15} />
              {isReady ? label : `${label} — coming soon`}
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
