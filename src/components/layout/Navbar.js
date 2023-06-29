import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Login from '../auth/Login';
import Register from '../auth/Register';

import CSGOdrop from '../../assets/images/CSGOdrop.png';
import { ReactComponent as Roulette } from '../../assets/images/roulette.svg';
import { ReactComponent as PVP } from '../../assets/images/pvp.svg';
import { ReactComponent as Unboxing } from '../../assets/images/unboxing.svg';
import { ReactComponent as Crash } from '../../assets/images/crash.svg';
import { ReactComponent as Steam } from '../../assets/images/steam.svg';

const Navbar = () => {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleRegister, setToggleRegister] = useState(false);

  const showLogin = () => {
    if (toggleRegister)
      setToggleRegister(false);
    setToggleLogin(!toggleLogin);
  }

  const showRegister = () => {
    if (toggleLogin)
      setToggleLogin(false);
    setToggleRegister(!toggleRegister);
  }

  useEffect(() => {
    setToggleLogin(false);
    setToggleRegister(false);
  }, [])

  return (
    <nav class="navbar-header" className="nav">
      <div className="leftsidenav">
        <Link className="link-logo" to="/"><img src={CSGOdrop} className="logo" alt="CSGOdrop"></img></Link>
        <ul className="nav-games">
          <li className="game">
            <Link className="navlink" to="/roulette">
              <cw-icon className="nav-icon">
                <Roulette /> 
              </cw-icon>
              <span className="name">ROULETTE</span>
            </Link>
          </li>
          <li className="game">
            <Link className="navlink" to="/unboxing">
              <cw-icon className="nav-icon">
                <Unboxing />
              </cw-icon>
              <span className="name">UNBOXING</span>
            </Link>
          </li>
          <li className="game">
            <Link className="navlink" to="/pvp">
              <cw-icon className="nav-icon">
                <PVP /> 
              </cw-icon>
              <span className="name">PVP</span>
            </Link>
          </li>
          <li className="game">
            <Link className="navlink" to="/crash">
              <cw-icon className="nav-icon">
                <Crash /> 
              </cw-icon>
              <span className="name">CRASH</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="rightsidenav">
        <button className="auth register" onClick={showRegister} >
          REGISTER
        </button>
        {toggleRegister ? <Register toggle={showRegister}/> : null}
        <button className="auth login" onClick={showLogin}>
          <cw-icon className="steamicon">
            <Steam fill="#FFFFFF"/>
          </cw-icon>
          LOGIN
        </button>
        {toggleLogin ? <Login toggle={showLogin} /> : null}
      </div>
    </nav>
  );
}

export default Navbar;