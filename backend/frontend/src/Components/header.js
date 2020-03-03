import React from 'react';
/* import { Link } from 'react-router-dom'; */
import {Link} from 'react-router-dom'
import babyYoda from '../images/icons8-baby-yoda-48.png';
import logo from '../images/logo-player2.png';

function header() {

  return(
<nav>
  <Link to="/ScreenHome">
<img src={logo} alt="logo"/>
</Link>

  
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

export default header