import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navigationmenu from '../../data/navigation.json';


class Menu extends Component {
    getNextSibling = function (elem, selector) {
        // Get the next sibling element
        var sibling = elem.nextElementSibling;
        // If there's no selector, return the first sibling
        if (!selector) return sibling;
        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
            if (sibling.matches(selector)) return sibling;
            sibling = sibling.nextElementSibling
        }
    }
    triggerChild = (e) => {
        let subMenu = '';
        subMenu = (this.getNextSibling(e.target, '.sub-menu') !== undefined) ? this.getNextSibling(e.target, '.sub-menu') : null;
        if (subMenu !== null && subMenu !== undefined && subMenu !== '') {
            subMenu.classList = subMenu.classList.contains('d-block') ? 'sub-menu' : 'sub-menu d-block';
        }
    }
    render() {
        return (
            <nav>
                <ul className="main-menu">
                    {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                        <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                            {item.child ? <Link onClick={e => e.preventDefault()} to="/" className="text-light-black"> {item.linkText} </Link> : <Link to={item.link} className="text-light-black"> {item.linkText} </Link>}
                            {item.child ?
                                <ul className="sub-menu" role="menu">
                                    {item.submenu.map((sub_item, i) => (
                                        <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                            {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                            {sub_item.submenu ?
                                                <ul className="sub-menu">
                                                    {sub_item.submenu.map((third_item, i) => (
                                                        <li className="menu-item" key={i}><Link
                                                            to={third_item.link}>{third_item.linkText}</Link>
                                                        </li>
                                                    ))}
                                                </ul> : null}
                                        </li>
                                    ))}
                                </ul>
                                : null
                            }
                        </li>
                    )) : null}
                </ul>
            </nav>
        );
    }
}

export default Menu;