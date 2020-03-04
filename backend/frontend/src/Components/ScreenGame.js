import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, FormGroup, Label, Input, Form, Button, Card } from 'reactstrap';
import { Link } from 'react-router-dom';



function ScreenGame(props) {
  return (

    <div className="backgroundColor">
      
      <Container>

        <Row>

            <Col>
              <Form>
                <FormGroup row>
                  <Label className="font" sm={2}>Plateforme*</Label>
                  <Col sm={10}>
                    <Input required style={{borderRadius:25}} type="text"/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label className="font" sm={2}>Jeux*</Label>
                  <Col sm={10}>
                    <Input required style={{borderRadius:25}} type="text"/>
                  </Col>
                </FormGroup>
              </Form>
            </Col>

            <Col >
              <Form>
                <FormGroup row>
                  <Label className="font" sm={2}>Service</Label>
                  <Col sm={10}>
                    <Input style={{borderRadius:25}} type="text"/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label className="font" sm={2}>tag</Label>
                  <Col sm={10}>
                    <Input style={{borderRadius:25}} type="text"/>
                  </Col>
                </FormGroup>
              </Form>
            </Col>

        </Row>

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
{/* <Button color="primary" size="lg">Save</Button> */}

export default ScreenGame;
