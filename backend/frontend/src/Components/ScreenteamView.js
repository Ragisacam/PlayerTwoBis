import React from 'react';
import '../App.css';
import {
  Card, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Row,
} from 'reactstrap';


function ScreenteamView() {
  
  return (
    // TEAM TITLE
    <div className="backgroundColor">
      <Row className="titleTeam">
        <img style={{height:"70px", marginRight:"30px"}} src={require('../images/helmet-5.jpg')}  alt="team"/>
        <h1  className="heading">Team's name</h1>
      </Row>
      

      <CardColumns>
      {/*______ GAME ______*/}
      <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px" }}>
        <CardBody style={{paddingTop: "10px", paddingBottom: "15px", paddingLeft:"15px"}}>
          <CardTitle className="heading" >Game</CardTitle>
          <CardText>Ici on joue à :</CardText>
          <Row style={{paddingLeft: "15px", paddingTop: "15px", alignItems:"center"}}>
            <CardImg style={{height: '40px', width:'40px', borderRadius: "30px", marginRight: "10px"}} top width="100%" src={require('../images/bf5.jpg')} alt="game image 1" />
            <CardText>Battlefield 5 </CardText>
          </Row>
          <Row style={{paddingLeft: "15px", paddingTop: "15px", alignItems:"center"}}>
            <CardImg style={{height: '40px', width:'40px', borderRadius: "30px", marginRight: "10px"}} top width="100%" src={require('../images/bf5.jpg')} alt="game image 2" />
            <CardText>Battlefield 5 </CardText>
          </Row>
          
        </CardBody>
      </Card>

      <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px" }}>
        <CardBody >
          <CardTitle>Philosophie</CardTitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
      </Card>

      {/*______ Description ______ */}
      <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px" }}>
        <CardTitle className="heading" >Description</CardTitle>
        <CardText style={{marginBottom: "30px"}}>With supporting text below as a natural lead-in to additional content.</CardText>
      </Card>

      {/*______ ACTU ______ */}
      <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px", paddingBottom: "25px"}}>
        
          <CardTitle>Actu</CardTitle>
          <CardSubtitle>news 1</CardSubtitle>
          <CardText>- This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <CardSubtitle>news 2</CardSubtitle>
          <CardText>- This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
        
      </Card>

      {/* ______ MEMBRE ______*/}
      <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px" }}>
        <CardTitle>Membre</CardTitle>
        <Row style={{flexDirection:Row}}>
          <CardSubtitle>Admin</CardSubtitle>
          <CardText> 1</CardText>
        </Row>
        
          {/* <div>
          <CardImg style={{height: '20px', width:'20px', marginRight: "10px"}} top width="100%" src={require('../images/user-solid.svg')} alt="Card image cap" />

          </div> */}

        <CardSubtitle>Sous Admin</CardSubtitle>

        <CardSubtitle>Regular</CardSubtitle>

        <CardText>With supporting text below as a natural lead-in to additional content.>With supporting text below as a natural lead-in to additional content.</CardText>

      </Card>

    </CardColumns>

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