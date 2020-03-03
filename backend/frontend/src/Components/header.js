import React from 'react';
/* import { Link } from 'react-router-dom'; */
import {Link} from 'react-router-dom'
import babyYoda from '../images/icons8-baby-yoda-48.png';
import logo from '../images/logo-player2.png';
import player2 from '../images/Player Two.png';
import switchee from '../images/switchee.png'

function Header() {

  return(
<nav className="headerFooter">
<div class="container">
  <div class="row align-items-start">
      <div class="col ">
        <Link to="/ScreenHome">
          <img src={logo} class="img-fluid" alt="logo"/>
          </Link>
          <img class="img-fluid" src={player2} class="img-fluid" alt="logo"/>
      </div>
      
      
      <div class="col">
      </div>

      <div class="col align-items-end">
          <img src={babyYoda} alt="babyYoda"/>
          <img src={switchee} alt="switchee"/>
          OUIIIIINNNNN
      </div>
  </div>
</div>


{/* //avatar
  //redirection vers la page ScreenUser */}


{/* // button log
  // route sign in
  // route log out
 */}
  </nav>
  );
}

export default Header