import { profile, skills } from '../data/portfolioData.js';

export default function Hero() {
  return (
    <header className="max-w-3xl mx-auto px-7 pt-20 pb-16 border-b border-light-line dark:border-dark-line">
      <div className="flex items-center gap-2 mb-4 text-xs font-mono text-accent">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        {profile.availability}
      </div>

      <h1 className="font-serif font-semibold text-4xl sm:text-5xl tracking-tight leading-tight mb-1.5">
        {profile.name}
      </h1>

      <p className="text-light-inkSoft dark:text-dark-inkSoft text-base mb-6">
        {profile.role}
      </p>

      <p className="max-w-xl text-light-inkSoft dark:text-dark-inkSoft text-[17px] leading-relaxed mb-7">
        {profile.bio}
      </p>

      {/* Reusing the `skills` data here keeps the hero and the Skills
          section in sync automatically — one array, two views. */}
      <div className="flex flex-wrap gap-2">
        {skills.slice(0, 4).map((skill) => (
          <span
            key={skill}
            className="
              font-mono text-xs px-3.5 py-1.5 rounded-full
              border border-light-line dark:border-dark-line
              bg-light-surface dark:bg-dark-surface
              text-light-inkSoft dark:text-dark-inkSoft
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </header>
  );
}
