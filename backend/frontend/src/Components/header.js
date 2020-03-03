import React from 'react';
/* import { Link } from 'react-router-dom'; */
import {Link} from 'react-router-dom'
import babyYoda from '../images/icons8-baby-yoda-48.png';
import logo from '../images/logo-player2.png';
import player2 from '../images/Player Two.png'

function Header() {

  return(
<nav className="headerFooter">
<div class="d-flex flex-row">
  <div>
    <Link to="/ScreenHome">
      <img src={logo} class="img-fluid" alt="logo"/>
      </Link>
  </div>
  <img class="img-fluid" src={player2} class="img-fluid" alt="logo"/>
</div>


{/* //avatar
  //redirection vers la page ScreenUser */}
<img src={babyYoda} alt="babyYoda"/>

{/* // button log
  // route sign in
  // route log out
 */}
  </nav>
  );
}

export default Header