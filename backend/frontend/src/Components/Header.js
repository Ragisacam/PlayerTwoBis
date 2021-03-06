import React, { useState, useEffect } from "react";
import Switch from "react-switch"
import {Link} from 'react-router-dom'
import babyYoda from '../images/icons8-baby-yoda-48.png';
import logo from '../images/logoP2.svg';
import logout from '../images/logout.svg';
import {Row, Col, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal,} from 'react-bootstrap'  ; 
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


  //-----------MODAL SIGN IN-----------//
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
        props.addUserId(body.userId)
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
          <Button style={{color: 'white', backgroundColor: '#010212', justifyContent: 'right', border: 0,}}onClick={props.onHide}><img src={require('../images/cross_modal.svg')} alt=""/></Button>
        </Modal.Header>
        <Modal.Body style={{color: 'white', backgroundColor: '#010212', alignContent:"center"}}>
          <Input onChange={(e) => setSignInEmailPseudo(e.target.value)} type="text" required placeholder="Email" style={{width: 600}}/>
          <Input onChange={(e) => setSignInPassword(e.target.value)} type="text" required placeholder="Password" style={{width: 600}}/>
          
          {tabErrorsSignIn}

        </Modal.Body>
        <Modal.Footer style={{color: 'white', backgroundColor: '#010212'}}>
          <Button onClick={() => handleSubmitSignIn()} style={{ marginBottom: '1rem', color: 'white', backgroundColor: '#18198A' }} size="sm">Connexion</Button>
        </Modal.Footer>
      </Modal>
    );
  }
    //-----------FIN MODAL-----------//


    //-----------COMPOSANT PRESENTATION-----------//
function CustomIconSwitch (props) {

  const [checked, setChecked] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [userConnected, setUserConnected] = useState(false)

  const [token, setToken] = useState()

  useEffect(() => {
    props.getToken()
  }, [])

  useEffect(() => {
    const findToken = () => {
      console.log('props.token', props.token)

      if (props.token) {
        setToken(props.token)

        console.log('props.token 2', props.token)

        setUserConnected(true)
        console.log("TOKEN 999", token)

        setChecked(true)
        console.log("CHECKEDDDDD", checked)
      }
    }    

    findToken()
  }, [props.token]);

  // CLICK X de la modal
  var clickCloseModal = (checkedhandle, modalShowhandle) =>{
    setChecked(checkedhandle)
    setModalShow(modalShowhandle)
    console.log("modalShow",modalShow);
    console.log("checked",checked);
  };

  console.log('TOKEN HEADER EXISTE AU STORE',token)

  console.log('userConnected ou pas',userConnected)


  var handleChange = () => {
    if(token === null){
      setChecked(true)
      setModalShow(true)
      console.log("modalShow",modalShow);
      console.log("checked",checked);
    } else {
      setToken(null)
      setChecked(false)
      setModalShow(false)
      setToken(null)
      props.removeToken()
      props.removeUserId()
      return <Redirect to='/'/>
    }

  };

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
        onHide={() => clickCloseModal(false, false)}
        addToken={props.addToken}
        addUserId={props.addUserId}
      />
      

      <Col style={{display:"flex", flexDirection:"row-reverse", height:"3rem",paddingTop:"13px" }}>
        {/* passage en row-reverse pour aligner sur la droite. Il faut donc insérer les éléments à l'inverse dans le code ! */}
      
        <label htmlFor="icon-switch" style={{paddingLeft:15}}>
          <Switch 
          width={100}
          height={50}
            checked= {checked}
            onChange={()=> handleChange()}
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
    //-----------FIN COMPOSANT PRESENTATION-----------//


function mapStateToProps(state){
  return {token: state.token}
}

function mapDispatchToProps(dispatch){
  return {
    addToken: function(token){
      dispatch({type: 'addToken', token})
    },
    addUserId: function(user) {
      dispatch({type: 'addUserId', user})
    },
    getToken: () => {
      dispatch({ type: 'getToken' })
    },
    removeToken: () => {
      dispatch({ type: 'removeToken' })
    },
    removeUserId: () => {
      dispatch({ type: 'removeUserId' })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomIconSwitch)

