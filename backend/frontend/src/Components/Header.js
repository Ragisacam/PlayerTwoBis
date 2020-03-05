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