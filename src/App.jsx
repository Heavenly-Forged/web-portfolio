import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

/**
 * APP — the composition root
 * ----------------------------------------------------------------
 * Notice App itself renders almost no markup or logic of its own —
 * it just arranges components in order. This is intentional: each
 * section is a self-contained, independently readable unit. Want to
 * reorder sections, remove one, or reuse Hero on another page? It's
 * a one-line change here, not a hunt through a giant file.
 */
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
