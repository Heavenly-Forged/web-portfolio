/**
 * A tiny reusable component. Every section (About, Skills, Projects,
 * Contact) needs a title on the left and a small mono-font label on
 * the right — rather than repeat that markup four times, we extract
 * it once. This is the "don't repeat yourself" (DRY) principle applied
 * at the component level: if the heading style ever changes, it
 * changes in one place.
 */
export default function SectionHeading({ title, label }) {
  return (
    <div className="flex items-baseline justify-between mb-7">
      <h2 className="font-serif font-semibold text-xl tracking-tight">
        {title}
      </h2>
      {label && (
        <span className="font-mono text-xs uppercase tracking-wider text-light-inkSoft dark:text-dark-inkSoft">
          {label}
        </span>
      )}
    </div>
  );
}
