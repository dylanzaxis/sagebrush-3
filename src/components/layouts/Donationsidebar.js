import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import recentpost from '../../data/donation/recentdonation.json';
import categories from '../../data/donation/categories.json';
import tags from '../../data/donation/tags.json';

class Donationsidebar extends Component {
    render() {
        return (
            <div className="side-bar mb-md-40">
                <div className="main-box padding-20 side-blog mb-xl-20">
                    <h5 className="text-light-black">Popular Donation</h5>
                    {recentpost.map((item, i) => (
                        <article key={i} className="side-post pb-xl-20 mb-xl-20 u-line">
                            <div className="thumb-img">
                                <Link to="/donation-details">
                                    <img src={item.img} alt="thumb-img" />
                                </Link>
                            </div>
                            <div className="content-wrap">
                                <div className="entry-meta-content">
                                    <h6 className="entry-title">
                                        <Link to="/donation-details" className="text-light-black">{item.title}</Link>
                                    </h6>
                                    <div className="entry-tye"> <span className="text-light-white fw-400">{item.postdate}</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="main-box padding-20 blog-tags mb-xl-20">
                    <h5 className="text-light-black">Tags</h5>
                    {tags.map((item, i) => (
                        <Link to="/donation-details" key={i}>#{item.title}</Link>
                    ))}
                </div>
                <div className="main-box padding-20 trending-blog-cat mb-xl-20">
                    <h5 className="text-light-black">Categories</h5>
                    <ul>
                        {categories.map((item, i) => (
                            <li key={i} className="pb-xl-20 u-line mb-xl-20">
                                <Link to="/donation-details" className="text-light-black fw-600">{item.name}
                                    <span className="text-light-white fw-400">({item.count})</span></Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Donationsidebar;