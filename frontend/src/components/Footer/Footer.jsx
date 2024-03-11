
import React from 'react';
import { FaEnvelope, FaPhone, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa'; 
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
       <section className="cards contact" id="contact">
        <h2 className="title">Travaillons ensemble</h2>
        <div className="content">
            <div className="cardes">
                <div className="icon">
                    <i className="fas fa-phone"></i>
                </div>
                <div className="info">
                    <h3>Phone</h3>
                    <p>+20122222222</p>
                </div>
            </div>
            <div className="cardes">
                <div className="icon">
                    <i className="fas fa-envelope"></i>
                </div>
                <div className="info">
                    <h3>Email</h3>
                    <p>business@islam.com</p>
                </div>
            </div>
        </div>
    </section>
     
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 Company. Tous droits réservés</p>
          </div>
        </div>
     
    </footer>
  );
};

export default Footer;



