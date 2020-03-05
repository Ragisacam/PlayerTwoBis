import React, {useState, Component } from "react";
import Switch from "react-switch"
/* import { Link } from 'react-router-dom'; */
import {Link} from 'react-router-dom'
import babyYoda from '../images/icons8-baby-yoda-48.png';
import logo from '../images/logoP2.svg';
import switchee from '../images/switchee.png';
import {Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class CustomIconSwitch extends Component {

  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
  

  
  

  handleChange(checked) {
    
    this.setState({checked});
    console.log( this.state);
    
  }

  render() {
  return(
    <nav className="headerFooter" style={{display:"flex", justifyContent:"space-between"}}>
      <Col >
          <Row style={{alignItems:"center"}}>
            <Link to="/" >
              <img src={logo} style={{height:"50px"}} alt="logo"/>
            </Link>

            <Col style={{display:"flex", verticalAlign: "middle"}}>
            <span  className="heading">{`Player Two`}</span>
            {/* <h1  className="heading">{`Two`}</h1> */}
            </Col>
          </Row>
      </Col>


      <Col >
        <div style={{display:"flex", flexDirection:"row-reverse", height:"3rem", alignItems:"center"}}>
        {/* passage en row-reverse pour aligner sur la droite. Il faut donc insérer les éléments à l'inverse dans le code ! */}
      
        <label htmlFor="icon-switch">
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
                  color: "red",
                  paddingRight: 2
                }}
              >
                Off
              </div>
            }
            checkedIcon={
              <svg viewBox="0 0 10 10" height="100%" width="100%" fill="green">
                <circle r={3} cx={5} cy={5} />
              </svg>
            }
            className="react-switch"
            id="icon-switch"
          />
        </label>

        


          <img src={babyYoda} alt="babyYoda"/>
        </div>
    </Col>
      
      
  </nav>

  );
}
}



        /* <label htmlFor="icon-switch" style={{height: "40px", width: "110px", margin:" 0px", position:" relative", background: "rgb(136, 136, 136)", borderRadius: "14px", cursor: "pointer", transition: "background 0.25s ease 0s"}} >
          <div style={{position: "relative", display: "inline-block", textAlign: "left", opacity: "1", direction: "ltr", borderRadius: "14px", transition: "opacity 0.25s ease 0s", touchAction: "none", webkiTapHighlightColor: "rgba(0, 0, 0, 0)", userSelect: "none"}}>
            <div className="react-switch-bg">
              <svg viewBox="0 0 10 10" height="100%" width="100%" fill="green">
                <circle r="3" cx="5" cy="5"></circle>
              </svg>
            </div>
              <div style={{height: "28px", width: "30px", position: "absolute", opacity: "0", right: "0px", top: "0px", pointerEvents: "none", transition: "opacity 0.25s ease 0s"}}>
                <div className="react-switch" id="icon-switch" style={{display: "flex", justifyContent: "center", alignItems: "center", height: "40px", fontSize: "15px", color: "red", paddingRight: "2px"}}>log in
                </div>
              </div>
            </div>
              <div className="react-switch-handle" style={{height: "26px", width: "26px", background: "rgb(255, 255, 255)", display: "inline-block", cursor: "pointer", borderRadius: "50%", position: "absolute", top: "1px", outline: "0px", border: "0px", transition: "background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s"}}>
              </div>
                <input type="checkbox" role="switch" style={{border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", width: "1px"}} />
              </div>
              
        </label> */