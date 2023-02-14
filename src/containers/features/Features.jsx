import React from 'react';
// import Feature from '../../components/feature/Feature';
import './features.css';

// const featuresData = [
//   {
//     title: '',
//     text: '',
//   },
//   {
//     title: '',
//     text: '.',
//   },
//   {
//     title: '',
//     text: '',
//   },
//   {
//     title: '',
//     text: '',
//   },
// ];

const Features = () => (
  <div className="gpt3__features section__padding" id="about">
    <div className="gpt3__features-heading">
      <p>WELCOME TO OUR CHURCH !</p>
      <h1 className="gradient__text">HE IS ABLE EVANGELICAL MISSION</h1>
      <p>HE-IS-ABLE EVANGELICAL MISSION Started and still is a church, committed to the studying of God’s Word, evangelism and aggressive prayers in 1993,Between then and now, the church has grown and still growing with branches in many states in Nigeria, west, central and south Africa. The focus of the church has been in the following areas:</p>
      <p>1. Soul winning </p>
      <p>2. Discipleship of God’s people based on the wholesome Word of God</p>
      <p>3. Preparing for the glorious rapture of the saints</p>
      <p>4. Bringing down God’s awesome power for great revival in believers’ life, with the fire spreading among them that are not yet saved.</p>

    </div>
    {/* <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div> */}
  </div>
);

export default Features;
