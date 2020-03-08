import React, {useState} from 'react';
import { Col, Row, Form, FormGroup, Label, Input, Container, Card, Button } from 'reactstrap';
import {Redirect} from 'react-router-dom';

const ScreenIdentity = (props) => {

  const [signUpPseudo, setSignUpPseudo] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')

  const [birthDate, setBirthDate] = useState('')
  const [country, setCountry] = useState('')
  const [gender, setGender] = useState('')
  const [language, setLanguage] = useState('')

  const [userExists, setUserExists] = useState(false)

  const [listErrorsSignup, setErrorsSignup] = useState([])



  var handleSubmitSignup = async () => {

    const data = await fetch('/users/adduser', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `pseudoFromFront=${signUpPseudo}&passwordFromFront=${signUpPassword}&mailFromFront=${signUpEmail}&birthdayFromFront=${birthDate}&cpFromFront=${country}&sexeFromFront=${gender}&langueFromFront=${language}`
    })

    const body = await data.json()

    if(body.result == true){
      setUserExists(true)
    } else {
      setErrorsSignup(body.error)
    }
  }

  if(userExists){
    return <Redirect to='/screengame'/>
  }

  var tabErrorsSignup = listErrorsSignup.map((error,i) => {
    return(<p className="error">{error}</p>)
  })


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
                    <Input onChange={(e) => setSignUpPseudo(e.target.value)} style={{borderRadius:25}} type="text"/>
                  </Col>
                </FormGroup>

                <FormGroup row className="boldFont">
                  <Label md={2}>Mot de passe*</Label>
                  <Col md={4}>
                    <Input onChange={(e) => setSignUpPassword(e.target.value)} style={{borderRadius:25}} type="password"/>
                  </Col>
                </FormGroup>

                <FormGroup row className="boldFont">
                  <Label md={2}>Email*</Label>
                  <Col md={4}>
                    <Input onChange={(e) => setSignUpEmail(e.target.value)} style={{borderRadius:25}} type="email"/>
                  </Col>
                </FormGroup>

                {tabErrorsSignup}

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
                  <Label md={2}>Code Postal</Label>
                  <Col md={4}>
                    <Input onChange={(e) => setCountry(e.target.value)} style={{borderRadius:25}} type="number"/>
                  </Col>
                </FormGroup>

                <FormGroup row className="boldFont" style={{paddingBottom:20, marginBottom:0}}>
                  <Label md={2}>Sexe</Label>
                  <Col md={4} >
                    <Input style={{borderRadius:25}} onChange={(e) => setGender(e.target.value)} type="select">
                      <option>Non précisé</option>
                      <option>Homme</option>
                      <option>Femme</option>
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row className="boldFont">
                  <Label md={2}>Langue</Label>
                  <Col md={4}>
                    <Input style={{borderRadius:25}} onChange={(e) => setLanguage(e.target.value)} type="select">
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

              </Card>

            </Form>
          </Col>

          <FormGroup className="nextButton boldFont" style={{margin:0, paddingTop:25, justifyContent:"center"}} row>
            <Button onClick={() => handleSubmitSignup()} color="transparent" style={{padding:0}}>
              <img style={{height:"100px", width:"100px"}} src={require('../images/button.svg')} alt="button start"/>
              <div className="textButton">Start</div>
            </Button>
          </FormGroup>

        </Row>
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