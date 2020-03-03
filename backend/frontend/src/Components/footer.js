import React from 'react';
import '../App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';

function Footer() {
  return (
    <div style={{backgroundColor:"#0c0c0c", position:'absolute', bottom:0, width:"100%"}} >

      <Nav style={{ justifyContent:"space-around", alignItems:"center" }} >
        <NavItem>
          <NavLink href="#"><img src="../../message.png"/></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" style={{color :'white'}}>Politique de confidentialité</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" style={{color :'white'}}>Mention Légales</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#"><img src="../../share.png"/></NavLink>
        </NavItem>
      </Nav>

    </div>
    );
}

export default Footer;

//contact
  //modal
    // identité (mail de l'expéditeur)
    // object
    // content
    // envoi mail

//politique de confidentialité
  // modal
    // content

// Mention légal
  //modal
    //content

// Mention légal
  //modal
    // redirect vers social network (linkedin, facebook)
