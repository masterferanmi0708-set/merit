const Testimonial = () => {
const cards = Array(6).fill({
  name: "Sarah Jonshon",
  role: "CEO Tesla",
  text:
    "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."
});
  return (
 <section className="testimonials-section">
      <div className=" text-center">
        {/* Header Section */}
        <div className="testimonial-intro mb-5">
          <span className="testimonial-tag">Testimonials</span>
          <h2 className="testimonial-title">Don’t Take Our Words<br/> From It</h2>
          <p className="testimonial-subtitle">What Our Clients are saying about us</p>
        </div>


       <div className="testimonial-marquee">
        <div className="testimonial-track">
          {[...cards, ...cards].map((card, i) => (
            <div className="testimonial-wrapper" key={i}>
              <div className="testimonial-ribbon">
                <div className="user-info">
                  <h5>{card.name}</h5>
                  <p>{card.role}</p>
                </div>
                <img src="/logo.png" className="ribbon-logo" />
                <div className="ribbon-fold-outside"></div>
              </div>

              <div className="testimonial-content">
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      

  
  
 
</div>

        {/* Join Projects CTA Box */}
        <div className="join-projects-box mt-5">
          <div className="user-avatars mb-3">
             <img src="/avatar1.png" alt="u1" />
             <img src="/avatar2.png" alt="u2" />
             <img src="/avatar3.png" alt="u3" />
             <img src="/avatar4.png" alt="u4" />
             <img src="/avatar5.png" alt="u5" />
          </div>
          <h2 className="join-title">Join Over 15+ Projects</h2>
          <p className="join-subtitle">What Our Clients are saying about us</p>
          <button className="schedule-btn">
            Schedule A Meeting <span className="arrow">🪄</span>
          </button>
        </div>
      </div>
</section>
   
   )
}

export default Testimonial;