import React from "react";
import "./footer.css";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer-outer" id="about">
      <Row>
        <Col>
          <div className="outer-container">
            <div className="footer-heading">
              <h2>Business Address</h2>
            </div>
            <h4 className="footer-inner-heading">AK MACHINERIES</h4>
            <p className="footer-address">
              G.B. marg, Latouche Rd, Lucknow, near Qaisarbagh sabzi mandi.
            </p>
          </div>
        </Col>
        <Col>
          <div className="outer-container">
            <div className="footer-heading">
              <h2>Contact Us</h2>
            </div>
            <h4 className="footer-inner-heading">
              In case of any queries or grievances please contact
            </h4>
            <p className="footer-address">
              <a href="tel:+917538463133" target="_blank">
                Call:+917538463133
              </a>
              <p>
                <a href="mailto:a.k.machineries12@gmail.com">
                  Mail us : a.k.machineries12@gmail.com
                </a>
              </p>
            </p>
          </div>
        </Col>
      </Row>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.7348411777402!2d80.92818377420977!3d26.848384776685506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdb65f5ae813%3A0x14c4234c9ed716c5!2sA.%20K.%20Machineries!5e0!3m2!1sen!2sin!4v1704450897267!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="map"
      ></iframe>
    </div>
  );
}

export default Footer;
