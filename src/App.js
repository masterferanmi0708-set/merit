import React from 'react';
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
