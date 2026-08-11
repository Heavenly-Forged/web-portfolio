import { createContext, useContext, useEffect, useState } from 'react';

/**
 * THEME CONTEXT — a mini lesson in React state management
 * ----------------------------------------------------------------
 * Why Context instead of just useState in App.jsx?
 * The dark-mode toggle lives in the Navbar, but the *effect* of dark
 * mode (the `dark` class on <html>) needs to be visible to every
 * component on the page. Passing a `theme` prop down through App ->
 * Navbar -> ... would mean "prop drilling" through components that
 * don't otherwise care about theme. Context lets any component that
 * needs it "subscribe" directly, no matter how deep it is in the tree.
 *
 * Rule of thumb: reach for Context when state is genuinely global
 * (theme, auth, current user). For state used by 1-2 nearby
 * components, plain props are usually simpler and easier to trace.
 */

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  // Lazy initializer function: this runs ONCE on first render only,
  // not on every re-render. It reads localStorage (persisted from a
  // previous visit) or falls back to the OS-level preference.
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  // useEffect here is the bridge between React state and the DOM/browser
  // APIs that live outside React's control (the <html> class list and
  // localStorage). It re-runs any time `theme` changes.
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook wrapping useContext. This is a common React pattern:
// it means components do `const { theme } = useTheme()` instead of
// `const { theme } = useContext(ThemeContext)`, and it lets us throw
// a helpful error if someone forgets to wrap the app in <ThemeProvider>.
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
