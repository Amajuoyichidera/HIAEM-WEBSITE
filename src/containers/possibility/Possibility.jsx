import React from 'react';
import possibilityImage from '../../assets/illust.png';
import clock from '../../assets/clock.png';
import circle from '../../assets/circle.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="sermon">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Upcoming Events</h4>
      <h1 className="gradient__text">WATCH AND LISTEN TO OUR SERMONS EVERY SUNDAY</h1>
      <p>We stream live our sunday sermons on <br /> facebook and mixlr.com/calvarymedia.</p>
      <section className='one'>
        <img className='clock' src={clock} alt={clock} />
        <section>
          <p>Sunday 07:00am WAT <br /> Tuesday 05:00am WAT</p>
        </section>
      </section>

      <section className='one'>
        <img className='clock' src={circle} alt={circle} />
        <section>
          <p>GOD IS ABLE EVANGELICAL MISSION <br /> TESTIMONY GROUND, <br /> AWKA RD ONITSHA, ANAMBRA STATE <br /> CC, HIAEM GERMANY, EUROPE</p>
        </section>
      </section>
    </div>
  </div>
);

export default Possibility;
