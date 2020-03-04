import React from 'react';
/* import { Link } from 'react-router-dom'; */
import {Link} from 'react-router-dom'
import babyYoda from '../images/icons8-baby-yoda-48.png';
import logo from '../images/logoP2.svg';
import switchee from '../images/switchee.png';
import {Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {

  return(
    <nav className="headerFooter" style={{display:"flex", justifyContent:"space-between"}}>
      <Col >
          <Row style={{alignItems:"center"}}>
            <Link to="/" >
              <img src={logo} style={{height:"50px"}} alt="logo"/>
            </Link>

            <Col style={{display:"flex", verticalAlign: "middle"}}>
            <span  className="heading">{`Player Two`}</span>
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
