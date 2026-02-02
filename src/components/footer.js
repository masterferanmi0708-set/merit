const Footer = () => {

  return (
<footer className="footer-section fade-in">
      <div className="container">
        {/* Decorative Divider Line */}
        <div className="footer-divider"></div>

        <div className="footer-content">
          <div className="footer-branding">
            <h2 className="footer-logo">
              <span className="text-purple">Merit</span> Shillers
            </h2>
            <p className="copyright">© MeritShillers 2025. All rights reserved.</p>
          </div>

          <div className="footer-socials">
            {/* Social Icon 1: Twitter/X */}
            <a
  href="https://x.com/eny_mogs"
  target="_blank"
  rel="noopener noreferrer"
  className="social-box"
  aria-label="Follow us on X"
>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* Social Icon 2: Email */}
            <a
  href="mailto:feranmiakinuli007@gmail.com"
  className="social-box"
  aria-label="Email us"
>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a1.75 1.75 0 01-1.844 0L1.5 8.67zM22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a.25.25 0 00.264 0L22.5 6.908z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
   
   )
}

export default Footer;