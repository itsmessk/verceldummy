import "./css/Footer.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const getDate = new Date();
  const year = getDate.getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer-company-info">
          <img className="infz-logo" src="./infoziant-logo.png" alt="logo" />

          <div className="company-details">
            <p><FaPhone /> +1 (314) 732 0300, +91 96000 85988</p>
            <p><FaEnvelope /> support@infoziant.com</p>
            <p><FaMapMarkerAlt /> Chennai: India Office: Akshaya HQ, Rajiv Gandhi Salai, Kazhipattur, Tamil Nadu, Chennai - 603103, India</p>
            <p><FaMapMarkerAlt /> Singapore: 60 Paya Lebar Road, #07-39, Paya Lebar Square, Singapore 409051</p>
            <p><FaMapMarkerAlt /> Dubai: Suite #724, Tamani Arts, Business Bay, Dubai, UAE</p>
            <p><FaMapMarkerAlt /> United States: 1401, 21st ST STE 6310, Sacramento, CA 95811, USA</p>
          </div>

          <ul className="footer-social-ul">
          <li>
                <a href="https://www.linkedin.com/company/infoziant/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={25} color="white" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/infoziant.inc?igsh=bHhiZXB2aXhhcHV0" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={25} color="white" />
                </a>
            </li>

          </ul>
        </div>

        <div className="footer-options">
          <div className="footer-links-section">
            <h4>Navigation</h4>
            <Link to='/' className="footer-links"><p>Home</p></Link>
            <Link to='/about' className="footer-links"><p>About</p></Link>
            <Link to='/awards' className="footer-links"><p>Awards</p></Link>
            <Link to='/product' className="footer-links"><p>Product</p></Link>
            <Link to='/vapt' className="footer-links"><p>Services</p></Link>
            <Link to='/contact' className="footer-links"><p>Contact</p></Link>
          </div>

          <div className="footer-links-section">
            <h4>Services</h4>
<Link to='/vapt' className="footer-links"><p>VAPT</p></Link>
            <Link to="/api-vapt" className="footer-links"><p>API VAPT</p></Link>
            <Link to="/network-infrastructure" className="footer-links"><p>Infrastructure Security</p></Link>
            <Link to="/cloud-infrastructure" className="footer-links"><p>Cloud Security</p></Link>
            <Link to="/web-and-mobile-app" className="footer-links"><p>Mobile Security</p></Link>
            <Link to="/siem" className="footer-links"><p>SIEM</p></Link>     
         </div>
        </div>
      </footer>
      <div className="footer-copyright">
        <p>Copyright © {year} Infoziant IT Solutions Inc.</p>
      </div>
    </>
  );
}