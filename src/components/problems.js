const Problems = () => {
    const problemList = [
    {
      title: "Lack Of Organic Visibility?",
      desc: "Projects face challenges in gaining organic reach, making it difficult to attract attention in a crowded space."
    },
    {
      title: "Poor Community Onboarding",
      desc: "Projects often fail to onboard new users effectively, leading to low participation in their ecosystem."
    },
    {
      title: "Ineffective Content Distribution",
      desc: "Even with great content, many projects struggle with content distribution and visibility across platforms."
    },
    {
      title: "Low Community Engagement?",
      desc: "Web3 projects often struggle to keep their community active and engaged."
    }
  ];

  return (

    <section className="problems-section fade-in">
      <div className="container">
        <h2 className="problems-main-title">What Problems Is Your Project Facing Currently?</h2>
        
        <div className="problems-grid">
          {problemList.map((item, index) => (
            <div key={index} className="problem-box fade-in">
              <div className="problem-icon">
                <div className="sad-face"></div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
         
         <div className="solution-intro fade-in">
          <span className="solution-tag">Solution</span>
          <h2 className="solution-title">Let’s Help You Solve Your Problems</h2>
          <p className="solution-subtitle">We Tackle Your Visibility Problem different ways</p>
        </div>

        <div className="arc-wrapper">
            <div className="arc arc-1"></div>
            <div className="arc arc-2"></div>
            <div className="arc arc-3"></div>
        </div>


      </div>
    </section>
   
   )
}

export default Problems;