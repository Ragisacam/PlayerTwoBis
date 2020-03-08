import React, { useEffect, useState } from 'react';
import { Col, Container, Row, FormGroup, Label, Input, Form, Card, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

function ScreenGame(props) {

  const [plateformList, setPlateformList]= useState([])
  const [plateformSelect, setPlateformSelect]= useState([])
  const [serviceList, setserviceList]= useState([])
  const [plateformIcon, setplateformIcon]= useState('')
  const [serviceSelect, setServiceSelect] =useState('')
  const [Redirection, setRedirection] = useState(false)
  const [name, setname]= useState("")
  const [tag, setTag]= useState("")
  const UserId = "5e6267b3bc6dff15dcdbce4e"

  // plateform from back
  useEffect( () => {
    async function fetchdata (){
      const platerformResponse = await fetch("/plateform");
    const response = await platerformResponse.json()
    setPlateformList(response)
    } 
    fetchdata()
    setRedirection(false)
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
      setServiceSelect(response.service[0])
        //récupéré img et service from back selon plateformeSelect
        setserviceList(response.service)
        setplateformIcon(response.img)
      props.onStartGameClick() 
    }; 
    console.log("serviceselect", serviceSelect);

  //afficher le logo de la plateforme
    let plateformIconaffiche = "";
    let paddingData= "45px"
    
    if(plateformIcon !== ""){
      plateformIconaffiche = <img src={plateformIcon} style={{padding:'5px', height:"45px"}} alt="platform icon"/>
      paddingData= "0px"
      } 


    //click sur le bouton start
    async function OnclickStartGame(){
      console.log('passe ici');
  
      //envoyé le jeux au back
      const gameResponse =await fetch('/addgame', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: `plateform=${plateformSelect}&&name=${name}&&service=${serviceSelect}&&tag=${tag}&&userId=${UserId}`
      });
      const response = await gameResponse.json()
      console.log("gameresponse", response);
      //récupérer result from back pour redirect ou non
      if (response.result === true){
        setRedirection(response.result)
        console.log(Redirection);
      }
    };
  


    // redirect ou non selon réponse du back
    if(Redirection){
      return( 
      <Redirect to='/screenwish'/>)
    };

  return (
    <div className="backgroundColor">

      <Container>
        <Row xs="1" style={{justifyContent:"center"}}>

          <Card style={{ boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)" ,backgroundColor: '#010212', borderRadius: "0px 50px", flexDirection:"row", padding:"50px 100px", marginTop:100}}>

            <Col>
              <Form > 
                <FormGroup style={{alignItems: "center"}} row>
                  <Label style={{ margin:"0px" }} className="font">Plateforme*</Label>
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
                    <Input onChange={(e) => setname(e.target.value)} required style={{borderRadius:25}} type="text"/>
                  </Col>
                </FormGroup>
              </Form>
            </Col>

            <Col style={{marginLeft:"30px"}}>
              <Form>
              <FormGroup style={{alignItems: "center"}} row>
                  <Label style={{ margin:"0px" }} className="font">Service</Label>
                  <Col>
                    <Input style={{borderRadius:25}} onChange={(e) => setServiceSelect(e.target.value)} type="select">
                    { serviceList.map((service, i)=>(
                      <option key={i}>{service}</option>
                    ))}
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup style={{paddingTop:"45px", alignItems: "center"}} row>
                  <Label style={{ margin:"0px" }} className="font" >Service ID</Label>
                  <Col>
                    <Input style={{borderRadius:25}} onChange={(e) => setTag(e.target.value)} type="text"/>
                  </Col>
                </FormGroup>
              </Form>
            </Col>

          </Card>

        </Row>

        <FormGroup className="nextButton boldFont" style={{margin:0, paddingTop:25, justifyContent:"center"}} row>
        <Button color="transparent" onClick={OnclickStartGame} style={{padding: 0}}>
        <img style={{height:"100px", width:"100px"}} src={require('../images/button.svg')} alt="button start"/>
            <div className="textButton">Start</div>
          </Button>
            </FormGroup>

      </Container>

    </div>

    );
}


function mapDispatchToProps(dispatch) {
  return {
    onStartGameClick: function(data) { 
        dispatch( {type: 'savegame', data} ) 
    }
  } 
}

export default connect(
    null, 
    mapDispatchToProps
)(ScreenGame);

