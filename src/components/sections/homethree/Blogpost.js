import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blogpost from '../../../data/blog/blogpost.json';

class Blogpost extends Component {
    render() {
        return (
            <section className="section-padding blog-section bg-theme-primary">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left title">
                                <h3 className="text-light-black header-title">Our Latest News</h3>
                                <span className="fs-16"><Link to="/blog-left">See All</Link></span>
                            </div>
                        </div>
                        {blogpost.slice(0,3).map((item, i) => (
                            <div key={i} className="col-xl-4 col-lg-3 col-md-6">
                                <article className="blog-item blog-item-box">
                                    <div className="blog-item-img">
                                        <img className="blog-img" src={item.img} alt="img" />
                                        <ul className="blog-item-badge">
                                            {item.tags.slice(0, 2).map((tag, i) => (
                                                <li key={i}><Link to="/blog-details">{tag.name}</Link> </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="blog-item-content">
                                        <h5 className="blog-item-title"><Link to="/blog-details">{item.title}</Link></h5>
                                        <p>{item.text}</p>
                                        <div className="blog-item-details">
                                            <span className="blog-item-date">
                                                <i className="fas fa-calendar-week" /> {item.postdate}
                                            </span>
                                            <span><i className="fas fa-comment-dots" /> {item.commentcount}</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Blogpost;