import React from 'react';

import './language-container.scss';

const index = (props) => {
  return (
    <div className="lang-box">
      <img src={props.imgPath} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
};

export default index;
