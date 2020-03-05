import React from 'react';
import {Spinner, CardColumns, Button, Col, Row, Card, CardTitle, CardText,CardSubtitle, CardBody, CardGroup, Container,
Table, CardImg} from 'reactstrap';
import babyYoda from '../images/icons8-baby-yoda-48.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function ScreenUser() {
  
  return (
<div className="backgroundColor">
  <Container style={{paddingTop:'3vh'}}>
  <CardColumns>
    <Card className="backgroundColor">
        <CardBody className="card-background">
        <Container>
          <Row>
            <Col xs="auto">
              <img src={babyYoda} alt="userAvatar" />
            </Col>
            <Col xs="auto">
              <CardTitle>Mon profil</CardTitle>
              <br></br>
              <Row>
              <CardSubtitle>Team : </CardSubtitle><Button size="sm">Créer</Button><Button size="sm">Rejoindre</Button>
              {/* il va falloir ajouter des routes sur les boutons */}
              </Row> 
            </Col>
          </Row>
          <br></br>
          <div>
              <CardSubtitle>Description</CardSubtitle>
              <br></br>
              <CardText>Sic de isto et tutius perducit ad actum ipsum, ut si dico “Ego autem vadam lavari, ut mens mea in statu naturae</CardText>
          </div>
          <br></br>
          <CardSubtitle>Mes Teams:</CardSubtitle>
          <br></br>
          <CardText>Les Invincibles</CardText>
          <CardText>Team Choucroute</CardText>
          </Container>
        </CardBody>
    </Card>

      <Container style={{backgroundColor:"black"}}>
        <CardTitle>Mes Player Two</CardTitle>
      <CardGroup>
      <Card style={{backgroundColor:'black'}}>
      <CardBody className="card-background">
        <Row>
        <img height="3%" width="10%" src={require("../images/Ellipse 4.png")} alt="avateur P2" />
          <Col xs="auto">
          <CardTitle>Pseudo P2</CardTitle>
          <CardTitle>Identifiant</CardTitle>
          </Col>
          <Spinner type="grow" color="danger" />
        </Row>
          <Card >
          <CardText style={{color:'black'}}>Plateforme</CardText>
          <CardText style={{color:'black'}}>Jeu</CardText>
          <CardText style={{color:'black'}}>Mode</CardText>
          <Button size="sm">Trash</Button>
          </Card>
        </CardBody>
      </Card>
      <Card style={{backgroundColor:'black'}}>
      <CardBody className="card-background">
        <Row>
        <img height="3%" width="10%" src={require("../images/Ellipse 4.png")} alt="avateur P2" />
          <Col xs="auto">
          <CardTitle>Pseudo P2</CardTitle>
          <CardTitle>Identifiant</CardTitle>
          </Col>
          <Spinner type="grow" color="success" />
        </Row>
          <Card>
          <CardText style={{color:'black'}}>Plateforme</CardText>
          <CardText style={{color:'black'}}>Jeu</CardText>
          <CardText style={{color:'black'}}>Mode</CardText>
          <Button size="sm">Trash</Button>
          </Card>
          <Card >
          <CardText style={{color:'black'}}>Plateforme</CardText>
          <CardText style={{color:'black'}}>Jeu</CardText>
          <CardText style={{color:'black'}}>Mode</CardText>
          <Button size="sm">Trash</Button>
          </Card>
          <Card >
          <CardText style={{color:'black'}}>Plateforme</CardText>
          <CardText style={{color:'black'}}>Jeu</CardText>
          <CardText style={{color:'black'}}>Mode</CardText>
          <Button size="sm">Trash</Button>
          </Card>
        </CardBody>
      </Card>
      <Card style={{backgroundColor:'black'}}>
      <CardBody className="card-background">
        <Row>
        <img width="10%" src={require("../images/Ellipse 4.png")} alt="avateur P2" />
          <Col xs="auto">
          <CardTitle>Pseudo P2</CardTitle>
          <CardTitle>Identifiant</CardTitle>
          </Col>
          <Spinner type="grow" color="danger" />
          </Row>
          <Card >
          <CardText style={{color:'black'}}>Plateforme</CardText>
          <CardText style={{color:'black'}}>Jeu</CardText>
          <CardText style={{color:'black'}}>Mode</CardText>
          <Button size="sm">Trash</Button>
          </Card>
        </CardBody>
      </Card>
    </CardGroup>
    </Container>

{/* La card qui liste mes jeux */}
    <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px", }}>
    <CardTitle>Liste de mes jeux</CardTitle>
    <Col className="cardbody">
    <Table>
      <thead>
        <tr>
          <th>Plateforme</th>
          <th>Jeu</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PC</td>
          <td>World of Tank</td>
          <td><img src={require("../images/Ellipse 4.png")}></img></td>
        </tr>
        <tr>

          <td>XBOX</td>
          <td>PES6</td>
          <td><img src={require("../images/Ellipse 4.png")}></img></td>
        </tr>
        <tr>

          <td>PS4</td>
          <td>Battlefied V</td>
          <td><img src={require("../images/Ellipse 4.png")}></img></td>
        </tr>
      </tbody>
    </Table>
    </Col>
    </Card>

    <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px", }}>
        <Col className="cardbody">
          <CardTitle>Mon fil d'actualité</CardTitle>
          <CardSubtitle>news 1</CardSubtitle>
          <CardText>- This is a wider card with supporting text below as a natural lead-in</CardText>
          <CardSubtitle>news 2</CardSubtitle>
          <CardText>- This is a wider card with supporting text below as a natural lead-in</CardText>
          <CardImg style={{height:"20px"}} src={require('../images/three_dots.svg')}></CardImg>
        </Col>
      </Card>

    </CardColumns>
    </Container>


</div>


  );
};


export default ScreenUser;