import React, { useEffect, useState } from 'react';
import { Col, Container, Row, FormGroup, Label, Input, Form, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

function ScreenGame(props) {

  const [plateformList, setPlateformList]= useState([])
  const [plateformSelect, setPlateformSelect]= useState([])
  const [serviceList, setserviceList]= useState([])
  const [plateformIcon, setplateformIcon]= useState('')
  const [serviceSelect, setServiceSelect] =useState('')
  
  // plateform from back
  useEffect( () => {
    async function fetchdata (){
      const platerformResponse = await fetch("http://localhost:3001/plateform");
    const response = await platerformResponse.json()
    console.log('plateform response =',response);
    setPlateformList(response)
    } 
    fetchdata()
    }, [])
    console.log('plateform List =',plateformList);

  //afficher les services par défaut attaché à la plateforme
    const handlePlateformeSelect = async (clickPlateform) => {
      setPlateformSelect(clickPlateform)
      const serviceResponse =await fetch('http://localhost:3001/service', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: `plateformSelect=${clickPlateform}`
      });
      const response = await serviceResponse.json()
      console.log("serviceresponse", response );
      //récupéré img et service from back selon plateformeSelect
      setserviceList(response.service)
      setplateformIcon(response.img)
    }; 
    console.log("serviceList", serviceList);
    console.log("plateformIcon ", plateformIcon);

  //afficher le logo de la plateforme
    let plateformIconaffiche = "";
    let paddingData= "45px"
    
    if(plateformIcon !== ""){
      plateformIconaffiche = <img src={plateformIcon} style={{padding:'5px', height:"45px"}}/>
      paddingData= "0px"
      }
    console.log('plateformSelect =',plateformSelect);


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
                    <Input required style={{borderRadius:25}} type="text"/>
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
                  <Label style={{ margin:"0px" }} className="font" >tag</Label>
                  <Col>
                    <Input style={{borderRadius:25}} type="text"/>
                  </Col>
                </FormGroup>
              </Form>
            </Col>

          </Card>

        </Row>

        <FormGroup className="nextButton boldFont" style={{margin:0, paddingTop:25, justifyContent:"center"}} row>
              <Link to="screenwish">
                <img src={require('../images/button.png')} alt="button start"/>
                <div className="textButton">Start</div>
              </Link>
            </FormGroup>

      </Container>

    </div>

    );
}

// card

// Plateforme 
// Champ de saisie

// Service
// Champ de saisie

// Jeux - image - API (route)
// Champ de saisie

// Tag
// Champ de saisie

// Progression bar
/* 
      <div>
        <Progress value="25">25%</Progress>
      </div> */
  

// Bouton Save (route)
/* <Button color="primary" size="lg">Save</Button> */

export default ScreenGame;
