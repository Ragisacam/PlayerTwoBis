import React from 'react';
import {Spinner, Button, Col, Row, Card, CardTitle, CardText,CardSubtitle, CardBody, Container,
Table, CardImg} from 'reactstrap';
import babyYoda from '../images/icons8-baby-yoda-48.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function ScreenUser() {
  
  return (
<div className="backgroundColor">
  <br></br>
<Row>
<Col>
    <Card style={{ backgroundColor: '#197278', borderRadius: "0px 50px", }}>
          <Row style={{justifyContent: 'center'}}>
            <Col xs="auto" className="cardbody" >
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

            <CardSubtitle>Description</CardSubtitle>
              <CardText>Sic de isto et tutius perducit ad actum ipsum, ut si dico “Ego autem vadam lavari, ut mens mea in statu naturae</CardText>
            <CardSubtitle>Mes Teams:</CardSubtitle>
              <CardText>Les Invincibles</CardText>
              <CardText>Team Choucroute</CardText>
    </Card>
    <br></br>

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

<br></br>

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

</Col>
{/* Je coupe ma page en deux ici */}
<Col>

      <Container className="card-background" style={{backgroundColor:"black"}}>
        <CardTitle>Mes Player Two</CardTitle>
      <Card style={{backgroundColor:'black'}}>
      <CardBody className="card-background">
        <Row>
        <img height="3%" width="10%" src={require("../images/Ellipse 4.png")} alt="avateur P2" />
          <Col xs="auto">
          <CardTitle>Pseudo P2</CardTitle>
          <CardTitle>Identifiant</CardTitle>
          </Col>
          <Col>
          <Button size="sm">Trash</Button>
          </Col>
          <Spinner type="grow" color="danger" />
        </Row>
          <Card >
          <CardText style={{color:'black'}}>Plateforme</CardText>
          <CardText style={{color:'black'}}>Jeu</CardText>
          <CardText style={{color:'black'}}>Mode</CardText>
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
          <Col>
          <Button size="sm">Trash</Button>
          </Col>
          <Spinner type="grow" color="success" />
        </Row>
          <Card>
          <CardText style={{color:'black'}}>Plateforme</CardText>
          <CardText style={{color:'black'}}>Jeu</CardText>
          <CardText style={{color:'black'}}>Mode</CardText>
          </Card>
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
      </Card>

      <br></br>

      <CardBody className="card-background" >
        <Row>
        <img height="3%" width="10%" src={require("../images/Ellipse 4.png")} alt="avateur P2" />
          <Col xs="auto">
          <CardTitle>Pseudo P2</CardTitle>
          <CardTitle>Identifiant</CardTitle>
          </Col>
          <Col>
          <Button size="sm">Trash</Button>
          </Col>
          <Spinner type="grow" color="danger" />
          </Row>
          <Card >
          <CardText style={{color:'black'}}>Plateforme</CardText>
          <CardText style={{color:'black'}}>Jeu</CardText>
          <CardText style={{color:'black'}}>Mode</CardText>
          </Card>
        </CardBody>
    </Container>



    </Col>




    </Row>
</div>


  );
};


export default ScreenUser;