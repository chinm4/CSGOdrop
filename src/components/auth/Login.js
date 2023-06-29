import React, { useState, useEffect } from 'react';

import { ReactComponent as SteamLogo } from "../../assets/images/steam.svg";

import '../../assets/css/popup.css'; 

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault()
    // Code to handle login goes here
    props.toggle()
  }

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, [])

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2 className="login-title">LOGIN</h2>
        <div className="steam-container">
          <button className="steam-api-button">
            <cw-icon className="steamicon" >
              <SteamLogo />
            </cw-icon>
            Steam
        </button>
        </div>
        <form onSubmit={handleLogin} className="login-form">
          <label className="email-input">
            Email*
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email Address'/>
          </label>
          <label className="password-input">
            Password*
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password'/>
          </label>
          <button type="submit">SUBMIT</button>
        </form>
        <button onClick={props.toggle}>Close</button>
      </div>
    </div>
  );
}

export default Login;