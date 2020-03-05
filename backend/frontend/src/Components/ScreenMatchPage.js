import React from 'react';
import {
  Card, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, Row, Container, CardBody
} from 'reactstrap';
import { Col } from 'react-bootstrap';


function ScreenMatchPage() {
  
  return (

    <div className="backgroundColor">

      <Container>

          <Row className="titleTeam" style={{paddingTop:25}}>
            <h1  className="heading">Your Player Two</h1>
          </Row>

          <CardColumns style={{marginTop:20}}>


          <Card className="cardbody" style={{ backgroundColor: '#197278', borderRadius: "0px 50px" }}>
            <CardBody>
              <CardTitle>Pseudo P2</CardTitle>
              <CardSubtitle>Identifiant : </CardSubtitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            </CardBody>
          </Card>
                      
          {/*______ PSEUDO ______*/}
          <Card className="cardbody" style={{ backgroundColor: '#197278', borderRadius: "0px 50px" }}>
              <Row style={{paddingLeft: "25px", paddingBottom: "15px", alignItems:"center"}}>
                <Col>
                <CardImg style={{height: '40px', width:'40px', borderRadius: "30px", marginRight: "10px"}} top width="100%" src={require('../images/bf5.jpg')} alt="game image 1" />
                </Col>
                <Col>
                <CardTitle>Pseudo P2</CardTitle>
                <CardText>Identifiant : </CardText>
                </Col>
              </Row>
              <Row style={{paddingLeft: "25px", paddingBottom: "15px", alignItems:"center"}}>
                <CardImg style={{height: '40px', width:'40px', borderRadius: "30px", marginRight: "10px"}} top width="100%" src={require('../images/bf5.jpg')} alt="game image 1" />
                <CardText>Battlefield 5 </CardText>
              </Row>
              <Row style={{paddingLeft: "25px", paddingBottom: "15px", alignItems:"center"}}>
                <CardImg style={{height: '40px', width:'40px', borderRadius: "30px", marginRight: "10px"}} top width="100%" src={require('../images/helmet-5.jpg')} alt="game image 2" />
                <CardText>Halo 5 </CardText>
              </Row>
          </Card>


          {/*______ Description ______ */}
          <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px" }}>
          <Col className="cardbody">
            <CardTitle >Description</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <CardImg style={{height:"20px"}} src={require('../images/three_dots.svg')}></CardImg>
          </Col>
          </Card>


    {/*______ ACTU ______ */}
          <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px", }}>
            <Col className="cardbody">
              <CardTitle>Actu</CardTitle>
              <CardSubtitle>news 1</CardSubtitle>
              <CardText>- This is a wider card with supporting text below as a natural lead-in</CardText>
              <CardSubtitle>news 2</CardSubtitle>
              <CardText>- This is a wider card with supporting text below as a natural lead-in</CardText>
              <CardImg style={{height:"20px"}} src={require('../images/three_dots.svg')}></CardImg>
            </Col>
          </Card>


          {/* Philosophie */}
          <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px" }}>
            <Col className="cardbody">
              <CardTitle>Philosophie</CardTitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
              <CardImg style={{height:"20px"}} src={require('../images/three_dots.svg')}></CardImg>
            </Col>
          </Card>


          {/* ______ MEMBRE ______*/}
          <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px" }}>
            <Col className="lastcard">
              <CardTitle>Membre</CardTitle>


            {/* ADMIN */}
            <Row className="usertitle">
              <CardSubtitle style={{margin:"0px"}}>Admin</CardSubtitle> 
              <CardText>nb: 1</CardText>
            </Row> 
            
              <Row className="user">
                <CardImg style={{height: '20px', width:'20px', marginRight: "10px"}} top width="100%" src={require('../images/user-solid.svg')} alt="Card image cap" />
                <CardText>Username 1</CardText>
              </Row>


            {/* SOUS ADMIN */}
            <Row className="usertitle">
              <CardSubtitle style={{margin:"0px"}}>Sous Admin</CardSubtitle> 
              <CardText>nb: 2</CardText>
            </Row> 

              <Row className="user">
                <CardImg style={{height: '20px', width:'20px', marginRight: "10px"}} top width="100%" src={require('../images/user-solid.svg')} alt="Card image cap" />
                <CardText>Sous Admin 1</CardText>
              </Row>
              <Row className="user">
                <CardImg style={{height: '20px', width:'20px', marginRight: "10px"}} top width="100%" src={require('../images/user-solid.svg')} alt="Card image cap" />
                <CardText>Sous Admin 2</CardText>
              </Row>


            {/* Member */}
            <Row className="usertitle">
              <CardSubtitle style={{margin:"0px"}}>Sous Admin</CardSubtitle> 
              <CardText>nb: 3</CardText>
            </Row>

              <Row className="user">
                <CardImg style={{height: '20px', width:'20px', marginRight: "10px"}} top width="100%" src={require('../images/user-solid.svg')} alt="Card image cap" />
                <CardText>Member 1</CardText>
              </Row>

              <Row className="user">
                <CardImg style={{height: '20px', width:'20px', marginRight: "10px"}} top width="100%" src={require('../images/user-solid.svg')} alt="Card image cap" />
                <CardText>Member 2</CardText>
              </Row>
              <Row className="user">
                <CardImg style={{height: '20px', width:'20px', marginRight: "10px"}} top width="100%" src={require('../images/user-solid.svg')} alt="Card image cap" />
                <CardText>Member 3</CardText>
              </Row>
              <CardImg style={{height:"20px"}} src={require('../images/three_dots.svg')}></CardImg>

            </Col>
            
          </Card>

        </CardColumns>

      </Container>

    </div>
  );
};


export default ScreenMatchPage;