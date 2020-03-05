import React, {useState} from 'react';
import { Col, Row, Form, FormGroup, Label, Input, Container, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

const ScreenboldFont = (props) => {

  const [signUpPseudo, setSignUpPseudo] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')

  const [birthDate, setBirthDate] = useState('')
  const [country, setCountry] = useState('')
  const [language, setLanguage] = useState('')
  const [gender, setGender] = useState('')

  return (

    <div className="backgroundColor">
      
      <Container>
        <Row xs="1">
          <Col>
            <Form >

              <Card style={{ boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)",backgroundColor: '#010212', borderRadius: "0px 50px", marginTop:"40px", padding:"20px 40px 20px 40px"}}>

                <FormGroup row className="boldFont" style={{paddingTop:20}}>
                  <Label md={2}>Pseudo*</Label>
                  <Col md={4}>
                    <Input onChange={(e) => setSignUpPseudo(e.target.value)} required style={{borderRadius:25}} type="text"/>
                  </Col>
                </FormGroup>

                <FormGroup row className="boldFont">
                  <Label md={2}>Mot de passe*</Label>
                  <Col md={4}>
                    <Input onChange={(e) => setSignUpPassword(e.target.value)} required style={{borderRadius:25}} type="password"/>
                  </Col>
                </FormGroup>

                <FormGroup row className="boldFont">
                  <Label md={2}>Email*</Label>
                  <Col md={4}>
                    <Input onChange={(e) => setSignUpEmail(e.target.value)} required style={{borderRadius:25}} type="email"/>
                  </Col>
                </FormGroup>

                <FormGroup row className="boldFont" style={{marginTop:30}}>
                  <Label md={2}>Date de naissance</Label>
                  <Col md={4}>
                    <Input
                      onChange={(e) => setBirthDate(e.target.value)}
                      style={{borderRadius:25}}
                      type="date"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="boldFont">
                  <Label md={2}>Ville</Label>
                  <Col md={4}>
                    <Input onChange={(e) => setCountry(e.target.value)} style={{borderRadius:25}} type="text"/>
                  </Col>
                </FormGroup>

                <FormGroup row className="boldFont">
                  <Label md={2}>Langue</Label>
                  <Col md={4}>
                    <Input onChange={(e) => setLanguage(e.target.value)} type="select">
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

                <FormGroup row className="boldFont" style={{paddingBottom:20, marginBottom:0}}>
                  <Label md={2}>Sexe</Label>
                  <Col md={4} >
                    <Input onChange={(e) => setGender(e.target.value)} type="select">
                      <option>Non précisé</option>
                      <option>Homme</option>
                      <option>Femme</option>
                    </Input>
                  </Col>
                </FormGroup>

              </Card>

            </Form>
          </Col>

            <FormGroup className="nextButton boldFont" style={{margin:0, paddingTop:25, justifyContent:"center"}} row>
              <Link>
                <img src={require('../images/button.png')} alt="button start"/>
                <div className="textButton">Start</div>
              </Link>
            </FormGroup>

        </Row>
      </Container>

    </div>
  );
}

export default ScreenboldFont;


//Sign-up

//fetch/sign-up
//Vérification des Inputs ("champs vides")
//Vérification si l'utilisateur existe déja ("utilisateur déjà présent")


//Si l'utilisateur est crée -> Redirect vers ScreenGame


//Redux, exporter le token