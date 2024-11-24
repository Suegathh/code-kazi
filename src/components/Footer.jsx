import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="fab fa-facebook-f"></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="fab fa-twitter"></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="fab fa-instagram"></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="fab fa-linkedin-in"></a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="fab fa-github"></a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="fab fa-tiktok"></a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="fab fa-youtube"></a>
      </div>
      <p className="footer-text">&copy; 2024 CodeKazi. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
