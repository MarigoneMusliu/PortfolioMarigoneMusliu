import React from 'react';
import HeroSection from './hero-section';
import AboutSection from './about';
import Experience from './experience';
import Skills from './skills';
import Projects from './projects';
import Education from './education';
import ContactSection from './contact';


const HomePageComponent = () => {
  return (
    <div>
    <HeroSection />
    <AboutSection />
    <Experience />
    <Skills />
    <Projects />
    <Education />
    <ContactSection /></div>
  )
}

export default HomePageComponent