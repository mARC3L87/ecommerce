import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className='about-container'>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id faucibus
        sapien. Quisque in tincidunt.
      </p>
      <div className='about-row'>
        <div className='about-box'>
          <img src='https://picsum.photos/seed/picsum/300/200' alt='random' />
          <h2>Who we are?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pretium eget tellus sed efficitur. Suspendisse hendrerit nunc id dui
            porttitor, non gravida felis sodales. Phasellus at lacus vehicula,
            condimentum enim id, ullamcorper ex. Duis hendrerit velit sem, id
            ullamcorper risus accumsan quis. Nullam venenatis pellentesque neque
            eget faucibus. Ut eu tristique neque. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            eleifend tellus a arcu ultrices, id posuere erat hendrerit.
            Vestibulum velit est, mattis nec diam a, laoreet varius justo.
            Pellentesque vel cursus neque. Morbi scelerisque enim vel diam
            tristique, in eleifend diam fermentum. Sed porttitor nibh eu luctus
            mollis. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis.
          </p>
        </div>
        <div className='about-box'>
          <img src='https://picsum.photos/seed/picsum/300/200' alt='random' />
          <h2>What we are doing?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pretium eget tellus sed efficitur. Suspendisse hendrerit nunc id dui
            porttitor, non gravida felis sodales. Phasellus at lacus vehicula,
            condimentum enim id, ullamcorper ex. Duis hendrerit velit sem, id
            ullamcorper risus accumsan quis. Nullam venenatis pellentesque neque
            eget faucibus. Ut eu tristique neque. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            eleifend tellus a arcu ultrices, id posuere erat hendrerit.
            Vestibulum velit est, mattis nec diam a, laoreet varius justo.
            Pellentesque vel cursus neque. Morbi scelerisque enim vel diam
            tristique, in eleifend diam fermentum. Sed porttitor nibh eu luctus
            mollis. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
