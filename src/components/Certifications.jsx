import SectionHeading from './SectionHeading.jsx';
import { certifications } from '../data/portfolioData.js';

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeading title="Certifications" label="Cisco · Fortinet" />
      <div className="flex flex-col gap-3">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="
              flex items-center justify-between px-4.5 py-4 rounded-lg
              border border-light-line dark:border-dark-line
              bg-light-surface dark:bg-dark-surface
            "
          >
            <div>
              <div className="text-[14.5px] font-medium mb-0.5">{cert.name}</div>
              <div className="text-xs text-light-inkSoft dark:text-dark-inkSoft">
                {cert.issuer}
              </div>
            </div>
            <span className="font-mono text-[11px] text-accent bg-accent-soft dark:bg-accent-softDark px-2.5 py-1 rounded-full whitespace-nowrap">
              {cert.badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
