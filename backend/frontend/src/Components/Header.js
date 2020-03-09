import React, { useState } from "react";
import Switch from "react-switch"
import {Link} from 'react-router-dom'
import babyYoda from '../images/icons8-baby-yoda-48.png';
import logo from '../images/logoP2.svg';
import logout from '../images/logout.svg';
import {Row, Col, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import {Button,Modal,} from 'react-bootstrap'  ; 
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';



=======
import {Button, Card, CardColumns, FormGroup, ListGroup, Modal,} from 'react-bootstrap'  ; 
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


>>>>>>> e338b74cf3ce512b19a9aac35ca33d47aa147952
  // MODAL 
  const MyVerticallyCenteredModal= (props) => {

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
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{borderRadius: "0px 50px", boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)",}}
                >
        <Modal.Header style={{backgroundColor: '#010212'}}>
          <Modal.Title id="contained-modal-title-vcenter" style={{color: 'white', backgroundColor: '#010212'}}>
            Connexion
          </Modal.Title>
          <Button style={{color: 'white', backgroundColor: '#010212', justifyContent: 'right', border: 0,}}onClick={props.onHide}><img src={require('../images/cross_modal.svg')}/></Button>
        </Modal.Header>
        <Modal.Body style={{color: 'white', backgroundColor: '#010212', alignContent:"center"}}>
          <Input onChange={(e) => setSignInEmailPseudo(e.target.value)} type="text" required placeHolder="email" style={{width: 600}}/>
          <Input onChange={(e) => setSignInPassword(e.target.value)} type="text" required placeHolder="password" style={{width: 600}}/>
          
          {tabErrorsSignIn}

        </Modal.Body>
        <Modal.Footer style={{color: 'white', backgroundColor: '#010212'}}>
          <Button onClick={() => handleSubmitSignIn()} style={{marginLeft:"15px"}} size="sm">Connection</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function CustomIconSwitch (props) {

  
  const [checked,setChecked] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [userConnected, setUserConnected] = useState(false)



  var handleChange = (checkedhandle, modalShowhandle) =>{
    setChecked(checkedhandle)
    setModalShow(modalShowhandle)
    console.log("modalShow",modalShow);
    console.log("checked",checked);
  };

  // if (userConnected == true){
  //   setChecked(true)
  // }else {
  //   setChecked(true)};





  return(
    

    

    <nav className="headerFooter" style={{display:"flex", justifyContent:"space-between"}}>
      <Col >
          <Row style={{alignItems:"center"}}>
            <Link to="/" >
              <img src={logo} style={{height:"70px", width:"90px"}} alt="logo"/>
            </Link>
            <Col style={{display:"flex", verticalAlign: "middle"}}>
            <span  className="heading">{`Player Two`}</span>
            </Col>
          </Row>
      </Col>

      
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        addToken = {props.addToken}
      />
      

      <Col style={{display:"flex", flexDirection:"row-reverse", height:"3rem",paddingTop:"13px" }}>
        {/* passage en row-reverse pour aligner sur la droite. Il faut donc insérer les éléments à l'inverse dans le code ! */}
      
        <label htmlFor="icon-switch" style={{paddingLeft:15}}>
          <Switch 
          width={100}
          height={50}
            checked= {checked}
            onChange={()=> handleChange(true,true) }

            uncheckedIcon={
              <div 
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 12,
                  color: "#F9F5FF",
                  paddingRight: 5,
                  paddingTop: 11,
                  paddingBottom: 19,
                }}
              >
                Log In
              </div>
            }
            checkedIcon={
              <img src={logout} style={{color:"#F9F5FF" ,height:15, paddingLeft:6, marginTop: 12 }} alt=""/>
            }
            className="react-switch"
            id="icon-switch"
          />
        </label>

          <Link to="/ScreenUser">
            <img src={babyYoda} alt="babyYoda"/>
          </Link>
    </Col>
      
      
  </nav>

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
)(CustomIconSwitch)

