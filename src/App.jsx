import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Features from './components/Features/Features';
import Services from './components/Services/Services';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Features />
          <Services />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
