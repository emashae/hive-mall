import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';  
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-5 mt-auto">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} <span className="fw-bold" style={{ fontFamily: '"Pacifico", cursive' }}>HiveMall</span> All Rights Reserved.</p>
        
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
            <FaTwitter size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
            <FaInstagram size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
            <FaLinkedin size={30} />
          </a>
        </div>

        {/* Links */}
        <div className="mt-3">
          <a href="/privacy-policy" className="text-white mx-2">Privacy Policy</a> | 
          <a href="/terms-of-service" className="text-white mx-2"> Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
