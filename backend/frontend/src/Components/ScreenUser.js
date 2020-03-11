import React,{useEffect, useState} from 'react';
import {Col, Row, Card, CardTitle, CardText,CardSubtitle, CardBody, Container,
Table, CardImg} from 'reactstrap';
import {Link} from 'react-router-dom'
import babyYoda from '../images/icons8-baby-yoda-48.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

function ScreenUser(props) {
  const [userConnected, setUserConnected]  = useState(true) /* changer en false quand on aura stocker user dans le Store redux */
  const [plateformList, setPlateformList] = useState([])
  const [serviceSelect, setServiceSelect] = useState('...')
  const [tag, setTag]= useState("")
  const [Redirection, setRedirection] = useState(false)
  const [pseudo, setPseudo] = useState("")
  const [idGame, setIdGame] = useState([])
  const [userGamesList, setUserGamesList] = useState([])
  const [description, setDescription] = useState([])
  const [playerTwo, setPlayerTwo] = useState([])

//la fonction d'appel MongoDB pour les UserData
  useEffect(() => {
    props.getUserId()

    async function fetchdata (){
    // plateform from back
    const platerformResponse = await fetch("/plateform");
    const response = await platerformResponse.json()
    setPlateformList(response)

    //vérifier si User est connecté (store Redux)
    
   /*  console.log(userConnected); */
    
   console.log('useEffect', props, props.userId)

    if(props.userId){
      //si oui récupérer ses info dans DBA
      const response = await fetch('/users/finduser', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: `userId=${props.userId}` // /*Zehekiel*/
      });
      const userResponse = await response.json()
      console.log('userResponse', userResponse)
      setPseudo(userResponse.userFind.pseudo)
      setIdGame(userResponse.userFind.idGame)
      setDescription(userResponse.userFind.description)
      setUserConnected(true)
      const firstService = userResponse.userFind.service.length ? userResponse.userFind.service[0] : {}
      setServiceSelect(firstService.service)
      setTag(firstService.tag)
      setUserGamesList(userResponse.userFind.idGame)
      // setPlayerTwo(userResponse.playerTwo)
      // var testeuh = playerTwo; //testeuh ne fait rien
      console.log("hareuh",playerTwo)
    } else {
      setRedirection(false)
    }
    } 
    fetchdata()
    }, [props.userId])




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
              <CardTitle>{pseudo}</CardTitle>

{/*           <Row style={{alignItems: "center"}}>
              <CardSubtitle >Team : </CardSubtitle>
              <Link to="/ScreenteamAdmin"><Button style={{marginLeft:"15px"}} size="sm">Créer</Button></Link>
              <Link to="/ScreenteamView"><Button style={{marginLeft:"15px"}} size="sm">Rejoindre</Button></Link>
              </Row>  */}
            </Col>
          </Row>

            <CardSubtitle style={{padding:'10px'}}>Description</CardSubtitle>
              <CardText style={{padding:'10px'}}>{description}</CardText>
{/*           <CardSubtitle>Mes Teams:</CardSubtitle>
              <CardText>Les Invincibles</CardText>
              <CardText>Team Choucroute</CardText> */}
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
      {userGamesList.map((idGame,i)=>(
        <tr key={i}>
          <td><img src={idGame.cover} alt="game cover"></img></td>
          <td className="align-middle">{idGame.plateforme}</td>
          <td className="align-middle">{idGame.name}</td>
        </tr>
        ))}
      </tbody>
    </Table>
    </Col>
    </Card>

        {playerTwo.length}
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

  <Container className="card-background" style={{boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)", backgroundColor:"#010212", marginTop:"-10px", paddingBottom: "20px", marginBottom: "20px"}}>
    <Card style={{ borderRadius:"0 50", backgroundColor:"transparent", marginTop: "10px"}}>
    <CardTitle style={{ alignSelf: 'center', }} >Mes Player Two</CardTitle>


      <CardBody className="card-background" style={{ borderRadius:"0 50", backgroundColor:"transparente"}}>
        <Row style={{paddingInline: "20px", display:"flex", alignItems: "center", marginBottom: "10px", alignContent:"space-between"}}>
          <img height="3%" width="10%" src={require("../images/alien.svg")} alt="avateur P2" />
          <Col xs="auto">
            <Link to="/ScreenOtherUser"><CardTitle>Jean-Michel Maximum</CardTitle></Link>
          </Col>
          <Col style={{display:"flex", flexDirection:"row-reverse", alignItems:"center"}}>
            <img style={{height: "40px" ,backgroundColor:"transparente"}} src={require("../images/waste.svg")} alt="" />
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
      <Card style={{backgroundColor:'#010212', marginTop: "10px"}}>
      <CardBody className="card-background">
      <Row style={{paddingInline: "20px", display:"flex", alignItems: "center", marginBottom: "10px", alignContent:"space-between"}}>
          <img height="3%" width="10%" src={require("../images/rageguy.png")} alt="avateur P2" />
          <Col xs="auto">
            <Link to="/ScreenOtherUser"><CardTitle>Rageguy</CardTitle></Link>
          </Col>
          <Col style={{display:"flex", flexDirection:"row-reverse", alignItems:"center"}}>
            <img style={{height: "40px" ,backgroundColor:"transparente"}} src={require("../images/waste.svg")} alt=""/>
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

      <CardBody className="card-background" style={{marginTop: "10px"}}>
      <Row style={{paddingInline: "20px", display:"flex", alignItems: "center", marginBottom: "10px", alignContent:"space-between"}}>>
          <img height="3%" width="10%" src={require("../images/yoshi.png")} alt="avateur P2" />
          <Col xs="auto">
            <Link to="/ScreenOtherUser"><CardTitle>Bananarama</CardTitle></Link>
          </Col>
          <Col style={{display:"flex", flexDirection:"row-reverse", alignItems:"center"}}>
            <img style={{height: "40px" ,backgroundColor:"transparente"}} src={require("../images/waste.svg")} alt="" />
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

function mapStateToProps(state){
  return {userId: state.user, state}
}

function mapDispatchToProps(dispatch){
  return {
    getUserId: () => {
      dispatch({type: 'getUserId'})
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenUser)
