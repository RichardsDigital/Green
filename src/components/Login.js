import React from 'react';
import logo from '../images/green-logo.svg';

const Login = () => {
    return (
        <div className="loginContainer">
            <div className="logoContainer">
                <img src={logo}/>
            </div>
            <div className="infoBox">
                <h1>Example login screen</h1>
                <p>Getting started with Green.</p>
            </div>
            <form>
                <div className="emailContainer">
                    <label id="emailLabel" for="username">Email Address</label>
                    <input type="text" id="username" name="username" />
                    <div className="checkboxContainer">
                        <input id="checkbox" name="checkbox" type="checkbox"/>
                        <label>Remember this device</label>
                    </div>
                </div>
                <div className="submitButton">
                    <input type="submit" value="Sign in" />
                </div>
            </form>
        </div>
    )
}

export default Login;