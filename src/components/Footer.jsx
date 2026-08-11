import { profile } from '../data/portfolioData.js';

export default function Footer() {
  return (
    <footer className="text-center py-10 font-mono text-xs text-light-inkSoft dark:text-dark-inkSoft">
      {profile.name} · built with React & Tailwind
    </footer>
  );
}
