import ThemeToggle from './ThemeToggle.jsx';
import { profile } from '../data/portfolioData.js';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    // `sticky top-0` + a translucent background + backdrop-blur keeps
    // the nav visible on scroll without feeling heavy. z-10 keeps it
    // above section content.
    <nav
      className="
        sticky top-0 z-10
        bg-light-bg/90 dark:bg-dark-bg/90 backdrop-blur-sm
        border-b border-light-line dark:border-dark-line
      "
    >
      <div className="max-w-3xl mx-auto px-7 py-4 flex items-center justify-between">
        <span className="font-serif font-semibold text-base tracking-tight">
          {profile.name.split(' ')[0]} {profile.name.split(' ').slice(-1)}
        </span>

        <div className="flex items-center gap-6">
          <ul className="hidden sm:flex items-center gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="
                    text-sm text-light-inkSoft dark:text-dark-inkSoft
                    hover:text-light-ink dark:hover:text-dark-ink
                    transition-colors duration-150
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
