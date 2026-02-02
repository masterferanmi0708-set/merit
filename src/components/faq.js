import { useState } from 'react';
const FAQ = () => {
const [activeIndex, setActiveIndex] = useState(1); // "How fast can I expect results" open by default

  const faqData = [
    { q: "What exactly does a Web3 shilling agency do?", a: "We provide comprehensive marketing strategies to boost your project's visibility." },
    { q: "How fast can I expect results, and how do you measure success?", a: "Results Vary. Meme Projects Might Pop In Days, Others Build Momentum Over Weeks. We Measure Success Through Engagement, Follower Growth, Traffic, And Conversions. No Fluff, We Track Real Hype, Not Just Empty Likes. If Your Project's Solid, We'll Help It Catch Fire." },
    { q: "Can you help my project go viral on platforms like Twitter, Reddit, or Telegram?", a: "Yes, we specialize in multi-platform viral marketing tailored for Web3 communities." },
    { q: "Do you work with NFT, DeFi, and meme coin projects, or just big blockchains?", a: "We work across all Web3 sectors, from niche NFT drops to major Layer 1 protocols." },
    { q: "Is your promotion organic or paid? Will you use real people or bots?", a: "We prioritize organic growth through real engagement, ensuring long-term project health." }
  ];
  return (

   <section className="faq-section fade-in">
      <div className="container">
        <div className="faq-header text-center">
          <h2>FAQs</h2>
          <p>Frequently Asked Questions</p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="faq-question-row">
                <h3>{item.q}</h3>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
   )
}

export default FAQ;