import React from 'react';
import { useEffect } from 'react';
import './App.css';
import Hero from './components/hero';
import ArtGallery from './components/artgallery';
import CaseStudies from './components/casestudies';
import Problems from './components/problems';
import Solutions from './components/solutions';
import Testimonial from './components/testimonial';
import FAQ from './components/faq';
import Footer from './components/footer';

function App() {

  useEffect(() => {
    const appearOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px 0px 0px"

    };
    const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) {
      entries.forEach(entry => {
      if (!entry.isIntersecting) { 
        return; 
      } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }
    })
  },
   appearOptions);

    const faders = document.querySelectorAll('.fade-in');
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  }, []);
  return (
    
    <div className="App">
      <main>
        <Hero />
        <ArtGallery />
        <CaseStudies />
         <section id="problems">
           <Problems />
        </section>
        <Solutions />
        <Testimonial />
        <FAQ />
      
        <Footer /> 
      </main>
    </div>
    
  );
}

export default App;
