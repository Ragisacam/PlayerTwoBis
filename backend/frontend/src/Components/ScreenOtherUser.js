import React from 'react';
import {Col, Row, Card, CardTitle, CardText,CardSubtitle, CardBody, Table} from 'reactstrap';
import babyYoda from '../images/icons8-baby-yoda-48.png';

function ScreenOtherUser() {
  return (
<div className="backgroundColor">

<Row>

<Col>
<CardBody>
<Card style={{ backgroundColor: '#007ACC', borderRadius: "0px 50px", boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)" }}>
    <Col className="cardbody">
    <Row style={{justifyContent: 'center'}}>
        <Col xs="auto">
          <img src={babyYoda} alt="userAvatar" />
        </Col>
        <Col xs="auto">
          <CardTitle>Pseudo P2</CardTitle> 
        </Col>
      </Row>
      <br></br>
      <div>
          <CardSubtitle>Description</CardSubtitle>
          <br></br>
          <CardText>Sic de isto et tutius perducit ad actum ipsum, ut si dico “Ego autem vadam lavari, ut mens mea in statu naturae</CardText>
      </div>
      <br></br>
      <CardSubtitle>Ses Teams:</CardSubtitle>
      <br></br>
      <CardText>Les Invincibles</CardText>
      <CardText>Team Choucroute</CardText>
    </Col>
    </Card>
    </CardBody>
</Col>

<Col>
<CardBody>
<Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px", alignItems:"center", boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)" }}>
    <CardTitle >Ses jeux</CardTitle>
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
    </CardBody>
</Col>

</Row>

</div>
    );
}

export default ScreenOtherUser;


/*
card user
récuperer db avatar pseudo description
fetch
*/

/*
card ses jeux
récupérer db liste des jeux du user
fetch
*/