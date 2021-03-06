import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";
import Header from './Header';

class Home extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  render() {
    return (
      <div>
          <Header/>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError,
    auth: state.auth
  };
}
export default connect(mapStateToProps)(Home);