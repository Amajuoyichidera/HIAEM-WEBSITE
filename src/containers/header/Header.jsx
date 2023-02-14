import React from 'react';
import people from '../../assets/people.png';
import gs from '../../assets/gs.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <p>Welcome To He Is Able Evangelical Mission WorldWide</p>
      <h1 className="gradient__text">WE ARE GLAD YOU ARE HERE!</h1>
      <p>Christ is still offering Salvation,run to him Now, and get free access to his sonship,tomorrow may be too late! (Galatians 4:1-3).</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt={people} />
        <p>We are an international church</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={gs} alt={gs} />
    </div>
  </div>
);

export default Header;
