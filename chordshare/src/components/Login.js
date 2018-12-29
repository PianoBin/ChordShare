import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Toaster, Intent } from '@blueprintjs/core';
import { app, facebookProvider } from '../base';

const loginStyles = {
    width: "90%",
    maxWidth: "315px",
    margin: "20px auto",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px"
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.authWithFacebook = this.authWithFacebook.bind(this);
        this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
        this.state = {
            redirect: false
        }
    }

    authWithFacebook() {
        app.auth().signInWithPopup(facebookProvider)
            .then((result, error) => {
                if (error) {
                    this.toaster.show({ intent: Intent.DANGER, message:"Unable to sign in with Facebook" });
                } else {
                    this.setState({ redirect: true });
                }
            })
    }

    authWithEmailPassword(event) {
        event.preventDefault();
        console.table([{
            email: this.emailInput.value,
            password: this.passwordInput.value
        }])
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/'/>
        }
        return (
            <div style={loginStyles}>
                <Toaster ref={(element) => { this.toaster = element }}/>
                <button style={{width: "100%"}} className="bp3-button bp3-intent-primary" onClick={() => this.authWithFacebook()}>Log In with Facebook</button>
                <hr style={{marginTop: "10px", marginBottom: "10px"}} />
                <form onSubmit={(event) => this.authWithEmailPassword(event)}>
                <div style={{marginBottom: "10px"}} className="bp3-callout bp3-icon-info-sign">
                    <h5>Note</h5>
                    If you don't have an account already, this form will create your account.
                </div>
                <label className="bp3-label">
                    Email
                    <input style={{width: "100%"}} className="bp3-input" name="email" type="email" ref={(input) => {this.emailInput = input}} placeholder="Email"></input>
                </label>
                <label className="bp3-label">
                    Password
                    <input style={{width: "100%"}} className="bp3-input" name="password" type="password" ref={(input) => {this.passwordInput = input}} placeholder="Password"></input>
                </label>
                <input style={{width: "100%", textAlign:"center"}} type="submit" className="bp3-button bp3-intent-primary" value="Log In"></input>
                </form>
            </div>
        );
    }
}

export default Login;