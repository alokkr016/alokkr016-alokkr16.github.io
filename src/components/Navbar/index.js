import React, { Component } from 'react';

import './navbar.scss';

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navlinksmobstate: false,
    };
  }

  handleToggleClick = () => {
    //console.log(this.state.navlinksmob);
    let val = true;
    if (this.state.navlinksmobstate) {
      val = false;
    }

    this.setState({
      navlinksmobstate: val,
    });
  };
  renderIcon = () => {
    if (this.state.navlinksmobstate) {
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect
            x="2.12134"
            width="25"
            height="3"
            rx="1.5"
            transform="rotate(45 2.12134 0)"
            fill="#6C6C6C"
          />
          <rect
            y="17.6777"
            width="25"
            height="3"
            rx="1.5"
            transform="rotate(-45 0 17.6777)"
            fill="#6C6C6C"
          />
        </svg>
      );
    } else {
      return (
        <svg width="20" height="17" viewBox="0 0 20 17" fill="none">
          <rect y="6.80756" width="20" height="3" rx="1.5" fill="#6C6C6C" />
          <path
            d="M0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V3H0V3Z"
            fill="#6C6C6C"
          />
          <path
            d="M0 13.7453H20V13.7453C20 15.4021 18.6569 16.7453 17 16.7453H3C1.34315 16.7453 0 15.4021 0 13.7453V13.7453Z"
            fill="#6C6C6C"
          />
        </svg>
      );
    }
  };
  responsiveClassName = () => {
    if (this.state.navlinksmobstate) {
      return 'nav-mobile nav-menu-open';
    } else {
      return 'nav-mobile';
    }
  };

  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <a href="/" className="brand">
            Alok Kumar
          </a>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#lang">Languages</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#" className="btn">
                Contact
              </a>
            </li>
          </ul>
          <div className="burger-icon" onClick={this.handleToggleClick}>
            {this.renderIcon()}
          </div>
        </div>
        <div className={this.responsiveClassName()}>
          <div className="nav-res-links">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#lang">Languages</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#" className="btn">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
