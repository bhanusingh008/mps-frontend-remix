import React from "react";
import "./CallToActionFooter.css";

const CallToActionFooter = () => {
  return (
    <div className="footer cta-footer">
      <a className="whatsapp action-button" href="https://wa.me/7048918618" target="_blank" rel="noopener noreferrer">
        <img className="icon" src={"/assets/whatsapp-cta.svg"} alt="icon"></img>
      </a>

      <a className="call action-button" href="tel:+917048918618">
        <img className="icon" src={"/assets/call.svg"} alt="icon"></img>
      </a>

      <a href="sms:+917048918618" className="message action-button">
        <img className="icon" src={"/assets/message.svg"} alt="icon"></img>
      </a>
    </div>
  );
};

export default CallToActionFooter;
