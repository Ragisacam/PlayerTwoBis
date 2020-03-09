import React, { useEffect, useState } from 'react';
import { Col, Container, Row, FormGroup, Label, Input, Form, Card, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

// import game from '../reducer/game';

function ScreenGame(props) {

  const [plateformList, setPlateformList]= useState([])
  const [plateformSelect, setPlateformSelect]= useState([])
  const [serviceList, setserviceList]= useState([])
  const [plateformIcon, setplateformIcon]= useState('')
  const [serviceSelect, setServiceSelect] =useState('...')
  const [Redirection, setRedirection] = useState(false)
  const [name, setname]= useState("")
  const [tag, setTag]= useState("")
  const [userConnected, setUserConnected]  = useState(true) /* changer en false quand on aura stocker user dans le Store redux */
  const userId = "5e63bec8b48b0d57c82aa92c" /*Zehekiel*/
  const [searchGame, setSearchGame]= useState("")
  // ___________ useEffect ___________
  useEffect( () => {
    async function fetchdata (){
    // plateform from back
    const platerformResponse = await fetch("/plateform");
    const response = await platerformResponse.json()
    setPlateformList(response)

    //vérifier si User est connecté (store Redux)
    
    console.log(userConnected);
    
    if(userConnected===true){
      //si oui récupérer ses info dans DBA
      const response = await fetch('/users/finduser', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: `userId=${userId}`
      });const userResponse = await response.json()
      console.log("userResponse", userResponse.service[0].tag);
      setUserConnected(true)
      setServiceSelect(userResponse.service[0].service)
      setTag(userResponse.service[0].tag)
    } else {
      setRedirection(false)
    }
    } 
    fetchdata()
    }, [])

  //afficher les services par défaut attaché à la plateforme
    const handlePlateformeSelect = async (clickPlateform) => {
      setPlateformSelect(clickPlateform)
      const serviceResponse =await fetch('/service', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: `plateformSelect=${clickPlateform}`
      });
      const response = await serviceResponse.json()
      console.log("serviceresponse", response );
      
        //récupéré img et service from back selon plateformeSelect
        setserviceList(response.service)
        setplateformIcon(response.img)
      // props.onStartGameClick(game) 

    }; 


  //afficher le logo de la plateforme
    let plateformIconaffiche = "";
    let paddingData= "45px"
    
    if(plateformIcon !== ""){
      plateformIconaffiche = <img src={plateformIcon} style={{padding:'5px', height:"45px"}} alt="platform icon"/>
      paddingData= "0px"
      } 
    
   // _____ chercher un jeux dans l'API_____
  //  const axios = require('axios').default;

  //  const API_KEY = "d03577227c5216baadca7ff98c147128";
  //  const header = {
  //    method: 'POST',
  //    headers: {
  //      'Accept': 'application/json',
  //      'user-key': API_KEY,
  //    }
  // }

  //  async function getGames(gameName) {
  //    const config = header;
  //    config.data = `
  //      search "${gameName}";
  //      fields name,genres,cover,rating,url,cover.url,websites.url;
  //    `;
  
  //    try {
  //      const response = await axios("https://api-v3.igdb.com/games", config);
  //      console.log(response.data);
  //    } catch (error) {
  //      console.error(error);
  //    }
  //  }
  //  getGames("searchGame");

    // ___________ ON CLICK START ___________
    async function OnclickStartGame(){
      
      console.log("serviceselect", serviceSelect);
      console.log("tag", tag);

      //envoyer le jeux au back
      const gameResponse =await fetch('/addgame', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: `plateform=${plateformSelect}&&name=${name}&&service=${serviceSelect}&&tag=${tag}&&userId=${userId}`
      });
      const response = await gameResponse.json()
      console.log("gameresponse", response);
      //récupérer result from back pour redirect ou non
      if (response.result === true){
        setRedirection(response.result)
      }
    };


    // redirect ou non selon réponse du back
    if(Redirection){
      return( 
      <Redirect to='/screenwish'/>)
    };

  // __________________________________ RETURN __________________________________
  return (
    <div className="backgroundColor">

      <Container>
        <Row xs="1" style={{justifyContent:"center"}}>

          <Card style={{ boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)" ,backgroundColor: '#010212', borderRadius: "0px 50px", flexDirection:"row", padding:"50px 70px", margin: 50}}>

            <Col>
              <Form > 
                <FormGroup style={{alignItems: "center"}} row>
                  <Label style={{ margin:"0px", justifyContent: "start"}} >Plateforme*</Label>
                  <Col>
                  <Input required style={{borderRadius:25}}  onChange={(e) => handlePlateformeSelect(e.target.value) } type="select" placeholder="PC, console,...">
                    { plateformList.map((plateform, i)=>(
                      <option key={i}>{plateform.plateform}</option>
                    ))}
                    
                  </Input>
                    {plateformIconaffiche}

                  </Col>
                </FormGroup>
                <FormGroup style={{paddingTop: paddingData, alignItems: "center"}} row>
                  <Label style={{ margin:"0px" }} className="font">Jeux*</Label>
                  <Col>
                    <Input onChange={(e) => setSearchGame(e.target.value)} required style={{borderRadius:25}} type="text"/>
                  </Col>
                </FormGroup>
              </Form>
            </Col>

            <Col style={{marginLeft:"30px"}}>
              <Form>
              <FormGroup style={{alignItems: "center"}} row>
                  <Label style={{ margin:"0px" }} className="font">Service*</Label>
                  <Col>
                    <Input style={{borderRadius:25}} onChange={(e) => setServiceSelect(e.target.value)} type="select">
                    { serviceList.map((service, i)=>(
                      <option key={i}>{service}</option>
                    ))}
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup style={{paddingTop:"45px", alignItems: "center"}} row>
                  <Label style={{ margin:"0px" }} className="font" >Service ID*</Label>
                  <Col>
                    <Input style={{borderRadius:25}} onChange={(e) => setTag(e.target.value)} type="text"/>
                  </Col>
                </FormGroup>
              </Form>
            </Col>

          </Card>

        </Row>

         {/* START BUTTON */}           
        <Row className="nextButton boldFont" style={{margin:0, paddingTop:25,}}>
          <Button color="transparent" onClick={OnclickStartGame} style={{padding: 0}}>
            <img style={{height:"100px", width:"100px"}} src={require('../images/button.svg')} alt="button start"/>
            <div className="textButton">Start</div>
          </Button>
        </Row>

      </Container>

    </div>

    );
}


// function mapDispatchToProps(dispatch) {
//   return {
//     onStartGameClick: function(data) { 
//         dispatch( {type: 'savegame', data} ) 
//     }
//   } 
// }

export default connect(
    null, 
    // mapDispatchToProps
)(ScreenGame);

