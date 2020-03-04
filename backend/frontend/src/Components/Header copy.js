import React from 'react';
/* import { Link } from 'react-router-dom'; */
import {Link} from 'react-router-dom'
import babyYoda from '../images/icons8-baby-yoda-48.png';
import logo from '../images/logo-player2.png';
import player2 from '../images/Player Two.png';
import switchee from '../images/switchee.png'
import {Row, Col, Container} from 'reactstrap'

function Header() {

  return(

  <nav className="headerFooter">
    <Container>
      <Row>
        <Col >
          <Row style={{alignItems: "center"}} >
            <Link to="/">
              <img src={logo} style={{height:"100px"}} alt="logo"/>
            </Link>
            <Col >
            <h1  className="heading">{`Player`}</h1>
            <h1  className="heading">{`Two`}</h1>
            </Col>
          </Row>
    </Col>

<Col/>
<Col/>



    <Col>
      <Row>
        <img src={babyYoda} alt="babyYoda"/>
        <img src={switchee} alt="switchee"/>
      </Row>
    </Col>
      </Row>
      
    </Container>
      

    
    
  </nav>


/* //avatar
  //redirection vers la page ScreenUser */


/* // button log
  // route sign in
  // route log out
 */
  
  );
}

export default Header