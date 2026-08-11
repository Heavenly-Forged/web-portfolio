/**
 * PORTFOLIO DATA
 * ----------------------------------------------------------------
 * Keeping your content here, separate from the JSX that renders it,
 * means updating your bio, skills, or certs never requires touching
 * component logic. Components just .map() over these arrays.
 * When you land your first project or job, this is the only file
 * you'll usually need to edit.
 */

export const profile = {
  name: 'Jiro C. Beringuela',
  role: 'Software Engineer / Network Engineer',
  bio: "I like figuring out how things work — whether that's a network passing packets around or a program running the way it's supposed to. Still learning, still building, and genuinely enjoying the process of getting better at both sides of the stack.",
  about:
    "I'm early in my career and focused on building a solid foundation across both software development and networking. My CS/IT background is grounded in Cisco's NetAcad coursework and Fortinet's security fundamentals, and I spend my free time writing small programs and experimenting with network setups to understand how systems actually behave, not just how they're supposed to.",
  availability: 'Available for opportunities',
};

export const skills = ['Java', 'Python', 'C#', 'Networking', 'Cybersecurity Basics'];

/**
 * PROJECTS
 * ----------------------------------------------------------------
 * How to add a project (no login, no backend — just files + a push):
 *
 * 1. Put any image, PDF, or zip for the project in /public/projects/
 *    e.g. public/projects/tarsi-screenshot.png
 *
 * 2. Add an entry below. `image` and `file` are both optional —
 *    reference them with a leading slash, e.g. '/projects/whatever.png'
 *    (files in /public are served from the site root).
 *
 * 3. Commit and push. Vercel/GitHub Pages rebuilds automatically and
 *    the project is live for every visitor — no login, no upload UI,
 *    nothing for the public to find or misuse.
 *
 * Example:
 * {
 *   name: 'Tarsi',
 *   description: 'Offline-first budgeting app with AI-assisted categorization.',
 *   link: 'https://github.com/you/tarsi',       // optional — repo or live demo
 *   image: '/projects/tarsi-cover.png',          // optional — shown on the card
 *   file: '/projects/tarsi-writeup.pdf',          // optional — download link
 * }
 */
export const projects = [];

export const certifications = [
  {
    name: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    badge: 'NetAcad',
  },
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    badge: 'NetAcad',
  },
  {
    name: 'NSE — Network Security Expert',
    issuer: 'Fortinet',
    badge: 'Fortinet',
  },
];

export const contact = {
  email: null, // e.g. 'jiro@example.com' — fill in when ready
  github: null, // e.g. 'https://github.com/yourhandle'
  linkedin: null, // e.g. 'https://linkedin.com/in/yourhandle'
};
