import React from 'react';
/* import { Link } from 'react-router-dom'; */
import {Link} from 'react-router-dom'
import babyYoda from '../images/icons8-baby-yoda-48.png';
import logo from '../images/logo-player2.png';
import player2 from '../images/Player Two.png';
import switchee from '../images/switchee.png';
import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {

  return(
    <nav className="headerFooter" style={{display:"flex", justifyContent:"space-between"}}>
      <Col >
          <Row>
            <Link to="/" >
              <img src={logo} style={{height:"3rem"}} alt="logo"/>
            </Link>

            <Col style={{display:"flex", verticalAlign: "middle"}}>
            <h1  className="heading">{`Player Two`}</h1>
            {/* <h1  className="heading">{`Two`}</h1> */}
            </Col>
          </Row>
      </Col>


      <Col>
        <div style={{display:"flex", flexDirection:"row-reverse", height:"3rem"}}>
        {/* passage en row-reverse pour aligner sur la droite. Il faut donc insérer les éléments à l'inverse dans le code ! */}
            <img src={switchee} alt="switchee"/>
            <img src={babyYoda} alt="babyYoda"/>
        </div>
    </Col>
      
      
  </nav>
  );
}

export default Header
