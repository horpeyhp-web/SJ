import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-sj">SJ</span>
              <span className="logo-tutor-white">Tutor</span>
            </div>
            <p className="footer-tagline">Learn. Connect. Grow.</p>
            <p className="footer-motto">Teach. Learn. Grow. Inspire.</p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/join">Join Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">SJGroup Family</h3>
            <ul className="footer-links">
              <li><a href="#">SJStudio</a></li>
              <li><a href="#">SJFoundation</a></li>
              <li><a href="#">SJShop</a></li>
              <li><a href="#">SJEvents</a></li>
              <li><a href="#">SJCreatives</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <Mail size={18} />
                <a href="mailto:info@sjtutor.com">info@sjtutor.com</a>
              </li>
              <li>
                <Phone size={18} />
                <a href="tel:+1234567890">+1 234 567 890</a>
              </li>
              <li>
                <MapPin size={18} />
                <span>Global Operations</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 SJTutor — A subsidiary of SJGroup | Learn. Connect. Grow.</p>
        </div>
      </div>
    </footer>
  );
};
