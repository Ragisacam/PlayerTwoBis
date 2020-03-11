import React, { useEffect, useState } from 'react';
import {
  Card,  CardTitle, CardText, Button, 
  Row, Container, CardBody
} from 'reactstrap';
import { Col } from 'react-bootstrap';



function ScreenMatchPage() {

  const userId = "5e63bec8b48b0d57c82aa92c" /*Zehekiel*/
  const [userConnected, setUserConnected]  = useState(true) /* changer en false quand on aura stocker user dans le Store redux */
  // const [Redirection, setRedirection] = useState(false)
  const [matchList, setMatchList] = useState([])


  useEffect( () => {
    async function fetchdata (){
    // plateform from back
    const response = await fetch("/findmatch", {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `userId=${userId}`
    });
    const matchResponse = await response.json()
    console.log("matchResponse ",matchResponse[0]);
    setMatchList(matchResponse);

    //vérifier si User est connecté (store Redux à terme)
    if(userConnected === true){
      //si oui récupérer ses info dans DBA
      const response = await fetch('/users/finduser', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: `userId=${userId}`
      });const userResponse = await response.json()
      console.log("userResponse", userResponse);
    }
    } 
    fetchdata()
    }, [])

    console.log("matchList", matchList);
    console.log("matchListservice", matchList.service);
    
  
  return (

    <div className="backgroundColor">

      <Container>

          <Row className="titleTeam" style={{paddingTop:25}}>
            <Col>
            <h1  className="heading">Your Player Two</h1>
            </Col>
            <Col>
            <Row>
            <Button style={{marginLeft:600}} size="sm">Ajouter tout</Button>
            </Row>
            </Col>
          </Row>

      {matchList.map((userMatch, i)=>(
        <CardBody key={i} className="card-background" style={{marginTop: 10}}>
        <Row style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginLeft: 15, padding:0}}>
        <img height="50px" width="50px" src={require("../images/Ellipse 4.png")} alt="avateur P2" />
          <Col xs="auto">
          <CardTitle>{userMatch.pseudo}</CardTitle>
          <Row>
          {/* {matchList.map((userMatch, i)=>( */}
          <CardTitle>{userMatch.pseudo}</CardTitle>
          {/* ))
          } */}
          </Row>
          </Col>
          <Col style={{display:"flex", flexDirection:"row-reverse", alignItems:"center"}}>
          <Button size="sm">Ajouter</Button>
          </Col>

        </Row>
          <Card style={{marginBottom: 10, justifyContent:"center", padding : 15}}>
            <Row style={{display:"flex",  justifyContent:"space-between",padding: "0px 15px", alignItems:"center"}}>
              <CardText style={{color:'black', padding:0, margin:0}}>Plateforme</CardText>
              <CardText style={{color:'black', padding:0, margin:0}}>Jeu</CardText>
              <img height="50px" width="50px" src={require("../images/Ellipse 4.png")} alt="avateur P2" />
            </Row>
          </Card>

        </CardBody>
      ))
      }
      


      </Container>

    </div>
  );
};


export default ScreenMatchPage;