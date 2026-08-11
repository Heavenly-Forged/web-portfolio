import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';

/**
 * A small, focused component that does exactly one job: toggle the
 * theme and reflect its current state visually. It doesn't know or
 * care HOW theme is stored (that's ThemeContext's job) — it just
 * calls toggleTheme(). This separation is what makes components
 * reusable and easy to reason about.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="
        flex items-center justify-center w-8 h-8 rounded-full
        border border-light-line dark:border-dark-line
        text-light-inkSoft dark:text-dark-inkSoft
        hover:text-accent hover:border-accent
        transition-colors duration-150
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2
      "
    >
      {isDark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
