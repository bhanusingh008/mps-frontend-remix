import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer_style.css";

const Footer = () => {
  const nav = useNavigate();
  const redirect = (url) => {
    window.open(url);
  };

  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="subfooter">
          <div className="col">
            <div className="sub-title">Quick Links</div>
            <div>
              <a href="/" className="a-tag">
                HOME
              </a>
            </div>
            <div>
              <a href="/contact" className="a-tag">
                CONTACT
              </a>
            </div>
            <div>
              <a href="/exams/main" className="a-tag">
                JEE MAIN
              </a>
            </div>
            <div>
              <a href="/exams/advanced" className="a-tag">
                JEE ADVANCED
              </a>
            </div>
            <div>
              <a href="/iit-jee-advance-maths-coaching-in-faridabad" className="a-tag">
                ACE JEE ADVANCED
              </a>
            </div>
            <div>
              <a href="/iit-jee-maths-coaching-in-faridabad" className="a-tag">
                ACE JEE MAIN
              </a>
            </div>
          </div>
        </div>
        <div className="subfooter">
          <div className="col">
            <div className="sub-title">Connect</div>
            <div className="connect-icon-ctn">
              <img className="connect-icon" src={"/assets/whatsapp.png"} alt="whatsappIcon"></img>
              <img className="connect-icon" src={"/assets/call.svg"} alt="Call Icon" loading="lazy"></img>
              <span>9718942794, 8448203692</span>
            </div>
            <div className="connect-icon-ctn">
              <img className="connect-icon" src={"/assets/facebook.svg"} alt="facebookLogo"></img>
              <span>
                <a className="a-tag" href="https://www.facebook.com/profile.php?id=61556705023218" target="_blank">
                  Facebook
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">Copyright &copy; 2024 Maths By Pawan Sir - All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
