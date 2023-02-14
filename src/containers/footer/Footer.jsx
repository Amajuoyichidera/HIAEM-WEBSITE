import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';
import Vector from '../../assets/Vector.png'
import linkedin from '../../assets/linkedin.png'
import twi from '../../assets/twi.png'

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">WE WANT TO TAKE THE GOSPEL ALL OVER THE WORLD</h1>
      <p className='same'>In the same sense we can say when the lad was yielding jesus used him to draw men unto himself</p>
    </div>

    <div className="gpt3__footer-btn">
      <p> <a href="#contact">GET IN TOUCH</a></p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>© Copyright hiaem 2023</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Quick Links</h4>
        <p>ABOUT US</p>
        <p>SERMONS</p>
        <p>CONTACT US</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Connect</h4>
        <figure>
        <img src={Vector} alt={Vector} />
        <img src={linkedin} alt={linkedin} />
        <img src={twi} alt={twi} />
        </figure>       
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p> God is able evangelical mission <br /> Testimony ground, <br /> Awka rd. onitsha, Anambra state <br /> CC. HIAEM Germany, Europe.</p>
        <p>(+234) 803 406 5875</p>
        <p>hiaem@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 HIAEM. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
