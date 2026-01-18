
const Solutions = () => {
  const solutionList = [
    {
      title: "Targeted Shilling Campaigns",
      desc: "This approach ensures you're reaching the right audience, generating organic interest, and creating buzz around your project."
    },
    {
      title: "Content Marketing",
      desc: "Well-crafted, concise, and relatable content helps communicate your project's unique value to both the community and potential investors."
    },
    {
      title: "Engagements-Driven Contests",
      desc: "These activities drive engagement and increase visibility by encouraging users to actively promote your project."
    },
    {
      title: "Content Creation",
      desc: "From tweets to blog posts, ensuring consistency and clarity in messaging fosters trust and long-term organic growth."
    }
  ];
  return (
<section className="solutions-section">
      <div className="container text-center">
        {/* Solution Introduction */}
       
        
        {/* 2x2 Grid for Solutions */}
        <div className="solutions-grid">
          {solutionList.map((item, index) => (
            <div key={index} className="solution-box">
              <div className="solution-icon-container">
                <div className="happy-face"></div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
   
   )
}

export default Solutions;