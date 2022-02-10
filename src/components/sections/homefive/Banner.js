import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import banner from '../../../assets/img/slider.jpg';

class Banner extends Component {
    render() {
        return (
            <div className="inner-wrapper">
                <div className="container-fluid no-padding">
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <div className="main-banner">
                                <img src={banner} className="img-fluid full-width main-img" alt="banner" />
                                <div className="overlay-2 main-padding" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="section-2 main-page main-padding bg-theme-primary">
                                <div className="top-nav">
                                    <h6><Link to="#" className="text-light-green fw-100">Explore</Link></h6>
                                    <h6><Link to="/login" className="text-light-green fw-100">Sign in</Link></h6>
                                </div>
                                <div className="login-box">
                                    <div className="col-12">
                                        <h1 className="text-light-black fw-600">We’ve funded 44,007 Dollars over 10 million peoples</h1>
                                        <p>Search Your Nearest Store.</p>
                                        <div className="input-group row">
                                            <div className="input-group2 col-xl-8">
                                                <input type="search" className="form-control form-control-submit" placeholder="Enter street address or zip code" defaultValue="1246 57th St, Brooklyn, NY, 11219" />
                                                <div className="input-group-prepend">
                                                    <button className="input-group-text text-light-green"><i className="fab fa-telegram-plane" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="input-group-append col-xl-4">
                                                <button className="btn-solid with-line btn-big full-width" type="button">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;