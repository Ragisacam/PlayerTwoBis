import React from 'react';
import {
  Card, CardImg, CardTitle, CardText, CardColumns, Button, Spinner,
  CardSubtitle, Row, Container, CardBody
} from 'reactstrap';
import { Col } from 'react-bootstrap';


function ScreenMatchPage() {
  
  return (

    <div className="backgroundColor">

      <Container>

          <Row className="titleTeam" style={{paddingTop:25}}>
            <Col>
            <h1  className="heading">Your Player Two</h1>
            </Col>
            <Col>
            <Row>
            <Button size="sm">Ajouter tout</Button>
            </Row>
            </Col>
          </Row>

          <CardColumns style={{marginTop:20}}>


      <CardBody className="card-background">
        <Row>
        <img height="3%" width="10%" src={require("../images/Ellipse 4.png")} alt="avateur P2" />
          <Col xs="auto">
          <CardTitle>Pseudo P2</CardTitle>
          <CardTitle>Identifiant</CardTitle>
          </Col>
          <Col>
          <Button size="sm">Ajouter</Button>
          </Col>
          <Spinner type="grow" color="success" />
        </Row>
          <Card >
          <CardText style={{color:'black'}}>Plateforme</CardText>
          <CardText style={{color:'black'}}>Jeu</CardText>
          <CardText style={{color:'black'}}>Mode</CardText>
          </Card>
          <Card >
          <CardText style={{color:'black'}}>Plateforme</CardText>
          <CardText style={{color:'black'}}>Jeu</CardText>
          <CardText style={{color:'black'}}>Mode</CardText>
          </Card>
        </CardBody>


      <CardBody className="card-background">
        <Row>
        <img height="3%" width="10%" src={require("../images/Ellipse 4.png")} alt="avateur P2" />
          <Col xs="auto">
          <CardTitle>Pseudo P2</CardTitle>
          <CardTitle>Identifiant</CardTitle>
          </Col>
          <Col>
          <Button size="sm">Ajouter</Button>
          </Col>
          <Spinner type="grow" color="danger" />
        </Row>
          <Card >
          <CardText style={{color:'black'}}>Plateforme</CardText>
          <CardText style={{color:'black'}}>Jeu</CardText>
          <CardText style={{color:'black'}}>Mode</CardText>
          </Card>
        </CardBody>



        <CardBody className="card-background">
        <Row>
        <img height="3%" width="10%" src={require("../images/Ellipse 4.png")} alt="avateur P2" />
          <Col xs="auto">
          <CardTitle>Pseudo P2</CardTitle>
          <CardTitle>Identifiant</CardTitle>
          </Col>
          <Col>
          <Button size="sm">Ajouter</Button>
          </Col>
          <Spinner type="grow" color="danger" />
        </Row>
          <Card >
          <CardText style={{color:'black'}}>Plateforme</CardText>
          <CardText style={{color:'black'}}>Jeu</CardText>
          <CardText style={{color:'black'}}>Mode</CardText>
          </Card>
          <Card >
          <CardText style={{color:'black'}}>Plateforme</CardText>
          <CardText style={{color:'black'}}>Jeu</CardText>
          <CardText style={{color:'black'}}>Mode</CardText>
          </Card>
        </CardBody>

        </CardColumns>

      </Container>

    </div>
  );
};


export default ScreenMatchPage;