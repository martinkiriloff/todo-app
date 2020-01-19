import React, { Component } from "react";
import { connect } from "react-redux";
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/fontawesome-free-solid'

import './styles/header.scss';

class Header extends Component {

    render() {
        return (
            <header>
                <nav>
                    <ul className="menu">
                        <li><a href="#">Home</a></li>
                    </ul>

                    <ul className="profile">
                        <li>
                            <a href="#">
                                Marto
                                <FontAwesomeIcon icon={faCaretDown}/>
                            </a>
                        </li>
                        <ul className="profile-drop-down">
                            <li><a href="#">Settings</a></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </ul>
                </nav>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(Header);