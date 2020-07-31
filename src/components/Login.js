import React, {useState, useRef} from 'react';
import logo from '../images/green-logo.svg';

const Login = () => {

    const [displayText, setDisplayText] = useState("Getting started with Green.");
    const email = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.current.value !== "") {
        setDisplayText(`Welcome back ${email.current.value}!`);
        }
        else {
            return null;
        }
    }

    return (
        <div id="loginContainer">
            <div className="logoContainer">
                <img src={logo} alt="logo"/>
            </div>
            <div className="infoBox">
                <h1>Example login screen</h1>
                <p>{displayText}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="emailContainer">
                    <label id="emailLabel">Email Address</label>
                    <input type="text" id="username" ref={email}/>
                    <div className="checkboxContainer">
                        <input id="checkbox" name="checkbox" type="checkbox"/>
                        <label id="checkboxLabel">Remember this device</label>
                    </div>
                </div>
                <div className="submitButton">
                    <input type="submit" value="Sign In"/>
                </div>
            </form>
        </div>
    )
}

export default Login;