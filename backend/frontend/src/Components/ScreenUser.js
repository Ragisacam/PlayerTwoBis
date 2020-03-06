import React from 'react';
import {Spinner, Button, Col, Row, Card, CardTitle, CardText,CardSubtitle, CardBody, Container,
Table, CardImg} from 'reactstrap';
import {Link} from 'react-router-dom'
import babyYoda from '../images/icons8-baby-yoda-48.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function ScreenUser() {
  
  return (
<div className="backgroundColor">
<Row style={{paddingTop: "20px"}}>
<Col>
    <Card style={{ backgroundColor: '#007ACC', borderRadius: "0px 50px"}}>
          <Row style={{justifyContent: 'center'}}>
            <Col xs="auto" className="cardbody" >
              <img src={babyYoda} alt="userAvatar" />
            </Col>
            <Col xs="auto">
              <CardTitle>Mon profil</CardTitle>
              <br></br>
              <Row>
              <CardSubtitle>Team : </CardSubtitle>
              <Link to="/ScreenteamAdmin"><Button size="sm">Créer</Button></Link>
              <Link to="/ScreenteamView"><Button size="sm">Rejoindre</Button></Link>
              </Row> 
            </Col>
          </Row>

            <CardSubtitle>Description</CardSubtitle>
              <CardText>Sic de isto et tutius perducit ad actum ipsum, ut si dico “Ego autem vadam lavari, ut mens mea in statu naturae</CardText>
            <CardSubtitle>Mes Teams:</CardSubtitle>
              <CardText>Les Invincibles</CardText>
              <CardText>Team Choucroute</CardText>
    </Card>
    <br></br>

    <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px"}}>
    <CardTitle style={{ alignSelf: 'center'}}>Liste de mes jeux</CardTitle>
    <Col className="cardbody">
    <Table style={{color:'white'}}>
      <thead>
        <tr>
          <th>Image</th>
          <th>Plateforme</th>
          <th>Jeu</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src={require("../images/Ellipse 4.png")}></img></td>
          <td>PC</td>
          <td>World of Tank</td>

        </tr>
        <tr>
          <td><img src={require("../images/Ellipse 4.png")}></img></td>
          <td>XBOX</td>
          <td>PES6</td>
        </tr>
        <tr>
          <td><img src={require("../images/Ellipse 4.png")}></img></td>
          <td>PS4</td>
          <td>Battlefied V</td>
        </tr>
      </tbody>
    </Table>
    </Col>
    </Card>

<br></br>

    <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px", }}>
        <Col className="cardbody">
          <CardTitle className="text-center">Mon fil d'actualité</CardTitle>
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

      <Container className="card-background" style={{backgroundColor:"black", marginTop:"-10px", paddingBottom: "20px", marginBottom: "20px"}}>
        <CardTitle className="text-center">Mes Player Two</CardTitle>
      <Card style={{backgroundColor:'black'}}>
      <CardBody className="card-background">
        <Row>
          <img height="3%" width="10%" src={require("../images/Ellipse 4.png")} alt="avateur P2" />
          <Col xs="auto">
            <Link to="/ScreenOtherUser"><CardTitle>Pseudo P2</CardTitle></Link>
          </Col>
          <Col>
            <Button size="sm">Trash</Button>
            <Spinner color="danger" />
          </Col>
        </Row>
          <Table>
      <thead>
        <tr>
          <th>Plateforme</th>
          <th>Jeu</th>
          <th>Mode</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PC</td>
          <td>World of Tank</td>
          <td>Noob</td>
        </tr>
        <tr>
          <td>XBOX</td>
          <td>PES6</td>
          <td>Pro</td>
        </tr>
        <tr>
          <td>PS4</td>
          <td>Battlefied V</td>
          <td>Regular</td>
        </tr>
      </tbody>
    </Table>
        </CardBody>
      </Card>
      <Card style={{backgroundColor:'black'}}>
      <CardBody className="card-background">
        <Row>
        <img height="3%" width="10%" src={require("../images/Ellipse 4.png")} alt="avateur P2" />
          <Col xs="auto">
          <Link to="/ScreenOtherUser"><CardTitle>Pseudo P2</CardTitle></Link>
          </Col>
          <Col>
          <Button size="sm">Trash</Button>
          <Spinner type="grow" color="success" />
          </Col>
        </Row>
        <Table>
      <thead>
        <tr>
          <th>Plateforme</th>
          <th>Jeu</th>
          <th>Mode</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PC</td>
          <td>World of Tank</td>
          <td>Noob</td>
        </tr>
        <tr>
          <td>XBOX</td>
          <td>PES6</td>
          <td>Pro</td>
        </tr>
        <tr>
          <td>PS4</td>
          <td>Battlefied V</td>
          <td>Regular</td>
        </tr>
        <tr>
          <td>XBOX</td>
          <td>Fortnite</td>
          <td>Pro</td>
        </tr>
        <tr>
          <td>PS4</td>
          <td>Counterstrike</td>
          <td>Regular</td>
        </tr>
      </tbody>
    </Table>
        </CardBody>
      </Card>
      <CardBody className="card-background" >
        <Row>
        <img height="3%" width="10%" src={require("../images/Ellipse 4.png")} alt="avateur P2" />
          <Col xs="auto">
          <Link to="/ScreenOtherUser"><CardTitle>Pseudo P2</CardTitle></Link>
          </Col>
          <Col>
          <Button size="sm">Trash</Button>
          <Spinner type="grow" color="danger" />
          </Col>
          </Row>
          <Table>
      <thead>
        <tr>
          <th>Plateforme</th>
          <th>Jeu</th>
          <th>Mode</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PC</td>
          <td>World of Tank</td>
          <td>Noob</td>
        </tr>
      </tbody>
    </Table>
        </CardBody>
    </Container>

    </Col>

    </Row>
</div>


  );
};


export default ScreenUser;