import SectionHeading from './SectionHeading.jsx';
import { skills } from '../data/portfolioData.js';

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading title="Skills & stack" label="Languages" />
      <div className="flex flex-wrap gap-2.5">
        {/* .map() over the skills array — this is the core React pattern
            for rendering lists. Each item needs a unique `key` prop so
            React can efficiently track which item is which when the
            list changes (add/remove/reorder). Using the skill name
            itself as the key works here since names are unique. */}
        {skills.map((skill) => (
          <div
            key={skill}
            className="
              flex items-center gap-2 text-sm px-4 py-2.5 rounded-lg
              border border-light-line dark:border-dark-line
              bg-light-surface dark:bg-dark-surface
            "
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
