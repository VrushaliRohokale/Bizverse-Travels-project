import React from 'react';
import logo from '../components/images/b9dd8a8f-940e-4397-9f3c-3c649de58afd.png'; // Replace with the actual path to your logo image

function Footer() {
  return (
    <footer className="text-center bg-dark text-light py-4">
      <div className="container">
        {/* Logo and Description */}
        <div className="mb-3">
          <img src={logo} alt="Bizverse Logo" style={{ height: '50px' }} />
          <p className="mt-2">
            Bizverse Travelling Company - Travel to other country.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mb-3">
          <p className="mb-1">
            <i className="fas fa-map-marker-alt me-2"></i> 123 Main Street, New York, NY 10012, USA
          </p>
          <p className="mb-1">
            <i className="fas fa-phone me-2"></i> +1 (234) 567-890
          </p>
          <p className="mb-1">
            <i className="fas fa-envelope me-2"></i> info@bizverse.com
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="mb-3">
          <a href="#" className="text-light me-3">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-light me-3">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-light me-3">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-light me-3">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-light">
            <i className="fab fa-github"></i>
          </a>
        </div>

        {/* Copyright */}
        <div>
          <p className="mb-0">© 2021 Bizverse. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
