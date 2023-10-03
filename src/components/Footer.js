import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span>Zoumtech</span>
            
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#">Home</a></li>
              <li>   <a href="#"><i className="fas fa-shopping-cart"></i> Products</a> </li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-social">
            {/* Social media icons */}
            <a href="https://twitter.com/zoumaniguimass1" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter icon"></i></a>
       <a href="https://www.facebook.com/massa.zoumanigui.96" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook icon"></i></a>
        <a href="https://github.com/massazoum" target="_blank" rel="noopener noreferrer"><i class="fab fa-github icon" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/zoumtechmassa" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin icon" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Zoumtech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
