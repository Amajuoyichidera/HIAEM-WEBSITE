import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> God has things instore for you.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="BE HEAVEN CONSCIOUS" text="If then you have been raised with Christ, seek the things that are above, where Christ is, seated at the right hand of God. Set your minds on things that are above, not on things that are on earth. For you have died, and your life is hidden with Christ in God. When Christ who is your life appears, then you also will appear with him in glory. (Colossians 3:1–4)." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="WATCH & LISTEN TO OUR SERMON" text="Pray, listen and watch. The coming of Christ is so much closer than some realize. WATCH AND PRAY Matthew 26:41." />
        <Article imgUrl={blog03} date="Become the tended active" text="Consequently, faith comes from hearing the message, and the message is heard through the word about Christ." />
        <Article imgUrl={blog04} date="SERVE GOD & LIVE RIGHT" text="No one can serve two masters; for either he will hate the one and love the other, or he will be devoted to one and despise the other. You cannot serve God and wealth." />
        <Article imgUrl={blog05} date="Live Peaceably" text="Follow peace with all men, and holiness, without which no man shall see the Lord (Hebrews 12:14)" />
      </div>
    </div>
  </div>
);

export default Blog;
