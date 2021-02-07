import React from 'react';
import { Link } from 'react-router-dom';

const MidPageAd = ({ type }) => {
  const text = {
    bistro: {
      main: 'Spend a relaxing hour at The Birch Street Bistro, listening to singer-songwriters, acoustic bands and other music on the softer side of the rock-pop spectrum. Most of the performers on the Bistro stage are indie artists, but some big stars drop in now and then as well.',
      info: 'The Birch Street Bistro streams daily at 12pm Eastern Time / 9am Pacific Time'
    },
    detour: {
      main: 'Join us ech night as we turn off Birch Street to explore a different musical landscape! We start the trip with a few tracks from a batch of featured new releases, mostly by indie artists. After that, we wander off in all directions! We might come across more new/unsigned artists, and/or rarely-heard deep tracks from the past, and/or some jaz or experimental or ambient or other styles of music outside our regular playlist. Now and then we\'ll also include a themed set.',
      info: 'The Detour streams each night at 11pm Eastern Time / 8pm Pacific Time'
    },
  };
  return(
    <aside className={`midPageAdContainer ${type}`}>
      <div className="midPageAdTextArea">
        <h4 className="midPageAdTitle">
          The {type}
        </h4>
        <div className="midPageAdBody">
          {text[type].main}
        </div>
        <div className="midPageAdInfo">
          {text[type].info}
        </div>
        <Link to="" className="midPageAdButton">Listen to Episodes ▶</Link>
      </div>
    </aside>
  );
};

export default MidPageAd;