"use client";
import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import About from './sections/About';
import Experiences from './sections/Experiences';
import Expertise from './sections/Expertise';
import Contact from './sections/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Handle loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Handle scroll events
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <LoadingScreen isLoading={isLoading} />

      {/* Progress Bar */}
      {!isMenuOpen && (
        <motion.div
          className="fixed top-20 left-0 right-0 h-1 bg-[#4A6741] z-[997]"
          style={{
            scaleX: scrollYProgress,
            transformOrigin: "0%",
          }}
        />
      )}

      <Header
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="relative overflow-x-hidden">
        <About />
        <Experiences />
        <Expertise />
        <Contact />
      </main>
    </div>
  );
}