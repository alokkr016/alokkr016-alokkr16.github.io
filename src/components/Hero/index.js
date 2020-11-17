import React from 'react';
import './Hero.scss';

const index = () => {
  return (
    <div className="hero-section">
      <svg id="background-svg" viewBox="0 0 1366 301" fill="none">
        <path d="M1366 37.5L0 301V0H1366V37.5Z" fill="#F6F9FC" />
      </svg>
      <div className="hero">
        <div className="hero-text">
          <p className="emphasis-2 first">Hi. I am</p>
          <p className="emphasis-1 second">ALOK KUMAR</p>
          <p className="emphasis-2 third">Programmer</p>
        </div>
        <div className="hero-img">
          <svg
            width="432"
            height="407"
            viewBox="0 0 432 407"
            fill="none"
            id="hero-svg"
          >
            <ellipse
              cx="385.374"
              cy="371.101"
              rx="35.207"
              ry="35.2071"
              fill="#6C6992"
            />
            <circle cx="53.2863" cy="53.2863" r="53.2863" fill="#3693F0" />
            <ellipse
              cx="415.348"
              cy="130.361"
              rx="16.652"
              ry="17.1278"
              fill="#140E56"
            />
            <circle cx="373.956" cy="53.2863" r="12.37" fill="#7F7BAA" />
            <ellipse
              cx="233.128"
              cy="206.009"
              rx="165.568"
              ry="165.093"
              fill="#ECECEC"
            />
            <path
              d="M137.055 213.204L187.442 230.987V255.759L111.33 223.467V202.587L187.442 170.294V195.067L137.055 213.204Z"
              fill="#574CDD"
            />
            <path
              d="M217.107 285.463H198.101L245.483 145.586H264.489L217.107 285.463Z"
              fill="#574CDD"
            />
            <path
              d="M329.289 212.938L277.929 194.978V170.383L354.925 202.675V223.467L277.929 255.848V231.164L329.289 212.938Z"
              fill="#574CDD"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default index;
