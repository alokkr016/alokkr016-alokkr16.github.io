import React from 'react';

import './about.scss';

function index() {
  return (
    <div className="about" id="about">
      <div className="heading">About</div>
      <div className="content">
        <div className="img-section">
          <img
            src="https://avatars3.githubusercontent.com/u/59285395?s=460&u=32890b9165024acba560465808ba49a6649d8717&v=4"
            alt="avatar "
          />
        </div>
        <div className="about-me-section">
          <p>Hi! I am Alok.</p>
          <p>
            I am a programmer, full stack developer, aspiring software engineer
            and writer. I am an OpenSource enthusiast, and love contributing to
            whatever I can. I am interested research and have good knowledge
            about Data Science.
          </p>
          <p>
            I also like to read a lot, which inspires me to write. I have run a
            few blogs of my own, and enjoy creating meaningful content.
          </p>
          <p>
            Feel free to{' '}
            <a href="#contact" title="contact me">
              contact me
            </a>{' '}
            if you ever wish to.
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
