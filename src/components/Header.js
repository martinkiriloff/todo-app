import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/fontawesome-free-solid'

import './styles/header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }
    handleUsernameClick = () => {
        const { active } = this.state;
        this.setState({
            active: !active
        })
    }

    render() {
        const { auth } = this.props;
        const { active } = this.state;

        console.log(this.state);
        return (
            <header>
                <nav>
                    <ul className="menu">
                        <li><a href="#">Home</a></li>
                    </ul>

                    <ul className="profile">
                        <li>
                            <button type="button" className="button-link" onClick={this.handleUsernameClick}>
                                { auth.user.email }
                                <FontAwesomeIcon icon={faCaretDown}/>
                            </button>
                        </li>
                        <ul className={active === false ? "profile-drop-down" : "profile-drop-down active"}>
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
    return {
        auth: state.auth,
        showProfileSubmenu: state.showProfileSubmenu
    };
}

export default connect(mapStateToProps)(Header);