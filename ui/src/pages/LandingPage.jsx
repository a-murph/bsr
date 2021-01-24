import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from '../components/blog/BlogPost';
import MidPageAd from '../components/homepage/MidPageAd';

const LandingPage = () => (
  <div>
    <nav>
      <span className="titleLogo">Birch Street Radio</span>
      <Link className="activeLink" to="/">Listen Now</Link>
      <Link to="/blog">The Latest</Link>
      <Link to="/">The Bistro</Link>
      <Link to="/">The Detour</Link>
      <Link to="/">About</Link>
    </nav>
    <div className="heroContainer">
      <h2 className="heroTitle">Birch Street Radio</h2>
      <div className="heroSubtitle">
        Adult Alternative - Classic Rock - Folk Rock - Alternative Rock
        <br/>
        Americana - Indie Rock - Progressive Rock - Singer-Songwriters
      </div>
      <div className="heroButtons">
        <button>Stream from the USA</button>
        <button>Stream from Canada</button>
      </div>
    </div>
    <main>
      <h3>The Latest</h3>
      <div className="homeBlogPostContainer">
        <BlogPost postInfo={{
          postDate: 'Sunday, January 24 2021',
          postTitle: 'Lastest from Periphery, Squirrel Nut Zippers, and Polyphia',
          postContent: 'This is where the text for the blog post would normally go, but I\'m not going to bother to write the whole thing out in detail right now'
        }} />
        <Link className="blogPostLink" to="/blog">Read More of The Latest</Link>
      </div>
      <MidPageAd type="bistro" />
      <div className="homeBlogPostContainer">
        <BlogPost postInfo={{
          postDate: 'Friday, January 22 2021',
          postTitle: 'Lastest from Incognito, Bent Knee, and Red Handed Denail',
          postContent: 'This is a different blog post, here I am writing out separate text for it so that it\'s obviously different when rendered'
        }} />
        <Link className="blogPostLink" to="/blog">Read More of The Latest</Link>
      </div>
      <MidPageAd type="detour" />
    </main>
    <div className="aboutUs">
      <h4 className="aboutUsHeader">
        About Us
      </h4>
      <div className="aboutUsMain">
        <p>Birch Street Radio is a noncommercial, independent program produced by and for music lovers.</p>
        <p>We feature a wide range of rock and "alternative" music from the past six decades, from The Beatles to the Black Keys, Dylan to Dawes and beyond.</p>
        <p>We enjoy mixing the new and the old, the familiar and the obscure, and we're constantly adding new artists and new songs -- with a special emphasis on independent and emerging artists.</p>
        <p>Birch Street Radio began broadcasting in April 2013 and has been evolving ever since. Our program has moved a few times from one internet broadcast operation to another. In Janary 2018, Birch Street Radio began streaming on the TorontoCast network. In January 2019, Birch Street Radio launched a second stream on the Live365 network for listeners in the United States.</p>
        <p>In the shifting landscape of internet radio, our program may switch "channels" from time to time -- but our "Marvelous Mixture of Music" plays on! You can always find players and links to our stream here at birchstreetradio.com.</p>
      </div>
      <div className="abotuUsFooter">
        <h5>A Note About Our Streaming Hosts</h5>
        <p>Birch Street Radio is a musical entertainment program produced by Birch Street Studios. The program is streamed from Montreal, Que., Canada, by TorontoCast, and from Boardman, OR, USA by Live365. Those streaming companies are responsible for all legal, financial, and technical aspect of their respective services.</p>
        <div className="aboutUsFooterStreamInfo">
          <div>
            <div>
              TorontoCast, LLC
              <br />
              13-280 West Beaver Creek Rd., Suite #164
              <br />
              Richmond Hill, ON L4B 3Z1
            </div>
          </div>
          <div>
            <div>
              Live365
              <br />
              1340 Monticello Avenue
              <br />
              Hermitage, PA 16148
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      &copy; 2021 Birch Street Studios
    </footer>
  </div>
);

export default LandingPage;