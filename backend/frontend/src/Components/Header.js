import React, {useState, Component } from "react";
import Switch from "react-switch"
import {ReactSwitch} from "../images/toggle/index"
import {Link} from 'react-router-dom'
import babyYoda from '../images/icons8-baby-yoda-48.png';
import logo from '../images/logoP2.svg';
import logout from '../images/logout.svg';
import {Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var cssClass

export default class CustomIconSwitch extends Component {

  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(checked) {
    this.setState({checked});
    console.log( this.state);
      if (checked=true){
        console.log("passe true");
        cssClass = 1
      }else {
        cssClass = 50
      }
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
            onChange={this.handleChange}

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
              <img src={logout} style={{color:"#F9F5FF" ,height:15, paddingLeft:6, marginTop: 12 }} />
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