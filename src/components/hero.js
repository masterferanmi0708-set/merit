import logo from '../images/merit-logo.png';
import icon from '../images/grad.png';
const Hero = () => {

  return (
  <section className="hero-container fade-in">
           {/* Hero header */}
        <header className="d-flex justify-content-center pt-5 hero-header">
          <div className="d-flex align-items-center">
            <img src={logo}  alt="Merit Logo" style={{ width: '208px', height: '40px' }}className="logo-icon" />
          </div>
        </header>
            {/* Hero Content */}
            <div className="d-flex align-items-center justify-content-center text-center vh-100 hero-content">
            <div>
      <h1 className=" display-2 fw-lighter mb-4 mt-1">
        Struggling To Gain Visibility In
         The Crowded Web3 Space?
      </h1>

      <p className="text-secondary mb-5 fs-5">
        We help projects cut through the noise, securing long-term organic growth and
        building active, engaged communities
      </p>

      <button className="btn btn-light rounded-pill px-4 py-4 fw-bold text-purple purple-text-button">
        Solve your visibility problem 🪄
      </button> 
       </div>
    </div>


   
<header className="d-flex justify-content-center pt-5 hero-radar fade-in">
         <div className="d-flex align-items-center">
            <img src={icon} alt="M Icon" style={{ width: '1350px', height: '526px' }}className="M-icon" />
          </div>
</header>
    </section>
   )
}

export default Hero;