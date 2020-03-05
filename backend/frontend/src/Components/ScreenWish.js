import React from 'react';
import { Container, Row, Col, Card, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function ScreenWish() {
  return (

    <div className="backgroundColor">

      <Container>
        <Row xs="1">
          <Card style={{ boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)",backgroundColor: '#010212', borderRadius: "0px 50px", paddingTop:40, paddingBottom:24, marginTop:"100px"}}>
            <Col>
            
              <Form >

                <FormGroup row className="font">
                  <Label md={2}>Mode</Label>
                  <Col md={4}>
                    <Input type="select">
                      <option>Non précisé</option>
                      <option>2</option>
                      <option>3</option>
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row className="font">
                  <Label md={2}>Age</Label>
                  <Col md={4}>
                    <Input type="text"/>
                  </Col>
                </FormGroup>

                <FormGroup row className="font">
                  <Label md={2}>Disponilité</Label>
                  <Col md={4}>
                    <Input type="text"/>
                  </Col>
                </FormGroup>

                <FormGroup row className="font">
                  <Label md={2}>Sexe</Label>
                  <Col md={4}>
                    <Input type="select">
                    <option>Non précisé</option>
                    <option>Homme</option>
                    <option>Femme</option>
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row className="font">
                  <Label md={2}>Langue</Label>
                  <Col md={4}>
                    <Input type="select">
                      <option>Français</option>
                      <option>Anglais</option>
                      <option>Allemand</option>
                      <option>Arabe</option>
                      <option>Italien</option>
                      <option>Espagnol</option>
                      <option>Japonais</option>
                      <option>Chinois</option>
                      <option>Coréen</option>
                      <option>Russe</option>
                    </Input>
                  </Col>
                </FormGroup>

                
              </Form>

            </Col>
          </Card>
        </Row>
      </Container>

    </div>

    );
}

export default ScreenWish;