import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CSGOdrop from '../../assets/images/CSGOdrop1.png';
import { ReactComponent as Roulette } from '../../assets/images/roulette.svg';
import { ReactComponent as PVP } from '../../assets/images/pvp.svg';
import { ReactComponent as Unboxing } from '../../assets/images/unboxing.svg';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav class="navbar-header" className="nav">
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
        
        <div className="auth">
          <button className="register">
            Register
          </button>
          <button className="login">
            Login
          </button>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;