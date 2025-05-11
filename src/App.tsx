import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen min-w-full bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Services />
        {/* <Blog /> */}
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;