import SectionHeading from './SectionHeading.jsx';
import { profile } from '../data/portfolioData.js';

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading title="About" label="Currently" />
      <p className="text-[15.5px] leading-relaxed text-light-inkSoft dark:text-dark-inkSoft max-w-xl">
        {profile.about}
      </p>
    </section>
  );
}
