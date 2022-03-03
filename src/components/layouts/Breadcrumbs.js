import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumbs extends Component {
    render() {
        return (
            <div className={`breadcrumb-area ${this.props.breadcrumb.classname}`}>
                <div className="overlay overlay-bg" />
                <div className="container">
                    <div className="breadcrumb-content">
                        <h2>{this.props.breadcrumb.pagename}</h2>
                        <ul>
                            <li><Link to="/">Home</Link>
                            </li>
                            <li className="active"></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumbs;