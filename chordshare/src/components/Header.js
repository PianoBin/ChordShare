import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Popover, PopoverInteractionKind, Position } from '@blueprintjs/core';
import NewSongForm from './NewSongForm';

class Header extends Component {
    constructor(props) {
        super(props);
        this.closePopover = this.closePopover.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    closePopover() {
        this.setState({
            popoverOpen: false
        });
    }

  render() {
    return (
        <nav className="bp3-navbar">
            <div className="bp3-navbar-group bp3-align-left">
                <div className="bp3-navbar-heading">ChordShare</div>
                {this.props.authenticated
                    ?   <input className="bp3-input" placeholder="Search Songs..." type="text" />
                    :   null
                }
            </div>
            {this.props.authenticated
                ?   (<div className="bp3-navbar-group bp3-align-right">
                        <Link className="bp3-button bp3-minimal bp3-icon-music" to="/songs">Songs</Link>
                        <Popover 
                            content={(<NewSongForm addSong={this.props.addSong} postSubmitHandler={this.closePopover}/>)}
                            interactionKind={PopoverInteractionKind.CLICK}
                            isOpen={this.state.popoverOpen}
                            onInteraction={(state) => {this.setState({popoverOpen: state})}}
                            position={Position.BOTTOM}>
                            <button className="bp3-button bp3-minimal bp3-icon-add" aria-label="Add New Song"></button>
                        </Popover>
                        <span className="bp3-navbar-divider"></span>
                        <button className="bp3-button bp3-minimal bp3-icon-user"></button>
                        <button className="bp3-button bp3-minimal bp3-icon-cog"></button>
                        <Link className="bp3-button bp3-minimal bp3-icon-log-out" to="/logout" aria-label="Log Out"></Link>
                    </div>)
                :   (<div className="bp3-navbar-group bp3-align-right">
                        <Link className="bp3-button bp3-intent-primary" to="/login">Register/Log In</Link>
                    </div>)
            }
        </nav>
    );
  }
}

export default Header;
