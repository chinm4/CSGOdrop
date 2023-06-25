import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CSGOdrop from '../../assets/images/csgodrop.png';
import { ReactComponent as Roulette } from '../../assets/images/roulette.svg';
import { ReactComponent as PVP } from '../../assets/images/pvp.svg';
import { ReactComponent as Unboxing } from '../../assets/images/unboxing.svg';
import { ReactComponent as Crash } from '../../assets/images/crash.svg';
import { ReactComponent as Steam } from '../../assets/images/steam.svg';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav class="navbar-header" className="nav">
      <div className="leftsidenav">
        <a href="/" className="link-logo"><img src={CSGOdrop} className="logo" alt="CSGOdrop"></img></a>
        <ul className="nav-games">
          <li className="game">
            <a href="/roulette" className="navlink">
              <cw-icon className="nav-icon">
                <Roulette fill="8e8e99"/> 
              </cw-icon>
              <span className="name">ROULETTE</span>
            </a>
          </li>
          <li className="game">
            <a href="/unboxing" className="navlink">
              <cw-icon className="nav-icon">
                <Unboxing fill="8e8e99"/>
              </cw-icon>
              <span className="name">UNBOXING</span>
            </a>
          </li>
          <li className="game">
            <a href="/pvp" className="navlink">
              <cw-icon className="nav-icon">
                <PVP fill="8e8e99"/> 
              </cw-icon>
              <span className="name">PVP</span>
            </a>
          </li>
          <li className="game">
            <a href="/crash" className="navlink">
              <cw-icon className="nav-icon">
                <Crash fill="8e8e99"/> 
              </cw-icon>
              <span className="name">CRASH</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="rightsidenav">
        <button className="auth register">
          REGISTER
        </button>
        <button className="auth login">
          <cw-icon className="steamicon">
            <Steam fill="#FFFFFF"/>
          </cw-icon>
          LOGIN
        </button>
      </div>
    </nav>
  );
}

export default Navbar;