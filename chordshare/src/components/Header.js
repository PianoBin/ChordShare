import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <nav className="bp3-navbar">
            <div className="bp3-navbar-group bp3-align-left">
                <div className="bp3-navbar-heading">Chordshare</div>
                <input className="bp3-input" placeholder="Search Songs..." type="text" />
            </div>
            <div className="bp3-navbar-group bp3-align-right">
                <Link className="bp3-button bp3-minimal bp3-icon-music" to="/songs">Songs</Link>
                <span className="bp3-navbar-divider"></span>
                <button className="bp3-button bp3-minimal bp3-icon-user"></button>
                <button className="bp3-button bp3-minimal bp3-icon-cog"></button>
            </div>
        </nav>
    );
  }
}

export default Header;
