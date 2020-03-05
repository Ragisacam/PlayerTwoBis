import React from 'react';
import { Container, Row, Col, Card, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

function ScreenWish() {
  return (

    <div className="backgroundColor">

      <Container>
        <Row xs="1">
          <Card style={{ boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)",backgroundColor: '#010212', borderRadius: "0px 50px", marginTop:"50px", padding:"40px 30px 24px 30px"}}>
            <Col>
            
              <Form >

                <FormGroup row className="font">
                  <Label md={2}>Mode</Label>
                  <Col md={4}>
                    <Input type="select">
                      <option>Non précisé</option>
                      <option>Noob</option>
                      <option>Casual</option>
                      <option>Regular</option>
                      <option>Hardcore</option>
                      <option>Competitive</option>
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row className="font">
                  <Label md={2}>Age</Label>
                    <Col md={4}>
                    <Input type="select">
                      <option>Non précisé</option>
                      <option>- 18</option>
                      <option>18-25</option>
                      <option>26-33</option>                      
                      <option>34-41</option>
                      <option>42-49</option>
                      <option>50 +</option>
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row className="font">
                  <Label md={2}>Disponilité</Label>
                  <Col md={4}>
                    <Input type="select" multiple>
                      <option>Matin</option>
                      <option>Midi</option>
                      <option>Soir</option>
                    </Input>
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
                      <Input type="select" multiple>
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

                <FormGroup row inline className="font">
                <Label md={2}>Team or not?</Label>
                  <Col md={4}>
                    <FormGroup check inline>
                      <Label check>
                        <Input type="radio" name="radio2" />{' '}
                        OUI                      
                        </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input type="radio" name="radio2" />{' '}
                        NON
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                
              </Form>

            </Col>
          </Card>
        </Row>

        <FormGroup style={{margin:0, paddingTop:30, justifyContent:"center"}} row>
            <Link>
              <img src={require('../images/button.png')} alt="button start"/>
            </Link>
        </FormGroup>

      </Container>

    </div>

    );
}

export default ScreenWish;