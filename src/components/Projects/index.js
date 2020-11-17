import React from 'react';

import Ballons from './Ballons';
import './Projects.scss';

const index = () => {
  return (
    <div className="projects">
      <div className="heading">Projects and Certifications</div>
      <div className="content">
        <div className="left-section">
          Projects
        </div>
        <div className="right-section">
          Certifications
        </div>
      </div>
      <Ballons />
    </div>
  );
};

export default index;
