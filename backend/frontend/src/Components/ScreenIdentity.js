import React from 'react';
import '../App.css';
import { Col, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import Header from "./Header"

const ScreenIdentity = (props) => {
  return (

    <div className="backgroundColor">
      
      <Container>

        <Header/>

        <Form>

        <FormGroup row className="identity">
            <Label xs={2} style={{color :'white'}}>Pseudo*</Label>
            <Col xs={4}>
              <Input required style={{borderRadius:25}} type="text"/>
            </Col>
          </FormGroup>

          <FormGroup row className="identity">
            <Label xs={2} style={{color :'white'}}>Mot de passe*</Label>
            <Col xs={4}>
              <Input required style={{borderRadius:25}} type="password"/>
            </Col>
          </FormGroup>

          <FormGroup row className="identity">
            <Label xs={2} style={{color :'white'}}>Email*</Label>
            <Col xs={4}>
              <Input required style={{borderRadius:25}} type="email"/>
            </Col>
          </FormGroup>

          <FormGroup row className="identity" style={{marginTop:35}}>
            <Label xs={2} style={{color :'white'}}>Date de naissance</Label>
            <Col xs={4}>
              <Input
                style={{borderRadius:25}}
                type="date"
              />
            </Col>
          </FormGroup>

          <FormGroup row className="identity">
            <Label xs={2} style={{color :'white'}}>Ville</Label>
            <Col xs={4}>
              <Input style={{borderRadius:25}} type="text"/>
            </Col>
          </FormGroup>

          <FormGroup row className="identity">
            <Label xs={2} style={{color :'white'}}>Langue</Label>
            <Col xs={4}>
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

          <FormGroup row className="identity">
            <Label xs={2} style={{color :'white'}}>Sexe</Label>
            <Col xs={4} >
              <Input type="select">
                <option>Non précisé</option>
                <option>Homme</option>
                <option>Femme</option>
              </Input>
            </Col>
          </FormGroup>
          
        </Form>
      </Container>

    </div>
  );
}

export default ScreenIdentity;


//Sign-up

//fetch/sign-up
//Vérification des Inputs ("champs vides")
//Vérification si l'utilisateur existe déja ("utilisateur déjà présent")


//Si l'utilisateur est crée -> Redirect vers ScreenGame


//Redux, exporter le token