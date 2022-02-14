import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Instagram from "./Instagram";

import logo from "../../assets/img/logo.png";
import footerimg from "../../assets/img/footer-bottom-img.png";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="section-padding bg-light-theme pt-0 u-line bg-custom-primary">
          <Instagram />
          <div className="container-fluid custom-container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div className="footer-contact">
                  <h6 className="text-custom-white">About Us</h6>
                  <div className="logo mb-xl-20">
                    <Link to="#">
                      <img src={logo} className="img-fluid" alt="img" />
                    </Link>
                  </div>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </p>
                </div>
              </div>
              <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                <div className="footer-links">
                  <h6 className="text-custom-white">Get to Know Us</h6>
                  <ul>
                    <li>
                      <Link to="/about" className="text-white fw-500">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-left" className="text-white fw-500">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-white fw-500">
                        Socialize
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-white fw-500">
                        Ecom
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-white fw-500">
                        Perks
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                <div className="footer-links">
                  <h6 className="text-custom-white">Let Us Help You</h6>
                  <ul>
                    <li>
                      <Link to="#" className="text-white fw-500">
                        Account Details
                      </Link>
                    </li>
                    <li>
                      <Link to="/order-details" className="text-white fw-500">
                        Order History
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-white fw-500">
                        Find Product
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" className="text-white fw-500">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-white fw-500">
                        Track order
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                <div className="footer-links">
                  <h6 className="text-custom-white">Get to Know Us</h6>
                  <ul>
                    <li>
                      <Link to="/about" className="text-white fw-500">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-details" className="text-white fw-500">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-white fw-500">
                        Socialize
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-white fw-500">
                        Ecom
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-white fw-500">
                        Perks
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                <div className="footer-links">
                  <h6 className="text-custom-white">Contact info</h6>
                  <ul className="contact-info">
                    <li>
                      <Link to="#" className="text-white">
                        {" "}
                        <span>
                          <i className="pe-7s-timer" />
                        </span>
                        Monday - Friday: 9:00 AM - 06:00 PM
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-white">
                        {" "}
                        <span>
                          <i className="pe-7s-mail" />
                        </span>
                        info@sagebrush.com
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-white">
                        {" "}
                        <span>
                          <i className="pe-7s-call" />
                        </span>
                        (+348) 123 456 7890
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-white">
                        {" "}
                        <span>
                          <i className="pe-7s-map-marker" />
                        </span>
                        (+348) 123 456 7890
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright bg-black">
          <div className="container-fluid custom-container">
            <div className="row">
              <div className="col-lg-4">
                <div className="payment-logo mb-md-20">
                  <div className="payemt-icon">
                    <img src={footerimg} alt="#" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-center medewithlove align-self-center">
                {" "}
                <Link to="#" className="text-custom-white">
                  Made with Real <i className="fas fa-heart" /> Z - Axis
                  Solutions
                </Link>
              </div>
              <div className="col-lg-4">
                <div className="copyright-text">
                  {" "}
                  <span className="text-white">
                    ©{" "}
                    <Link to="#" className="text-white">
                      Z - Axis Solutions
                    </Link>{" "}
                    - 2022 | All Right Reserved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Footer;