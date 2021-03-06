import React, { useEffect, useState } from 'react';
import { Col, Container, Row, FormGroup, Label, Input, Form, Card, Button, } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {Modal,} from 'react-bootstrap';

function ScreenGame(props) {

  const [plateformList, setPlateformList]= useState([])
  const [plateformSelect, setPlateformSelect]= useState([])
  const [serviceList, setserviceList]= useState([])
  const [plateformIcon, setplateformIcon]= useState('')
  const [serviceSelect, setServiceSelect] =useState('...')
  const [Redirection, setRedirection] = useState(false)
  const [gameName, setGameName]= useState("")
  const [tag, setTag]= useState("")
  const [userConnected, setUserConnected]  = useState(true) /* changer en false quand on aura stocker user dans le Store redux */
  const [searchGame, setSearchGame]= useState("")
  const [addGame, setAddGame]= useState("")
  const [gameListSelected, setGameListSelected] = useState([])
  const [searchGameList, setSearchGameList] = useState([])
  const [display, setDisplay]= useState('none')
  const [modalShow, setModalShow] = useState(false)
//premier useEffect
  useEffect(()=>{
    props.getUserId()
  }, [])
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
        body: `userId=${props.userId}`
      });

      // console.log(userResponse)
      const userResponse = await response.json()
      /* console.log("userResponse", userResponse.service[0].tag); */
      setUserConnected(true)
      
      
    } else {
      setRedirection(false)
    }
    } 
    fetchdata()
    }, [props.userId])

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
      console.log("serviceresponse service", response.service[0] )
      setServiceSelect(response.service[0])

      const usersresponse = await fetch('/users/finduser', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: `userId=${props.userId}`
      });
      
      const userResponse = await usersresponse.json()
      // const firstService = userResponse.service.length ? userResponse.service[0] : {}
      // setTag(firstService.tag)
        //récupéré img et service from back selon plateformeSelect
      setserviceList(response.service)
      setplateformIcon(response.img)

    }; 

    //Changement dans Input JEUX
    const handleSearchGame = async (game) => {
      setDisplay("block")
      console.log("game ",game);
      setSearchGame(game)
      
      
      // setSearchGameList(searchGameList.push(getGames(game)) )
    }; 
    
    // CLICK sur le bouton SEARCH
    const handleClickSearchGame = async (game) => {
    const response =await fetch('/searchgame', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `searchGame=${searchGame}`
    });
    var searchGameresponse = await response.json()
    console.log("searchGameresponse",searchGameresponse);

    //vérifier si chaque jeux from APi a un Cover
    for(var i = 0; i<searchGameresponse.length; i++){
      //sinon lui en rajouter un par défaut
      if (searchGameresponse[i].cover === undefined){
        var object = {...searchGameresponse[i], cover:{'url':''}}
        searchGameresponse[i] = object
      } 
    }
    
    if (searchGameresponse) {
      console.log("passe par if searchGameresponse");
      setSearchGameList(searchGameresponse)
      setModalShow(true)
      searchGameresponse = false
    }
  }

    // ___________ CLIC ADD sur un jeux de la liste proposé par l'API
    const handleGameSelect = (gameselect) => {
      console.log("gameselect ",gameselect);
      setAddGame(gameselect)
      setGameListSelected(addGame)
      setModalShow(false)
      // mapDispatchToProps(gameListSelected)
    }
    console.log("gameListSelected ",gameListSelected);

    var iconGameSelected
    if (addGame !== '') {
      iconGameSelected = <img src={`${addGame.cover.url}`} style={{ height: '50px', width:'50px', borderRadius: "10px", marginRight: "10px"}} alt=""/>
    }

  //afficher le logo de la plateforme
    let plateformIconaffiche = "";
    let paddingData= "45px"
    
    if(plateformIcon !== ""){
      plateformIconaffiche = <img src={plateformIcon} style={{padding:'5px', height:"45px"}} alt="platform icon"/>
      paddingData= "0px"
      } 
    


    // ___________ ON CLICK START ___________
    async function OnclickStartGame(){
      
      console.log("serviceselect", serviceSelect);
      console.log("tag", tag);

      //envoyer le jeux au back
      const gameResponse =await fetch('/addgame', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: `plateform=${plateformSelect}&&name=${addGame.name}&&cover=${addGame.cover.url}&&service=${serviceSelect}&&tag=${tag}&&userId=${props.userId}`
      });
      const response = await gameResponse.json()
      console.log("gameresponse", response);
      //récupérer result from back pour redirect ou non
      if (response){
        setRedirection(true)
      }
    };

