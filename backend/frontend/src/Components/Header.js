import React, {Component } from "react";
import Switch from "react-switch"
import {Link} from 'react-router-dom'
import babyYoda from '../images/icons8-baby-yoda-48.png';
import logo from '../images/logoP2.svg';
import logout from '../images/logout.svg';
import {Row, Col, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, CardColumns, FormGroup, ListGroup, Modal,} from 'react-bootstrap'  ; 



export default class CustomIconSwitch extends Component {

  
  constructor() {
    super();
    this.state = { checked: false, modalShow: false };
    this.handleChange = this.handleChange.bind(this);
  };


  handleChange(checked, modalShow) {
    this.setState({checked, modalShow});


    console.log("modalShow",modalShow);
    console.log( "this.state.modalShow",this.state.modalShow)
    console.log( "this.state",this.state)
    console.log("checked",checked);
    console.log( "this.state.checked",this.state.checked)


  //tentative pour changer position du handle
  //   if (checked ==true){
  //   console.log("passe true");
  //   document.getElementsByClassName('react-switch-handle')[0].style.transform='translateX(1px) !important; top: 1px'
  // }else if (checked ==false ) {
  //   console.log("passe false");
  //   document.getElementsByClassName('react-switch-handle')[0].style.transform='translateX(50px) !important; top: 1px ;' ;
  // };

  // console.log("checked",checked);
  };


  // tentative pour afficher la modal
  //   //modal 
  MyVerticallyCenteredModal(props) {
    

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
        <Modal.Body style={{color: 'white', backgroundColor: '#010212'}}>
          <Input type="text" required placeHolder="email"/>
          <Input type="text" required placeHolder="password"/>
        </Modal.Body>
        <Modal.Footer style={{color: 'white', backgroundColor: '#010212'}}>
          <Button style={{marginLeft:"15px"}} size="sm">Connection</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  render() {


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

      
        
      

      <Col style={{display:"flex", flexDirection:"row-reverse", height:"3rem",paddingTop:"13px" }}>
        {/* passage en row-reverse pour aligner sur la droite. Il faut donc insérer les éléments à l'inverse dans le code ! */}
      
        <label htmlFor="icon-switch" style={{paddingLeft:15}}>
          <Switch 
            checked={this.state.checked}
            onChange={this.handleChange }
            show={this.state.modalShow}
            onHide={this.handleChange }


            uncheckedIcon={
              <div 
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 13,
                  color: "#F9F5FF",
                  paddingRight: 11,
                  paddingTop: 11
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
}