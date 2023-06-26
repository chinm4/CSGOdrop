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