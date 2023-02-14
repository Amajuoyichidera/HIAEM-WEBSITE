import React from 'react'
import './contact.css';
import Vector from '../../assets/Vector.png'
import linkedin from '../../assets/linkedin.png'
import twi from '../../assets/twi.png'

const Contact = () => {
  return (
    <section>
        <h2 id='contact' className='gradient__text get'>GET IN TOUCH WITH US NOW</h2>
        <section className='sec1'>
                <form>
                    <h3>CONTACT FORM</h3>
                    <input type="text" placeholder='Your Full Name' />
                    <input type="email" placeholder='Your Email' />
                    <input type="text" placeholder='Subject' />
                    <input className='mes' type="text" placeholder='Message' />
                    <button type='button'>SEND MESSAGE</button>
                </form>
            <section>
                <p>Address</p>
                <h4>GOD IS ABLE EVANGELICAL MISSION <br />TESTIMONY GROUND, <br />AWKA ROAD, ONITSHA ANAMBRA STATE</h4>
                <h4>CC, HIAEM GERMANY, EUROPE. <br /> Contact Details <br /> (+234)803 406 5875 <br /> P.O. BOX 14240, ONITSHA, ANAMBRA STATE, NIGERIA</h4>
                <p>Find Us Here : </p>
                <figure>
                    <img src={Vector} alt={Vector} />
                    <img src={linkedin} alt={linkedin} />
                    <img src={twi} alt={twi} />
                </figure>
            </section>
        </section>
    </section>
  )
}

export default Contact