console.log(Redirection);

    // redirect ou non selon réponse du back
    if(Redirection){
      return( 
      <Redirect to='/screenmatchpage'/>)
    };


// MODAL 
const MyVerticallyCenteredModal= (props) => {

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{borderRadius: "0px 50px", boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)"}}
              >
      <Modal.Header style={{backgroundColor: '#010212'}}>
        <Modal.Title id="contained-modal-title-vcenter" style={{color: 'white', backgroundColor: '#010212'}}>
          Recherche de Jeux
        </Modal.Title>
        <Button style={{color: 'white', backgroundColor: '#010212', justifyContent: 'right', border: 0,}} onClick={props.onHide}><img src={require('../images/cross_modal.svg')} alt=""/></Button>
      </Modal.Header>

        <Modal.Body style={{color: 'white', backgroundColor: '#010212', alignContent:"center", borderBottomLeftRadius:50}}>

      { searchGameList.map((game, i)=>( 
          <Row key={i} style={{ display:"flex", justifyContent:"space-between"}}>
            <img src={`${game.cover.url}`} style={{paddingLeft:15, height: '50px', width:'50px', borderRadius: "10px", marginRight: "10px"}} alt=""/>
            <p style={{paddingLeft:15, paddingTop:15, fontSize:17, fontFamily: 'Comfortaa', }}>{game.name} </p>
            <Col style={{display:"flex", flexDirection:"row-reverse", alignItems:"center"}}>
            <Button onClick={()=>handleGameSelect(game)} outline style={{fontSize:16, fontFamily: 'Comfortaa'}}>Add</Button>
            </Col> 
          </Row>
        ))}
        </Modal.Body>

    </Modal>
  );
}


  // __________________________________ RETURN __________________________________
  return (
    <div className="backgroundColor">

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <Container>
        <Row xs="1" style={{justifyContent:"center"}}>

          <Card style={{ boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)" ,backgroundColor: '#010212', borderRadius: "0px 50px", flexDirection:"row", padding:"50px 70px", margin: 50}}>

            <Col>
              {/* PLATEFORME */}
              <Form > 
                <FormGroup style={{alignItems: "center"}} row>
                  <Label style={{ margin:"0px", justifyContent: "start"}} >Plateforme*</Label>
                  <Col>
                  <Input required style={{borderRadius:25}}  onChange={(e) => handlePlateformeSelect(e.target.value) } type="select" >
                    <option> ... </option> 
                    { plateformList.map((plateform, i)=>(
                      <option onClick={(e) => handleGameSelect(e.target.value) } key={i}>{plateform.plateform}</option>
                    ))}
                    
                  </Input>
                    {plateformIconaffiche}

                  </Col>
                </FormGroup>

                {/* JEUX */}
                <FormGroup style={{paddingTop: paddingData, alignItems: "center"}} row>
                  <Label style={{ margin:"0px" }} className="font">Jeux*</Label>
                  <img onClick={(e) => handleClickSearchGame(e.target.value)} style={{height:25,display: display, paddingLeft:25}} src={require("../images/search.svg")} alt=""/>
                  <Col>
                    <Input onChange={(e) => handleSearchGame(e.target.value)}  required style={{borderRadius:25}} onKeyPress={13} type="search">
                    </Input>
                  </Col>
                  
                </FormGroup>
                
              </Form>
              {iconGameSelected}
            </Col>
            
            {/* SERVICE */}
            <Col style={{marginLeft:"30px"}}>
              <Form>
              <FormGroup style={{alignItems: "center"}} row>
                  <Label style={{ margin:"0px" }} className="font">Service*</Label>
                  <Col>
                    <Input style={{borderRadius:25}} onChange={(e) => setServiceSelect(e.target.value)} type="select" placeholder={serviceSelect}>
                    <option >{serviceSelect}</option>
                    { serviceList.map((service, i)=>(
                      <option key={i}>{service}</option>
                    ))}
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup style={{paddingTop:"45px", alignItems: "center"}} row>
                  <Label style={{ margin:"0px" }} className="font" >Service ID*</Label>
                  <Col>
                    <Input style={{borderRadius:25}} onChange={(e) => setTag(e.target.value)} type="text"  placeholder={tag}/>
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

function mapStateToProps(state){
  return {userId: state.user}
}

function mapDispatchToProps(dispatch) {
  return {
    onStartGameClick: function(data) { 
        dispatch({type: 'savegame', data}) 
    },
    getUserId: function() {
      dispatch({ type : 'getUserId'})
    }
  } 
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    
)(ScreenGame);

