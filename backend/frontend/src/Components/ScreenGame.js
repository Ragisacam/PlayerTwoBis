import React from 'react';
import { Col, Container, Row, FormGroup, Label, Input, Form, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

function ScreenGame(props) {
  return (

    <div className="backgroundColor">
      
      <Container>

        <Row xs="1" style={{justifyContent:"center"}}>

          <Card style={{ boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)" ,backgroundColor: '#010212', borderRadius: "0px 50px", flexDirection:"row", padding:"50px 100px", marginTop:100}}>

            <Col>
              <Form>
                <FormGroup row>
                  <Label className="font">Plateforme*</Label>
                  <Col>
                    <Input required style={{borderRadius:25}} type="text"/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label className="font">Jeux*</Label>
                  <Col>
                    <Input required style={{borderRadius:25}} type="text"/>
                  </Col>
                </FormGroup>
              </Form>
            </Col>

            <Col>
              <Form>
                <FormGroup row>
                  <Label className="font">Service</Label>
                  <Col>
                    <Input style={{borderRadius:25}} type="text"/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label className="font">tag</Label>
                  <Col>
                    <Input style={{borderRadius:25}} type="text"/>
                  </Col>
                </FormGroup>
              </Form>
            </Col>

          </Card>

        </Row>

        <FormGroup style={{margin:0, paddingTop:100, justifyContent:"center"}} row>
            <Link>
              <img src={require('../images/button.png')} alt="button start"/>
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
