import React from 'react';
import '../App.css';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Row,
} from 'reactstrap';
import Header from './header'
import footer from './footer'


function ScreenteamView() {
  
  return (

    <div className="backgroundColor">
      {Header}
      <Row className="titleTeam">
        <img style={{height:"70px", marginRight:"30px"}} src={require('../images/helmet-5.jpg')}  alt="Card image cap"/>
        <h1  className="heading">Team's name</h1>
      </Row>
      

      <CardColumns>

      {/*GAME*/}
      <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px" }}>
        <CardBody style={{paddingTop: "10px", paddingBottom: "15px", paddingLeft:"15px"}}>
          <CardTitle className="heading" >Game</CardTitle>
          <CardSubtitle>Ici on joue à :</CardSubtitle>
          <Row style={{paddingLeft: "15px", paddingTop: "15px", alignItems:"center"}}>
            <CardImg style={{height: '40px', width:'40px', borderRadius: "30px", marginRight: "10px"}} top width="100%" src={require('../images/bf5.jpg')} alt="Card image cap" />
          <CardText>Battlefield 5 </CardText>
          </Row>
          <Row style={{paddingLeft: "15px", paddingTop: "15px", alignItems:"center"}}>
            <CardImg style={{height: '40px', width:'40px', borderRadius: "30px", marginRight: "10px"}} top width="100%" src={require('../images/bf5.jpg')} alt="Card image cap" />
          <CardText>Battlefield 5 </CardText>
          </Row>
          
        </CardBody>
      </Card>

      <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px" }}>
        <CardBody >
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      {/*Description */}
      <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px" }}>
        <CardTitle className="heading" >Description</CardTitle>
        <CardText style={{marginBottom: "30px"}}>With supporting text below as a natural lead-in to additional content.</CardText>
      </Card>

      <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px" }}>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      {/*MEMBRE */}
      <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px" }}>
        <CardTitle>Membre</CardTitle>
        <CardSubtitle>Admin</CardSubtitle>
          <div>
          
          </div>

        <CardSubtitle>Sous Admin</CardSubtitle>

        <CardSubtitle>Regular</CardSubtitle>

        <CardText>With supporting text below as a natural lead-in to additional content.>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>

    </CardColumns>

    {footer}
    </div>
  );
};


export default ScreenteamView;

// div Title
  // avatar team
  // team's name
// div Title

// cards
  // game
    //game's list from back
    //fetch get

  //Description
    //Description from back
    // fetch get

  // Members
    // admin
        //adminList from back
        // fetch get
      // admincount
        //count from back
        //fetch get
    // sousAdmin
        //sousAdminList from back
        // fetch get
      // sousAdminCount
        //count from back
        //fetch get
    // Regular
        //Regularlist from back
        // fetch get
      // RegularCount
        //count from back
        //fetch get

  //Philosophie
    //Philosophie from back
    // fetch get

  //teamActu
    //teamActu from back
    // fetch get


// cards