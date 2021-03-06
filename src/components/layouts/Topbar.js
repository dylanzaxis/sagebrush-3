import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import classNames from "classnames";
import squareLogo from "../../assets/img/square_logo.png";

class Topbar extends Component {
  render() {
    const squareLogoStyle = {
      position: 'absolute',
      width: '40px',
      height: '40px',
      left: '25px',
      top: '8px'
    }
    return (
      <div className="top-header">
        <Link to="/">
          <img src={squareLogo} style={squareLogoStyle} className="image-fit" alt="square-logo" />
        </Link>
        <div className="container-fluid custom-container">
          <div className="row">
            <div className="col-md-4">
              <div className="top-left d-none">
                <ul className="top-info">
                  <li>
                    <Link to="#">
                      <i className="fas fa-phone-alt" /> +1 863 123-4568
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-envelope" /> info@sagebrush.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="main-navigation"
              >
                <Menu />
              </div>
            </div>
            <div className="col-md-4">
              <div className="top-right">
                <a href="https://secure.anedot.com/bc203042-d230-4dfb-ae3c-e35b60167f94/56f97a5b-f93c-47ce-94df-fd1dd77651d8" className="donate-btn d-none-767" style={{ marginRight: "15px", fontSize: "12px" }} target="_blank">
                  DONATE TODAY
                </a>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/SagebrushRebellionPAC/">
                      <i className="fab fa-facebook-square" />
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/Sagebrush_USA">
                      <i className="fab fa-twitter-square" />
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/sagebrushrebellion/">
                      <i className="fab fa-instagram" />
                    </a>{" "}
                  </li>
                </ul>
                <a href="https://secure.anedot.com/bc203042-d230-4dfb-ae3c-e35b60167f94/56f97a5b-f93c-47ce-94df-fd1dd77651d8" className="donate-btn d-show-767" target="_blank">
                  DONATE TODAY
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
