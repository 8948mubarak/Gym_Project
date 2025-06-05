import React from 'react';
// import './Footer.css'; // Make sure to create and import this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Tagline */}
        <div className="footer-section">
          <h2 className="footer-logo">ANSARI GYM</h2>
          <p className="footer-tagline">Train Hard. Stay Strong. Live Fit.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Bootcamps</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Plans</a></li>
             <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>29 Fit Street<br />Muscle City, 9 Alankar bihar</p>
          <br/>
          <p>Email: info@ansarigym.com</p>
          <p>Phone:+91 7355314106</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Twitter">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Designed and Developed by <span>ANSARI</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
