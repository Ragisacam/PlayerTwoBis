import React, {useState} from 'react';
import { Col, Row, Form, FormGroup, Label, Input, Container, Card, Button } from 'reactstrap';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const ScreenSignIn = (props) => {

  const [signInEmailPseudo, setSignInEmailPseudo] = useState('')
  const [signInPassword, setSignInPassword] = useState('')

  const [userExists, setUserExists] = useState(false)

  const [listErrorsSignIn, setErrorsSignIn] = useState([])



  var handleSubmitSignIn = async () => {

    const data = await fetch('/users/connection', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `pseudoFromFront=${signInEmailPseudo}&mailFromFront=${signInEmailPseudo}&passwordFromFront=${signInPassword}`
    })

    const body = await data.json()

    if(body.result === true){
      setUserExists(true)
      props.addToken(body.token)
    } else {
      setErrorsSignIn(body.error)
    }
  }

  if(userExists){
    return <Redirect to='/screengame'/>
  }

  var tabErrorsSignIn = listErrorsSignIn.map((error,i) => {
    return(<p className="error">{error}</p>)
  })


  return (

    <div className="backgroundColor">
      
      <Container>
        <Row xs="1">
          <Col>

            <h5 style={{paddingTop:150, textAlign:"center"}} className="boldFont">Bon retour parmi nous</h5>

            <Form >

              <Card style={{ boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)",backgroundColor: '#010212', borderRadius: "0px 50px", marginTop:"40px", padding:"20px 40px 20px 40px"}}>

                <FormGroup row className="boldFont" style={{paddingTop:20}}>
                  <Label md={2}>Email ou Pseudo*</Label>
                  <Col md={4}>
                    <Input onChange={(e) => setSignInEmailPseudo(e.target.value)} style={{borderRadius:25}} type="text"/>
                  </Col>
                </FormGroup>

                <FormGroup row className="boldFont">
                  <Label md={2}>Mot de passe*</Label>
                  <Col md={4}>
                    <Input onChange={(e) => setSignInPassword(e.target.value)} style={{borderRadius:25}} type="password"/>
                  </Col>
                </FormGroup>

                {tabErrorsSignIn}

              </Card>

            </Form>
          </Col>
          {/* ENLEVER BORDURE (OUTLINE?) APRES LE CLIC SUR LE BOUTON */}
          <FormGroup className="nextButton boldFont" style={{margin:0, paddingTop:25, justifyContent:"center"}} row>
            <Button onClick={() => handleSubmitSignIn()} color="transparent" style={{padding:0}}>
              <img src={require('../images/button.svg')} alt="button start"/>
              <div className="textButton">Start</div>
            </Button>
          </FormGroup>

        </Row>
      </Container>

    </div>
  );
}

function mapDispatchToProps(dispatch){
  return {
    addToken: function(token){
      dispatch({type: 'addToken', token: token})
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ScreenSignIn)