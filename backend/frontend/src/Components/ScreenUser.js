import React from 'react';
import {Button, Col, Row, Card, CardTitle, CardText,CardSubtitle, CardBody, Container,
Table, CardImg} from 'reactstrap';
import {Link} from 'react-router-dom'
import babyYoda from '../images/icons8-baby-yoda-48.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function ScreenUser() {
  
  return (
<div className="backgroundColor">
<Row >
<Col>
    {/* USER CARD */}
    <Card style={{ backgroundColor: '#060122', borderRadius: "0px 50px", boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)", padding:"15px"}}>
          <Row style={{justifyContent: 'center', paddingBottom: "20px"}}>
            <Col xs="auto" className="cardbody" >
              <img src={babyYoda} alt="userAvatar" />
            </Col>
            <Col xs="auto">
              <CardTitle>Mon profil</CardTitle>
              <br></br>
              <Row style={{alignItems: "center"}}>
              <CardSubtitle >Team : </CardSubtitle>
              <Link to="/ScreenteamAdmin"><Button style={{marginLeft:"15px"}} size="sm">Créer</Button></Link>
              <Link to="/ScreenteamView"><Button style={{marginLeft:"15px"}} size="sm">Rejoindre</Button></Link>
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

    {/* LISTE DE MES JEUX */}
    <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px", boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)"}}>
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

    {/* Mon fil d'actualité */}
    <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px", boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)" }}>
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
      {/* Mes Player Two */}
  <Container className="card-background" style={{boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)", backgroundColor:"#010212", marginTop:"-10px", paddingBottom: "20px", marginBottom: "20px"}}>
    <Card style={{ borderRadius:"0 50", backgroundColor:"transparent"}}>
    <CardTitle style={{ alignSelf: 'center', }} >Mes Player Two</CardTitle>

      <CardBody className="card-background" style={{ borderRadius:"0 50", backgroundColor:"transparente"}}>
        <Row style={{display:"flex", alignItems: "center", marginBottom: "10px", alignContent:"space-between"}}>
          <img height="3%" width="10%" src={require("../images/Ellipse 4.png")} alt="avateur P2" />
          <Col xs="auto">
            <Link to="/ScreenOtherUser"><CardTitle>Pseudo P2</CardTitle></Link>
          </Col>
          <Col style={{display:"flex", flexDirection:"row-reverse", alignItems:"center"}}>
            <img style={{height: "40px" ,backgroundColor:"transparente"}} src={require("../images/waste.svg")} />
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
      <Card style={{backgroundColor:'#010212'}}>
      <CardBody className="card-background">
      <Row style={{display:"flex", alignItems: "center", marginBottom: "10px", alignContent:"space-between"}}>
          <img height="3%" width="10%" src={require("../images/Ellipse 4.png")} alt="avateur P2" />
          <Col xs="auto">
            <Link to="/ScreenOtherUser"><CardTitle>Pseudo P2</CardTitle></Link>
          </Col>
          <Col style={{display:"flex", flexDirection:"row-reverse", alignItems:"center"}}>
            <img style={{height: "40px" ,backgroundColor:"transparente"}} src={require("../images/waste.svg")} />
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
      <Row style={{display:"flex", alignItems: "center", marginBottom: "10px", alignContent:"space-between"}}>
          <img height="3%" width="10%" src={require("../images/Ellipse 4.png")} alt="avateur P2" />
          <Col xs="auto">
            <Link to="/ScreenOtherUser"><CardTitle>Pseudo P2</CardTitle></Link>
          </Col>
          <Col style={{display:"flex", flexDirection:"row-reverse", alignItems:"center"}}>
            <img style={{height: "40px" ,backgroundColor:"transparente"}} src={require("../images/waste.svg")} />
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